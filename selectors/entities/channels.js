"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllChannels = getAllChannels;
exports.getAllChannelStats = getAllChannelStats;
exports.getChannelsInTeam = getChannelsInTeam;
exports.getChannelMembersInChannels = getChannelMembersInChannels;
exports.filterChannels = filterChannels;
exports.makeGetChannel = makeGetChannel;
exports.isCurrentChannelReadOnly = isCurrentChannelReadOnly;
exports.isChannelReadOnlyById = isChannelReadOnlyById;
exports.isChannelReadOnly = isChannelReadOnly;
exports.shouldHideDefaultChannel = shouldHideDefaultChannel;
exports.getChannelByName = getChannelByName;
exports.getGroupOrDirectChannelVisibility = getGroupOrDirectChannelVisibility;
Object.defineProperty(exports, "getCurrentChannelId", {
  enumerable: true,
  get: function get() {
    return _common.getCurrentChannelId;
  }
});
Object.defineProperty(exports, "getMyChannelMemberships", {
  enumerable: true,
  get: function get() {
    return _common.getMyChannelMemberships;
  }
});
Object.defineProperty(exports, "getMyCurrentChannelMembership", {
  enumerable: true,
  get: function get() {
    return _common.getMyCurrentChannelMembership;
  }
});
exports.getSortedDirectChannelWithUnreadsIds = exports.getSortedFavoriteChannelWithUnreadsIds = exports.getSortedPrivateChannelWithUnreadsIds = exports.getSortedPublicChannelWithUnreadsIds = exports.getOrderedChannelIds = exports.getAllSortedChannelIds = exports.getAllChannelIds = exports.getChannelsWithUserProfiles = exports.filterPostIds = exports.getSortedDirectChannelIds = exports.getDirectChannelIds = exports.getDirectAndGroupChannels = exports.getDirectChannels = exports.getSortedPrivateChannelIds = exports.getPrivateChannelIds = exports.getPrivateChannels = exports.getSortedPublicChannelIds = exports.getPublicChannelIds = exports.getPublicChannels = exports.getSortedFavoriteChannelIds = exports.getFavoriteChannelIds = exports.getFavoriteChannels = exports.getSortedUnreadChannelIds = exports.getMapAndSortedUnreadChannelIds = exports.getUnreadChannels = exports.getUnreadChannelIds = exports.getChannelIdsForCurrentTeam = exports.getChannelIdsInCurrentTeam = exports.getAllDirectChannelIds = exports.canManageChannelMembers = exports.getUnreadsInCurrentTeam = exports.getUnreads = exports.getMembersInCurrentChannel = exports.getDefaultChannel = exports.getChannelsWithUnreadSection = exports.getChannelsByCategory = exports.getOtherChannels = exports.getMyChannels = exports.getGroupChannels = exports.getAllDirectChannels = exports.getChannelsNameMapInCurrentTeam = exports.getChannelsNameMapInTeam = exports.getChannelsInCurrentTeam = exports.getChannelSetInCurrentTeam = exports.isCurrentChannelDefault = exports.isCurrentChannelArchived = exports.isCurrentChannelMuted = exports.isCurrentChannelFavorite = exports.getCurrentChannelStats = exports.getMyChannelMember = exports.getCurrentChannel = exports.getChannel = exports.mapAndSortChannelIds = exports.getDirectChannelsSet = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _reselect = require("reselect");

var _constants = require("../../constants");

var _common = require("./common");

var _general = require("./general");

var _preferences = require("./preferences");

var _posts = require("./posts");

var _teams = require("./teams");

var _roles = require("./roles");

var _users = require("./users");

var _channel_utils = require("../../utils/channel_utils");

var _helpers = require("../../utils/helpers");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getAllChannels(state
/*: GlobalState*/
)
/*: IDMappedObjects<Channel>*/
{
  return state.entities.channels.channels;
}

function getAllChannelStats(state
/*: GlobalState*/
)
/*: RelationOneToOne<Channel, ChannelStats>*/
{
  return state.entities.channels.stats;
}

function getChannelsInTeam(state
/*: GlobalState*/
)
/*: RelationOneToMany<Team, Channel>*/
{
  return state.entities.channels.channelsInTeam;
}

var getDirectChannelsSet
/*: (GlobalState) => Set<string>*/
= (0, _reselect.createSelector)(getChannelsInTeam, function (channelsInTeam
/*: RelationOneToMany<Team, Channel>*/
)
/*: Set<string>*/
{
  return new Set(channelsInTeam['']) || new Set();
});
exports.getDirectChannelsSet = getDirectChannelsSet;

function getChannelMembersInChannels(state
/*: GlobalState*/
)
/*: RelationOneToOne<Channel, UserIDMappedObjects<ChannelMembership>>*/
{
  return state.entities.channels.membersInChannel;
}

function sortChannelsByRecencyOrAlpha(locale, lastPosts, sorting
/*: SortingType*/
, a, b) {
  if (sorting === 'recent') {
    return (0, _channel_utils.sortChannelsByRecency)(lastPosts, a, b);
  }

  return (0, _channel_utils.sortChannelsByDisplayName)(locale, a, b);
} // mapAndSortChannelIds sorts channels, primarily by:
//   For all sections except unreads:
//     a. All other unread channels
//     b. Muted channels
//   For unreads section:
//     a. Non-muted channels with mentions
//     b. Muted channels with mentions
//     c. Remaining unread channels
//   And then secondary by alphabetical ("alpha") or chronological ("recency") order


var mapAndSortChannelIds = function mapAndSortChannelIds(channels
/*: Array<Channel>*/
, currentUser
/*: UserProfile*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
, lastPosts
/*: RelationOneToOne<Channel, Post>*/
, sorting
/*: SortingType*/
)
/*: Array<string>*/
{
  var sortMentionsFirst
  /*: boolean*/
  = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var locale = currentUser.locale || _constants.General.DEFAULT_LOCALE;
  var mutedChannelIds = channels.filter(function (channel) {
    return (0, _channel_utils.isChannelMuted)(myMembers[channel.id]);
  }).sort(sortChannelsByRecencyOrAlpha.bind(null, locale, lastPosts, sorting)).map(function (channel) {
    return channel.id;
  });
  var hasMentionedChannelIds = [];

  if (sortMentionsFirst) {
    hasMentionedChannelIds = channels.filter(function (channel) {
      var member = myMembers[channel.id];
      return member && member.mention_count > 0 && !(0, _channel_utils.isChannelMuted)(member);
    }).sort(sortChannelsByRecencyOrAlpha.bind(null, locale, lastPosts, sorting)).map(function (channel) {
      return channel.id;
    });
  }

  var otherChannelIds = channels.filter(function (channel) {
    return !mutedChannelIds.includes(channel.id) && !hasMentionedChannelIds.includes(channel.id);
  }).sort(sortChannelsByRecencyOrAlpha.bind(null, locale, lastPosts, sorting)).map(function (channel) {
    return channel.id;
  });
  return sortMentionsFirst ? hasMentionedChannelIds.concat(mutedChannelIds, otherChannelIds) : otherChannelIds.concat(mutedChannelIds);
};

