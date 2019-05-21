"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectChannel = selectChannel;
exports.createChannel = createChannel;
exports.createDirectChannel = createDirectChannel;
exports.markGroupChannelOpen = markGroupChannelOpen;
exports.createGroupChannel = createGroupChannel;
exports.patchChannel = patchChannel;
exports.updateChannel = updateChannel;
exports.convertChannelToPrivate = convertChannelToPrivate;
exports.updateChannelNotifyProps = updateChannelNotifyProps;
exports.getChannelByNameAndTeamName = getChannelByNameAndTeamName;
exports.getChannel = getChannel;
exports.getChannelAndMyMember = getChannelAndMyMember;
exports.getChannelTimezones = getChannelTimezones;
exports.fetchMyChannelsAndMembers = fetchMyChannelsAndMembers;
exports.getMyChannelMembers = getMyChannelMembers;
exports.getChannelMembers = getChannelMembers;
exports.leaveChannel = leaveChannel;
exports.joinChannel = joinChannel;
exports.deleteChannel = deleteChannel;
exports.viewChannel = viewChannel;
exports.markChannelAsViewed = markChannelAsViewed;
exports.getChannels = getChannels;
exports.getAllChannels = getAllChannels;
exports.autocompleteChannels = autocompleteChannels;
exports.autocompleteChannelsForSearch = autocompleteChannelsForSearch;
exports.searchChannels = searchChannels;
exports.searchAllChannels = searchAllChannels;
exports.getChannelStats = getChannelStats;
exports.addChannelMember = addChannelMember;
exports.removeChannelMember = removeChannelMember;
exports.updateChannelMemberRoles = updateChannelMemberRoles;
exports.updateChannelHeader = updateChannelHeader;
exports.updateChannelPurpose = updateChannelPurpose;
exports.markChannelAsRead = markChannelAsRead;
exports.markChannelAsUnread = markChannelAsUnread;
exports.getChannelMembersByIds = getChannelMembersByIds;
exports.getChannelMember = getChannelMember;
exports.getMyChannelMember = getMyChannelMember;
exports.favoriteChannel = favoriteChannel;
exports.unfavoriteChannel = unfavoriteChannel;
exports.updateChannelScheme = updateChannelScheme;
exports.updateChannelMemberSchemeRoles = updateChannelMemberSchemeRoles;
exports.default = void 0;

require("core-js/modules/es6.promise");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.split");

require("regenerator-runtime/runtime");

var _reduxBatchedActions = require("redux-batched-actions");

var _client = require("../client");

var _constants = require("../constants");

var _action_types = require("../action_types");

var _preferences = require("./preferences");

var _channel_utils = require("../utils/channel_utils");

var _errors = require("./errors");

var _helpers = require("./helpers");

var _users = require("./users");

var _roles = require("./roles");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function selectChannel(channelId
/*: string*/
) {
  return {
    type: _action_types.ChannelTypes.SELECT_CHANNEL,
    data: channelId
  };
}

