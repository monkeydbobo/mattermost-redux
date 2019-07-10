"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserIdsInChannels = getUserIdsInChannels;
exports.getUserIdsNotInChannels = getUserIdsNotInChannels;
exports.getUserIdsInTeams = getUserIdsInTeams;
exports.getUserIdsNotInTeams = getUserIdsNotInTeams;
exports.getUserIdsWithoutTeam = getUserIdsWithoutTeam;
exports.getUserStatuses = getUserStatuses;
exports.getUserSessions = getUserSessions;
exports.getUserAudits = getUserAudits;
exports.getUser = getUser;
exports.getUserByUsername = getUserByUsername;
exports.getUserByEmail = getUserByEmail;
exports.getStatusForUserId = getStatusForUserId;
exports.getTotalUsersStats = getTotalUsersStats;
exports.searchProfiles = searchProfiles;
exports.searchProfilesInCurrentChannel = searchProfilesInCurrentChannel;
exports.searchProfilesNotInCurrentChannel = searchProfilesNotInCurrentChannel;
exports.searchProfilesInCurrentTeam = searchProfilesInCurrentTeam;
exports.searchProfilesInTeam = searchProfilesInTeam;
exports.searchProfilesNotInCurrentTeam = searchProfilesNotInCurrentTeam;
exports.searchProfilesWithoutTeam = searchProfilesWithoutTeam;
exports.getMyAcceptedTermsOfServiceData = getMyAcceptedTermsOfServiceData;
exports.makeGetProfilesForReactions = makeGetProfilesForReactions;
exports.makeGetProfilesInChannel = makeGetProfilesInChannel;
exports.makeGetProfilesNotInChannel = makeGetProfilesNotInChannel;
exports.makeGetProfilesByIdsAndUsernames = makeGetProfilesByIdsAndUsernames;
exports.makeGetDisplayName = makeGetDisplayName;
Object.defineProperty(exports, "getCurrentUser", {
  enumerable: true,
  get: function get() {
    return _common.getCurrentUser;
  }
});
Object.defineProperty(exports, "getCurrentUserId", {
  enumerable: true,
  get: function get() {
    return _common.getCurrentUserId;
  }
});
Object.defineProperty(exports, "getUsers", {
  enumerable: true,
  get: function get() {
    return _common.getUsers;
  }
});
exports.getUsersInVisibleDMs = exports.shouldShowTermsOfService = exports.getProfilesWithoutTeam = exports.getProfilesNotInCurrentTeam = exports.getProfilesInTeam = exports.getProfilesInCurrentTeam = exports.getProfilesNotInCurrentChannel = exports.getProfilesInCurrentChannel = exports.getProfiles = exports.getProfileSetNotInCurrentTeam = exports.getProfileSetInCurrentTeam = exports.getProfileSetNotInCurrentChannel = exports.getProfileSetInCurrentChannel = exports.getCurrentUserMentionKeys = exports.getCurrentUserRoles = exports.isCurrentUserSystemAdmin = exports.getUsersByEmail = exports.getUsersByUsername = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.set");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

var _reselect = require("reselect");

var _common = require("./common");

var _general = require("./general");

var _preferences = require("./preferences");

var _user_utils = require("../../utils/user_utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getUserIdsInChannels(state) {
  return state.entities.users.profilesInChannel;
}

function getUserIdsNotInChannels(state) {
  return state.entities.users.profilesNotInChannel;
}

function getUserIdsInTeams(state) {
  return state.entities.users.profilesInTeam;
}

function getUserIdsNotInTeams(state) {
  return state.entities.users.profilesNotInTeam;
}

function getUserIdsWithoutTeam(state) {
  return state.entities.users.profilesWithoutTeam;
}

function getUserStatuses(state) {
  return state.entities.users.statuses;
}

function getUserSessions(state) {
  return state.entities.users.mySessions;
}

function getUserAudits(state) {
  return state.entities.users.myAudits;
}

function getUser(state, id) {
  return state.entities.users.profiles[id];
}