exports.mapAndSortChannelIds = mapAndSortChannelIds;

function filterChannels(unreadIds
/*: Array<string>*/
, favoriteIds
/*: Array<string>*/
, channelIds
/*: Array<string>*/
, unreadsAtTop
/*: boolean*/
, favoritesAtTop
/*: boolean*/
)
/*: Array<string>*/
{
  var channels
  /*: Array<string>*/
  = channelIds;

  if (unreadsAtTop) {
    channels = channels.filter(function (id) {
      return !unreadIds.includes(id);
    });
  }

  if (favoritesAtTop) {
    channels = channels.filter(function (id) {
      return !favoriteIds.includes(id);
    });
  }

  return channels;
}

function makeGetChannel()
/*: (GlobalState, {id: string}) => Channel*/
{
  return (0, _reselect.createSelector)(getAllChannels, function (state
  /*: GlobalState*/
  , props) {
    return props.id;
  }, function (state
  /*: GlobalState*/
  ) {
    return state.entities.users;
  }, _preferences.getTeammateNameDisplaySetting, function (allChannels, channelId, users, teammateNameDisplay) {
    var channel = allChannels[channelId];

    if (channel) {
      return (0, _channel_utils.completeDirectChannelInfo)(users, teammateNameDisplay, channel);
    }

    return channel;
  });
}

var getChannel
/*: (GlobalState, string) => Channel*/
= (0, _reselect.createSelector)(getAllChannels, function (state
/*: GlobalState*/
, id
/*: string*/
) {
  return (
    /*: string*/
    id
  );
}, function (state
/*: GlobalState*/
) {
  return (
    /*: UsersState*/
    state.entities.users
  );
}, _preferences.getTeammateNameDisplaySetting, function (allChannels
/*: IDMappedObjects<Channel>*/
, channelId
/*: string*/
, users
/*: UsersState*/
, teammateNameDisplay
/*: string*/
)
/*: Channel*/
{
  var channel = allChannels[channelId];

  if (channel) {
    return (0, _channel_utils.completeDirectChannelInfo)(users, teammateNameDisplay, channel);
  }

  return channel;
});
exports.getChannel = getChannel;
var getCurrentChannel
/*: (GlobalState) => Channel*/
= (0, _reselect.createSelector)(getAllChannels, _common.getCurrentChannelId, function (state
/*: GlobalState*/
) {
  return (
    /*: UsersState*/
    state.entities.users
  );
}, _preferences.getTeammateNameDisplaySetting, function (allChannels
/*: IDMappedObjects<Channel>*/
, currentChannelId
/*: string*/
, users
/*: UsersState*/
, teammateNameDisplay
/*: string*/
)
/*: Channel*/
{
  var channel = allChannels[currentChannelId];

  if (channel) {
    return (0, _channel_utils.completeDirectChannelInfo)(users, teammateNameDisplay, channel);
  }

  return channel;
});
exports.getCurrentChannel = getCurrentChannel;
var getMyChannelMember
/*: (GlobalState, string) => ?ChannelMembership*/
= (0, _reselect.createSelector)(_common.getMyChannelMemberships, function (state
/*: GlobalState*/
, channelId
/*: string*/
) {
  return (
    /*: string*/
    channelId
  );
}, function (channelMemberships
/*: RelationOneToOne<Channel, ChannelMembership>*/
, channelId
/*: string*/
)
/*: ?ChannelMembership*/
{
  return channelMemberships[channelId] || null;
});
exports.getMyChannelMember = getMyChannelMember;
var getCurrentChannelStats
/*: (GlobalState) => ChannelStats*/
= (0, _reselect.createSelector)(getAllChannelStats, _common.getCurrentChannelId, function (allChannelStats
/*: RelationOneToOne<Channel, ChannelStats>*/
, currentChannelId
/*: string*/
)
/*: ChannelStats*/
{
  return allChannelStats[currentChannelId];
});
exports.getCurrentChannelStats = getCurrentChannelStats;
var isCurrentChannelFavorite
/*: (GlobalState) => boolean*/
= (0, _reselect.createSelector)(_preferences.getMyPreferences, _common.getCurrentChannelId, function (preferences
/*: {[string]: PreferenceType}*/
, channelId
/*: string*/
) {
  return (
    /*: boolean*/
    (0, _channel_utils.isFavoriteChannel)(preferences, channelId)
  );
});
exports.isCurrentChannelFavorite = isCurrentChannelFavorite;
var isCurrentChannelMuted
/*: (GlobalState) => boolean*/
= (0, _reselect.createSelector)(_common.getMyCurrentChannelMembership, function (membership
/*: ?ChannelMembership*/
)
/*: boolean*/
{
  if (!membership) {
    return false;
  }

  return (0, _channel_utils.isChannelMuted)(membership);
});
exports.isCurrentChannelMuted = isCurrentChannelMuted;
var isCurrentChannelArchived
/*: (GlobalState) => boolean*/
= (0, _reselect.createSelector)(getCurrentChannel, function (channel
/*: Channel*/
) {
  return (
    /*: boolean*/
    channel.delete_at !== 0
  );
});
exports.isCurrentChannelArchived = isCurrentChannelArchived;
var isCurrentChannelDefault
/*: (GlobalState) => boolean*/
= (0, _reselect.createSelector)(getCurrentChannel, function (channel
/*: Channel*/
) {
  return (
    /*: boolean*/
    (0, _channel_utils.isDefault)(channel)
  );
});
exports.isCurrentChannelDefault = isCurrentChannelDefault;

function isCurrentChannelReadOnly(state
/*: GlobalState*/
)
/*: boolean*/
{
  return isChannelReadOnly(state, getCurrentChannel(state));
}

function isChannelReadOnlyById(state
/*: GlobalState*/
, channelId
/*: string*/
)
/*: boolean*/
{
  return isChannelReadOnly(state, getChannel(state, channelId));
}

function isChannelReadOnly(state
/*: GlobalState*/
, channel
/*: Channel*/
)
/*: boolean*/
{
  return channel && channel.name === _constants.General.DEFAULT_CHANNEL && !(0, _users.isCurrentUserSystemAdmin)(state) && (0, _general.getConfig)(state).ExperimentalTownSquareIsReadOnly === 'true';
}

