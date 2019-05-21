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
function getSchemes()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.SchemeTypes.GET_SCHEMES_REQUEST, _action_types.SchemeTypes.GET_SCHEMES_SUCCESS, _action_types.SchemeTypes.GET_SCHEMES_FAILURE, state, action);
}

function getScheme()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.SchemeTypes.GET_SCHEME_REQUEST, _action_types.SchemeTypes.GET_SCHEME_SUCCESS, _action_types.SchemeTypes.GET_SCHEME_FAILURE, state, action);
}

function createScheme()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.SchemeTypes.CREATE_SCHEME_REQUEST, _action_types.SchemeTypes.CREATE_SCHEME_SUCCESS, _action_types.SchemeTypes.CREATE_SCHEME_FAILURE, state, action);
}

function deleteScheme()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.SchemeTypes.DELETE_SCHEME_REQUEST, _action_types.SchemeTypes.DELETE_SCHEME_SUCCESS, _action_types.SchemeTypes.DELETE_SCHEME_FAILURE, state, action);
}

function patchScheme()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.SchemeTypes.PATCH_SCHEME_REQUEST, _action_types.SchemeTypes.PATCH_SCHEME_SUCCESS, _action_types.SchemeTypes.PATCH_SCHEME_FAILURE, state, action);
}

function getSchemeTeams()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.SchemeTypes.GET_SCHEME_TEAMS_REQUEST, _action_types.SchemeTypes.GET_SCHEME_TEAMS_SUCCESS, _action_types.SchemeTypes.GET_SCHEME_TEAMS_FAILURE, state, action);
}

function getSchemeChannels()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.SchemeTypes.GET_SCHEME_CHANNELS_REQUEST, _action_types.SchemeTypes.GET_SCHEME_CHANNELS_SUCCESS, _action_types.SchemeTypes.GET_SCHEME_CHANNELS_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  getSchemes: getSchemes,
  getScheme: getScheme,
  createScheme: createScheme,
  deleteScheme: deleteScheme,
  patchScheme: patchScheme,
  getSchemeTeams: getSchemeTeams,
  getSchemeChannels: getSchemeChannels
})
/*: (SchemesRequestsStatuses, GenericAction) => SchemesRequestsStatuses*/
);

exports.default = _default;