var getUsersByUsername = (0, _reselect.createSelector)(_common.getUsers, function (users) {
  var usersByUsername = {};

  for (var id in users) {
    if (users.hasOwnProperty(id)) {
      var user = users[id];
      usersByUsername[user.username] = user;
    }
  }

  return usersByUsername;
});
exports.getUsersByUsername = getUsersByUsername;

function getUserByUsername(state, username) {
  return getUsersByUsername(state)[username];
}

var getUsersByEmail = (0, _reselect.createSelector)(_common.getUsers, function (users) {
  var usersByEmail = {};

  var _arr = Object.values(users);

  for (var _i = 0; _i < _arr.length; _i++) {
    var user = _arr[_i];
    usersByEmail[user.email] = user;
  }

  return usersByEmail;
});
exports.getUsersByEmail = getUsersByEmail;

function getUserByEmail(state, email) {
  return getUsersByEmail(state)[email];
}

var isCurrentUserSystemAdmin = (0, _reselect.createSelector)(_common.getCurrentUser, function (user) {
  var roles = user.roles || '';
  return (0, _user_utils.isSystemAdmin)(roles);
});
exports.isCurrentUserSystemAdmin = isCurrentUserSystemAdmin;
var getCurrentUserRoles = (0, _reselect.createSelector)(_common.getMyCurrentChannelMembership, function (state) {
  return state.entities.teams.myMembers[state.entities.teams.currentTeamId];
}, _common.getCurrentUser, function (currentChannelMembership, currentTeamMembership, currentUser) {
  var roles = '';

  if (currentTeamMembership) {
    roles += "".concat(currentTeamMembership.roles, " ");
  }

  if (currentChannelMembership) {
    roles += "".concat(currentChannelMembership.roles, " ");
  }

  if (currentUser) {
    roles += currentUser.roles;
  }

  return roles.trim();
});
exports.getCurrentUserRoles = getCurrentUserRoles;
var getCurrentUserMentionKeys = (0, _reselect.createSelector)(_common.getCurrentUser, function (user) {
  var keys = [];

  if (!user || !user.notify_props) {
    return keys;
  }

  if (user.notify_props.mention_keys) {
    keys = keys.concat(user.notify_props.mention_keys.split(',').map(function (key) {
      return {
        key: key
      };
    }));
  }

  if (user.notify_props.first_name === 'true' && user.first_name) {
    keys.push({
      key: user.first_name,
      caseSensitive: true
    });
  }

  if (user.notify_props.channel === 'true') {
    keys.push({
      key: '@channel'
    });
    keys.push({
      key: '@all'
    });
    keys.push({
      key: '@here'
    });
  }

  var usernameKey = '@' + user.username;

  if (keys.findIndex(function (key) {
    return key.key === usernameKey;
  }) === -1) {
    keys.push({
      key: usernameKey
    });
  }

  return keys;
});
exports.getCurrentUserMentionKeys = getCurrentUserMentionKeys;
var getProfileSetInCurrentChannel = (0, _reselect.createSelector)(_common.getCurrentChannelId, getUserIdsInChannels, function (currentChannel, channelProfiles) {
  return channelProfiles[currentChannel];
});
exports.getProfileSetInCurrentChannel = getProfileSetInCurrentChannel;
var getProfileSetNotInCurrentChannel = (0, _reselect.createSelector)(_common.getCurrentChannelId, getUserIdsNotInChannels, function (currentChannel, channelProfiles) {
  return channelProfiles[currentChannel];
});
exports.getProfileSetNotInCurrentChannel = getProfileSetNotInCurrentChannel;
var getProfileSetInCurrentTeam = (0, _reselect.createSelector)(function (state) {
  return state.entities.teams.currentTeamId;
}, getUserIdsInTeams, function (currentTeam, teamProfiles) {
  return teamProfiles[currentTeam];
});
exports.getProfileSetInCurrentTeam = getProfileSetInCurrentTeam;
var getProfileSetNotInCurrentTeam = (0, _reselect.createSelector)(function (state) {
  return state.entities.teams.currentTeamId;
}, getUserIdsNotInTeams, function (currentTeam, teamProfiles) {
  return teamProfiles[currentTeam];
});
exports.getProfileSetNotInCurrentTeam = getProfileSetNotInCurrentTeam;
var PROFILE_SET_ALL = 'all';

