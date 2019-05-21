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
function linkGroupSyncable()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GroupTypes.LINK_GROUP_SYNCABLE_REQUEST, _action_types.GroupTypes.LINK_GROUP_SYNCABLE_SUCCESS, _action_types.GroupTypes.LINK_GROUP_SYNCABLE_FAILURE, state, action);
}

function unlinkGroupSyncable()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GroupTypes.UNLINK_GROUP_SYNCABLE_REQUEST, _action_types.GroupTypes.UNLINK_GROUP_SYNCABLE_SUCCESS, _action_types.GroupTypes.UNLINK_GROUP_SYNCABLE_FAILURE, state, action);
}

function getGroupSyncables()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GroupTypes.GET_GROUP_SYNCABLES_REQUEST, _action_types.GroupTypes.GET_GROUP_SYNCABLES_SUCCESS, _action_types.GroupTypes.GET_GROUP_SYNCABLES_FAILURE, state, action);
}

function getGroupMembers()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GroupTypes.GET_GROUP_MEMBERS_REQUEST, _action_types.GroupTypes.GET_GROUP_MEMBERS_SUCCESS, _action_types.GroupTypes.GET_GROUP_MEMBERS_FAILURE, state, action);
}

function getGroup()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.GroupTypes.GET_GROUP_REQUEST, _action_types.GroupTypes.GET_GROUP_SUCCESS, _action_types.GroupTypes.GET_GROUP_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  linkGroupSyncable: linkGroupSyncable,
  unlinkGroupSyncable: unlinkGroupSyncable,
  getGroupSyncables: getGroupSyncables,
  getGroupMembers: getGroupMembers,
  getGroup: getGroup
})
/*: (GroupsRequestsStatuses, GenericAction) => GroupsRequestsStatuses*/
);

exports.default = _default;