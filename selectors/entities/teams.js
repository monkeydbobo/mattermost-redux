"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTeamId = getCurrentTeamId;
exports.getTeams = getTeams;
exports.getTeamStats = getTeamStats;
exports.getTeamMemberships = getTeamMemberships;
exports.getMembersInTeams = getMembersInTeams;
exports.getTeam = getTeam;
exports.getTeamMember = getTeamMember;
exports.makeGetBadgeCountForTeamId = makeGetBadgeCountForTeamId;
exports.getChannelDrawerBadgeCount = exports.getMyTeamsCount = exports.getMySortedTeamIds = exports.getSortedJoinableTeams = exports.getJoinableTeams = exports.getJoinableTeamIds = exports.getMembersInCurrentTeam = exports.getMyTeamMember = exports.getMyTeams = exports.getCurrentTeamStats = exports.getCurrentRelativeTeamUrl = exports.getCurrentTeamUrl = exports.isCurrentUserCurrentTeamAdmin = exports.getCurrentTeamMembership = exports.getCurrentTeam = exports.getTeamsList = exports.getTeamByName = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.array.find");

var _reselect = require("reselect");

var _constants = require("../../constants");

var _general = require("./general");

var _helpers = require("../../utils/helpers");

var _user_utils = require("../../utils/user_utils");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
function getCurrentTeamId(state) {
  return state.entities.teams.currentTeamId;
}

var getTeamByName = (0, _reselect.createSelector)(getTeams, function (state, name) {
  return name;
}, function (teams, name) {
  return Object.values(teams).find(function (team) {
    return team.name === name;
  });
});
exports.getTeamByName = getTeamByName;

function getTeams(state) {
  return state.entities.teams.teams;
}

function getTeamStats(state) {
  return state.entities.teams.stats;
}

function getTeamMemberships(state) {
  return state.entities.teams.myMembers;
}

function getMembersInTeams(state) {
  return state.entities.teams.membersInTeam;
}

var getTeamsList = (0, _reselect.createSelector)(getTeams, function (teams) {
  return Object.values(teams);
});
exports.getTeamsList = getTeamsList;
var getCurrentTeam = (0, _reselect.createSelector)(getTeams, getCurrentTeamId, function (teams, currentTeamId) {
  return teams[currentTeamId];
});
exports.getCurrentTeam = getCurrentTeam;

function getTeam(state, id) {
  var teams = getTeams(state);
  return teams[id];
}

var getCurrentTeamMembership = (0, _reselect.createSelector)(getCurrentTeamId, getTeamMemberships, function (currentTeamId, teamMemberships) {
  return teamMemberships[currentTeamId];
});
exports.getCurrentTeamMembership = getCurrentTeamMembership;
var isCurrentUserCurrentTeamAdmin = (0, _reselect.createSelector)(getCurrentTeamMembership, function (member) {
  if (member) {
    var roles = member.roles || '';
    return (0, _user_utils.isTeamAdmin)(roles);
  }

  return false;
});
exports.isCurrentUserCurrentTeamAdmin = isCurrentUserCurrentTeamAdmin;
var getCurrentTeamUrl = (0, _reselect.createSelector)(_general.getCurrentUrl, getCurrentTeam, function (state) {
  return (0, _general.getConfig)(state).SiteURL;
}, function (currentURL, currentTeam, siteURL) {
  return "".concat(currentURL || siteURL, "/").concat(currentTeam.name);
});
exports.getCurrentTeamUrl = getCurrentTeamUrl;
var getCurrentRelativeTeamUrl = (0, _reselect.createSelector)(getCurrentTeam, function (currentTeam) {
  if (!currentTeam) {
    return '/';
  }

  return "/".concat(currentTeam.name);
});
exports.getCurrentRelativeTeamUrl = getCurrentRelativeTeamUrl;
var getCurrentTeamStats = (0, _reselect.createSelector)(getCurrentTeamId, getTeamStats, function (currentTeamId, teamStats) {
  return teamStats[currentTeamId];
});
exports.getCurrentTeamStats = getCurrentTeamStats;
var getMyTeams = (0, _reselect.createSelector)(getTeams, getTeamMemberships, function (teams, members) {
  return Object.values(teams).filter(function (t) {
    return members[t.id];
  });
});
exports.getMyTeams = getMyTeams;
var getMyTeamMember = (0, _reselect.createSelector)(getTeamMemberships, function (state, teamId) {
  return teamId;
}, function (teamMemberships, teamId) {
  return teamMemberships[teamId] || {};
});
exports.getMyTeamMember = getMyTeamMember;
var getMembersInCurrentTeam = (0, _reselect.createSelector)(getCurrentTeamId, getMembersInTeams, function (currentTeamId, teamMembers) {
  return teamMembers[currentTeamId];
});
exports.getMembersInCurrentTeam = getMembersInCurrentTeam;