function createChannel(channel
/*: Channel*/
, userId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var created, member, actions, _getState$entities$ch, channels, myMembers;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _client.Client4.createChannel(channel);

              case 3:
                created = _context.sent;
                _context.next = 11;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_FAILURE,
                  error: _context.t0
                }, (0, _errors.logError)(_context.t0)]), getState);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 11:
                member = {
                  channel_id: created.id,
                  user_id: userId,
                  roles: "".concat(_constants.General.CHANNEL_USER_ROLE, " ").concat(_constants.General.CHANNEL_ADMIN_ROLE),
                  last_viewed_at: 0,
                  msg_count: 0,
                  mention_count: 0,
                  notify_props: {
                    desktop: 'default',
                    mark_unread: 'all'
                  },
                  last_update_at: created.create_at
                };
                actions = [];
                _getState$entities$ch = getState().entities.channels, channels = _getState$entities$ch.channels, myMembers = _getState$entities$ch.myMembers;

                if (!channels[created.id]) {
                  actions.push({
                    type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                    data: created
                  });
                }

                if (!myMembers[created.id]) {
                  actions.push({
                    type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                    data: member
                  });
                  dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions.concat([{
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_SUCCESS
                }])), getState);
                return _context.abrupt("return", {
                  data: created
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function createDirectChannel(userId
/*: string*/
, otherUserId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var created, member, preferences;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_REQUEST,
                  data: null
                }, getState);
                _context2.prev = 1;
                _context2.next = 4;
                return _client.Client4.createDirectChannel([userId, otherUserId]);

              case 4:
                created = _context2.sent;
                _context2.next = 12;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context2.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_FAILURE,
                  error: _context2.t0
                }, (0, _errors.logError)(_context2.t0)]), getState);
                return _context2.abrupt("return", {
                  error: _context2.t0
                });

              case 12:
                member = {
                  channel_id: created.id,
                  user_id: userId,
                  roles: "".concat(_constants.General.CHANNEL_USER_ROLE),
                  last_viewed_at: 0,
                  msg_count: 0,
                  mention_count: 0,
                  notify_props: {
                    desktop: 'default',
                    mark_unread: 'all'
                  },
                  last_update_at: created.create_at
                };
                preferences = [{
                  user_id: userId,
                  category: _constants.Preferences.CATEGORY_DIRECT_CHANNEL_SHOW,
                  name: otherUserId,
                  value: 'true'
                }, {
                  user_id: userId,
                  category: _constants.Preferences.CATEGORY_CHANNEL_OPEN_TIME,
                  name: created.id,
                  value: new Date().getTime().toString()
                }];
                (0, _preferences.savePreferences)(userId, preferences)(dispatch);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: created
                }, {
                  type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                  data: member
                }, {
                  type: _action_types.PreferenceTypes.RECEIVED_PREFERENCES,
                  data: preferences
                }, {
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_SUCCESS
                }, {
                  type: _action_types.UserTypes.RECEIVED_PROFILES_LIST_IN_CHANNEL,
                  id: created.id,
                  data: [{
                    id: userId
                  }, {
                    id: otherUserId
                  }]
                }]), getState);
                dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                return _context2.abrupt("return", {
                  data: created
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function markGroupChannelOpen(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var currentUserId, preferences;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                preferences
                /*: Array<PreferenceType>*/
                = [{
                  user_id: currentUserId,
                  category: _constants.Preferences.CATEGORY_GROUP_CHANNEL_SHOW,
                  name: channelId,
                  value: 'true'
                }, {
                  user_id: currentUserId,
                  category: _constants.Preferences.CATEGORY_CHANNEL_OPEN_TIME,
                  name: channelId,
                  value: new Date().getTime().toString()
                }];
                return _context3.abrupt("return", dispatch((0, _preferences.savePreferences)(currentUserId, preferences)));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

function createGroupChannel(userIds
/*: Array<string>*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch, getState) {
        var currentUserId, created, member, profilesInChannel;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_REQUEST,
                  data: null
                }, getState);
                currentUserId = getState().entities.users.currentUserId;
                _context4.prev = 2;
                _context4.next = 5;
                return _client.Client4.createGroupChannel(userIds);

              case 5:
                created = _context4.sent;
                _context4.next = 13;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](2);
                (0, _helpers.forceLogoutIfNecessary)(_context4.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_FAILURE,
                  error: _context4.t0
                }, (0, _errors.logError)(_context4.t0)]), getState);
                return _context4.abrupt("return", {
                  error: _context4.t0
                });

              case 13:
                member = {
                  channel_id: created.id,
                  user_id: currentUserId,
                  roles: "".concat(_constants.General.CHANNEL_USER_ROLE),
                  last_viewed_at: 0,
                  msg_count: 0,
                  mention_count: 0,
                  notify_props: {
                    desktop: 'default',
                    mark_unread: 'all'
                  },
                  last_update_at: created.create_at
                };
                dispatch(markGroupChannelOpen(created.id));
                profilesInChannel = userIds.map(function (id) {
                  return {
                    id: id
                  };
                });
                profilesInChannel.push({
                  id: currentUserId
                }); // currentUserId is optionally in userIds, but the reducer will get rid of a duplicate

                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: created
                }, {
                  type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                  data: member
                }, {
                  type: _action_types.ChannelTypes.CREATE_CHANNEL_SUCCESS
                }, {
                  type: _action_types.UserTypes.RECEIVED_PROFILES_LIST_IN_CHANNEL,
                  id: created.id,
                  data: profilesInChannel
                }]), getState);
                dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                return _context4.abrupt("return", {
                  data: created
                });

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 8]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function patchChannel(channelId
/*: string*/
, patch
/*: Channel*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch, getState) {
        var updated;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_REQUEST,
                  data: null
                }, getState);
                _context5.prev = 1;
                _context5.next = 4;
                return _client.Client4.patchChannel(channelId, patch);

              case 4:
                updated = _context5.sent;
                _context5.next = 12;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context5.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_FAILURE,
                  error: _context5.t0
                }, (0, _errors.logError)(_context5.t0)]), getState);
                return _context5.abrupt("return", {
                  error: _context5.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: updated
                }, {
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_SUCCESS
                }]), getState);
                return _context5.abrupt("return", {
                  data: updated
                });

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 7]]);
      }));

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

function updateChannel(channel
/*: Channel*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(dispatch, getState) {
        var updated;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_REQUEST,
                  data: null
                }, getState);
                _context6.prev = 1;
                _context6.next = 4;
                return _client.Client4.updateChannel(channel);

              case 4:
                updated = _context6.sent;
                _context6.next = 12;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context6.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_FAILURE,
                  error: _context6.t0
                }, (0, _errors.logError)(_context6.t0)]), getState);
                return _context6.abrupt("return", {
                  error: _context6.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: updated
                }, {
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_SUCCESS
                }]), getState);
                return _context6.abrupt("return", {
                  data: updated
                });

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 7]]);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}

function convertChannelToPrivate(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(dispatch, getState) {
        var convertedChannel;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_REQUEST,
                  data: null
                }, getState);
                _context7.prev = 1;
                _context7.next = 4;
                return _client.Client4.convertChannelToPrivate(channelId);

              case 4:
                convertedChannel = _context7.sent;
                _context7.next = 12;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context7.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_FAILURE,
                  error: _context7.t0
                }, (0, _errors.logError)(_context7.t0)]), getState);
                return _context7.abrupt("return", {
                  error: _context7.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: convertedChannel
                }, {
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_SUCCESS
                }]), getState);
                return _context7.abrupt("return", {
                  data: convertedChannel
                });

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
}

function updateChannelNotifyProps(userId
/*: string*/
, channelId
/*: string*/
, props
/*: ChannelNotifyProps*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(dispatch, getState) {
        var notifyProps, member, currentNotifyProps;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                notifyProps = _objectSpread({
                  user_id: userId,
                  channel_id: channelId
                }, props);
                _context8.prev = 1;
                _context8.next = 4;
                return _client.Client4.updateChannelNotifyProps(notifyProps);

              case 4:
                _context8.next = 11;
                break;

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context8.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context8.t0));
                return _context8.abrupt("return", {
                  error: _context8.t0
                });

              case 11:
                member = getState().entities.channels.myMembers[channelId] || {};
                currentNotifyProps = member.notify_props || {};
                dispatch({
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL_PROPS,
                  data: {
                    channel_id: channelId,
                    notifyProps: _objectSpread({}, currentNotifyProps, notifyProps)
                  }
                });
                return _context8.abrupt("return", {
                  data: true
                });

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 6]]);
      }));

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
}

function getChannelByNameAndTeamName(teamName
/*: string*/
, channelName
/*: string*/
)
/*: ActionFunc*/
{
  var includeDeleted
  /*: boolean*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _client.Client4.getChannelByNameAndTeamName(teamName, channelName, includeDeleted);

              case 3:
                data = _context9.sent;
                _context9.next = 11;
                break;

              case 6:
                _context9.prev = 6;
                _context9.t0 = _context9["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context9.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.CHANNELS_FAILURE,
                  error: _context9.t0
                }, (0, _errors.logError)(_context9.t0)]), getState);
                return _context9.abrupt("return", {
                  error: _context9.t0
                });

              case 11:
                dispatch({
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: data
                });
                return _context9.abrupt("return", {
                  data: data
                });

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 6]]);
      }));

      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
}

function getChannel(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _client.Client4.getChannel(channelId);

              case 3:
                data = _context10.sent;
                _context10.next = 11;
                break;

              case 6:
                _context10.prev = 6;
                _context10.t0 = _context10["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context10.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.CHANNELS_FAILURE,
                  error: _context10.t0
                }, (0, _errors.logError)(_context10.t0)]), getState);
                return _context10.abrupt("return", {
                  error: _context10.t0
                });

              case 11:
                dispatch({
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: data
                });
                return _context10.abrupt("return", {
                  data: data
                });

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 6]]);
      }));

      return function (_x19, _x20) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
}

function getChannelAndMyMember(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(dispatch, getState) {
        var channel, member, channelRequest, memberRequest;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                channelRequest = _client.Client4.getChannel(channelId);
                memberRequest = _client.Client4.getMyChannelMember(channelId);
                _context11.next = 5;
                return channelRequest;

              case 5:
                channel = _context11.sent;
                _context11.next = 8;
                return memberRequest;

              case 8:
                member = _context11.sent;
                _context11.next = 16;
                break;

              case 11:
                _context11.prev = 11;
                _context11.t0 = _context11["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context11.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.CHANNELS_FAILURE,
                  error: _context11.t0
                }, (0, _errors.logError)(_context11.t0)]), getState);
                return _context11.abrupt("return", {
                  error: _context11.t0
                });

              case 16:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: channel
                }, {
                  type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                  data: member
                }]), getState);
                dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                return _context11.abrupt("return", {
                  data: {
                    channel: channel,
                    member: member
                  }
                });

              case 19:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 11]]);
      }));

      return function (_x21, _x22) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
}

function getChannelTimezones(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(dispatch, getState) {
        var channelTimezones, channelTimezonesRequest;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                channelTimezonesRequest = _client.Client4.getChannelTimezones(channelId);
                _context12.next = 4;
                return channelTimezonesRequest;

              case 4:
                channelTimezones = _context12.sent;
                _context12.next = 12;
                break;

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context12.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context12.t0));
                return _context12.abrupt("return", {
                  error: _context12.t0
                });

              case 12:
                return _context12.abrupt("return", {
                  data: channelTimezones
                });

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 7]]);
      }));

      return function (_x23, _x24) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
}

function fetchMyChannelsAndMembers(teamId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref13 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(dispatch, getState) {
        var channels, channelMembers, channelRequest, memberRequest, currentUserId, roles, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, member, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, role;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.CHANNELS_REQUEST,
                  data: null
                });
                _context13.prev = 1;
                channelRequest = _client.Client4.getMyChannels(teamId);
                memberRequest = _client.Client4.getMyChannelMembers(teamId);
                _context13.next = 6;
                return channelRequest;

              case 6:
                channels = _context13.sent;
                _context13.next = 9;
                return memberRequest;

              case 9:
                channelMembers = _context13.sent;
                _context13.next = 17;
                break;

              case 12:
                _context13.prev = 12;
                _context13.t0 = _context13["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context13.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.CHANNELS_FAILURE,
                  error: _context13.t0
                }, (0, _errors.logError)(_context13.t0)]), getState);
                return _context13.abrupt("return", {
                  error: _context13.t0
                });

              case 17:
                currentUserId = getState().entities.users.currentUserId;
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNELS,
                  teamId: teamId,
                  data: channels
                }, {
                  type: _action_types.ChannelTypes.CHANNELS_SUCCESS
                }, {
                  type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBERS,
                  data: channelMembers,
                  remove: (0, _channel_utils.getChannelsIdForTeam)(getState(), teamId),
                  currentUserId: currentUserId
                }]), getState);
                roles = new Set();
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context13.prev = 23;
                _iterator = channelMembers[Symbol.iterator]();

              case 25:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context13.next = 49;
                  break;
                }

                member = _step.value;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context13.prev = 30;

                for (_iterator2 = member.roles.split(' ')[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  role = _step2.value;
                  roles.add(role);
                }

                _context13.next = 38;
                break;

              case 34:
                _context13.prev = 34;
                _context13.t1 = _context13["catch"](30);
                _didIteratorError2 = true;
                _iteratorError2 = _context13.t1;

              case 38:
                _context13.prev = 38;
                _context13.prev = 39;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 41:
                _context13.prev = 41;

                if (!_didIteratorError2) {
                  _context13.next = 44;
                  break;
                }

                throw _iteratorError2;

              case 44:
                return _context13.finish(41);

              case 45:
                return _context13.finish(38);

              case 46:
                _iteratorNormalCompletion = true;
                _context13.next = 25;
                break;

              case 49:
                _context13.next = 55;
                break;

              case 51:
                _context13.prev = 51;
                _context13.t2 = _context13["catch"](23);
                _didIteratorError = true;
                _iteratorError = _context13.t2;

              case 55:
                _context13.prev = 55;
                _context13.prev = 56;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 58:
                _context13.prev = 58;

                if (!_didIteratorError) {
                  _context13.next = 61;
                  break;
                }

                throw _iteratorError;

              case 61:
                return _context13.finish(58);

              case 62:
                return _context13.finish(55);

              case 63:
                if (roles.size > 0) {
                  dispatch((0, _roles.loadRolesIfNeeded)(roles));
                }

                return _context13.abrupt("return", {
                  data: {
                    channels: channels,
                    members: channelMembers
                  }
                });

              case 65:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[1, 12], [23, 51, 55, 63], [30, 34, 38, 46], [39,, 41, 45], [56,, 58, 62]]);
      }));

      return function (_x25, _x26) {
        return _ref13.apply(this, arguments);
      };
    }()
  );
}

function getMyChannelMembers(teamId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(dispatch, getState) {
        var channelMembers, channelMembersRequest, currentUserId, roles, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, member, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, role;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                channelMembersRequest = _client.Client4.getMyChannelMembers(teamId);
                _context14.next = 4;
                return channelMembersRequest;

              case 4:
                channelMembers = _context14.sent;
                _context14.next = 12;
                break;

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context14.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context14.t0));
                return _context14.abrupt("return", {
                  error: _context14.t0
                });

              case 12:
                currentUserId = getState().entities.users.currentUserId;
                dispatch({
                  type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBERS,
                  data: channelMembers,
                  remove: (0, _channel_utils.getChannelsIdForTeam)(getState(), teamId),
                  currentUserId: currentUserId
                });
                roles = new Set();
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context14.prev = 18;
                _iterator3 = channelMembers[Symbol.iterator]();

              case 20:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context14.next = 44;
                  break;
                }

                member = _step3.value;
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context14.prev = 25;

                for (_iterator4 = member.roles.split(' ')[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  role = _step4.value;
                  roles.add(role);
                }

                _context14.next = 33;
                break;

              case 29:
                _context14.prev = 29;
                _context14.t1 = _context14["catch"](25);
                _didIteratorError4 = true;
                _iteratorError4 = _context14.t1;

              case 33:
                _context14.prev = 33;
                _context14.prev = 34;

                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }

              case 36:
                _context14.prev = 36;

                if (!_didIteratorError4) {
                  _context14.next = 39;
                  break;
                }

                throw _iteratorError4;

              case 39:
                return _context14.finish(36);

              case 40:
                return _context14.finish(33);

              case 41:
                _iteratorNormalCompletion3 = true;
                _context14.next = 20;
                break;

              case 44:
                _context14.next = 50;
                break;

              case 46:
                _context14.prev = 46;
                _context14.t2 = _context14["catch"](18);
                _didIteratorError3 = true;
                _iteratorError3 = _context14.t2;

              case 50:
                _context14.prev = 50;
                _context14.prev = 51;

                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }

              case 53:
                _context14.prev = 53;

                if (!_didIteratorError3) {
                  _context14.next = 56;
                  break;
                }

                throw _iteratorError3;

              case 56:
                return _context14.finish(53);

              case 57:
                return _context14.finish(50);

              case 58:
                if (roles.size > 0) {
                  dispatch((0, _roles.loadRolesIfNeeded)(roles));
                }

                return _context14.abrupt("return", {
                  data: channelMembers
                });

              case 60:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 7], [18, 46, 50, 58], [25, 29, 33, 41], [34,, 36, 40], [51,, 53, 57]]);
      }));

      return function (_x27, _x28) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
}

function getChannelMembers(channelId
/*: string*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.CHANNELS_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref15 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15(dispatch, getState) {
        var channelMembers, channelMembersRequest, userIds;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                channelMembersRequest = _client.Client4.getChannelMembers(channelId, page, perPage);
                _context15.next = 4;
                return channelMembersRequest;

              case 4:
                channelMembers = _context15.sent;
                _context15.next = 12;
                break;

              case 7:
                _context15.prev = 7;
                _context15.t0 = _context15["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context15.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context15.t0));
                return _context15.abrupt("return", {
                  error: _context15.t0
                });

              case 12:
                userIds = channelMembers.map(function (cm) {
                  return cm.user_id;
                });
                (0, _users.getMissingProfilesByIds)(userIds)(dispatch, getState);
                dispatch({
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL_MEMBERS,
                  data: channelMembers
                });
                return _context15.abrupt("return", {
                  data: channelMembers
                });

              case 16:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 7]]);
      }));

      return function (_x29, _x30) {
        return _ref15.apply(this, arguments);
      };
    }()
  );
}

function leaveChannel(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref16 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee16(dispatch, getState) {
        var state, currentUserId, _state$entities$chann, channels, myMembers, channel, member;

        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                state = getState();
                currentUserId = state.entities.users.currentUserId;
                _state$entities$chann = state.entities.channels, channels = _state$entities$chann.channels, myMembers = _state$entities$chann.myMembers;
                channel = channels[channelId];
                member = myMembers[channelId];

                _client.Client4.trackEvent('action', 'action_channels_leave', {
                  channel_id: channelId
                });

                dispatch({
                  type: _action_types.ChannelTypes.LEAVE_CHANNEL,
                  data: {
                    id: channelId,
                    user_id: currentUserId,
                    team_id: channel.team_id,
                    type: channel.type
                  },
                  meta: {
                    offline: {
                      effect: function effect() {
                        return _client.Client4.removeFromChannel(currentUserId, channelId);
                      },
                      commit: {
                        type: _action_types.ChannelTypes.LEAVE_CHANNEL
                      },
                      rollback: function rollback() {
                        dispatch((0, _reduxBatchedActions.batchActions)([{
                          type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                          data: channel
                        }, {
                          type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                          data: member
                        }]));
                      }
                    }
                  }
                });
                return _context16.abrupt("return", {
                  data: true
                });

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function (_x31, _x32) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
}

function joinChannel(userId
/*: string*/
, teamId
/*: string*/
, channelId
/*: string*/
, channelName
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref17 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17(dispatch, getState) {
        var member, channel;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;

                if (!channelId) {
                  _context17.next = 10;
                  break;
                }

                _context17.next = 4;
                return _client.Client4.addToChannel(userId, channelId);

              case 4:
                member = _context17.sent;
                _context17.next = 7;
                return _client.Client4.getChannel(channelId);

              case 7:
                channel = _context17.sent;
                _context17.next = 23;
                break;

              case 10:
                if (!channelName) {
                  _context17.next = 23;
                  break;
                }

                _context17.next = 13;
                return _client.Client4.getChannelByName(teamId, channelName, true);

              case 13:
                channel = _context17.sent;

                if (!(channel.type === _constants.General.GM_CHANNEL || channel.type === _constants.General.DM_CHANNEL)) {
                  _context17.next = 20;
                  break;
                }

                _context17.next = 17;
                return _client.Client4.getChannelMember(channel.id, userId);

              case 17:
                member = _context17.sent;
                _context17.next = 23;
                break;

              case 20:
                _context17.next = 22;
                return _client.Client4.addToChannel(userId, channel.id);

              case 22:
                member = _context17.sent;

              case 23:
                _context17.next = 30;
                break;

              case 25:
                _context17.prev = 25;
                _context17.t0 = _context17["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context17.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context17.t0));
                return _context17.abrupt("return", {
                  error: _context17.t0
                });

              case 30:
                _client.Client4.trackEvent('action', 'action_channels_join', {
                  channel_id: channelId
                });

                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
                  data: channel
                }, {
                  type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                  data: member
                }]), getState);

                if (member) {
                  dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                }

                return _context17.abrupt("return", {
                  data: {
                    channel: channel,
                    member: member
                  }
                });

              case 34:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 25]]);
      }));

      return function (_x33, _x34) {
        return _ref17.apply(this, arguments);
      };
    }()
  );
}