function sortAndInjectProfiles(profiles, profileSet) {
  var skipInactive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var currentProfiles = [];

  if (typeof profileSet === 'undefined') {
    return currentProfiles;
  } else if (profileSet === PROFILE_SET_ALL) {
    currentProfiles = Object.values(profiles);
  } else {
    currentProfiles = Array.from(profileSet).map(function (p) {
      return profiles[p];
    });
  }

  currentProfiles = currentProfiles.filter(function (profile) {
    return Boolean(profile);
  });

  if (skipInactive) {
    currentProfiles = currentProfiles.filter(function (profile) {
      return !(profile.delete_at && profile.delete_at !== 0);
    });
  }

  return currentProfiles.sort(_user_utils.sortByUsername);
}

var getProfiles = (0, _reselect.createSelector)(_common.getUsers, function (state, filters) {
  return filters;
}, function (profiles, filters) {
  return sortAndInjectProfiles(filterProfiles(profiles, filters), PROFILE_SET_ALL);
});
exports.getProfiles = getProfiles;

function filterProfiles(profiles, filters) {
  if (!filters || Object.keys(filters).length === 0) {
    return profiles;
  }

  var users = Object.values(profiles);

  if (filters.role && filters.role !== '') {
    users = users.filter(function (user) {
      return user.roles && user.roles.indexOf(filters.role) !== -1;
    });
  }

  if (filters.inactive) {
    users = users.filter(function (user) {
      return user.delete_at !== 0;
    });
  }

  return users.reduce(function (acc, user) {
    acc[user.id] = user;
    return acc;
  }, {});
}

var getProfilesInCurrentChannel = (0, _reselect.createSelector)(_common.getUsers, getProfileSetInCurrentChannel, function (profiles, currentChannelProfileSet) {
  return sortAndInjectProfiles(profiles, currentChannelProfileSet);
});
exports.getProfilesInCurrentChannel = getProfilesInCurrentChannel;
var getProfilesNotInCurrentChannel = (0, _reselect.createSelector)(_common.getUsers, getProfileSetNotInCurrentChannel, function (profiles, notInCurrentChannelProfileSet) {
  return sortAndInjectProfiles(profiles, notInCurrentChannelProfileSet);
});
exports.getProfilesNotInCurrentChannel = getProfilesNotInCurrentChannel;
var getProfilesInCurrentTeam = (0, _reselect.createSelector)(_common.getUsers, getProfileSetInCurrentTeam, function (profiles, currentTeamProfileSet) {
  return sortAndInjectProfiles(profiles, currentTeamProfileSet);
});
exports.getProfilesInCurrentTeam = getProfilesInCurrentTeam;
var getProfilesInTeam = (0, _reselect.createSelector)(_common.getUsers, getUserIdsInTeams, function (state, teamId) {
  return teamId;
}, function (state, teamId, filters) {
  return filters;
}, function (profiles, usersInTeams, teamId, filters) {
  return sortAndInjectProfiles(filterProfiles(profiles, filters), usersInTeams[teamId] || new Set());
});
exports.getProfilesInTeam = getProfilesInTeam;
var getProfilesNotInCurrentTeam = (0, _reselect.createSelector)(_common.getUsers, getProfileSetNotInCurrentTeam, function (profiles, notInCurrentTeamProfileSet) {
  return sortAndInjectProfiles(profiles, notInCurrentTeamProfileSet);
});
exports.getProfilesNotInCurrentTeam = getProfilesNotInCurrentTeam;
var getProfilesWithoutTeam = (0, _reselect.createSelector)(_common.getUsers, getUserIdsWithoutTeam, function (state, filters) {
  return filters;
}, function (profiles, withoutTeamProfileSet, filters) {
  return sortAndInjectProfiles(filterProfiles(profiles, filters), withoutTeamProfileSet);
});
exports.getProfilesWithoutTeam = getProfilesWithoutTeam;

