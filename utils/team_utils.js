/*:: import type {Team} from 'types/teams';*/

/*:: import type {IDMappedObjects} from 'types/utilities';*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teamListToMap = teamListToMap;

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function teamListToMap(teamList
/*: Array<Team>*/
)
/*: IDMappedObjects<Team>*/
{
  var teams = {};

  for (var i = 0; i < teamList.length; i++) {
    teams[teamList[i].id] = teamList[i];
  }

  return teams;
}