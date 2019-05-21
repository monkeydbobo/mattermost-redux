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
function createIncomingHook()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.CREATE_INCOMING_HOOK_REQUEST, _action_types.IntegrationTypes.CREATE_INCOMING_HOOK_SUCCESS, _action_types.IntegrationTypes.CREATE_INCOMING_HOOK_FAILURE, state, action);
}

function getIncomingHooks()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.GET_INCOMING_HOOKS_REQUEST, _action_types.IntegrationTypes.GET_INCOMING_HOOKS_SUCCESS, _action_types.IntegrationTypes.GET_INCOMING_HOOKS_FAILURE, state, action);
}

function deleteIncomingHook()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.DELETE_INCOMING_HOOK_REQUEST, _action_types.IntegrationTypes.DELETE_INCOMING_HOOK_SUCCESS, _action_types.IntegrationTypes.DELETE_INCOMING_HOOK_FAILURE, state, action);
}

function updateIncomingHook()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.UPDATE_INCOMING_HOOK_REQUEST, _action_types.IntegrationTypes.UPDATE_INCOMING_HOOK_SUCCESS, _action_types.IntegrationTypes.UPDATE_INCOMING_HOOK_FAILURE, state, action);
}

function createOutgoingHook()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.CREATE_OUTGOING_HOOK_REQUEST, _action_types.IntegrationTypes.CREATE_OUTGOING_HOOK_SUCCESS, _action_types.IntegrationTypes.CREATE_OUTGOING_HOOK_FAILURE, state, action);
}

function getOutgoingHooks()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.GET_OUTGOING_HOOKS_REQUEST, _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_SUCCESS, _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_FAILURE, state, action);
}

function deleteOutgoingHook()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.DELETE_OUTGOING_HOOK_REQUEST, _action_types.IntegrationTypes.DELETE_OUTGOING_HOOK_SUCCESS, _action_types.IntegrationTypes.DELETE_OUTGOING_HOOK_FAILURE, state, action);
}

function updateOutgoingHook()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_REQUEST, _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_SUCCESS, _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_FAILURE, state, action);
}

function getCommands()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.GET_COMMANDS_REQUEST, _action_types.IntegrationTypes.GET_COMMANDS_SUCCESS, _action_types.IntegrationTypes.GET_COMMANDS_FAILURE, state, action);
}

function getAutocompleteCommands()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.GET_AUTOCOMPLETE_COMMANDS_REQUEST, _action_types.IntegrationTypes.GET_AUTOCOMPLETE_COMMANDS_SUCCESS, _action_types.IntegrationTypes.GET_AUTOCOMPLETE_COMMANDS_FAILURE, state, action);
}

function getCustomTeamCommands()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.GET_CUSTOM_TEAM_COMMANDS_REQUEST, _action_types.IntegrationTypes.GET_CUSTOM_TEAM_COMMANDS_SUCCESS, _action_types.IntegrationTypes.GET_CUSTOM_TEAM_COMMANDS_FAILURE, state, action);
}

function addCommand()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.ADD_COMMAND_REQUEST, _action_types.IntegrationTypes.ADD_COMMAND_SUCCESS, _action_types.IntegrationTypes.ADD_COMMAND_FAILURE, state, action);
}

function editCommand()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.EDIT_COMMAND_REQUEST, _action_types.IntegrationTypes.EDIT_COMMAND_SUCCESS, _action_types.IntegrationTypes.EDIT_COMMAND_FAILURE, state, action);
}

function regenCommandToken()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.REGEN_COMMAND_TOKEN_REQUEST, _action_types.IntegrationTypes.REGEN_COMMAND_TOKEN_SUCCESS, _action_types.IntegrationTypes.REGEN_COMMAND_TOKEN_FAILURE, state, action);
}

function deleteCommand()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.DELETE_COMMAND_REQUEST, _action_types.IntegrationTypes.DELETE_COMMAND_SUCCESS, _action_types.IntegrationTypes.DELETE_COMMAND_FAILURE, state, action);
}

function addOAuthApp()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.ADD_OAUTH_APP_REQUEST, _action_types.IntegrationTypes.ADD_OAUTH_APP_SUCCESS, _action_types.IntegrationTypes.ADD_OAUTH_APP_FAILURE, state, action);
}

function getOAuthApps()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.GET_OAUTH_APPS_REQUEST, _action_types.IntegrationTypes.GET_OAUTH_APPS_SUCCESS, _action_types.IntegrationTypes.GET_OAUTH_APPS_FAILURE, state, action);
}

function getOAuthApp()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.GET_OAUTH_APP_REQUEST, _action_types.IntegrationTypes.GET_OAUTH_APP_SUCCESS, _action_types.IntegrationTypes.GET_OAUTH_APP_FAILURE, state, action);
}

function deleteOAuthApp()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.DELETE_OAUTH_APP_REQUEST, _action_types.IntegrationTypes.DELETE_OAUTH_APP_SUCCESS, _action_types.IntegrationTypes.DELETE_OAUTH_APP_FAILURE, state, action);
}

function updateOAuthApp()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.UPDATE_OAUTH_APP_REQUEST, _action_types.IntegrationTypes.UPDATE_OAUTH_APP_SUCCESS, _action_types.IntegrationTypes.UPDATE_OAUTH_APP_FAILURE, state, action);
}

function executeCommand()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.EXECUTE_COMMAND_REQUEST, _action_types.IntegrationTypes.EXECUTE_COMMAND_SUCCESS, _action_types.IntegrationTypes.EXECUTE_COMMAND_FAILURE, state, action);
}

function submitInteractiveDialog()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.IntegrationTypes.SUBMIT_INTERACTIVE_DIALOG_REQUEST, _action_types.IntegrationTypes.SUBMIT_INTERACTIVE_DIALOG_SUCCESS, _action_types.IntegrationTypes.SUBMIT_INTERACTIVE_DIALOG_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  createIncomingHook: createIncomingHook,
  getIncomingHooks: getIncomingHooks,
  deleteIncomingHook: deleteIncomingHook,
  updateIncomingHook: updateIncomingHook,
  createOutgoingHook: createOutgoingHook,
  getOutgoingHooks: getOutgoingHooks,
  deleteOutgoingHook: deleteOutgoingHook,
  updateOutgoingHook: updateOutgoingHook,
  getCommands: getCommands,
  getCustomTeamCommands: getCustomTeamCommands,
  addCommand: addCommand,
  editCommand: editCommand,
  regenCommandToken: regenCommandToken,
  deleteCommand: deleteCommand,
  addOAuthApp: addOAuthApp,
  getOAuthApps: getOAuthApps,
  getOAuthApp: getOAuthApp,
  deleteOAuthApp: deleteOAuthApp,
  updateOAuthApp: updateOAuthApp,
  executeCommand: executeCommand,
  getAutocompleteCommands: getAutocompleteCommands,
  submitInteractiveDialog: submitInteractiveDialog
})
/*: (IntegrationsRequestsStatuses, GenericAction) => IntegrationsRequestsStatuses*/
);

exports.default = _default;