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
function myChannels()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.ChannelTypes.CHANNELS_REQUEST, _action_types.ChannelTypes.CHANNELS_SUCCESS, _action_types.ChannelTypes.CHANNELS_FAILURE, state, action);
}

function createChannel()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.ChannelTypes.CREATE_CHANNEL_REQUEST, _action_types.ChannelTypes.CREATE_CHANNEL_SUCCESS, _action_types.ChannelTypes.CREATE_CHANNEL_FAILURE, state, action);
}

function updateChannel()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.ChannelTypes.UPDATE_CHANNEL_REQUEST, _action_types.ChannelTypes.UPDATE_CHANNEL_SUCCESS, _action_types.ChannelTypes.UPDATE_CHANNEL_FAILURE, state, action);
}

function getChannels()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.ChannelTypes.GET_CHANNELS_REQUEST, _action_types.ChannelTypes.GET_CHANNELS_SUCCESS, _action_types.ChannelTypes.GET_CHANNELS_FAILURE, state, action);
}

function getAllChannels()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.ChannelTypes.GET_ALL_CHANNELS_REQUEST, _action_types.ChannelTypes.GET_ALL_CHANNELS_SUCCESS, _action_types.ChannelTypes.GET_ALL_CHANNELS_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  getChannels: getChannels,
  getAllChannels: getAllChannels,
  myChannels: myChannels,
  createChannel: createChannel,
  updateChannel: updateChannel
})
/*: (ChannelsRequestsStatuses, GenericAction) => ChannelsRequestsStatuses*/
);

exports.default = _default;