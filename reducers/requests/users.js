"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _redux = require("redux");

var _constants = require("../../constants");

var _action_types = require("../../action_types");

var _helpers = require("./helpers");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function checkMfa()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.CHECK_MFA_REQUEST:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.STARTED
      });

    case _action_types.UserTypes.CHECK_MFA_SUCCESS:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.SUCCESS,
        error: null
      });

    case _action_types.UserTypes.CHECK_MFA_FAILURE:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.FAILURE,
        error: action.error
      });

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.NOT_STARTED,
        error: null
      });

    default:
      return state;
  }
}

function login()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.LOGIN_REQUEST:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.STARTED
      });

    case _action_types.UserTypes.LOGIN_SUCCESS:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.SUCCESS,
        error: null
      });

    case _action_types.UserTypes.LOGIN_FAILURE:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.FAILURE,
        error: action.error
      });

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.NOT_STARTED,
        error: null
      });

    default:
      return state;
  }
}

function logout()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.LOGOUT_REQUEST:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.STARTED
      });

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.SUCCESS,
        error: null
      });

    case _action_types.UserTypes.LOGOUT_FAILURE:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.FAILURE,
        error: action.error
      });

    case _action_types.UserTypes.RESET_LOGOUT_STATE:
      return (0, _helpers.initialRequestState)();

    default:
      return state;
  }
}

function autocompleteUsers()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.UserTypes.AUTOCOMPLETE_USERS_REQUEST, _action_types.UserTypes.AUTOCOMPLETE_USERS_SUCCESS, _action_types.UserTypes.AUTOCOMPLETE_USERS_FAILURE, state, action);
}

function updateMe()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.UserTypes.UPDATE_ME_REQUEST, _action_types.UserTypes.UPDATE_ME_SUCCESS, _action_types.UserTypes.UPDATE_ME_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  checkMfa: checkMfa,
  login: login,
  logout: logout,
  autocompleteUsers: autocompleteUsers,
  updateMe: updateMe
})
/*: (UsersRequestsStatuses, GenericAction) => UsersRequestsStatuses*/
);

exports.default = _default;