function getStatusForUserId(state, userId) {
  try {
    return getUserStatuses(state)[userId];
  } catch (error) {
    return 'offline';
  }
}

function getTotalUsersStats(state) {
  return state.entities.users.stats;
}

function searchProfiles(state, term) {
  var skipCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var filters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var profiles = (0, _user_utils.filterProfilesMatchingTerm)(Object.values((0, _common.getUsers)(state)), term, filters);
  var filteredProfiles = Object.values(filterProfiles(profiles, filters));

  if (skipCurrent) {
    removeCurrentUserFromList(filteredProfiles, (0, _common.getCurrentUserId)(state));
  }

  return filteredProfiles;
}

function searchProfilesInCurrentChannel(state, term) {
  var skipCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var profiles = (0, _user_utils.filterProfilesMatchingTerm)(getProfilesInCurrentChannel(state), term);

  if (skipCurrent) {
    removeCurrentUserFromList(profiles, (0, _common.getCurrentUserId)(state));
  }

  return profiles;
}

function searchProfilesNotInCurrentChannel(state, term) {
  var skipCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var profiles = (0, _user_utils.filterProfilesMatchingTerm)(getProfilesNotInCurrentChannel(state), term);

  if (skipCurrent) {
    removeCurrentUserFromList(profiles, (0, _common.getCurrentUserId)(state));
  }

  return profiles;
}

function searchProfilesInCurrentTeam(state, term) {
  var skipCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var profiles = (0, _user_utils.filterProfilesMatchingTerm)(getProfilesInCurrentTeam(state), term);

  if (skipCurrent) {
    removeCurrentUserFromList(profiles, (0, _common.getCurrentUserId)(state));
  }

  return profiles;
}

function searchProfilesInTeam(state, teamId, term) {
  var skipCurrent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var filters = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var profiles = (0, _user_utils.filterProfilesMatchingTerm)(getProfilesInTeam(state, teamId), term);
  var filteredProfiles = Object.values(filterProfiles(profiles, filters));

  if (skipCurrent) {
    removeCurrentUserFromList(filteredProfiles, (0, _common.getCurrentUserId)(state));
  }

  return filteredProfiles;
}

function searchProfilesNotInCurrentTeam(state, term) {
  var skipCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var profiles = (0, _user_utils.filterProfilesMatchingTerm)(getProfilesNotInCurrentTeam(state), term);

  if (skipCurrent) {
    removeCurrentUserFromList(profiles, (0, _common.getCurrentUserId)(state));
  }

  return profiles;
}

function searchProfilesWithoutTeam(state, term) {
  var skipCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var filters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var profiles = (0, _user_utils.filterProfilesMatchingTerm)(getProfilesWithoutTeam(state), term);
  var filteredProfiles = Object.values(filterProfiles(profiles, filters));

  if (skipCurrent) {
    removeCurrentUserFromList(filteredProfiles, (0, _common.getCurrentUserId)(state));
  }

  return filteredProfiles;
}

function removeCurrentUserFromList(profiles, currentUserId) {
  var index = profiles.findIndex(function (p) {
    return p.id === currentUserId;
  });

  if (index >= 0) {
    profiles.splice(index, 1);
  }
}

function getMyAcceptedTermsOfServiceData(state) {
  return state.entities.users.myAcceptedTermsOfServiceData;
}

