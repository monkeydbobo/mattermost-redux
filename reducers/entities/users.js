"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _redux = require("redux");

var _action_types = require("../../action_types");

var _user_utils = require("../../utils/user_utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function profilesToSet(state, action) {
  var id = action.id;
  var nextSet = new Set(state[id]);
  Object.keys(action.data).forEach(function (key) {
    nextSet.add(key);
  });
  return _objectSpread({}, state, _defineProperty({}, id, nextSet));
}

function profileListToSet(state, action) {
  var id = action.id;
  var nextSet = new Set(state[id]);

  if (action.data) {
    action.data.forEach(function (profile) {
      nextSet.add(profile.id);
    });
    return _objectSpread({}, state, _defineProperty({}, id, nextSet));
  }

  return state;
}

function removeProfileListFromSet(state, action) {
  var id = action.id;
  var nextSet = new Set(state[id]);

  if (action.data) {
    action.data.forEach(function (profile) {
      nextSet.delete(profile.id);
    });
    return _objectSpread({}, state, _defineProperty({}, id, nextSet));
  }

  return state;
}

function addProfileToSet(state, action) {
  var _action$data = action.data,
      id = _action$data.id,
      userId = _action$data.user_id;
  var nextSet = new Set(state[id]);
  nextSet.add(userId);
  return _objectSpread({}, state, _defineProperty({}, id, nextSet));
}

function removeProfileFromSet(state, action) {
  var _action$data2 = action.data,
      id = _action$data2.id,
      userId = _action$data2.user_id;
  var nextSet = new Set(state[id]);
  nextSet.delete(userId);
  return _objectSpread({}, state, _defineProperty({}, id, nextSet));
}

function currentUserId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_ME:
      {
        var data = action.data || action.payload;
        return data.id;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return '';
  }

  return state;
}

function myAcceptedTermsOfServiceData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    id: '',
    time: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_TERMS_OF_SERVICE_STATUS:
      return {
        id: action.data.terms_of_service_id,
        time: action.data.create_at
      };

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {
        id: '',
        time: 0
      };

    default:
      return state;
  }
}

function mySessions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_SESSIONS:
      return _toConsumableArray(action.data);

    case _action_types.UserTypes.RECEIVED_REVOKED_SESSION:
      {
        var index = -1;
        var length = state.length;

        for (var i = 0; i < length; i++) {
          if (state[i].id === action.sessionId) {
            index = i;
            break;
          }
        }

        if (index > -1) {
          return state.slice(0, index).concat(state.slice(index + 1));
        }

        return state;
      }

    case _action_types.UserTypes.REVOKE_ALL_USER_SESSIONS_SUCCESS:
      if (action.data.isCurrentUser === true) {
        return [];
      }

      return state;

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return [];

    default:
      return state;
  }
}

function myAudits() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_AUDITS:
      return _toConsumableArray(action.data);

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return [];

    default:
      return state;
  }
}

function profiles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_ME:
    case _action_types.UserTypes.RECEIVED_PROFILE:
      {
        var data = action.data || action.payload;
        return _objectSpread({}, state, _defineProperty({}, data.id, _objectSpread({}, data)));
      }

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST:
      return Object.assign({}, state, (0, _user_utils.profileListToMap)(action.data));

    case _action_types.UserTypes.RECEIVED_PROFILES:
      return Object.assign({}, state, action.data);

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function profilesInTeam() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_PROFILE_IN_TEAM:
      return addProfileToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST_IN_TEAM:
      return profileListToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_IN_TEAM:
      return profilesToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILE_NOT_IN_TEAM:
      return removeProfileFromSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST_NOT_IN_TEAM:
      return removeProfileListFromSet(state, action);

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function profilesNotInTeam() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_PROFILE_NOT_IN_TEAM:
      return addProfileToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST_NOT_IN_TEAM:
      return profileListToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILE_IN_TEAM:
      return removeProfileFromSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST_IN_TEAM:
      return removeProfileListFromSet(state, action);

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function profilesWithoutTeam() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_PROFILE_WITHOUT_TEAM:
      {
        var nextSet = new Set(state);
        Object.values(action.data).forEach(function (id) {
          return nextSet.add(id);
        });
        return nextSet;
      }

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST_WITHOUT_TEAM:
      {
        var _nextSet = new Set(state);

        action.data.forEach(function (user) {
          return _nextSet.add(user.id);
        });
        return _nextSet;
      }

    case _action_types.UserTypes.RECEIVED_PROFILE_IN_TEAM:
      {
        var _nextSet2 = new Set(state);

        _nextSet2.delete(action.data.id);

        return _nextSet2;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return new Set();

    default:
      return state;
  }
}