function deleteChannel(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18(dispatch, getState) {
        var state, viewArchivedChannels, entities, _entities$channels, channels, currentChannelId, channel, defaultChannelId;

        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                state = getState();
                viewArchivedChannels = state.entities.general.config.ExperimentalViewArchivedChannels === 'true';
                _context18.prev = 2;
                _context18.next = 5;
                return _client.Client4.deleteChannel(channelId);

              case 5:
                _context18.next = 12;
                break;

              case 7:
                _context18.prev = 7;
                _context18.t0 = _context18["catch"](2);
                (0, _helpers.forceLogoutIfNecessary)(_context18.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context18.t0));
                return _context18.abrupt("return", {
                  error: _context18.t0
                });

              case 12:
                entities = getState().entities;
                _entities$channels = entities.channels, channels = _entities$channels.channels, currentChannelId = _entities$channels.currentChannelId;

                if (channelId === currentChannelId && !viewArchivedChannels) {
                  channel = Object.keys(channels).filter(function (key) {
                    return channels[key].name === _constants.General.DEFAULT_CHANNEL;
                  });
                  defaultChannelId = '';

                  if (channel.length) {
                    defaultChannelId = channel[0];
                  }

                  dispatch({
                    type: _action_types.ChannelTypes.SELECT_CHANNEL,
                    data: defaultChannelId
                  }, getState);
                }

                dispatch({
                  type: _action_types.ChannelTypes.DELETE_CHANNEL_SUCCESS,
                  data: {
                    id: channelId,
                    viewArchivedChannels: viewArchivedChannels
                  }
                }, getState);
                return _context18.abrupt("return", {
                  data: true
                });

              case 17:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[2, 7]]);
      }));

      return function (_x35, _x36) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
}