var shouldShowTermsOfService = (0, _reselect.createSelector)(_general.getConfig, _common.getCurrentUser, _general.getLicense, getMyAcceptedTermsOfServiceData, function (config, user, license, myAcceptedTermsOfServiceData) {
  // Defaults to false if the user is not logged in or the setting doesn't exist
  var acceptedTermsId = myAcceptedTermsOfServiceData.id;
  var acceptedAt = myAcceptedTermsOfServiceData.time;
  var featureEnabled = license.IsLicensed === 'true' && config.EnableCustomTermsOfService === 'true';
  var reacceptanceTime = config.CustomTermsOfServiceReAcceptancePeriod * 1000 * 60 * 60 * 24;
  var timeElapsed = new Date().getTime() - acceptedAt;
  return Boolean(user && featureEnabled && (config.CustomTermsOfServiceId !== acceptedTermsId || timeElapsed > reacceptanceTime));
});
exports.shouldShowTermsOfService = shouldShowTermsOfService;
var getUsersInVisibleDMs = (0, _reselect.createSelector)(_common.getUsers, _preferences.getDirectShowPreferences, function (users, preferences) {
  var dmUsers = [];
  preferences.forEach(function (pref) {
    if (pref.value === 'true' && users[pref.name]) {
      dmUsers.push(users[pref.name]);
    }
  });
  return dmUsers;
});
exports.getUsersInVisibleDMs = getUsersInVisibleDMs;

function makeGetProfilesForReactions() {
  return (0, _reselect.createSelector)(_common.getUsers, function (state, reactions) {
    return reactions;
  }, function (users, reactions) {
    var profiles = [];
    reactions.forEach(function (r) {
      if (users[r.user_id]) {
        profiles.push(users[r.user_id]);
      }
    });
    return profiles;
  });
}

function makeGetProfilesInChannel() {
  return (0, _reselect.createSelector)(_common.getUsers, getUserIdsInChannels, function (state, channelId) {
    return channelId;
  }, function (state, channelId, skipInactive) {
    return skipInactive;
  }, function (users, userIds, channelId) {
    var skipInactive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var userIdsInChannel = userIds[channelId];

    if (!userIdsInChannel) {
      return [];
    }

    return sortAndInjectProfiles(users, userIdsInChannel, skipInactive);
  });
}

function makeGetProfilesNotInChannel() {
  return (0, _reselect.createSelector)(_common.getUsers, getUserIdsNotInChannels, function (state, channelId) {
    return channelId;
  }, function (state, channelId, skipInactive) {
    return skipInactive;
  }, function (users, userIds, channelId) {
    var skipInactive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var userIdsInChannel = userIds[channelId];

    if (!userIdsInChannel) {
      return [];
    }

    return sortAndInjectProfiles(users, userIdsInChannel, skipInactive);
  });
}

function makeGetProfilesByIdsAndUsernames() {
  return (0, _reselect.createSelector)(_common.getUsers, getUsersByUsername, function (state, props) {
    return props.allUserIds;
  }, function (state, props) {
    return props.allUsernames;
  }, function (allProfilesById, allProfilesByUsername, allUserIds, allUsernames) {
    var userProfiles = [];

    if (allUserIds && allUserIds.length > 0) {
      var profilesById = allUserIds.filter(function (userId) {
        return allProfilesById[userId];
      }).map(function (userId) {
        return allProfilesById[userId];
      });

      if (profilesById && profilesById.length > 0) {
        userProfiles.push.apply(userProfiles, _toConsumableArray(profilesById));
      }
    }

    if (allUsernames && allUsernames.length > 0) {
      var profilesByUsername = allUsernames.filter(function (username) {
        return allProfilesByUsername[username];
      }).map(function (username) {
        return allProfilesByUsername[username];
      });

      if (profilesByUsername && profilesByUsername.length > 0) {
        userProfiles.push.apply(userProfiles, _toConsumableArray(profilesByUsername));
      }
    }

    return userProfiles;
  });
}

function makeGetDisplayName() {
  return (0, _reselect.createSelector)(function (state, userId) {
    return getUser(state, userId);
  }, _preferences.getTeammateNameDisplaySetting, function (state, _) {
    var useFallbackUsername = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return useFallbackUsername;
  }, function (user, teammateNameDisplaySetting, useFallbackUsername) {
    return (0, _user_utils.displayUsername)(user, teammateNameDisplaySetting, useFallbackUsername);
  });
}