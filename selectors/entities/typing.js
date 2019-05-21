"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsersTyping = exports.makeGetUsersTypingByChannelAndPost = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _reselect = require("reselect");

var _common = require("./common");

var _preferences = require("./preferences");

var _user_utils = require("../../utils/user_utils");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
var getUsersTypingImpl = function getUsersTypingImpl(profiles
/*: IDMappedObjects<UserProfile>*/
, teammateNameDisplay
/*: string*/
, channelId
/*: string*/
, parentPostId
/*: string*/
, typing
/*: Typing*/
)
/*: Array<string>*/
{
  var id = channelId + parentPostId;

  if (typing[id]) {
    var users = Object.keys(typing[id]);

    if (users.length) {
      return users.map(function (userId) {
        return (0, _user_utils.displayUsername)(profiles[userId], teammateNameDisplay);
      });
    }
  }

  return [];
};

var makeGetUsersTypingByChannelAndPost = function makeGetUsersTypingByChannelAndPost() {
  return ((0, _reselect.createSelector)(_common.getUsers, _preferences.getTeammateNameDisplaySetting, function (state
  /*: GlobalState*/
  , options
  /*: {channelId: string, postId: string}*/
  ) {
    return (
      /*: string*/
      options.channelId
    );
  }, function (state
  /*: GlobalState*/
  , options
  /*: {channelId: string, postId: string}*/
  ) {
    return (
      /*: string*/
      options.postId
    );
  }, function (state
  /*: GlobalState*/
  ) {
    return (
      /*: Typing*/
      state.entities.typing
    );
  }, getUsersTypingImpl)
  /*: (state: GlobalState, {channelId: string, postId: string}) => Array<string>*/
  );
};

exports.makeGetUsersTypingByChannelAndPost = makeGetUsersTypingByChannelAndPost;
var getUsersTyping
/*: (state: GlobalState) => Array<string>*/
= (0, _reselect.createSelector)(_common.getUsers, _preferences.getTeammateNameDisplaySetting, _common.getCurrentChannelId, function (state) {
  return state.entities.posts.selectedPostId;
}, function (state) {
  return state.entities.typing;
}, getUsersTypingImpl);
exports.getUsersTyping = getUsersTyping;