function profilesInChannel() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_PROFILE_IN_CHANNEL:
      return addProfileToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST_IN_CHANNEL:
      return profileListToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_IN_CHANNEL:
      return profilesToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILE_NOT_IN_CHANNEL:
      return removeProfileFromSet(state, action);

    case _action_types.ChannelTypes.CHANNEL_MEMBER_REMOVED:
      return removeProfileFromSet(state, {
        data: {
          id: action.data.channel_id,
          user_id: action.data.user_id
        }
      });

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function profilesNotInChannel() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_PROFILE_NOT_IN_CHANNEL:
      return addProfileToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_LIST_NOT_IN_CHANNEL:
      return profileListToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILES_NOT_IN_CHANNEL:
      return profilesToSet(state, action);

    case _action_types.UserTypes.RECEIVED_PROFILE_IN_CHANNEL:
      return removeProfileFromSet(state, action);

    case _action_types.ChannelTypes.CHANNEL_MEMBER_ADDED:
      return removeProfileFromSet(state, {
        data: {
          id: action.data.channel_id,
          user_id: action.data.user_id
        }
      });

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function statuses() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_STATUS:
      {
        var nextState = Object.assign({}, state);
        nextState[action.data.user_id] = action.data.status;
        return nextState;
      }

    case _action_types.UserTypes.RECEIVED_STATUSES:
      {
        var _nextState = Object.assign({}, state);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = action.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;
            _nextState[s.user_id] = s.status;
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

        return _nextState;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function myUserAccessTokens() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_MY_USER_ACCESS_TOKEN:
      {
        var nextState = _objectSpread({}, state);

        nextState[action.data.id] = action.data;
        return nextState;
      }

    case _action_types.UserTypes.RECEIVED_MY_USER_ACCESS_TOKENS:
      {
        var _nextState2 = _objectSpread({}, state);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = action.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var uat = _step2.value;
            _nextState2[uat.id] = uat;
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

        return _nextState2;
      }

    case _action_types.UserTypes.REVOKED_USER_ACCESS_TOKEN:
      {
        var _nextState3 = _objectSpread({}, state);

        Reflect.deleteProperty(_nextState3, action.data);
        return _nextState3;
      }

    case _action_types.UserTypes.ENABLED_USER_ACCESS_TOKEN:
      {
        if (state[action.data]) {
          var _nextState4 = _objectSpread({}, state);

          _nextState4[action.data] = _objectSpread({}, _nextState4[action.data], {
            is_active: true
          });
          return _nextState4;
        }

        return state;
      }

    case _action_types.UserTypes.DISABLED_USER_ACCESS_TOKEN:
      {
        if (state[action.data]) {
          var _nextState5 = _objectSpread({}, state);

          _nextState5[action.data] = _objectSpread({}, _nextState5[action.data], {
            is_active: false
          });
          return _nextState5;
        }

        return state;
      }

    case _action_types.UserTypes.CLEAR_MY_USER_ACCESS_TOKENS:
    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function stats() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.UserTypes.RECEIVED_USER_STATS:
      {
        var stat = action.data;
        return _objectSpread({}, state, stat);
      }

    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  // the current selected user
  currentUserId: currentUserId,
  // the current user's accepted terms of service id and acceptance timestamp
  myAcceptedTermsOfServiceData: myAcceptedTermsOfServiceData,
  // array with the user's sessions
  mySessions: mySessions,
  // array with the user's audits
  myAudits: myAudits,
  // object where every key is the token id and has a user access token as a value
  myUserAccessTokens: myUserAccessTokens,
  // object where every key is a user id and has an object with the users details
  profiles: profiles,
  // object where every key is a team id and has a Set with the users id that are members of the team
  profilesInTeam: profilesInTeam,
  // object where every key is a team id and has a Set with the users id that are not members of the team
  profilesNotInTeam: profilesNotInTeam,
  // set with user ids for users that are not on any team
  profilesWithoutTeam: profilesWithoutTeam,
  // object where every key is a channel id and has a Set with the users id that are members of the channel
  profilesInChannel: profilesInChannel,
  // object where every key is a channel id and has a Set with the users id that are not members of the channel
  profilesNotInChannel: profilesNotInChannel,
  // object where every key is the user id and has a value with the current status of each user
  statuses: statuses,
  // Total user stats
  stats: stats
});

exports.default = _default;