function shouldHideDefaultChannel(state
/*: GlobalState*/
, channel
/*: Channel*/
)
/*: boolean*/
{
  return channel && channel.name === _constants.General.DEFAULT_CHANNEL && !(0, _users.isCurrentUserSystemAdmin)(state) && (0, _general.getConfig)(state).ExperimentalHideTownSquareinLHS === 'true';
}

function getChannelByName(state
/*: GlobalState*/
, channelName
/*: string*/
)
/*: ?Channel*/
{
  return (0, _channel_utils.getChannelByName)(getAllChannels(state), channelName);
}

var getChannelSetInCurrentTeam
/*: (GlobalState) => Array<string>*/
= (0, _reselect.createSelector)(_teams.getCurrentTeamId, getChannelsInTeam, function (currentTeamId
/*: string*/
, channelsInTeam
/*: RelationOneToMany<Team, Channel>*/
)
/*: Array<string>*/
{
  return channelsInTeam[currentTeamId] || [];
});
exports.getChannelSetInCurrentTeam = getChannelSetInCurrentTeam;

function sortAndInjectChannels(channels
/*: IDMappedObjects<Channel>*/
, channelSet
/*: Array<string>*/
, locale
/*: string*/
)
/*: Array<Channel>*/
{
  var currentChannels = [];

  if (typeof channelSet === 'undefined') {
    return currentChannels;
  }

  channelSet.forEach(function (c) {
    currentChannels.push(channels[c]);
  });
  return currentChannels.sort(_channel_utils.sortChannelsByDisplayName.bind(null, locale));
}

var getChannelsInCurrentTeam
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(getAllChannels, getChannelSetInCurrentTeam, _common.getCurrentUser, function (channels
/*: IDMappedObjects<Channel>*/
, currentTeamChannelSet
/*: Array<string>*/
, currentUser
/*: UserProfile*/
)
/*: Array<Channel>*/
{
  var locale = _constants.General.DEFAULT_LOCALE;

  if (currentUser && currentUser.locale) {
    locale = currentUser.locale;
  }

  return sortAndInjectChannels(channels, currentTeamChannelSet, locale);
});
exports.getChannelsInCurrentTeam = getChannelsInCurrentTeam;
var getChannelsNameMapInTeam
/*: (GlobalState, string) => NameMappedObjects<Channel>*/
= (0, _reselect.createSelector)(getAllChannels, getChannelsInTeam, function (state
/*: GlobalState*/
, teamId
/*: string*/
) {
  return (
    /*: string*/
    teamId
  );
}, function (channels
/*: IDMappedObjects<Channel>*/
, channelsInTeams
/*: RelationOneToMany<Team, Channel>*/
, teamId
/*: string*/
)
/*: NameMappedObjects<Channel>*/
{
  var channelsInTeam = channelsInTeams[teamId] || [];
  var channelMap = {};
  channelsInTeam.forEach(function (id) {
    var channel = channels[id];
    channelMap[channel.name] = channel;
  });
  return channelMap;
});
exports.getChannelsNameMapInTeam = getChannelsNameMapInTeam;
var getChannelsNameMapInCurrentTeam
/*: (GlobalState) => NameMappedObjects<Channel>*/
= (0, _reselect.createSelector)(getAllChannels, getChannelSetInCurrentTeam, function (channels
/*: IDMappedObjects<Channel>*/
, currentTeamChannelSet
/*: Array<string>*/
)
/*: NameMappedObjects<Channel>*/
{
  var channelMap = {};
  currentTeamChannelSet.forEach(function (id) {
    var channel = channels[id];
    channelMap[channel.name] = channel;
  });
  return channelMap;
}); // Returns both DMs and GMs

exports.getChannelsNameMapInCurrentTeam = getChannelsNameMapInCurrentTeam;
var getAllDirectChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(getAllChannels, getDirectChannelsSet, function (state
/*: GlobalState*/
) {
  return (
    /*: UsersState*/
    state.entities.users
  );
}, _preferences.getTeammateNameDisplaySetting, function (channels
/*: IDMappedObjects<Channel>*/
, channelSet
/*: Set<string>*/
, users
/*: UsersState*/
, teammateNameDisplay
/*: string*/
)
/*: Array<Channel>*/
{
  var dmChannels = [];
  channelSet.forEach(function (c) {
    dmChannels.push((0, _channel_utils.completeDirectChannelInfo)(users, teammateNameDisplay, channels[c]));
  });
  return dmChannels;
}); // Returns only GMs

