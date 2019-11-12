"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRolesByNames = getRolesByNames;
exports.getRoleByName = getRoleByName;
exports.getRole = getRole;
exports.editRole = editRole;
exports.setPendingRoles = setPendingRoles;
exports.loadRolesIfNeeded = loadRolesIfNeeded;

require("core-js/modules/es6.promise");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.from");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

require("regenerator-runtime/runtime");

var _client = require("../client");

var _action_types = require("../action_types");

var _roles = require("../selectors/entities/roles");

var _general = require("../selectors/entities/general");

var _helpers = require("./helpers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getRolesByNames(rolesNames
/*: Array<string>*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getRolesByNames,
    onRequest: _action_types.RoleTypes.ROLES_BY_NAMES_REQUEST,
    onSuccess: [_action_types.RoleTypes.RECEIVED_ROLES, _action_types.RoleTypes.ROLES_BY_NAMES_SUCCESS],
    onFailure: _action_types.RoleTypes.ROLES_BY_NAMES_FAILURE,
    params: [rolesNames]
  });
}

function getRoleByName(roleName
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getRoleByName,
    onRequest: _action_types.RoleTypes.ROLE_BY_NAME_REQUEST,
    onSuccess: [_action_types.RoleTypes.RECEIVED_ROLE, _action_types.RoleTypes.ROLE_BY_NAME_SUCCESS],
    onFailure: _action_types.RoleTypes.ROLE_BY_NAME_FAILURE,
    params: [roleName]
  });
}

function getRole(roleId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getRole,
    onRequest: _action_types.RoleTypes.ROLE_BY_ID_REQUEST,
    onSuccess: [_action_types.RoleTypes.RECEIVED_ROLE, _action_types.RoleTypes.ROLE_BY_ID_SUCCESS],
    onFailure: _action_types.RoleTypes.ROLE_BY_ID_FAILURE,
    params: [roleId]
  });
}

function editRole(role
/*: Role*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.patchRole,
    onRequest: _action_types.RoleTypes.EDIT_ROLE_REQUEST,
    onSuccess: [_action_types.RoleTypes.RECEIVED_ROLE, _action_types.RoleTypes.EDIT_ROLE_SUCCESS],
    onFailure: _action_types.RoleTypes.EDIT_ROLE_FAILURE,
    params: [role.id, role]
  });
}

function setPendingRoles(roles
/*: Array<string>*/
) {} // RoleTypes.SET_PENDING_ROLES 事件重复触发

/*
export function setPendingRoles(roles: Array<string>) {
    return async (dispatch: DispatchFunc, getState: GetStateFunc) => {
        dispatch({type: RoleTypes.SET_PENDING_ROLES, data: roles}, getState);
        return {data: roles};
    };
}
*/


function loadRolesIfNeeded(roles
/*: Iterable<string>*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var state, pendingRoles, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, role, loadedRoles, newRoles, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _role;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = getState();
                pendingRoles = new Set();

                try {
                  pendingRoles = new Set(state.entities.roles.pending);
                } catch (e) {// eslint-disable-line
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;

                for (_iterator = roles[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  role = _step.value;
                  pendingRoles.add(role);
                }

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 14:
                _context.prev = 14;
                _context.prev = 15;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 17:
                _context.prev = 17;

                if (!_didIteratorError) {
                  _context.next = 20;
                  break;
                }

                throw _iteratorError;

              case 20:
                return _context.finish(17);

              case 21:
                return _context.finish(14);

              case 22:
                if (state.entities.general.serverVersion) {
                  _context.next = 26;
                  break;
                }

                setPendingRoles(Array.from(pendingRoles))(dispatch, getState);
                setTimeout(function () {
                  return dispatch(loadRolesIfNeeded([]));
                }, 500);
                return _context.abrupt("return", {
                  data: []
                });

              case 26:
                if ((0, _general.hasNewPermissions)(state)) {
                  _context.next = 31;
                  break;
                }

                if (!state.entities.roles.pending) {
                  _context.next = 30;
                  break;
                }

                _context.next = 30;
                return setPendingRoles([])(dispatch, getState);

              case 30:
                return _context.abrupt("return", {
                  data: []
                });

              case 31:
                loadedRoles = (0, _roles.getRoles)(state);
                newRoles = new Set();
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 36;

                for (_iterator2 = pendingRoles[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _role = _step2.value;

                  if (!loadedRoles[_role] && _role.trim() !== '') {
                    newRoles.add(_role);
                  }
                }

                _context.next = 44;
                break;

              case 40:
                _context.prev = 40;
                _context.t1 = _context["catch"](36);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t1;

              case 44:
                _context.prev = 44;
                _context.prev = 45;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 47:
                _context.prev = 47;

                if (!_didIteratorError2) {
                  _context.next = 50;
                  break;
                }

                throw _iteratorError2;

              case 50:
                return _context.finish(47);

              case 51:
                return _context.finish(44);

              case 52:
                if (!state.entities.roles.pending) {
                  _context.next = 55;
                  break;
                }

                _context.next = 55;
                return setPendingRoles([])(dispatch, getState);

              case 55:
                if (!(newRoles.size > 0)) {
                  _context.next = 57;
                  break;
                }

                return _context.abrupt("return", getRolesByNames(Array.from(newRoles))(dispatch, getState));

              case 57:
                return _context.abrupt("return", {
                  data: state.entities.roles.roles
                });

              case 58:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 10, 14, 22], [15,, 17, 21], [36, 40, 44, 52], [45,, 47, 51]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}