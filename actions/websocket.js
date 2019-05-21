"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.close = close;
exports.userTyping = userTyping;

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.find");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.string.starts-with");

require("regenerator-runtime/runtime");

var _client = require("../client");

var _websocket_client = _interopRequireDefault(require("../client/websocket_client"));

var _users = require("./users");

var _channels = require("./channels");

var _posts = require("./posts");

var _teams = require("./teams");

var _action_types = require("../action_types");

var _constants = require("../constants");

var _channels2 = require("../selectors/entities/channels");

var _general = require("../selectors/entities/general");

var _posts2 = require("../selectors/entities/posts");

var _preferences = require("../selectors/entities/preferences");

var _teams2 = require("../selectors/entities/teams");

var _users2 = require("../selectors/entities/users");

var _post_utils = require("../utils/post_utils");

var _event_emitter = _interopRequireDefault(require("../utils/event_emitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var doDispatch;

function init(platform, siteUrl, token, optionalWebSocket) {
  var additionalOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var config, connUrl, authToken, websocketOpts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = (0, _general.getConfig)(getState());
                connUrl = siteUrl || config.WebsocketURL || _client.Client4.getUrl();
                authToken = token || _client.Client4.getToken(); // Set the dispatch and getState globally

                doDispatch = dispatch; // replace the protocol with a websocket one

                if (platform !== 'ios' && platform !== 'android') {
                  if (connUrl.startsWith('https:')) {
                    connUrl = connUrl.replace(/^https:/, 'wss:');
                  } else {
                    connUrl = connUrl.replace(/^http:/, 'ws:');
                  } // append a port number if one isn't already specified


                  if (!/:\d+$/.test(connUrl)) {
                    if (connUrl.startsWith('wss:')) {
                      connUrl += ':' + (config.WebsocketSecurePort || 443);
                    } else {
                      connUrl += ':' + (config.WebsocketPort || 80);
                    }
                  }
                }

                connUrl += "".concat(_client.Client4.getUrlVersion(), "/websocket");

                _websocket_client.default.setFirstConnectCallback(handleFirstConnect);

                _websocket_client.default.setEventCallback(handleEvent);

                _websocket_client.default.setReconnectCallback(handleReconnect);

                _websocket_client.default.setCloseCallback(handleClose);

                _websocket_client.default.setConnectingCallback(handleConnecting);

                websocketOpts = _objectSpread({
                  connectionUrl: connUrl,
                  platform: platform
                }, additionalOptions);

                if (optionalWebSocket) {
                  websocketOpts.webSocketConnector = optionalWebSocket;
                }

                return _context.abrupt("return", _websocket_client.default.initialize(authToken, websocketOpts));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

var reconnect = false;

function close() {
  var shouldReconnect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                reconnect = shouldReconnect;

                _websocket_client.default.close(true);

                if (dispatch) {
                  dispatch({
                    type: _action_types.GeneralTypes.WEBSOCKET_CLOSED
                  });
                }

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function doReconnect() {
  return function (dispatch, getState) {
    var state = getState();
    var currentTeamId = (0, _teams2.getCurrentTeamId)(state);
    var currentChannelId = (0, _channels2.getCurrentChannelId)(state);
    var currentUserId = (0, _users2.getCurrentUserId)(state);

    if (currentTeamId) {
      var dmPrefs = (0, _preferences.getDirectShowPreferences)(state);

      var statusesToLoad = _defineProperty({}, currentUserId, true);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dmPrefs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pref = _step.value;

          if (pref.value === 'true') {
            statusesToLoad[pref.name] = true;
          }
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

      dispatch((0, _users.getStatusesByIds)(Object.keys(statusesToLoad)));
      dispatch((0, _channels.fetchMyChannelsAndMembers)(currentTeamId)).then(function (_ref3) {
        var data = _ref3.data;
        dispatch((0, _users.loadProfilesForDirect)());

        if (data && data.members) {
          var stillMemberOfCurrentChannel = data.members.find(function (m) {
            return m.channel_id === currentChannelId;
          });

          if (!stillMemberOfCurrentChannel) {
            _event_emitter.default.emit(_constants.General.SWITCH_TO_DEFAULT_CHANNEL, currentTeamId);
          }
        }
      });
      dispatch((0, _posts.getPosts)(currentChannelId));
      dispatch((0, _teams.getMyTeamUnreads)());
      var myTeamMembers = (0, _teams2.getTeamMemberships)(getState());

      if (!myTeamMembers[currentTeamId]) {
        // If the user is no longer a member of this team when reconnecting
        var newMsg = {
          data: {
            user_id: currentUserId,
            team_id: currentTeamId
          }
        };
        dispatch(handleLeaveTeamEvent(newMsg));
      }
    }

    dispatch({
      type: _action_types.GeneralTypes.WEBSOCKET_SUCCESS
    });
  };
}

function handleConnecting() {
  doDispatch({
    type: _action_types.GeneralTypes.WEBSOCKET_REQUEST
  });
}

function handleFirstConnect() {
  if (reconnect) {
    reconnect = false;
    doDispatch(doReconnect());
  } else {
    doDispatch({
      type: _action_types.GeneralTypes.WEBSOCKET_SUCCESS
    });
  }
}

function handleReconnect() {
  doDispatch(doReconnect());
}

function handleClose(connectFailCount) {
  doDispatch({
    type: _action_types.GeneralTypes.WEBSOCKET_FAILURE,
    error: connectFailCount
  });
}

function handleEvent(msg) {
  switch (msg.event) {
    case _constants.WebsocketEvents.POSTED:
    case _constants.WebsocketEvents.EPHEMERAL_MESSAGE:
      doDispatch(handleNewPostEvent(msg));
      break;

    case _constants.WebsocketEvents.POST_EDITED:
      doDispatch(handlePostEdited(msg));
      break;

    case _constants.WebsocketEvents.POST_DELETED:
      doDispatch(handlePostDeleted(msg));
      break;

    case _constants.WebsocketEvents.LEAVE_TEAM:
      doDispatch(handleLeaveTeamEvent(msg));
      break;

    case _constants.WebsocketEvents.UPDATE_TEAM:
      doDispatch(handleUpdateTeamEvent(msg));
      break;

    case _constants.WebsocketEvents.PATCH_TEAM:
      doDispatch(handlePatchTeamEvent(msg));
      break;

    case _constants.WebsocketEvents.ADDED_TO_TEAM:
      doDispatch(handleTeamAddedEvent(msg));
      break;

    case _constants.WebsocketEvents.USER_ADDED:
      doDispatch(handleUserAddedEvent(msg));
      break;

    case _constants.WebsocketEvents.USER_REMOVED:
      doDispatch(handleUserRemovedEvent(msg));
      break;

    case _constants.WebsocketEvents.USER_UPDATED:
      doDispatch(handleUserUpdatedEvent(msg));
      break;

    case _constants.WebsocketEvents.ROLE_ADDED:
      doDispatch(handleRoleAddedEvent(msg));
      break;

    case _constants.WebsocketEvents.ROLE_REMOVED:
      doDispatch(handleRoleRemovedEvent(msg));
      break;

    case _constants.WebsocketEvents.ROLE_UPDATED:
      doDispatch(handleRoleUpdatedEvent(msg));
      break;

    case _constants.WebsocketEvents.CHANNEL_CREATED:
      doDispatch(handleChannelCreatedEvent(msg));
      break;

    case _constants.WebsocketEvents.CHANNEL_DELETED:
      doDispatch(handleChannelDeletedEvent(msg));
      break;

    case _constants.WebsocketEvents.CHANNEL_UPDATED:
      doDispatch(handleChannelUpdatedEvent(msg));
      break;

    case _constants.WebsocketEvents.CHANNEL_CONVERTED:
      doDispatch(handleChannelConvertedEvent(msg));
      break;

    case _constants.WebsocketEvents.CHANNEL_VIEWED:
      doDispatch(handleChannelViewedEvent(msg));
      break;

    case _constants.WebsocketEvents.CHANNEL_MEMBER_UPDATED:
      doDispatch(handleChannelMemberUpdatedEvent(msg));
      break;

    case _constants.WebsocketEvents.DIRECT_ADDED:
      doDispatch(handleDirectAddedEvent(msg));
      break;

    case _constants.WebsocketEvents.PREFERENCE_CHANGED:
      doDispatch(handlePreferenceChangedEvent(msg));
      break;

    case _constants.WebsocketEvents.PREFERENCES_CHANGED:
      doDispatch(handlePreferencesChangedEvent(msg));
      break;

    case _constants.WebsocketEvents.PREFERENCES_DELETED:
      doDispatch(handlePreferencesDeletedEvent(msg));
      break;

    case _constants.WebsocketEvents.STATUS_CHANGED:
      doDispatch(handleStatusChangedEvent(msg));
      break;

    case _constants.WebsocketEvents.TYPING:
      doDispatch(handleUserTypingEvent(msg));
      break;

    case _constants.WebsocketEvents.HELLO:
      handleHelloEvent(msg);
      break;

    case _constants.WebsocketEvents.REACTION_ADDED:
      doDispatch(handleReactionAddedEvent(msg));
      break;

    case _constants.WebsocketEvents.REACTION_REMOVED:
      doDispatch(handleReactionRemovedEvent(msg));
      break;

    case _constants.WebsocketEvents.EMOJI_ADDED:
      doDispatch(handleAddEmoji(msg));
      break;

    case _constants.WebsocketEvents.LICENSE_CHANGED:
      doDispatch(handleLicenseChangedEvent(msg));
      break;

    case _constants.WebsocketEvents.CONFIG_CHANGED:
      doDispatch(handleConfigChangedEvent(msg));
      break;

    case _constants.WebsocketEvents.PLUGIN_STATUSES_CHANGED:
      doDispatch(handlePluginStatusesChangedEvent(msg));
      break;

    case _constants.WebsocketEvents.OPEN_DIALOG:
      doDispatch(handleOpenDialogEvent(msg));
      break;
  }
}

function handleNewPostEvent(msg) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        var post;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                post = JSON.parse(msg.data.post);
                dispatch((0, _posts.handleNewPost)(msg));
                (0, _posts.getProfilesAndStatusesForPosts)([post], dispatch, getState);

                if (post.user_id !== (0, _users2.getCurrentUserId)(getState()) && !(0, _post_utils.fromAutoResponder)(post)) {
                  dispatch({
                    type: _action_types.UserTypes.RECEIVED_STATUSES,
                    data: [{
                      user_id: post.user_id,
                      status: _constants.General.ONLINE
                    }]
                  });
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x4, _x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function handlePostEdited(msg) {
  return function (dispatch, getState) {
    var data = JSON.parse(msg.data.post);
    (0, _posts.getProfilesAndStatusesForPosts)([data], dispatch, getState);
    dispatch({
      type: _action_types.PostTypes.RECEIVED_POST,
      data: data
    });
  };
}

function handlePostDeleted(msg) {
  var data = JSON.parse(msg.data.post);
  return {
    type: _action_types.PostTypes.POST_DELETED,
    data: data
  };
}

function handleLeaveTeamEvent(msg) {
  return function (dispatch, getState) {
    var state = getState();
    var teams = (0, _teams2.getTeams)(state);
    var currentTeamId = (0, _teams2.getCurrentTeamId)(state);
    var currentUserId = (0, _users2.getCurrentUserId)(state);

    if (currentUserId === msg.data.user_id) {
      dispatch({
        type: _action_types.TeamTypes.LEAVE_TEAM,
        data: teams[msg.data.team_id]
      }); // if they are on the team being removed deselect the current team and channel

      if (currentTeamId === msg.data.team_id) {
        _event_emitter.default.emit('leave_team');
      }
    }
  };
}

function handleUpdateTeamEvent(msg) {
  return {
    type: _action_types.TeamTypes.UPDATED_TEAM,
    data: JSON.parse(msg.data.team)
  };
}

function handlePatchTeamEvent(msg) {
  return {
    type: _action_types.TeamTypes.PATCHED_TEAM,
    data: JSON.parse(msg.data.team)
  };
}

function handleTeamAddedEvent(msg) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Promise.all([dispatch((0, _teams.getTeam)(msg.data.team_id)), dispatch((0, _teams.getMyTeamUnreads)())]);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

function handleUserAddedEvent(msg) {
  return function (dispatch, getState) {
    var state = getState();
    var currentChannelId = (0, _channels2.getCurrentChannelId)(state);
    var currentTeamId = (0, _teams2.getCurrentTeamId)(state);
    var currentUserId = (0, _users2.getCurrentUserId)(state);
    var teamId = msg.data.team_id;
    dispatch({
      type: _action_types.ChannelTypes.CHANNEL_MEMBER_ADDED,
      data: {
        channel_id: msg.broadcast.channel_id,
        user_id: msg.data.user_id
      }
    }, getState);

    if (msg.broadcast.channel_id === currentChannelId) {
      dispatch((0, _channels.getChannelStats)(teamId, currentChannelId));
    }

    if (teamId === currentTeamId && msg.data.user_id === currentUserId) {
      dispatch((0, _channels.getChannelAndMyMember)(msg.broadcast.channel_id));
    }
  };
}

function handleUserRemovedEvent(msg) {
  return function (dispatch, getState) {
    var state = getState();
    var channels = (0, _channels2.getAllChannels)(state);
    var currentChannelId = (0, _channels2.getCurrentChannelId)(state);
    var currentTeamId = (0, _teams2.getCurrentTeamId)(state);
    var currentUserId = (0, _users2.getCurrentUserId)(state);
    dispatch({
      type: _action_types.ChannelTypes.CHANNEL_MEMBER_REMOVED,
      data: {
        channel_id: msg.broadcast.channel_id,
        user_id: msg.data.user_id
      }
    }, getState);

    if (msg.broadcast.user_id === currentUserId && currentTeamId) {
      var channel = channels[currentChannelId];
      dispatch((0, _channels.fetchMyChannelsAndMembers)(currentTeamId));

      if (channel) {
        dispatch({
          type: _action_types.ChannelTypes.LEAVE_CHANNEL,
          data: {
            id: msg.data.channel_id,
            user_id: currentUserId,
            team_id: channel.team_id,
            type: channel.type
          }
        });
      }

      if (msg.data.channel_id === currentChannelId) {
        // emit the event so the client can change his own state
        _event_emitter.default.emit(_constants.General.SWITCH_TO_DEFAULT_CHANNEL, currentTeamId);
      }
    } else if (msg.data.channel_id === currentChannelId) {
      dispatch((0, _channels.getChannelStats)(currentTeamId, currentChannelId));
    }
  };
}

function handleUserUpdatedEvent(msg) {
  return function (dispatch, getState) {
    var currentUser = (0, _users2.getCurrentUser)(getState());
    var user = msg.data.user;

    if (user.id === currentUser.id) {
      if (user.update_at > currentUser.update_at) {
        // Need to request me to make sure we don't override with sanitized fields from the
        // websocket event
        dispatch((0, _users.getMe)());
      }
    } else {
      dispatch({
        type: _action_types.UserTypes.RECEIVED_PROFILES,
        data: _defineProperty({}, user.id, user)
      });
    }
  };
}

function handleRoleAddedEvent(msg) {
  var role = JSON.parse(msg.data.role);
  return {
    type: _action_types.RoleTypes.RECEIVED_ROLE,
    data: role
  };
}

function handleRoleRemovedEvent(msg) {
  var role = JSON.parse(msg.data.role);
  return {
    type: _action_types.RoleTypes.ROLE_DELETED,
    data: role
  };
}

function handleRoleUpdatedEvent(msg) {
  var role = JSON.parse(msg.data.role);
  return {
    type: _action_types.RoleTypes.RECEIVED_ROLE,
    data: role
  };
}

function handleChannelCreatedEvent(msg) {
  return function (dispatch, getState) {
    var _msg$data = msg.data,
        channelId = _msg$data.channel_id,
        teamId = _msg$data.team_id;
    var state = getState();
    var channels = (0, _channels2.getAllChannels)(state);
    var currentTeamId = (0, _teams2.getCurrentTeamId)(state);

    if (teamId === currentTeamId && !channels[channelId]) {
      dispatch((0, _channels.getChannelAndMyMember)(channelId));
    }
  };
}

function handleChannelDeletedEvent(msg) {
  return function (dispatch, getState) {
    var state = getState();
    var channels = (0, _channels2.getAllChannels)(state);
    var channelsInTeam = (0, _channels2.getChannelsInTeam)(state);
    var currentChannelId = (0, _channels2.getCurrentChannelId)(state);
    var currentTeamId = (0, _teams2.getCurrentTeamId)(state);
    var config = (0, _general.getConfig)(state);
    var viewArchivedChannels = config.ExperimentalViewArchivedChannels === 'true';

    if (msg.broadcast.team_id === currentTeamId) {
      if (msg.data.channel_id === currentChannelId && !viewArchivedChannels) {
        var channelId = '';
        var teamChannels = Array.from(channelsInTeam[currentTeamId]);
        var channel = teamChannels.filter(function (key) {
          return channels[key].name === _constants.General.DEFAULT_CHANNEL;
        });

        if (channel.length) {
          channelId = channel[0];
        }

        dispatch({
          type: _action_types.ChannelTypes.SELECT_CHANNEL,
          data: channelId
        });

        _event_emitter.default.emit(_constants.General.DEFAULT_CHANNEL, '');
      }

      dispatch({
        type: _action_types.ChannelTypes.RECEIVED_CHANNEL_DELETED,
        data: {
          id: msg.data.channel_id,
          team_id: msg.data.team_id,
          deleteAt: msg.data.delete_at,
          viewArchivedChannels: viewArchivedChannels
        }
      }, getState);
      dispatch((0, _channels.fetchMyChannelsAndMembers)(currentTeamId));
    }
  };
}

function handleChannelUpdatedEvent(msg) {
  return function (dispatch, getState) {
    var channel;

    try {
      channel = msg.data ? JSON.parse(msg.data.channel) : null;
    } catch (err) {
      return;
    }

    var currentChannelId = (0, _channels2.getCurrentChannelId)(getState());

    if (channel) {
      dispatch({
        type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
        data: channel
      });

      if (currentChannelId === channel.id) {
        // Emit an event with the channel received as we need to handle
        // the changes without listening to the store
        _event_emitter.default.emit(_constants.WebsocketEvents.CHANNEL_UPDATED, channel);
      }
    }
  };
} // handleChannelConvertedEvent handles updating of channel which is converted from public to private


function handleChannelConvertedEvent(msg) {
  return function (dispatch, getState) {
    var channelId = msg.data.channel_id;

    if (channelId) {
      var channel = (0, _channels2.getChannel)(getState(), channelId);

      if (channel) {
        dispatch({
          type: _action_types.ChannelTypes.RECEIVED_CHANNEL,
          data: _objectSpread({}, channel, {
            type: _constants.General.PRIVATE_CHANNEL
          })
        });
      }
    }
  };
}

function handleChannelViewedEvent(msg) {
  return function (dispatch, getState) {
    var state = getState();
    var channelId = msg.data.channel_id;
    var currentChannelId = (0, _channels2.getCurrentChannelId)(state);
    var currentUserId = (0, _users2.getCurrentUserId)(state);

    if (channelId !== currentChannelId && currentUserId === msg.broadcast.user_activity) {
      dispatch((0, _channels.markChannelAsRead)(channelId, null, false));
    }
  };
}

function handleChannelMemberUpdatedEvent(msg) {
  var channelMember = JSON.parse(msg.data.channelMember);
  return {
    type: _action_types.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER,
    data: channelMember
  };
}

function handleDirectAddedEvent(msg) {
  return function (dispatch) {
    dispatch((0, _channels.getChannelAndMyMember)(msg.broadcast.channel_id));
  };
}

function handlePreferenceChangedEvent(msg) {
  return function (dispatch) {
    var preference = JSON.parse(msg.data.preference);
    dispatch({
      type: _action_types.PreferenceTypes.RECEIVED_PREFERENCES,
      data: [preference]
    });
    dispatch(getAddedDmUsersIfNecessary([preference]));
  };
}

function handlePreferencesChangedEvent(msg) {
  return function (dispatch, getState) {
    var preferences = JSON.parse(msg.data.preferences);
    var posts = (0, _posts2.getAllPosts)(getState());
    preferences.forEach(function (pref) {
      if (pref.category === _constants.Preferences.CATEGORY_FLAGGED_POST && !posts[pref.name]) {
        dispatch((0, _posts.getPost)(pref.name));
      }
    });
    dispatch(getAddedDmUsersIfNecessary(preferences));
    dispatch({
      type: _action_types.PreferenceTypes.RECEIVED_PREFERENCES,
      data: preferences
    });
  };
}

function handlePreferencesDeletedEvent(msg) {
  var preferences = JSON.parse(msg.data.preferences);
  return {
    type: _action_types.PreferenceTypes.DELETED_PREFERENCES,
    data: preferences
  };
}

function handleStatusChangedEvent(msg) {
  return {
    type: _action_types.UserTypes.RECEIVED_STATUSES,
    data: [{
      user_id: msg.data.user_id,
      status: msg.data.status
    }]
  };
}

function handleHelloEvent(msg) {
  var serverVersion = msg.data.server_version;

  if (serverVersion && _client.Client4.serverVersion !== serverVersion) {
    _client.Client4.serverVersion = serverVersion;

    _event_emitter.default.emit(_constants.General.SERVER_VERSION_CHANGED, serverVersion);
  }
}

function handleUserTypingEvent(msg) {
  return function (dispatch, getState) {
    var state = getState();
    var profiles = (0, _users2.getUsers)(state);
    var statuses = (0, _users2.getUserStatuses)(state);
    var currentUserId = (0, _users2.getCurrentUserId)(state);
    var config = (0, _general.getConfig)(state);
    var userId = msg.data.user_id;
    var data = {
      id: msg.broadcast.channel_id + msg.data.parent_id,
      userId: userId,
      now: Date.now()
    };
    dispatch({
      type: _constants.WebsocketEvents.TYPING,
      data: data
    });
    setTimeout(function () {
      dispatch({
        type: _constants.WebsocketEvents.STOP_TYPING,
        data: data
      });
    }, parseInt(config.TimeBetweenUserTypingUpdatesMilliseconds, 10));

    if (!profiles[userId] && userId !== currentUserId) {
      dispatch((0, _users.getProfilesByIds)([userId]));
    }

    var status = statuses[userId];

    if (status !== _constants.General.ONLINE) {
      dispatch((0, _users.getStatusesByIds)([userId]));
    }
  };
}

function handleReactionAddedEvent(msg) {
  return function (dispatch) {
    var data = msg.data;
    var reaction = JSON.parse(data.reaction);
    dispatch((0, _posts.getCustomEmojiForReaction)(reaction.emoji_name));
    dispatch({
      type: _action_types.PostTypes.RECEIVED_REACTION,
      data: reaction
    });
  };
}

function handleReactionRemovedEvent(msg) {
  var data = msg.data;
  var reaction = JSON.parse(data.reaction);
  return {
    type: _action_types.PostTypes.REACTION_DELETED,
    data: reaction
  };
}

function handleAddEmoji(msg) {
  var data = JSON.parse(msg.data.emoji);
  return {
    type: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJI,
    data: data
  };
}

function handleLicenseChangedEvent(msg) {
  var data = msg.data.license;
  return {
    type: _action_types.GeneralTypes.CLIENT_LICENSE_RECEIVED,
    data: data
  };
}

function handleConfigChangedEvent(msg) {
  var data = msg.data.config;

  _event_emitter.default.emit(_constants.General.CONFIG_CHANGED, data);

  return {
    type: _action_types.GeneralTypes.CLIENT_CONFIG_RECEIVED,
    data: data
  };
}

function handlePluginStatusesChangedEvent(msg) {
  var data = msg.data;
  return {
    type: _action_types.AdminTypes.RECEIVED_PLUGIN_STATUSES,
    data: data.plugin_statuses
  };
}

function handleOpenDialogEvent(msg) {
  return function (dispatch) {
    var data = msg.data && msg.data.dialog || {};
    dispatch({
      type: _action_types.IntegrationTypes.RECEIVED_DIALOG,
      data: JSON.parse(data)
    });
  };
} // Helpers


function getAddedDmUsersIfNecessary(preferences) {
  return function (dispatch, getState) {
    var userIds = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = preferences[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var preference = _step2.value;

        if (preference.category === _constants.Preferences.CATEGORY_DIRECT_CHANNEL_SHOW && preference.value === 'true') {
          userIds.push(preference.name);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (userIds.length === 0) {
      return;
    }

    var state = getState();
    var profiles = (0, _users2.getUsers)(state);
    var statuses = (0, _users2.getUserStatuses)(state);
    var currentUserId = (0, _users2.getCurrentUserId)(state);
    var needProfiles = [];
    var needStatuses = [];

    for (var _i = 0; _i < userIds.length; _i++) {
      var userId = userIds[_i];

      if (!profiles[userId] && userId !== currentUserId) {
        needProfiles.push(userId);
      }

      if (statuses[userId] !== _constants.General.ONLINE) {
        needStatuses.push(userId);
      }
    }

    if (needProfiles.length > 0) {
      dispatch((0, _users.getProfilesByIds)(needProfiles));
    }

    if (needStatuses.length > 0) {
      dispatch((0, _users.getStatusesByIds)(needStatuses));
    }
  };
}

var lastTimeTypingSent = 0;

function userTyping(channelId, parentPostId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch, getState) {
        var state, config, t, stats, membersInChannel;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                state = getState();
                config = (0, _general.getConfig)(state);
                t = Date.now();
                stats = (0, _channels2.getCurrentChannelStats)(state);
                membersInChannel = stats ? stats.member_count : 0;

                if (t - lastTimeTypingSent > config.TimeBetweenUserTypingUpdatesMilliseconds && membersInChannel < config.MaxNotificationsPerChannel && config.EnableUserTypingMessages === 'true') {
                  _websocket_client.default.userTyping(channelId, parentPostId);

                  lastTimeTypingSent = t;
                }

                return _context5.abrupt("return", {
                  data: true
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}