exports.getAllDirectChannels = getAllDirectChannels;
var getGroupChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(getAllChannels, getDirectChannelsSet, function (state
/*: GlobalState*/
) {
  return (
    /*: UsersState*/
    state.entities.users
  );
}, _preferences.getTeammateNameDisplaySetting, function (channels
/*: IDMappedObjects<Channel>*/
, channelSet
/*: Set<string>*/
, users
/*: UsersState*/
, teammateNameDisplay
/*: string*/
)
/*: Array<Channel>*/
{
  var gmChannels = [];
  channelSet.forEach(function (id) {
    var channel = channels[id];

    if (channel.type === _constants.General.GM_CHANNEL) {
      gmChannels.push((0, _channel_utils.completeDirectChannelInfo)(users, teammateNameDisplay, channel));
    }
  });
  return gmChannels;
});
exports.getGroupChannels = getGroupChannels;
var getMyChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(getChannelsInCurrentTeam, getAllDirectChannels, _common.getMyChannelMemberships, function (channels
/*: Array<Channel>*/
, directChannels
/*: Array<Channel>*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
)
/*: Array<Channel>*/
{
  return _toConsumableArray(channels).concat(_toConsumableArray(directChannels)).filter(function (c) {
    return myMembers.hasOwnProperty(c.id);
  });
});
exports.getMyChannels = getMyChannels;
var getOtherChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(getChannelsInCurrentTeam, _common.getMyChannelMemberships, function (channels
/*: Array<Channel>*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
)
/*: Array<Channel>*/
{
  return channels.filter(function (c) {
    return !myMembers.hasOwnProperty(c.id) && c.type === _constants.General.OPEN_CHANNEL;
  });
});
exports.getOtherChannels = getOtherChannels;
var getChannelsByCategory
/*: (GlobalState) => {favoriteChannels: Array<Channel>, publicChannels: Array<Channel>, privateChannels: Array<Channel>, directAndGroupChannels: Array<Channel>}*/
= (0, _reselect.createSelector)(_common.getCurrentChannelId, getMyChannels, _common.getMyChannelMemberships, _general.getConfig, _preferences.getMyPreferences, _preferences.getTeammateNameDisplaySetting, function (state
/*: GlobalState*/
) {
  return (
    /*: UsersState*/
    state.entities.users
  );
}, _posts.getLastPostPerChannel, function (currentChannelId
/*: string*/
, channels
/*: Array<Channel>*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
, config
/*: Object*/
, myPreferences
/*: {[string]: PreferenceType}*/
, teammateNameDisplay
/*: string*/
, usersState
/*: UsersState*/
, lastPosts
/*: RelationOneToOne<Channel, Post>*/
) {
  var allChannels = channels.map(function (c) {
    var channel = _objectSpread({}, c);

    channel.isCurrent = c.id === currentChannelId;
    return channel;
  });
  return (0, _channel_utils.buildDisplayableChannelList)(usersState, allChannels, myMembers, config, myPreferences, teammateNameDisplay, lastPosts);
});
exports.getChannelsByCategory = getChannelsByCategory;
var getChannelsWithUnreadSection
/*: (GlobalState) => {unreadChannels: Array<Channel>, favoriteChannels: Array<Channel>, publicChannels: Array<Channel>, privateChannels: Array<Channel>, directAndGroupChannels: Array<Channel>}*/
= (0, _reselect.createSelector)(_common.getCurrentChannelId, getMyChannels, _common.getMyChannelMemberships, _general.getConfig, _preferences.getMyPreferences, _preferences.getTeammateNameDisplaySetting, function (state
/*: GlobalState*/
) {
  return (
    /*: UsersState*/
    state.entities.users
  );
}, _posts.getLastPostPerChannel, function (currentChannelId
/*: string*/
, channels
/*: Array<Channel>*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
, config
/*: Object*/
, myPreferences
/*: {[string]: PreferenceType}*/
, teammateNameDisplay
/*: string*/
, usersState
/*: UsersState*/
, lastPosts
/*: RelationOneToOne<Channel, Post>*/
) {
  var allChannels = channels.map(function (c) {
    var channel = _objectSpread({}, c);

    channel.isCurrent = c.id === currentChannelId;
    return channel;
  });
  return (0, _channel_utils.buildDisplayableChannelListWithUnreadSection)(usersState, allChannels, myMembers, config, myPreferences, teammateNameDisplay, lastPosts);
});
exports.getChannelsWithUnreadSection = getChannelsWithUnreadSection;
var getDefaultChannel
/*: (GlobalState) => ?Channel*/
= (0, _reselect.createSelector)(getAllChannels, _teams.getCurrentTeamId, function (channels
/*: IDMappedObjects<Channel>*/
, teamId
/*: string*/
)
/*: ?Channel*/
{
  return Object.keys(channels).map(function (key) {
    return channels[key];
  }).find(function (c) {
    return c && c.team_id === teamId && c.name === _constants.General.DEFAULT_CHANNEL;
  });
});
exports.getDefaultChannel = getDefaultChannel;
var getMembersInCurrentChannel
/*: (GlobalState) => UserIDMappedObjects<ChannelMembership>*/
= (0, _reselect.createSelector)(_common.getCurrentChannelId, getChannelMembersInChannels, function (currentChannelId
/*: string*/
, members
/*: RelationOneToOne<Channel, UserIDMappedObjects<ChannelMembership>>*/
)
/*: UserIDMappedObjects<ChannelMembership>*/
{
  return members[currentChannelId];
});
exports.getMembersInCurrentChannel = getMembersInCurrentChannel;
var getUnreads
/*: (GlobalState) => {messageCount: number, mentionCount: number}*/
= (0, _reselect.createSelector)(getAllChannels, _common.getMyChannelMemberships, _common.getUsers, _users.getCurrentUserId, _teams.getCurrentTeamId, _teams.getMyTeams, _teams.getTeamMemberships, function (channels
/*: IDMappedObjects<Channel>*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
, users
/*: IDMappedObjects<UserProfile>*/
, currentUserId
/*: string*/
, currentTeamId
/*: string*/
, myTeams
/*: Array<Team>*/
, myTeamMemberships
/*: RelationOneToOne<Team, TeamMembership>*/
)
/*: {messageCount: number, mentionCount: number}*/
{
  var messageCountForCurrentTeam = 0; // Includes message count from channels of current team plus all GM'S and all DM's across teams

  var mentionCountForCurrentTeam = 0; // Includes mention count from channels of current team plus all GM'S and all DM's across teams

  Object.keys(myMembers).forEach(function (channelId) {
    var channel = channels[channelId];
    var m = myMembers[channelId];

    if (channel && m && (channel.team_id === currentTeamId || channel.type === _constants.General.DM_CHANNEL || channel.type === _constants.General.GM_CHANNEL)) {
      var otherUserId = '';

      if (channel.type === 'D') {
        otherUserId = (0, _channel_utils.getUserIdFromChannelName)(currentUserId, channel.name);

        if (users[otherUserId] && users[otherUserId].delete_at === 0) {
          mentionCountForCurrentTeam += channel.total_msg_count - m.msg_count;
        }
      } else if (m.mention_count > 0 && channel.delete_at === 0) {
        mentionCountForCurrentTeam += m.mention_count;
      }

      if (m.notify_props && m.notify_props.mark_unread !== 'mention' && channel.total_msg_count - m.msg_count > 0) {
        if (channel.type === 'D') {
          if (users[otherUserId] && users[otherUserId].delete_at === 0) {
            messageCountForCurrentTeam += 1;
          }
        } else if (channel.delete_at === 0) {
          messageCountForCurrentTeam += 1;
        }
      }
    }
  }); // Includes mention count and message count from teams other than the current team
  // This count does not include GM's and DM's

  var otherTeamsUnreadCountForChannels = myTeams.reduce(function (acc, team) {
    if (currentTeamId !== team.id) {
      var member = myTeamMemberships[team.id];
      acc.messageCount += member.msg_count;
      acc.mentionCount += member.mention_count;
    }

    return acc;
  }, {
    messageCount: 0,
    mentionCount: 0
  });
  var totalTeamsUnreadCount = {
    messageCount: messageCountForCurrentTeam + otherTeamsUnreadCountForChannels.messageCount,
    mentionCount: mentionCountForCurrentTeam + otherTeamsUnreadCountForChannels.mentionCount
  };
  return totalTeamsUnreadCount;
});
exports.getUnreads = getUnreads;
var getUnreadsInCurrentTeam
/*: (GlobalState) => {messageCount: number, mentionCount: number}*/
= (0, _reselect.createSelector)(_common.getCurrentChannelId, getMyChannels, _common.getMyChannelMemberships, _common.getUsers, _users.getCurrentUserId, function (currentChannelId
/*: string*/
, channels
/*: Array<Channel>*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
, users
/*: IDMappedObjects<UserProfile>*/
, currentUserId
/*: string*/
)
/*: {messageCount: number, mentionCount: number}*/
{
  var messageCount = 0;
  var mentionCount = 0;
  channels.forEach(function (channel) {
    var m = myMembers[channel.id];

    if (m && channel.id !== currentChannelId) {
      var otherUserId = '';

      if (channel.type === 'D') {
        otherUserId = (0, _channel_utils.getUserIdFromChannelName)(currentUserId, channel.name);

        if (users[otherUserId] && users[otherUserId].delete_at === 0) {
          mentionCount += channel.total_msg_count - m.msg_count;
        }
      } else if (m.mention_count > 0 && channel.delete_at === 0) {
        mentionCount += m.mention_count;
      }

      if (m.notify_props && m.notify_props.mark_unread !== 'mention' && channel.total_msg_count - m.msg_count > 0) {
        if (channel.type === 'D') {
          if (users[otherUserId] && users[otherUserId].delete_at === 0) {
            messageCount += 1;
          }
        } else if (channel.delete_at === 0) {
          messageCount += 1;
        }
      }
    }
  });
  return {
    messageCount: messageCount,
    mentionCount: mentionCount
  };
});
exports.getUnreadsInCurrentTeam = getUnreadsInCurrentTeam;
var canManageChannelMembers
/*: (GlobalState) => boolean*/
= (0, _reselect.createSelector)(getCurrentChannel, _common.getCurrentUser, _teams.getCurrentTeamMembership, _common.getMyCurrentChannelMembership, _general.getConfig, _general.getLicense, _general.hasNewPermissions, function (state
/*: GlobalState*/
) {
  return (
    /*: boolean*/
    (0, _roles.haveICurrentChannelPermission)(state, {
      permission: _constants.Permissions.MANAGE_PRIVATE_CHANNEL_MEMBERS
    })
  );
}, function (state
/*: GlobalState*/
) {
  return (
    /*: boolean*/
    (0, _roles.haveICurrentChannelPermission)(state, {
      permission: _constants.Permissions.MANAGE_PUBLIC_CHANNEL_MEMBERS
    })
  );
}, function (channel
/*: Channel*/
, user
/*: UserProfile*/
, teamMembership
/*: TeamMembership*/
, channelMembership
/*: ?ChannelMembership*/
, config
/*: Object*/
, license
/*: Object*/
, newPermissions
/*: boolean*/
, managePrivateMembers
/*: boolean*/
, managePublicMembers
/*: boolean*/
)
/*: boolean*/
{
  if (!channel) {
    return false;
  }

  if (channel.delete_at !== 0) {
    return false;
  }

  if (channel.type === _constants.General.DM_CHANNEL || channel.type === _constants.General.GM_CHANNEL || channel.name === _constants.General.DEFAULT_CHANNEL) {
    return false;
  }

  if (newPermissions) {
    if (channel.type === _constants.General.OPEN_CHANNEL) {
      return managePublicMembers;
    } else if (channel.type === _constants.General.PRIVATE_CHANNEL) {
      return managePrivateMembers;
    }

    return true;
  }

  if (!channelMembership) {
    return false;
  }

  return (0, _channel_utils.canManageMembersOldPermissions)(channel, user, teamMembership, channelMembership, config, license);
});
exports.canManageChannelMembers = canManageChannelMembers;
var getAllDirectChannelIds
/*: (GlobalState) => Array<string>*/
= (0, _helpers.createIdsSelector)(getDirectChannelsSet, function (directIds
/*: Set<string>*/
)
/*: Array<string>*/
{
  return Array.from(directIds);
});
exports.getAllDirectChannelIds = getAllDirectChannelIds;
var getChannelIdsInCurrentTeam
/*: (GlobalState) => Array<string>*/
= (0, _helpers.createIdsSelector)(_teams.getCurrentTeamId, getChannelsInTeam, function (currentTeamId
/*: string*/
, channelsInTeam
/*: RelationOneToMany<Team, Channel>*/
)
/*: Array<string>*/
{
  return Array.from(channelsInTeam[currentTeamId] || []);
});
exports.getChannelIdsInCurrentTeam = getChannelIdsInCurrentTeam;
var getChannelIdsForCurrentTeam
/*: (GlobalState) => Array<string>*/
= (0, _helpers.createIdsSelector)(getChannelIdsInCurrentTeam, getAllDirectChannelIds, function (channels, direct) {
  return _toConsumableArray(channels).concat(_toConsumableArray(direct));
});
exports.getChannelIdsForCurrentTeam = getChannelIdsForCurrentTeam;
var getUnreadChannelIds
/*: (GlobalState, ?Channel) => Array<string>*/
= (0, _helpers.createIdsSelector)(getAllChannels, _common.getMyChannelMemberships, getChannelIdsForCurrentTeam, function (state
/*: GlobalState*/
) {
  var lastUnreadChannel
  /*: ?Channel*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (
    /*: ?Channel*/
    lastUnreadChannel
  );
}, function (channels
/*: IDMappedObjects<Channel>*/
, members
/*: RelationOneToOne<Channel, ChannelMembership>*/
, teamChannelIds
/*: Array<string>*/
, lastUnreadChannel
/*: ?Channel*/
)
/*: Array<string>*/
{
  var unreadIds = teamChannelIds.filter(function (id) {
    var c = channels[id];
    var m = members[id];

    if (c && m) {
      var chHasUnread = c.total_msg_count - m.msg_count > 0;
      var chHasMention = m.mention_count > 0;

      if (m.notify_props && m.notify_props.mark_unread !== 'mention' && chHasUnread || chHasMention) {
        return true;
      }
    }

    return false;
  });

  if (lastUnreadChannel && !unreadIds.includes(lastUnreadChannel.id)) {
    unreadIds.push(lastUnreadChannel.id);
  }

  return unreadIds;
});
exports.getUnreadChannelIds = getUnreadChannelIds;
var getUnreadChannels
/*: (GlobalState, ?Channel) => Array<Channel>*/
= (0, _helpers.createIdsSelector)(_common.getCurrentUser, _common.getUsers, getAllChannels, getUnreadChannelIds, _preferences.getTeammateNameDisplaySetting, function (currentUser, profiles, channels, unreadIds, settings) {
  // If we receive an unread for a channel and then a mention the channel
  // won't be sorted correctly until we receive a message in another channel
  if (!currentUser) {
    return [];
  }

  var allUnreadChannels = unreadIds.filter(function (id) {
    return channels[id] && channels[id].delete_at === 0;
  }).map(function (id) {
    var c = channels[id];

    if (c.type === _constants.General.DM_CHANNEL || c.type === _constants.General.GM_CHANNEL) {
      return (0, _channel_utils.completeDirectChannelDisplayName)(currentUser.id, profiles, settings, c);
    }

    return c;
  });
  return allUnreadChannels;
});
exports.getUnreadChannels = getUnreadChannels;
var getMapAndSortedUnreadChannelIds
/*: (GlobalState, Channel, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannels, _common.getCurrentUser, _common.getMyChannelMemberships, _posts.getLastPostPerChannel, function (state, lastUnreadChannel) {
  var sorting
  /*: SortingType*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'alpha';
  return sorting;
}, function (channels, currentUser, myMembers, lastPosts, sorting
/*: SortingType*/
) {
  return mapAndSortChannelIds(channels, currentUser, myMembers, lastPosts, sorting, true);
});
exports.getMapAndSortedUnreadChannelIds = getMapAndSortedUnreadChannelIds;
var getSortedUnreadChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return getMapAndSortedUnreadChannelIds(state, lastUnreadChannel, sorting);
}, function (unreadChannelIds, mappedAndSortedUnreadChannelIds) {
  return mappedAndSortedUnreadChannelIds;
}); // Favorites