function viewChannel(channelId
/*: string*/
)
/*: ActionFunc*/
{
  var prevChannelId
  /*: string*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (
    /*#__PURE__*/
    function () {
      var _ref19 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee19(dispatch, getState) {
        var currentUserId, myPreferences, viewTimePref, viewTime, preferences, actions, myMembers, member, prevMember;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                myPreferences = getState().entities.preferences.myPreferences;
                viewTimePref = myPreferences["".concat(_constants.Preferences.CATEGORY_CHANNEL_APPROXIMATE_VIEW_TIME, "--").concat(channelId)];
                viewTime = viewTimePref ? parseInt(viewTimePref.value, 10) : 0;

                if (viewTime < new Date().getTime() - 3 * 60 * 60 * 1000) {
                  preferences = [{
                    user_id: currentUserId,
                    category: _constants.Preferences.CATEGORY_CHANNEL_APPROXIMATE_VIEW_TIME,
                    name: channelId,
                    value: new Date().getTime().toString()
                  }];
                  (0, _preferences.savePreferences)(currentUserId, preferences)(dispatch);
                }

                _context19.prev = 5;
                _context19.next = 8;
                return _client.Client4.viewMyChannel(channelId, prevChannelId);

              case 8:
                _context19.next = 15;
                break;

              case 10:
                _context19.prev = 10;
                _context19.t0 = _context19["catch"](5);
                (0, _helpers.forceLogoutIfNecessary)(_context19.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context19.t0));
                return _context19.abrupt("return", {
                  error: _context19.t0
                });

              case 15:
                actions = [];
                myMembers = getState().entities.channels.myMembers;
                member = myMembers[channelId];

                if (member) {
                  actions.push({
                    type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                    data: _objectSpread({}, member, {
                      last_viewed_at: new Date().getTime()
                    })
                  });
                  dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                }

                prevMember = myMembers[prevChannelId];

                if (prevMember) {
                  actions.push({
                    type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                    data: _objectSpread({}, prevMember, {
                      last_viewed_at: new Date().getTime()
                    })
                  });
                  dispatch((0, _roles.loadRolesIfNeeded)(prevMember.roles.split(' ')));
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context19.abrupt("return", {
                  data: true
                });

              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[5, 10]]);
      }));

      return function (_x37, _x38) {
        return _ref19.apply(this, arguments);
      };
    }()
  );
}

