"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllGroups = getAllGroups;
exports.getGroup = getGroup;
exports.getGroupMemberCount = getGroupMemberCount;
exports.getGroupTeams = getGroupTeams;
exports.getGroupChannels = getGroupChannels;
exports.getGroupMembers = getGroupMembers;
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
var emptyList = [];
var emptySyncables = {
  teams: [],
  channels: []
};

function getAllGroups(state) {
  return state.entities.groups.groups;
}

function getGroup(state, id) {
  return getAllGroups(state)[id];
}

function getGroupMemberCount(state, id) {
  var memberData = state.entities.groups.members;
  var groupMemberData = memberData[id];

  if (!groupMemberData) {
    return 0;
  }

  return memberData[id].totalMemberCount;
}

function getGroupSyncables(state, id) {
  return state.entities.groups.syncables[id] || emptySyncables;
}

function getGroupTeams(state, id) {
  return getGroupSyncables(state, id).teams;
}

function getGroupChannels(state, id) {
  return getGroupSyncables(state, id).channels;
}

function getGroupMembers(state, id) {
  var groupMemberData = state.entities.groups.members[id];

  if (!groupMemberData) {
    return emptyList;
  }

  return groupMemberData.members;
}