exports.getSortedUnreadChannelIds = getSortedUnreadChannelIds;
var getFavoriteChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _helpers.createIdsSelector)(_common.getCurrentUser, _common.getUsers, getAllChannels, _common.getMyChannelMemberships, _preferences.getFavoritesPreferences, getChannelIdsForCurrentTeam, _preferences.getTeammateNameDisplaySetting, _general.getConfig, _preferences.getMyPreferences, _common.getCurrentChannelId, function (currentUser
/*: UserProfile*/
, profiles
/*: IDMappedObjects<UserProfile>*/
, channels
/*: IDMappedObjects<Channel>*/
, myMembers
/*: RelationOneToOne<Channel, ChannelMembership>*/
, favoriteIds
/*: Array<string>*/
, teamChannelIds
/*: Array<string>*/
, settings
/*: string*/
, config
/*: Object*/
, prefs
/*: {[string]: PreferenceType}*/
, currentChannelId
/*: string*/
)
/*: Array<Channel>*/
{
  if (!currentUser) {
    return [];
  }

  var favoriteChannel = favoriteIds.filter(function (id) {
    if (!myMembers[id] || !channels[id]) {
      return false;
    }

    var channel = channels[id];
    var otherUserId = (0, _channel_utils.getUserIdFromChannelName)(currentUser.id, channel.name);

    if (channel.delete_at !== 0 && channel.id !== currentChannelId) {
      return false;
    } // Deleted users from CLI will not have a profiles entry


    if (channel.type === _constants.General.DM_CHANNEL && !profiles[otherUserId]) {
      return false;
    }

    if (channel.type === _constants.General.DM_CHANNEL && !(0, _channel_utils.isDirectChannelVisible)(profiles[otherUserId] || otherUserId, config, prefs, channel, null, false, currentChannelId)) {
      return false;
    } else if (channel.type === _constants.General.GM_CHANNEL && !(0, _channel_utils.isGroupChannelVisible)(config, prefs, channel)) {
      return false;
    }

    return teamChannelIds.includes(id);
  }).map(function (id) {
    var c = channels[id];

    if (c.type === _constants.General.DM_CHANNEL || c.type === _constants.General.GM_CHANNEL) {
      return (0, _channel_utils.completeDirectChannelDisplayName)(currentUser.id, profiles, settings, c);
    }

    return c;
  });
  return favoriteChannel;
});
exports.getFavoriteChannels = getFavoriteChannels;
var getFavoriteChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getFavoriteChannels, _common.getCurrentUser, _common.getMyChannelMemberships, _posts.getLastPostPerChannel, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return sorting;
}, mapAndSortChannelIds);
exports.getFavoriteChannelIds = getFavoriteChannelIds;
var getSortedFavoriteChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting
/*: SortingType*/
) {
  return getFavoriteChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting);
}, function (state, lastUnreadChannel) {
  var unreadsAtTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return unreadsAtTop;
}, function (unreadChannelIds, favoritePreferences, favoriteChannelIds, unreadsAtTop) {
  return filterChannels(unreadChannelIds, favoritePreferences, favoriteChannelIds, unreadsAtTop, false);
}); // Public Channels

