"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScheme = getScheme;
exports.getSchemes = getSchemes;
exports.createScheme = createScheme;
exports.deleteScheme = deleteScheme;
exports.patchScheme = patchScheme;
exports.getSchemeTeams = getSchemeTeams;
exports.getSchemeChannels = getSchemeChannels;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _client = require("../client");

var _action_types = require("../action_types");

var _constants = require("../constants");

var _reduxBatchedActions = require("redux-batched-actions");

var _helpers = require("./helpers");

var _errors = require("./errors");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getScheme(schemeId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getScheme,
    onRequest: _action_types.SchemeTypes.GET_SCHEME_REQUEST,
    onSuccess: [_action_types.SchemeTypes.RECEIVED_SCHEME, _action_types.SchemeTypes.GET_SCHEME_SUCCESS],
    onFailure: _action_types.SchemeTypes.GET_SCHEME_FAILURE,
    params: [schemeId]
  });
}

function getSchemes(scope
/*: SchemeScope*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getSchemes,
    onRequest: _action_types.SchemeTypes.GET_SCHEMES_REQUEST,
    onSuccess: [_action_types.SchemeTypes.RECEIVED_SCHEMES, _action_types.SchemeTypes.GET_SCHEMES_SUCCESS],
    onFailure: _action_types.SchemeTypes.GET_SCHEMES_FAILURE,
    params: [scope, page, perPage]
  });
}

function createScheme(scheme
/*: Scheme*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.createScheme,
    onRequest: _action_types.SchemeTypes.CREATE_SCHEME_REQUEST,
    onSuccess: [_action_types.SchemeTypes.CREATED_SCHEME, _action_types.SchemeTypes.CREATE_SCHEME_SUCCESS],
    onFailure: _action_types.SchemeTypes.CREATE_SCHEME_FAILURE,
    params: [scheme]
  });
}

function deleteScheme(schemeId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _action_types.SchemeTypes.DELETE_SCHEME_REQUEST,
                  data: null
                }, getState);
                data = null;
                _context.prev = 2;
                _context.next = 5;
                return _client.Client4.deleteScheme(schemeId);

              case 5:
                data = _context.sent;
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                (0, _helpers.forceLogoutIfNecessary)(_context.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SchemeTypes.DELETE_SCHEME_FAILURE,
                  error: _context.t0
                }, (0, _errors.logError)(_context.t0)]), getState);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 13:
                dispatch({
                  type: _action_types.SchemeTypes.DELETED_SCHEME,
                  data: {
                    schemeId: schemeId
                  }
                }, getState);
                dispatch({
                  type: _action_types.SchemeTypes.DELETE_SCHEME_SUCCESS,
                  data: null
                }, getState);
                return _context.abrupt("return", {
                  data: data
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function patchScheme(schemeId
/*: string*/
, scheme
/*: SchemePatch*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.patchScheme,
    onRequest: _action_types.SchemeTypes.PATCH_SCHEME_REQUEST,
    onSuccess: [_action_types.SchemeTypes.PATCHED_SCHEME, _action_types.SchemeTypes.PATCH_SCHEME_SUCCESS],
    onFailure: _action_types.SchemeTypes.PATCH_SCHEME_FAILURE,
    params: [schemeId, scheme]
  });
}

function getSchemeTeams(schemeId
/*: string*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getSchemeTeams,
    onRequest: _action_types.SchemeTypes.GET_SCHEME_TEAMS_REQUEST,
    onSuccess: [_action_types.SchemeTypes.RECEIVED_SCHEME_TEAMS, _action_types.SchemeTypes.GET_SCHEME_TEAMS_SUCCESS],
    onFailure: _action_types.SchemeTypes.GET_SCHEME_TEAMS_FAILURE,
    params: [schemeId, page, perPage]
  });
}

function getSchemeChannels(schemeId
/*: string*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getSchemeChannels,
    onRequest: _action_types.SchemeTypes.GET_SCHEME_CHANNELS_REQUEST,
    onSuccess: [_action_types.SchemeTypes.RECEIVED_SCHEME_CHANNELS, _action_types.SchemeTypes.GET_SCHEME_CHANNELS_SUCCESS],
    onFailure: _action_types.SchemeTypes.GET_SCHEME_CHANNELS_FAILURE,
    params: [schemeId, page, perPage]
  });
}