function markChannelAsViewed(channelId
/*: string*/
)
/*: ActionFunc*/
{
  var prevChannelId
  /*: string*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (
    /*#__PURE__*/
    function () {
      var _ref20 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee20(dispatch, getState) {
        var actions, myMembers, member, prevMember;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                actions = [];
                myMembers = getState().entities.channels.myMembers;
                member = myMembers[channelId];

                if (member) {
                  actions.push({
                    type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                    data: _objectSpread({}, member, {
                      last_viewed_at: Date.now()
                    })
                  });
                  dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                }

                prevMember = myMembers[prevChannelId];

                if (prevMember) {
                  actions.push({
                    type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
                    data: _objectSpread({}, prevMember, {
                      last_viewed_at: Date.now()
                    })
                  });
                  dispatch((0, _roles.loadRolesIfNeeded)(prevMember.roles.split(' ')));
                }

                if (actions.length) {
                  dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                }

                return _context20.abrupt("return", {
                  data: true
                });

              case 8:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function (_x39, _x40) {
        return _ref20.apply(this, arguments);
      };
    }()
  );
}

function getChannels(teamId
/*: string*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.CHANNELS_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref21 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee21(dispatch, getState) {
        var channels;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.GET_CHANNELS_REQUEST,
                  data: null
                }, getState);
                _context21.prev = 1;
                _context21.next = 4;
                return _client.Client4.getChannels(teamId, page, perPage);

              case 4:
                channels = _context21.sent;
                _context21.next = 12;
                break;

              case 7:
                _context21.prev = 7;
                _context21.t0 = _context21["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context21.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.GET_CHANNELS_FAILURE,
                  error: _context21.t0
                }, (0, _errors.logError)(_context21.t0)]), getState);
                return _context21.abrupt("return", {
                  error: _context21.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNELS,
                  teamId: teamId,
                  data: channels
                }, {
                  type: _action_types.ChannelTypes.GET_CHANNELS_SUCCESS
                }]), getState);
                return _context21.abrupt("return", {
                  data: channels
                });

              case 14:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[1, 7]]);
      }));

      return function (_x41, _x42) {
        return _ref21.apply(this, arguments);
      };
    }()
  );
}

function getAllChannels()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.CHANNELS_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref22 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee22(dispatch, getState) {
        var channels;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.GET_ALL_CHANNELS_REQUEST,
                  data: null
                }, getState);
                _context22.prev = 1;
                _context22.next = 4;
                return _client.Client4.getAllChannels(page, perPage);

              case 4:
                channels = _context22.sent;
                _context22.next = 12;
                break;

              case 7:
                _context22.prev = 7;
                _context22.t0 = _context22["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context22.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.GET_ALL_CHANNELS_FAILURE,
                  error: _context22.t0
                }, (0, _errors.logError)(_context22.t0)]), getState);
                return _context22.abrupt("return", {
                  error: _context22.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_ALL_CHANNELS,
                  data: channels
                }, {
                  type: _action_types.ChannelTypes.GET_ALL_CHANNELS_SUCCESS
                }]), getState);
                return _context22.abrupt("return", {
                  data: channels
                });

              case 14:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[1, 7]]);
      }));

      return function (_x43, _x44) {
        return _ref22.apply(this, arguments);
      };
    }()
  );
}

function autocompleteChannels(teamId
/*: string*/
, term
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref23 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee23(dispatch, getState) {
        var channels;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.GET_CHANNELS_REQUEST,
                  data: null
                }, getState);
                _context23.prev = 1;
                _context23.next = 4;
                return _client.Client4.autocompleteChannels(teamId, term);

              case 4:
                channels = _context23.sent;
                _context23.next = 12;
                break;

              case 7:
                _context23.prev = 7;
                _context23.t0 = _context23["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context23.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.GET_CHANNELS_FAILURE,
                  error: _context23.t0
                }, (0, _errors.logError)(_context23.t0)]), getState);
                return _context23.abrupt("return", {
                  error: _context23.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNELS,
                  teamId: teamId,
                  data: channels
                }, {
                  type: _action_types.ChannelTypes.GET_CHANNELS_SUCCESS
                }]), getState);
                return _context23.abrupt("return", {
                  data: channels
                });

              case 14:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[1, 7]]);
      }));

      return function (_x45, _x46) {
        return _ref23.apply(this, arguments);
      };
    }()
  );
}

