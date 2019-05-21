"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _action_types = require("../../action_types");

var _helpers = require("./helpers");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function server()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types.GeneralTypes.PING_RESET) {
    return (0, _helpers.initialRequestState)();
  }

  return (0, _helpers.handleRequest)(_action_types.GeneralTypes.PING_REQUEST, _action_types.GeneralTypes.PING_SUCCESS, _action_types.GeneralTypes.PING_FAILURE, state, action);
}

function config()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GeneralTypes.CLIENT_CONFIG_REQUEST, _action_types.GeneralTypes.CLIENT_CONFIG_SUCCESS, _action_types.GeneralTypes.CLIENT_CONFIG_FAILURE, state, action);
}

function dataRetentionPolicy()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GeneralTypes.DATA_RETENTION_POLICY_REQUEST, _action_types.GeneralTypes.DATA_RETENTION_POLICY_SUCCESS, _action_types.GeneralTypes.DATA_RETENTION_POLICY_FAILURE, state, action);
}

function license()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GeneralTypes.CLIENT_LICENSE_REQUEST, _action_types.GeneralTypes.CLIENT_LICENSE_SUCCESS, _action_types.GeneralTypes.CLIENT_LICENSE_FAILURE, state, action);
}

function websocket()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types.GeneralTypes.WEBSOCKET_CLOSED) {
    return (0, _helpers.initialRequestState)();
  }

  return (0, _helpers.handleRequest)(_action_types.GeneralTypes.WEBSOCKET_REQUEST, _action_types.GeneralTypes.WEBSOCKET_SUCCESS, _action_types.GeneralTypes.WEBSOCKET_FAILURE, state, action);
}

function redirectLocation()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GeneralTypes.REDIRECT_LOCATION_REQUEST, _action_types.GeneralTypes.REDIRECT_LOCATION_SUCCESS, _action_types.GeneralTypes.REDIRECT_LOCATION_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  server: server,
  config: config,
  dataRetentionPolicy: dataRetentionPolicy,
  license: license,
  websocket: websocket,
  redirectLocation: redirectLocation
})
/*: (GeneralRequestsStatuses, GenericAction) => GeneralRequestsStatuses*/
);

exports.default = _default;