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
function createPost()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types.PostTypes.CREATE_POST_RESET_REQUEST) {
    return (0, _helpers.initialRequestState)();
  }

  return (0, _helpers.handleRequest)(_action_types.PostTypes.CREATE_POST_REQUEST, _action_types.PostTypes.CREATE_POST_SUCCESS, _action_types.PostTypes.CREATE_POST_FAILURE, state, action);
}

function editPost()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.PostTypes.EDIT_POST_REQUEST, _action_types.PostTypes.EDIT_POST_SUCCESS, _action_types.PostTypes.EDIT_POST_FAILURE, state, action);
}

function getPostThread()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.PostTypes.GET_POST_THREAD_REQUEST, _action_types.PostTypes.GET_POST_THREAD_SUCCESS, _action_types.PostTypes.GET_POST_THREAD_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  createPost: createPost,
  editPost: editPost,
  getPostThread: getPostThread
})
/*: (PostsRequestsStatuses, GenericAction) => PostsRequestsStatuses*/
);

exports.default = _default;