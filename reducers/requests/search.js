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
function searchPosts()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types.SearchTypes.REMOVE_SEARCH_POSTS) {
    return (0, _helpers.initialRequestState)();
  }

  return (0, _helpers.handleRequest)(_action_types.SearchTypes.SEARCH_POSTS_REQUEST, _action_types.SearchTypes.SEARCH_POSTS_SUCCESS, _action_types.SearchTypes.SEARCH_POSTS_FAILURE, state, action);
}

function flaggedPosts()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types.SearchTypes.REMOVE_SEARCH_POSTS) {
    return (0, _helpers.initialRequestState)();
  }

  return (0, _helpers.handleRequest)(_action_types.SearchTypes.SEARCH_FLAGGED_POSTS_REQUEST, _action_types.SearchTypes.SEARCH_FLAGGED_POSTS_SUCCESS, _action_types.SearchTypes.SEARCH_FLAGGED_POSTS_FAILURE, state, action);
}

function pinnedPosts()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types.SearchTypes.REMOVE_SEARCH_POSTS) {
    return (0, _helpers.initialRequestState)();
  }

  return (0, _helpers.handleRequest)(_action_types.SearchTypes.SEARCH_PINNED_POSTS_REQUEST, _action_types.SearchTypes.SEARCH_PINNED_POSTS_SUCCESS, _action_types.SearchTypes.SEARCH_PINNED_POSTS_FAILURE, state, action);
}

function recentMentions()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types.SearchTypes.REMOVE_SEARCH_POSTS) {
    return (0, _helpers.initialRequestState)();
  }

  return (0, _helpers.handleRequest)(_action_types.SearchTypes.SEARCH_RECENT_MENTIONS_REQUEST, _action_types.SearchTypes.SEARCH_RECENT_MENTIONS_SUCCESS, _action_types.SearchTypes.SEARCH_RECENT_MENTIONS_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  flaggedPosts: flaggedPosts,
  pinnedPosts: pinnedPosts,
  recentMentions: recentMentions,
  searchPosts: searchPosts
})
/*: (SearchRequestsStatuses, GenericAction) => SearchRequestsStatuses*/
);

exports.default = _default;