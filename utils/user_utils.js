"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullName = getFullName;
exports.displayUsername = displayUsername;
exports.rolesIncludePermission = rolesIncludePermission;
exports.isAdmin = isAdmin;
exports.isTeamAdmin = isTeamAdmin;
exports.isSystemAdmin = isSystemAdmin;
exports.isChannelAdmin = isChannelAdmin;
exports.hasUserAccessTokenRole = hasUserAccessTokenRole;
exports.hasPostAllRole = hasPostAllRole;
exports.hasPostAllPublicRole = hasPostAllPublicRole;
exports.profileListToMap = profileListToMap;
exports.removeUserFromList = removeUserFromList;
exports.filterProfilesMatchingTerm = filterProfilesMatchingTerm;
exports.sortByUsername = sortByUsername;

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.split");

var _constants = require("../constants");

var _i18n_utils = require("./i18n_utils");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getFullName(user
/*: UserProfile*/
)
/*: string*/
{
  if (user.first_name && user.last_name) {
    return user.first_name + ' ' + user.last_name;
  } else if (user.first_name) {
    return user.first_name;
  } else if (user.last_name) {
    return user.last_name;
  }

  return '';
}

function displayUsername(user
/*: UserProfile*/
, teammateNameDisplay
/*: string*/
)
/*: string*/
{
  var useFallbackUsername
  /*: boolean*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var name = useFallbackUsername ? (0, _i18n_utils.localizeMessage)('channel_loader.someone', 'Someone') : '';

  if (user) {
    if (teammateNameDisplay === _constants.Preferences.DISPLAY_PREFER_NICKNAME) {
      name = user.nickname || getFullName(user);
    } else if (teammateNameDisplay === _constants.Preferences.DISPLAY_PREFER_FULL_NAME) {
      name = getFullName(user);
    } else {
      name = user.username;
    }

    if (!name || name.trim().length === 0) {
      name = user.username;
    }
  }

  return name;
}

function rolesIncludePermission(roles
/*: string*/
, permission
/*: string*/
)
/*: boolean*/
{
  var rolesArray = roles.split(' ');
  return rolesArray.includes(permission);
}

function isAdmin(roles
/*: string*/
)
/*: boolean*/
{
  return isSystemAdmin(roles) || isTeamAdmin(roles);
}

function isTeamAdmin(roles
/*: string*/
)
/*: boolean*/
{
  return rolesIncludePermission(roles, _constants.General.TEAM_ADMIN_ROLE);
}

function isSystemAdmin(roles
/*: string*/
)
/*: boolean*/
{
  return rolesIncludePermission(roles, _constants.General.SYSTEM_ADMIN_ROLE);
}

function isChannelAdmin(roles
/*: string*/
)
/*: boolean*/
{
  return rolesIncludePermission(roles, _constants.General.CHANNEL_ADMIN_ROLE);
}

function hasUserAccessTokenRole(roles
/*: string*/
)
/*: boolean*/
{
  return rolesIncludePermission(roles, _constants.General.SYSTEM_USER_ACCESS_TOKEN_ROLE);
}

function hasPostAllRole(roles
/*: string*/
)
/*: boolean*/
{
  return rolesIncludePermission(roles, _constants.General.SYSTEM_POST_ALL_ROLE);
}

function hasPostAllPublicRole(roles
/*: string*/
)
/*: boolean*/
{
  return rolesIncludePermission(roles, _constants.General.SYSTEM_POST_ALL_PUBLIC_ROLE);
}

function profileListToMap(profileList
/*: Array<UserProfile>*/
)
/*: IDMappedObjects<UserProfile>*/
{
  var profiles = {};

  for (var i = 0; i < profileList.length; i++) {
    profiles[profileList[i].id] = profileList[i];
  }

  return profiles;
}

function removeUserFromList(userId
/*: string*/
, list
/*: Array<UserProfile>*/
)
/*: Array<UserProfile>*/
{
  for (var i = list.length - 1; i >= 0; i--) {
    if (list[i].id === userId) {
      list.splice(i, 1);
      return list;
    }
  }

  return list;
}

function filterProfilesMatchingTerm(users
/*: Array<UserProfile>*/
, term
/*: string*/
)
/*: Array<UserProfile>*/
{
  var lowercasedTerm = term.toLowerCase();
  var trimmedTerm = lowercasedTerm;

  if (trimmedTerm.startsWith('@')) {
    trimmedTerm = trimmedTerm.substr(1);
  }

  return users.filter(function (user
  /*: UserProfile*/
  ) {
    if (!user) {
      return false;
    }

    var username = (user.username || '').toLowerCase();
    var first = (user.first_name || '').toLowerCase();
    var last = (user.last_name || '').toLowerCase();
    var full = first + ' ' + last;
    var email = (user.email || '').toLowerCase();
    var nickname = (user.nickname || '').toLowerCase();
    var emailDomain = '';
    var split = email.split('@');

    if (split.length > 1) {
      emailDomain = split[1];
    }

    return username.startsWith(trimmedTerm) || full.startsWith(trimmedTerm) || last.startsWith(lowercasedTerm) || nickname.startsWith(trimmedTerm) || email.startsWith(lowercasedTerm) || emailDomain.startsWith(trimmedTerm);
  });
}

function sortByUsername(a
/*: UserProfile*/
, b
/*: UserProfile*/
)
/*: number*/
{
  var nameA = a.username;
  var nameB = b.username;
  return nameA.localeCompare(nameB);
}