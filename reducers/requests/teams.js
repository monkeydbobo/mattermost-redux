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
function getMyTeams()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.TeamTypes.MY_TEAMS_REQUEST, _action_types.TeamTypes.MY_TEAMS_SUCCESS, _action_types.TeamTypes.MY_TEAMS_FAILURE, state, action);
}

function getTeams()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.TeamTypes.GET_TEAMS_REQUEST, _action_types.TeamTypes.GET_TEAMS_SUCCESS, _action_types.TeamTypes.GET_TEAMS_FAILURE, state, action);
}

function joinTeam()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.TeamTypes.JOIN_TEAM_REQUEST, _action_types.TeamTypes.JOIN_TEAM_SUCCESS, _action_types.TeamTypes.JOIN_TEAM_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  getTeams: getTeams,
  getMyTeams: getMyTeams,
  joinTeam: joinTeam
})
/*: (TeamsRequestsStatuses, GenericAction) => TeamsRequestsStatuses*/
);

exports.default = _default;