exports.getSortedFavoriteChannelIds = getSortedFavoriteChannelIds;
var getPublicChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(_common.getCurrentUser, getAllChannels, _common.getMyChannelMemberships, getChannelIdsForCurrentTeam, function (currentUser, channels, myMembers, teamChannelIds) {
  if (!currentUser) {
    return [];
  }

  var publicChannels = teamChannelIds.filter(function (id) {
    if (!myMembers[id]) {
      return false;
    }

    var channel = channels[id];
    return teamChannelIds.includes(id) && channel.type === _constants.General.OPEN_CHANNEL;
  }).map(function (id) {
    return channels[id];
  });
  return publicChannels;
});
exports.getPublicChannels = getPublicChannels;
var getPublicChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getPublicChannels, _common.getCurrentUser, _common.getMyChannelMemberships, _posts.getLastPostPerChannel, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return sorting;
}, mapAndSortChannelIds);
exports.getPublicChannelIds = getPublicChannelIds;
var getSortedPublicChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return getPublicChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting);
}, function (state, lastUnreadChannel) {
  var unreadsAtTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return unreadsAtTop;
}, function (state, lastUnreadChannel, unreadsAtTop) {
  var favoritesAtTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return favoritesAtTop;
}, filterChannels); // Private Channels

exports.getSortedPublicChannelIds = getSortedPublicChannelIds;
var getPrivateChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(_common.getCurrentUser, getAllChannels, _common.getMyChannelMemberships, getChannelIdsForCurrentTeam, function (currentUser, channels, myMembers, teamChannelIds) {
  if (!currentUser) {
    return [];
  }

  var privateChannels = teamChannelIds.filter(function (id) {
    if (!myMembers[id]) {
      return false;
    }

    var channel = channels[id];
    return teamChannelIds.includes(id) && channel.type === _constants.General.PRIVATE_CHANNEL;
  }).map(function (id) {
    return channels[id];
  });
  return privateChannels;
});
exports.getPrivateChannels = getPrivateChannels;
var getPrivateChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getPrivateChannels, _common.getCurrentUser, _common.getMyChannelMemberships, _posts.getLastPostPerChannel, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return sorting;
}, mapAndSortChannelIds);
exports.getPrivateChannelIds = getPrivateChannelIds;
var getSortedPrivateChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return getPrivateChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting);
}, function (state, lastUnreadChannel) {
  var unreadsAtTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return unreadsAtTop;
}, function (state, lastUnreadChannel, unreadsAtTop) {
  var favoritesAtTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return favoritesAtTop;
}, filterChannels); // Direct Messages