function autocompleteChannelsForSearch(teamId
/*: string*/
, term
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref24 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee24(dispatch, getState) {
        var channels;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.GET_CHANNELS_REQUEST,
                  data: null
                }, getState);
                _context24.prev = 1;
                _context24.next = 4;
                return _client.Client4.autocompleteChannelsForSearch(teamId, term);

              case 4:
                channels = _context24.sent;
                _context24.next = 12;
                break;

              case 7:
                _context24.prev = 7;
                _context24.t0 = _context24["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context24.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.GET_CHANNELS_FAILURE,
                  error: _context24.t0
                }, (0, _errors.logError)(_context24.t0)]), getState);
                return _context24.abrupt("return", {
                  error: _context24.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNELS,
                  teamId: teamId,
                  data: channels
                }, {
                  type: _action_types.ChannelTypes.GET_CHANNELS_SUCCESS
                }]), getState);
                return _context24.abrupt("return", {
                  data: channels
                });

              case 14:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this, [[1, 7]]);
      }));

      return function (_x47, _x48) {
        return _ref24.apply(this, arguments);
      };
    }()
  );
}

function searchChannels(teamId
/*: string*/
, term
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref25 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee25(dispatch, getState) {
        var channels;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.GET_CHANNELS_REQUEST,
                  data: null
                }, getState);
                _context25.prev = 1;
                _context25.next = 4;
                return _client.Client4.searchChannels(teamId, term);

              case 4:
                channels = _context25.sent;
                _context25.next = 12;
                break;

              case 7:
                _context25.prev = 7;
                _context25.t0 = _context25["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context25.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.GET_CHANNELS_FAILURE,
                  error: _context25.t0
                }, (0, _errors.logError)(_context25.t0)]), getState);
                return _context25.abrupt("return", {
                  error: _context25.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_CHANNELS,
                  teamId: teamId,
                  data: channels
                }, {
                  type: _action_types.ChannelTypes.GET_CHANNELS_SUCCESS
                }]), getState);
                return _context25.abrupt("return", {
                  data: channels
                });

              case 14:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[1, 7]]);
      }));

      return function (_x49, _x50) {
        return _ref25.apply(this, arguments);
      };
    }()
  );
}

function searchAllChannels(term
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref26 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee26(dispatch, getState) {
        var channels;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                dispatch({
                  type: _action_types.ChannelTypes.GET_ALL_CHANNELS_REQUEST,
                  data: null
                }, getState);
                _context26.prev = 1;
                _context26.next = 4;
                return _client.Client4.searchAllChannels(term);

              case 4:
                channels = _context26.sent;
                _context26.next = 12;
                break;

              case 7:
                _context26.prev = 7;
                _context26.t0 = _context26["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context26.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.GET_ALL_CHANNELS_FAILURE,
                  error: _context26.t0
                }, (0, _errors.logError)(_context26.t0)]), getState);
                return _context26.abrupt("return", {
                  error: _context26.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.ChannelTypes.RECEIVED_ALL_CHANNELS,
                  data: channels
                }, {
                  type: _action_types.ChannelTypes.GET_ALL_CHANNELS_SUCCESS
                }]), getState);
                return _context26.abrupt("return", {
                  data: channels
                });

              case 14:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[1, 7]]);
      }));

      return function (_x51, _x52) {
        return _ref26.apply(this, arguments);
      };
    }()
  );
}

function getChannelStats(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref27 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee27(dispatch, getState) {
        var stat;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.prev = 0;
                _context27.next = 3;
                return _client.Client4.getChannelStats(channelId);

              case 3:
                stat = _context27.sent;
                _context27.next = 11;
                break;

              case 6:
                _context27.prev = 6;
                _context27.t0 = _context27["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context27.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context27.t0));
                return _context27.abrupt("return", {
                  error: _context27.t0
                });

              case 11:
                dispatch({
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL_STATS,
                  data: stat
                });
                return _context27.abrupt("return", {
                  data: stat
                });

              case 13:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this, [[0, 6]]);
      }));

      return function (_x53, _x54) {
        return _ref27.apply(this, arguments);
      };
    }()
  );
}

function addChannelMember(channelId
/*: string*/
, userId
/*: string*/
)
/*: ActionFunc*/
{
  var postRootId
  /*: string*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return (
    /*#__PURE__*/
    function () {
      var _ref28 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee28(dispatch, getState) {
        var member;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                _context28.next = 3;
                return _client.Client4.addToChannel(userId, channelId, postRootId);

              case 3:
                member = _context28.sent;
                _context28.next = 11;
                break;

              case 6:
                _context28.prev = 6;
                _context28.t0 = _context28["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context28.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context28.t0));
                return _context28.abrupt("return", {
                  error: _context28.t0
                });

              case 11:
                _client.Client4.trackEvent('action', 'action_channels_add_member', {
                  channel_id: channelId
                });

                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.UserTypes.RECEIVED_PROFILE_IN_CHANNEL,
                  data: {
                    id: channelId,
                    user_id: userId
                  }
                }, {
                  type: _action_types.ChannelTypes.RECEIVED_CHANNEL_MEMBER,
                  data: member
                }, {
                  type: _action_types.ChannelTypes.ADD_CHANNEL_MEMBER_SUCCESS,
                  id: channelId
                }], 'ADD_CHANNEL_MEMBER.BATCH'), getState);
                return _context28.abrupt("return", {
                  data: member
                });

              case 14:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this, [[0, 6]]);
      }));

      return function (_x55, _x56) {
        return _ref28.apply(this, arguments);
      };
    }()
  );
}

