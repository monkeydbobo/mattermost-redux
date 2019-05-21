"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _redux = require("redux");

var _action_types = require("../../action_types");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pending() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.RoleTypes.SET_PENDING_ROLES:
      return action.data;

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return new Set();

    default:
      return state;
  }
}

function roles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.RoleTypes.RECEIVED_ROLES:
      {
        if (action.data) {
          var nextState = _objectSpread({}, state);

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = action.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var role = _step.value;
              nextState[role.name] = role;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return nextState;
        }

        return state;
      }

    case _action_types.RoleTypes.ROLE_DELETED:
      {
        if (action.data) {
          var _nextState = _objectSpread({}, state);

          Reflect.deleteProperty(_nextState, action.data.name);
          return _nextState;
        }

        return state;
      }

    case _action_types.RoleTypes.RECEIVED_ROLE:
      {
        if (action.data) {
          var _nextState2 = _objectSpread({}, state);

          _nextState2[action.data.name] = action.data;
          return _nextState2;
        }

        return state;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  // object where the key is the category-name and has the corresponding value
  roles: roles,
  pending: pending
});

exports.default = _default;