exports.getSortedPrivateChannelIds = getSortedPrivateChannelIds;
var getDirectChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(_common.getCurrentUser, _common.getUsers, getAllChannels, _preferences.getVisibleTeammate, _preferences.getVisibleGroupIds, _preferences.getTeammateNameDisplaySetting, _general.getConfig, _preferences.getMyPreferences, _posts.getLastPostPerChannel, _common.getCurrentChannelId, function (currentUser
/*: UserProfile*/
, profiles
/*: IDMappedObjects<UserProfile>*/
, channels
/*: IDMappedObjects<Channel>*/
, teammates
/*: Array<string>*/
, groupIds
/*: Array<string>*/
, settings
/*: Object*/
, config
/*: Object*/
, preferences
/*: {[string]: PreferenceType}*/
, lastPosts
/*: RelationOneToOne<Channel, Post>*/
, currentChannelId
/*: string*/
)
/*: Array<Channel>*/
{
  if (!currentUser) {
    return [];
  }

  var channelValues = Object.keys(channels).map(function (key) {
    return channels[key];
  });
  var directChannelsIds = [];
  teammates.reduce(function (result, teammateId) {
    var name = (0, _channel_utils.getDirectChannelName)(currentUser.id, teammateId);
    var channel = channelValues.find(function (c
    /*: Channel*/
    ) {
      return c.name === name;
    }); //eslint-disable-line max-nested-callbacks

    if (channel) {
      var lastPost = lastPosts[channel.id];
      var otherUser = profiles[(0, _channel_utils.getUserIdFromChannelName)(currentUser.id, channel.name)];

      if (!(0, _channel_utils.isAutoClosed)(config, preferences, channel, lastPost ? lastPost.create_at : 0, otherUser ? otherUser.delete_at : 0, currentChannelId)) {
        result.push(channel.id);
      }
    }

    return result;
  }, directChannelsIds);
  var directChannels = groupIds.filter(function (id) {
    var channel = channels[id];

    if (channel) {
      var lastPost = lastPosts[channel.id];
      return !(0, _channel_utils.isAutoClosed)(config, preferences, channels[id], lastPost ? lastPost.create_at : 0, 0, currentChannelId);
    }

    return false;
  }).concat(directChannelsIds).map(function (id) {
    var channel = channels[id];
    return (0, _channel_utils.completeDirectChannelDisplayName)(currentUser.id, profiles, settings, channel);
  });
  return directChannels;
}); // getDirectAndGroupChannels returns all direct and group channels, even if they have been manually
// or automatically closed.
//
// This is similar to the getDirectChannels above (which actually also returns group channels,
// but suppresses manually closed group channels but not manually closed direct channels.) This
// method does away with all the suppression, since the webapp client downstream uses this for
// the channel switcher and puts such suppressed channels in a separate category.

exports.getDirectChannels = getDirectChannels;
var getDirectAndGroupChannels
/*: (GlobalState) => Array<Channel>*/
= (0, _reselect.createSelector)(_common.getCurrentUser, _common.getUsers, getAllChannels, _preferences.getTeammateNameDisplaySetting, function (currentUser
/*: UserProfile*/
, profiles
/*: IDMappedObjects<UserProfile>*/
, channels
/*: IDMappedObjects<Channel>*/
, settings)
/*: Array<Channel>*/
{
  if (!currentUser) {
    return [];
  }

  return Object.keys(channels).map(function (key) {
    return channels[key];
  }).filter(function (channel
  /*: Channel*/
  ) {
    return (
      /*: boolean*/
      Boolean(channel)
    );
  }).filter(function (channel
  /*: Channel*/
  ) {
    return (
      /*: boolean*/
      channel.type === _constants.General.DM_CHANNEL || channel.type === _constants.General.GM_CHANNEL
    );
  }).map(function (channel
  /*: Channel*/
  ) {
    return (
      /*: Channel*/
      (0, _channel_utils.completeDirectChannelDisplayName)(currentUser.id, profiles, settings, channel)
    );
  });
});
exports.getDirectAndGroupChannels = getDirectAndGroupChannels;
var getDirectChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getDirectChannels, _common.getCurrentUser, _common.getMyChannelMemberships, _posts.getLastPostPerChannel, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return sorting;
}, mapAndSortChannelIds);
exports.getDirectChannelIds = getDirectChannelIds;
var getSortedDirectChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return getDirectChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting);
}, function (state, lastUnreadChannel) {
  var unreadsAtTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return unreadsAtTop;
}, function (state, lastUnreadChannel, unreadsAtTop) {
  var favoritesAtTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return favoritesAtTop;
}, filterChannels);
exports.getSortedDirectChannelIds = getSortedDirectChannelIds;

function getGroupOrDirectChannelVisibility(state
/*: GlobalState*/
, channelId
/*: string*/
)
/*: boolean*/
{
  return (0, _channel_utils.isGroupOrDirectChannelVisible)(getChannel(state, channelId), (0, _common.getMyChannelMemberships)(state), (0, _general.getConfig)(state), (0, _preferences.getMyPreferences)(state), (0, _common.getCurrentUser)(state).id, (0, _common.getUsers)(state), (0, _posts.getLastPostPerChannel)(state));
} // Filters post IDs by the given condition.
// The condition function receives as parameters the associated channel object and the post object.


var filterPostIds = function filterPostIds(condition
/*: (Channel, Post) => boolean*/
) {
  if (typeof condition !== 'function') {
    throw new TypeError("".concat(condition, " is not a function"));
  }

  return ((0, _reselect.createSelector)(getAllChannels, _posts.getAllPosts, function (state
  /*: GlobalState*/
  , postIds
  /*: Array<string>*/
  ) {
    return (
      /*: Array<string>*/
      postIds
    );
  }, function (channels
  /*: IDMappedObjects<Channel>*/
  , posts
  /*: IDMappedObjects<Post>*/
  , postIds
  /*: Array<string>*/
  )
  /*: Array<string>*/
  {
    return postIds.filter(function (postId) {
      var post = posts[postId];
      var channel;

      if (post) {
        channel = channels[post.channel_id];
      }

      return post && channel && condition(channel, post);
    });
  })
  /*: (GlobalState, Array<string>) => Array<string>*/
  );
};

exports.filterPostIds = filterPostIds;