function removeChannelMember(channelId
/*: string*/
, userId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref29 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee29(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.prev = 0;
                _context29.next = 3;
                return _client.Client4.removeFromChannel(userId, channelId);

              case 3:
                _context29.next = 10;
                break;

              case 5:
                _context29.prev = 5;
                _context29.t0 = _context29["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context29.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context29.t0));
                return _context29.abrupt("return", {
                  error: _context29.t0
                });

              case 10:
                _client.Client4.trackEvent('action', 'action_channels_remove_member', {
                  channel_id: channelId
                });

                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.UserTypes.RECEIVED_PROFILE_NOT_IN_CHANNEL,
                  data: {
                    id: channelId,
                    user_id: userId
                  }
                }, {
                  type: _action_types.ChannelTypes.REMOVE_CHANNEL_MEMBER_SUCCESS,
                  id: channelId
                }], 'REMOVE_CHANNEL_MEMBER.BATCH'), getState);
                return _context29.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this, [[0, 5]]);
      }));

      return function (_x57, _x58) {
        return _ref29.apply(this, arguments);
      };
    }()
  );
}

function updateChannelMemberRoles(channelId
/*: string*/
, userId
/*: string*/
, roles
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref30 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee30(dispatch, getState) {
        var membersInChannel;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.prev = 0;
                _context30.next = 3;
                return _client.Client4.updateChannelMemberRoles(channelId, userId, roles);

              case 3:
                _context30.next = 10;
                break;

              case 5:
                _context30.prev = 5;
                _context30.t0 = _context30["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context30.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context30.t0));
                return _context30.abrupt("return", {
                  error: _context30.t0
                });

              case 10:
                membersInChannel = getState().entities.channels.membersInChannel[channelId];

                if (membersInChannel && membersInChannel[userId]) {
                  dispatch({
                    type: _action_types.ChannelTypes.RECEIVED_CHANNEL_MEMBER,
                    data: _objectSpread({}, membersInChannel[userId], {
                      roles: roles
                    })
                  });
                }

                return _context30.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this, [[0, 5]]);
      }));

      return function (_x59, _x60) {
        return _ref30.apply(this, arguments);
      };
    }()
  );
}

function updateChannelHeader(channelId
/*: string*/
, header
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref31 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee31(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _client.Client4.trackEvent('action', 'action_channels_update_header', {
                  channel_id: channelId
                });

                dispatch({
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_HEADER,
                  data: {
                    channelId: channelId,
                    header: header
                  }
                }, getState);
                return _context31.abrupt("return", {
                  data: true
                });

              case 3:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      return function (_x61, _x62) {
        return _ref31.apply(this, arguments);
      };
    }()
  );
}

function updateChannelPurpose(channelId
/*: string*/
, purpose
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref32 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee32(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _client.Client4.trackEvent('action', 'action_channels_update_purpose', {
                  channel_id: channelId
                });

                dispatch({
                  type: _action_types.ChannelTypes.UPDATE_CHANNEL_PURPOSE,
                  data: {
                    channelId: channelId,
                    purpose: purpose
                  }
                }, getState);
                return _context32.abrupt("return", {
                  data: true
                });

              case 3:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      return function (_x63, _x64) {
        return _ref32.apply(this, arguments);
      };
    }()
  );
}

function markChannelAsRead(channelId
/*: string*/
, prevChannelId
/*: string*/
)
/*: ActionFunc*/
{
  var updateLastViewedAt
  /*: boolean*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return (
    /*#__PURE__*/
    function () {
      var _ref33 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee33(dispatch, getState) {
        var state, _state$entities$chann2, channels, myMembers, channel, prevChannel, channelMember, prevChannelMember, actions;

        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                // Send channel last viewed at to the server
                if (updateLastViewedAt) {
                  _client.Client4.viewMyChannel(channelId, prevChannelId).then().catch(function (error) {
                    (0, _helpers.forceLogoutIfNecessary)(error, dispatch, getState);
                    dispatch((0, _errors.logError)(error));
                    return {
                      error: error
                    };
                  });
                }

                state = getState();
                _state$entities$chann2 = state.entities.channels, channels = _state$entities$chann2.channels, myMembers = _state$entities$chann2.myMembers; // Update channel member objects to set all mentions and posts as viewed

                channel = channels[channelId];
                prevChannel = channels[prevChannelId]; // May be null since prevChannelId is optional
                // Update team member objects to set mentions and posts in channel as viewed

                channelMember = myMembers[channelId];
                prevChannelMember = myMembers[prevChannelId]; // May also be null

                actions = [];

                if (channel && channelMember) {
                  actions.push({
                    type: _action_types.ChannelTypes.DECREMENT_UNREAD_MSG_COUNT,
                    data: {
                      teamId: channel.team_id,
                      channelId: channelId,
                      amount: channel.total_msg_count - channelMember.msg_count
                    }
                  });
                  actions.push({
                    type: _action_types.ChannelTypes.DECREMENT_UNREAD_MENTION_COUNT,
                    data: {
                      teamId: channel.team_id,
                      channelId: channelId,
                      amount: channelMember.mention_count
                    }
                  });
                }

                if (prevChannel && prevChannelMember) {
                  actions.push({
                    type: _action_types.ChannelTypes.DECREMENT_UNREAD_MSG_COUNT,
                    data: {
                      teamId: prevChannel.team_id,
                      channelId: prevChannelId,
                      amount: prevChannel.total_msg_count - prevChannelMember.msg_count
                    }
                  });
                  actions.push({
                    type: _action_types.ChannelTypes.DECREMENT_UNREAD_MENTION_COUNT,
                    data: {
                      teamId: prevChannel.team_id,
                      channelId: prevChannelId,
                      amount: prevChannelMember.mention_count
                    }
                  });
                }

                if (actions.length > 0) {
                  dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                }

                return _context33.abrupt("return", {
                  data: true
                });

              case 12:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      return function (_x65, _x66) {
        return _ref33.apply(this, arguments);
      };
    }()
  );
} // Increments the number of posts in the channel by 1 and marks it as unread if necessary


