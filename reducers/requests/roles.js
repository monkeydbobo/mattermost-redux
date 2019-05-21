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
function getRolesByNames()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.RoleTypes.ROLES_BY_NAMES_REQUEST, _action_types.RoleTypes.ROLES_BY_NAMES_SUCCESS, _action_types.RoleTypes.ROLES_BY_NAMES_FAILURE, state, action);
}

function getRoleByName()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.RoleTypes.ROLE_BY_NAME_REQUEST, _action_types.RoleTypes.ROLE_BY_NAME_SUCCESS, _action_types.RoleTypes.ROLE_BY_NAME_FAILURE, state, action);
}

function getRole()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.RoleTypes.ROLE_BY_ID_REQUEST, _action_types.RoleTypes.ROLE_BY_ID_SUCCESS, _action_types.RoleTypes.ROLE_BY_ID_FAILURE, state, action);
}

function editRole()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.RoleTypes.EDIT_ROLE_REQUEST, _action_types.RoleTypes.EDIT_ROLE_SUCCESS, _action_types.RoleTypes.EDIT_ROLE_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  getRolesByNames: getRolesByNames,
  getRoleByName: getRoleByName,
  getRole: getRole,
  editRole: editRole
})
/*: (RolesRequestsStatuses, GenericAction) => RolesRequestsStatuses*/
);

exports.default = _default;