function getTeamMember(state, teamId, userId) {
  var members = getMembersInTeams(state)[teamId];

  if (members) {
    return members[userId];
  }

  return null;
}

var getJoinableTeamIds = (0, _helpers.createIdsSelector)(getTeams, getTeamMemberships, function (teams, myMembers) {
  return Object.keys(teams).filter(function (id) {
    var team = teams[id];
    var member = myMembers[id];
    return team.delete_at === 0 && team.allow_open_invite && !member;
  });
});
exports.getJoinableTeamIds = getJoinableTeamIds;
var getJoinableTeams = (0, _reselect.createSelector)(getTeams, getJoinableTeamIds, function (teams, joinableTeamIds) {
  return joinableTeamIds.map(function (id) {
    return teams[id];
  });
});
exports.getJoinableTeams = getJoinableTeams;
var getSortedJoinableTeams = (0, _reselect.createSelector)(getTeams, getJoinableTeamIds, function (state, locale) {
  return locale;
}, function (teams, joinableTeamIds, locale) {
  var openTeams = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = joinableTeamIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;
      openTeams[id] = teams[id];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function sortTeams(a, b) {
    if (a.display_name !== b.display_name) {
      return a.display_name.toLowerCase().localeCompare(b.display_name.toLowerCase(), locale || _constants.General.DEFAULT_LOCALE, {
        numeric: true
      });
    }

    return a.name.toLowerCase().localeCompare(b.name.toLowerCase(), locale || _constants.General.DEFAULT_LOCALE, {
      numeric: true
    });
  }

  return Object.values(openTeams).sort(sortTeams);
});
exports.getSortedJoinableTeams = getSortedJoinableTeams;
var getMySortedTeamIds = (0, _helpers.createIdsSelector)(getTeams, getTeamMemberships, function (state, locale) {
  return locale;
}, function (teams, myMembers, locale) {
  return Object.values(teams).filter(function (t) {
    return myMembers[t.id];
  }).sort(function (a, b) {
    if (a.display_name !== b.display_name) {
      return a.display_name.toLowerCase().localeCompare(b.display_name.toLowerCase(), locale, {
        numeric: true
      });
    }

    return a.name.toLowerCase().localeCompare(b.name.toLowerCase(), locale, {
      numeric: true
    });
  }).map(function (t) {
    return t.id;
  });
});
exports.getMySortedTeamIds = getMySortedTeamIds;
var getMyTeamsCount = (0, _reselect.createSelector)(getTeamMemberships, function (teams) {
  return Object.keys(teams).length;
}); // returns the badge number to show (excluding the current team)
// > 0 means is returning the mention count
// 0 means that there are no unread messages
// -1 means that there are unread messages but no mentions

exports.getMyTeamsCount = getMyTeamsCount;
var getChannelDrawerBadgeCount = (0, _reselect.createSelector)(getCurrentTeamId, getTeamMemberships, function (currentTeamId, teamMembers) {
  var mentionCount = 0;
  var messageCount = 0;
  Object.values(teamMembers).forEach(function (m) {
    if (m.team_id !== currentTeamId) {
      mentionCount += m.mention_count || 0;
      messageCount += m.msg_count || 0;
    }
  });
  var badgeCount = 0;

  if (mentionCount) {
    badgeCount = mentionCount;
  } else if (messageCount) {
    badgeCount = -1;
  }

  return badgeCount;
}); // returns the badge for a team
// > 0 means is returning the mention count
// 0 means that there are no unread messages
// -1 means that there are unread messages but no mentions

exports.getChannelDrawerBadgeCount = getChannelDrawerBadgeCount;

function makeGetBadgeCountForTeamId() {
  return (0, _reselect.createSelector)(getTeamMemberships, function (state, id) {
    return id;
  }, function (members, teamId) {
    var member = members[teamId];
    var badgeCount = 0;

    if (member) {
      if (member.mention_count) {
        badgeCount = member.mention_count;
      } else if (member.msg_count) {
        badgeCount = -1;
      }
    }

    return badgeCount;
  });
}