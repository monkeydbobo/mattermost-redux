/*:: import type {GlobalState} from 'types/store';*/

/*:: import type {UserProfile} from 'types/users';*/

/*:: import type {ChannelMembership, Channel} from 'types/channels';*/

/*:: import type {RelationOneToOne, IDMappedObjects} from 'types/utilities';*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentChannelId = getCurrentChannelId;
exports.getMyChannelMemberships = getMyChannelMemberships;
exports.getCurrentUser = getCurrentUser;
exports.getCurrentUserId = getCurrentUserId;
exports.getUsers = getUsers;
exports.getMyCurrentChannelMembership = void 0;

var _reselect = require("reselect");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
// Channels
function getCurrentChannelId(state
/*: GlobalState*/
)
/*: string*/
{
  return state.entities.channels.currentChannelId;
}

function getMyChannelMemberships(state
/*: GlobalState*/
)
/*: RelationOneToOne<Channel, ChannelMembership>*/
{
  return state.entities.channels.myMembers;
}

var getMyCurrentChannelMembership
/*: (GlobalState) => ?ChannelMembership*/
= (0, _reselect.createSelector)(getCurrentChannelId, getMyChannelMemberships, function (currentChannelId, channelMemberships) {
  return channelMemberships[currentChannelId] || null;
}); // Users

exports.getMyCurrentChannelMembership = getMyCurrentChannelMembership;

function getCurrentUser(state
/*: GlobalState*/
)
/*: UserProfile*/
{
  return state.entities.users.profiles[getCurrentUserId(state)];
}

function getCurrentUserId(state
/*: GlobalState*/
)
/*: string*/
{
  return state.entities.users.currentUserId;
}

function getUsers(state
/*: GlobalState*/
)
/*: IDMappedObjects<UserProfile>*/
{
  return state.entities.users.profiles;
}