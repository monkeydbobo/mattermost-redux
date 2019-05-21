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
function getMyPreferences()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.PreferenceTypes.MY_PREFERENCES_REQUEST, _action_types.PreferenceTypes.MY_PREFERENCES_SUCCESS, _action_types.PreferenceTypes.MY_PREFERENCES_FAILURE, state, action);
}

function savePreferences()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.PreferenceTypes.SAVE_PREFERENCES_REQUEST, _action_types.PreferenceTypes.SAVE_PREFERENCES_SUCCESS, _action_types.PreferenceTypes.SAVE_PREFERENCES_FAILURE, state, action);
}

function deletePreferences()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.PreferenceTypes.DELETE_PREFERENCES_REQUEST, _action_types.PreferenceTypes.DELETE_PREFERENCES_SUCCESS, _action_types.PreferenceTypes.DELETE_PREFERENCES_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  getMyPreferences: getMyPreferences,
  savePreferences: savePreferences,
  deletePreferences: deletePreferences
})
/*: (PreferencesRequestsStatuses, GenericAction) => PreferencesRequestsStatuses*/
);

exports.default = _default;