function markChannelAsUnread(teamId
/*: string*/
, channelId
/*: string*/
, mentions
/*: Array<string>*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref34 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee34(dispatch, getState) {
        var state, myMembers, currentUserId, actions;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                state = getState();
                myMembers = state.entities.channels.myMembers;
                currentUserId = state.entities.users.currentUserId;
                actions = [{
                  type: _action_types.ChannelTypes.INCREMENT_TOTAL_MSG_COUNT,
                  data: {
                    channelId: channelId,
                    amount: 1
                  }
                }, {
                  type: _action_types.ChannelTypes.INCREMENT_UNREAD_MSG_COUNT,
                  data: {
                    teamId: teamId,
                    channelId: channelId,
                    amount: 1,
                    onlyMentions: myMembers[channelId] && myMembers[channelId].notify_props && myMembers[channelId].notify_props.mark_unread === _constants.General.MENTION
                  }
                }];

                if (mentions && mentions.indexOf(currentUserId) !== -1) {
                  actions.push({
                    type: _action_types.ChannelTypes.INCREMENT_UNREAD_MENTION_COUNT,
                    data: {
                      teamId: teamId,
                      channelId: channelId,
                      amount: 1
                    }
                  });
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context34.abrupt("return", {
                  data: true
                });

              case 7:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      return function (_x67, _x68) {
        return _ref34.apply(this, arguments);
      };
    }()
  );
}

function getChannelMembersByIds(channelId
/*: string*/
, userIds
/*: Array<string>*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getChannelMembersByIds,
    onSuccess: _action_types.ChannelTypes.RECEIVED_CHANNEL_MEMBERS,
    params: [channelId, userIds]
  });
}

function getChannelMember(channelId
/*: string*/
, userId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getChannelMember,
    onSuccess: _action_types.ChannelTypes.RECEIVED_CHANNEL_MEMBER,
    params: [channelId, userId]
  });
}

function getMyChannelMember(channelId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getMyChannelMember,
    onSuccess: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
    params: [channelId]
  });
}

function favoriteChannel(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref35 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee35(dispatch, getState) {
        var currentUserId, preference;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                preference
                /*: PreferenceType*/
                = {
                  user_id: currentUserId,
                  category: _constants.Preferences.CATEGORY_FAVORITE_CHANNEL,
                  name: channelId,
                  value: 'true'
                };

                _client.Client4.trackEvent('action', 'action_channels_favorite');

                return _context35.abrupt("return", (0, _preferences.savePreferences)(currentUserId, [preference])(dispatch));

              case 4:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      return function (_x69, _x70) {
        return _ref35.apply(this, arguments);
      };
    }()
  );
}

function unfavoriteChannel(channelId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref36 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee36(dispatch, getState) {
        var currentUserId, preference;
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                preference
                /*: PreferenceType*/
                = {
                  user_id: currentUserId,
                  category: _constants.Preferences.CATEGORY_FAVORITE_CHANNEL,
                  name: channelId,
                  value: ''
                };

                _client.Client4.trackEvent('action', 'action_channels_unfavorite');

                return _context36.abrupt("return", (0, _preferences.deletePreferences)(currentUserId, [preference])(dispatch, getState));

              case 4:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      return function (_x71, _x72) {
        return _ref36.apply(this, arguments);
      };
    }()
  );
}

function updateChannelScheme(channelId
/*: string*/
, schemeId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: function () {
      var _clientFunc = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee37() {
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return _client.Client4.updateChannelScheme(channelId, schemeId);

              case 2:
                return _context37.abrupt("return", {
                  channelId: channelId,
                  schemeId: schemeId
                });

              case 3:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function clientFunc() {
        return _clientFunc.apply(this, arguments);
      }

      return clientFunc;
    }(),
    onSuccess: _action_types.ChannelTypes.UPDATED_CHANNEL_SCHEME
  });
}

function updateChannelMemberSchemeRoles(channelId
/*: string*/
, userId
/*: string*/
, isSchemeUser
/*: boolean*/
, isSchemeAdmin
/*: boolean*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: function () {
      var _clientFunc2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee38() {
        return regeneratorRuntime.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return _client.Client4.updateChannelMemberSchemeRoles(channelId, userId, isSchemeUser, isSchemeAdmin);

              case 2:
                return _context38.abrupt("return", {
                  channelId: channelId,
                  userId: userId,
                  isSchemeUser: isSchemeUser,
                  isSchemeAdmin: isSchemeAdmin
                });

              case 3:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function clientFunc() {
        return _clientFunc2.apply(this, arguments);
      }

      return clientFunc;
    }(),
    onSuccess: _action_types.ChannelTypes.UPDATED_CHANNEL_MEMBER_SCHEME_ROLES
  });
}

var _default = {
  selectChannel: selectChannel,
  createChannel: createChannel,
  createDirectChannel: createDirectChannel,
  updateChannel: updateChannel,
  patchChannel: patchChannel,
  updateChannelNotifyProps: updateChannelNotifyProps,
  getChannel: getChannel,
  fetchMyChannelsAndMembers: fetchMyChannelsAndMembers,
  getMyChannelMembers: getMyChannelMembers,
  getChannelTimezones: getChannelTimezones,
  getChannelMembersByIds: getChannelMembersByIds,
  leaveChannel: leaveChannel,
  joinChannel: joinChannel,
  deleteChannel: deleteChannel,
  viewChannel: viewChannel,
  markChannelAsViewed: markChannelAsViewed,
  getChannels: getChannels,
  autocompleteChannels: autocompleteChannels,
  autocompleteChannelsForSearch: autocompleteChannelsForSearch,
  searchChannels: searchChannels,
  getChannelStats: getChannelStats,
  addChannelMember: addChannelMember,
  removeChannelMember: removeChannelMember,
  updateChannelHeader: updateChannelHeader,
  updateChannelPurpose: updateChannelPurpose,
  markChannelAsRead: markChannelAsRead,
  markChannelAsUnread: markChannelAsUnread,
  favoriteChannel: favoriteChannel,
  unfavoriteChannel: unfavoriteChannel
};
exports.default = _default;