var getProfiles = function getProfiles(currentUserId
/*: string*/
, usersIdsInChannel
/*: Array<string>*/
, users
/*: IDMappedObjects<UserProfile>*/
)
/*: Array<UserProfile>*/
{
  var profiles = [];
  usersIdsInChannel.forEach(function (userId) {
    if (userId !== currentUserId) {
      profiles.push(users[userId]);
    }
  });
  return profiles;
};

var getChannelsWithUserProfiles
/*: (GlobalState) => Array<{|...Channel, profiles: Array<UserProfile>|}>*/
= (0, _reselect.createSelector)(_users.getUserIdsInChannels, _common.getUsers, getGroupChannels, _users.getCurrentUserId, function (channelUserMap
/*: RelationOneToMany<Channel, UserProfile>*/
, users
/*: IDMappedObjects<UserProfile>*/
, channels
/*: Array<Channel>*/
, currentUserId
/*: string*/
) {
  return channels.map(function (channel
  /*: Channel*/
  )
  /*: {|...Channel, profiles: Array<UserProfile>|}*/
  {
    var profiles = getProfiles(currentUserId, channelUserMap[channel.id] || [], users);
    return _objectSpread({}, channel, {
      profiles: profiles
    });
  });
});
exports.getChannelsWithUserProfiles = getChannelsWithUserProfiles;
var getAllActiveChannels = (0, _reselect.createSelector)(getPublicChannels, getPrivateChannels, getDirectChannels, function (publicChannels, privateChannels, directChannels) {
  var allChannels = _toConsumableArray(publicChannels).concat(_toConsumableArray(privateChannels), _toConsumableArray(directChannels));

  return allChannels;
});
var getAllChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getAllActiveChannels, _common.getCurrentUser, _common.getMyChannelMemberships, _posts.getLastPostPerChannel, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return sorting;
}, mapAndSortChannelIds);
exports.getAllChannelIds = getAllChannelIds;
var getAllSortedChannelIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, function (state, lastUnreadChannel, unreadsAtTop, favoritesAtTop) {
  var sorting
  /*: SortingType*/
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'alpha';
  return getAllChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting);
}, function (state, lastUnreadChannel) {
  var unreadsAtTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return unreadsAtTop;
}, function (state, lastUnreadChannel, unreadsAtTop) {
  var favoritesAtTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return favoritesAtTop;
}, filterChannels);
exports.getAllSortedChannelIds = getAllSortedChannelIds;
var lastChannels;

var hasChannelsChanged = function hasChannelsChanged(channels) {
  if (!lastChannels || lastChannels.length !== channels.length) {
    return true;
  }

  for (var i = 0; i < channels.length; i++) {
    if (channels[i].type !== lastChannels[i].type || channels[i].items !== lastChannels[i].items) {
      return true;
    }
  }

  return false;
};

var getOrderedChannelIds = function getOrderedChannelIds(state
/*: GlobalState*/
, lastUnreadChannel
/*: Channel*/
, grouping
/*: 'by_type' | 'none'*/
, sorting
/*: SortingType*/
, unreadsAtTop
/*: boolean*/
, favoritesAtTop
/*: boolean*/
) {
  var channels = [];

  if (grouping === 'by_type') {
    channels.push({
      type: 'public',
      name: 'PUBLIC CHANNELS',
      items: getSortedPublicChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting)
    });
    channels.push({
      type: 'private',
      name: 'PRIVATE CHANNELS',
      items: getSortedPrivateChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting)
    });
    channels.push({
      type: 'direct',
      name: 'DIRECT MESSAGES',
      items: getSortedDirectChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting)
    });
  } else {
    // Combine all channel types
    var type = 'alpha';
    var name = 'CHANNELS';

    if (sorting === 'recent') {
      type = 'recent';
      name = 'RECENT ACTIVITY';
    }

    channels.push({
      type: type,
      name: name,
      items: getAllSortedChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting)
    });
  }

  if (favoritesAtTop) {
    channels.unshift({
      type: 'favorite',
      name: 'FAVORITE CHANNELS',
      items: getSortedFavoriteChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting)
    });
  }

  if (unreadsAtTop) {
    channels.unshift({
      type: 'unreads',
      name: 'UNREADS',
      items: getSortedUnreadChannelIds(state, lastUnreadChannel, unreadsAtTop, favoritesAtTop, sorting)
    });
  }

  if (hasChannelsChanged(channels)) {
    lastChannels = channels;
  }

  return lastChannels;
}; // Added for backwards compatibility
// Can be removed once webapp includes new sidebar preferences


exports.getOrderedChannelIds = getOrderedChannelIds;
var getSortedPublicChannelWithUnreadsIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, getPublicChannelIds, function (state, lastUnreadChannel, unreadsAtTop) {
  var favoritesAtTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return favoritesAtTop;
}, function (unreadChannelIds, favoritePreferences, publicChannelIds, favoritesAtTop) {
  return filterChannels(unreadChannelIds, favoritePreferences, publicChannelIds, false, favoritesAtTop);
});
exports.getSortedPublicChannelWithUnreadsIds = getSortedPublicChannelWithUnreadsIds;
var getSortedPrivateChannelWithUnreadsIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, getPrivateChannelIds, function (state, lastUnreadChannel, unreadsAtTop) {
  var favoritesAtTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return favoritesAtTop;
}, function (unreadChannelIds, favoritePreferences, privateChannelId, favoritesAtTop) {
  return filterChannels(unreadChannelIds, favoritePreferences, privateChannelId, false, favoritesAtTop);
});
exports.getSortedPrivateChannelWithUnreadsIds = getSortedPrivateChannelWithUnreadsIds;
var getSortedFavoriteChannelWithUnreadsIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, getFavoriteChannelIds, function (unreadChannelIds, favoriteChannelIds) {
  return favoriteChannelIds;
});
exports.getSortedFavoriteChannelWithUnreadsIds = getSortedFavoriteChannelWithUnreadsIds;
var getSortedDirectChannelWithUnreadsIds
/*: (GlobalState, Channel, boolean, boolean, SortingType) => Array<string>*/
= (0, _helpers.createIdsSelector)(getUnreadChannelIds, _preferences.getFavoritesPreferences, getDirectChannelIds, function (state, lastUnreadChannel, unreadsAtTop) {
  var favoritesAtTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return favoritesAtTop;
}, function (unreadChannelIds, favoritePreferences, directChannelIds, favoritesAtTop) {
  return filterChannels(unreadChannelIds, favoritePreferences, directChannelIds, false, favoritesAtTop);
});
exports.getSortedDirectChannelWithUnreadsIds = getSortedDirectChannelWithUnreadsIds;