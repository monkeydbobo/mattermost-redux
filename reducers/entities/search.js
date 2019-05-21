"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _redux = require("redux");

var _action_types = require("../../action_types");

var _constants = require("../../constants");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function results() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.SearchTypes.RECEIVED_SEARCH_POSTS:
      {
        if (action.isGettingMore) {
          return _toConsumableArray(new Set(state.concat(action.data.order)));
        }

        return action.data.order;
      }

    case _action_types.PostTypes.REMOVE_POST:
      {
        var postId = action.data ? action.data.id : null;
        var index = state.indexOf(postId);

        if (index !== -1) {
          var newState = _toConsumableArray(state);

          newState.splice(index, 1);
          return newState;
        }

        return state;
      }

    case _action_types.SearchTypes.REMOVE_SEARCH_POSTS:
    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return [];

    default:
      return state;
  }
}

function matches() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.SearchTypes.RECEIVED_SEARCH_POSTS:
      if (action.isGettingMore) {
        return Object.assign({}, state, action.data.matches);
      }

      return action.data.matches || {};

    case _action_types.PostTypes.REMOVE_POST:
      {
        if (!state[action.data.id]) {
          return state;
        }

        var newState = _objectSpread({}, state);

        Reflect.deleteProperty(newState, action.data.id);
        return newState;
      }

    case _action_types.SearchTypes.REMOVE_SEARCH_POSTS:
    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return [];

    default:
      return state;
  }
}

function flagged() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.SearchTypes.RECEIVED_SEARCH_FLAGGED_POSTS:
      {
        return action.data.order;
      }

    case _action_types.PostTypes.REMOVE_POST:
      {
        var postId = action.data ? action.data.id : null;
        var index = state.indexOf(postId);

        if (index !== -1) {
          var newState = _toConsumableArray(state);

          newState.splice(index, 1);
          return newState;
        }

        return state;
      }

    case _action_types.PreferenceTypes.RECEIVED_PREFERENCES:
      {
        if (action.data) {
          var nextState = _toConsumableArray(state);

          var hasNewFlaggedPosts = false;
          action.data.forEach(function (pref) {
            if (pref.category === _constants.Preferences.CATEGORY_FLAGGED_POST) {
              var exists = nextState.find(function (p) {
                return p === pref.name;
              });

              if (!exists) {
                hasNewFlaggedPosts = true;
                nextState.unshift(pref.name);
              }
            }
          });
          return hasNewFlaggedPosts ? nextState : state;
        }

        return state;
      }

    case _action_types.PreferenceTypes.DELETED_PREFERENCES:
      {
        if (action.data) {
          var _nextState = _toConsumableArray(state);

          var flaggedPostsRemoved = false;
          action.data.forEach(function (pref) {
            if (pref.category === _constants.Preferences.CATEGORY_FLAGGED_POST) {
              var _index = state.indexOf(pref.name);

              if (_index !== -1) {
                flaggedPostsRemoved = true;

                _nextState.splice(_index, 1);
              }
            }
          });
          return flaggedPostsRemoved ? _nextState : state;
        }

        return state;
      }

    case _action_types.SearchTypes.REMOVE_SEARCH_POSTS:
    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return [];

    default:
      return state;
  }
}

function removePinnedPost(state, post) {
  if (post && state[post.channel_id]) {
    var postId = post.id;
    var channelId = post.channel_id;

    var pinnedPosts = _toConsumableArray(state[channelId]);

    var index = pinnedPosts.indexOf(postId);

    if (index !== -1) {
      pinnedPosts.splice(index, 1);
      return _objectSpread({}, state, _defineProperty({}, channelId, pinnedPosts));
    }
  }

  return state;
}

function pinned() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.SearchTypes.RECEIVED_SEARCH_PINNED_POSTS:
      {
        var _action$data = action.data,
            channelId = _action$data.channelId,
            posts = _action$data.pinned;
        return _objectSpread({}, state, _defineProperty({}, channelId, posts.order.reverse()));
      }

    case _action_types.PostTypes.POST_DELETED:
    case _action_types.PostTypes.REMOVE_POST:
      {
        return removePinnedPost(state, action.data);
      }

    case _action_types.PostTypes.RECEIVED_POST:
      {
        var post = action.data;

        if (post && post.is_pinned) {
          var _channelId = post.channel_id;
          var pinnedPosts = [];

          if (state[_channelId]) {
            pinnedPosts = _toConsumableArray(state[_channelId]);
          }

          pinnedPosts.unshift(post.id);
          return _objectSpread({}, state, _defineProperty({}, _channelId, pinnedPosts));
        }

        return removePinnedPost(state, action.data);
      }

    case _action_types.SearchTypes.REMOVE_SEARCH_PINNED_POSTS:
      {
        var _channelId2 = action.data.channelId;

        var nextState = _objectSpread({}, state);

        if (nextState[_channelId2]) {
          Reflect.deleteProperty(nextState, _channelId2);
          return nextState;
        }

        return state;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return [];

    default:
      return state;
  }
}

function recent() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case _action_types.SearchTypes.RECEIVED_SEARCH_TERM:
      {
        var nextState = _objectSpread({}, state);

        var teamId = data.teamId,
            params = data.params;

        var _ref = params || {},
            terms = _ref.terms,
            isOrSearch = _ref.isOrSearch;

        var team = _toConsumableArray(nextState[teamId] || []);

        var index = team.findIndex(function (r) {
          return r.terms === terms;
        });

        if (index === -1) {
          team.push({
            terms: terms,
            isOrSearch: isOrSearch
          });
        } else {
          team[index] = {
            terms: terms,
            isOrSearch: isOrSearch
          };
        }

        return _objectSpread({}, nextState, _defineProperty({}, teamId, team));
      }

    case _action_types.SearchTypes.REMOVE_SEARCH_TERM:
      {
        var _nextState2 = _objectSpread({}, state);

        var _teamId = data.teamId,
            _terms = data.terms;

        var _team = _toConsumableArray(_nextState2[_teamId] || []);

        var _index2 = _team.findIndex(function (r) {
          return r.terms === _terms;
        });

        if (_index2 !== -1) {
          _team.splice(_index2, 1);

          return _objectSpread({}, _nextState2, _defineProperty({}, _teamId, _team));
        }

        return _nextState2;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function current() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case _action_types.SearchTypes.RECEIVED_SEARCH_TERM:
      {
        var nextState = _objectSpread({}, state);

        var teamId = data.teamId,
            params = data.params,
            isEnd = data.isEnd;
        return _objectSpread({}, nextState, _defineProperty({}, teamId, {
          params: params,
          isEnd: isEnd
        }));
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function isSearchingTerm() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.SearchTypes.SEARCH_POSTS_REQUEST:
      return !action.isGettingMore;

    case _action_types.SearchTypes.SEARCH_POSTS_FAILURE:
    case _action_types.SearchTypes.SEARCH_POSTS_SUCCESS:
      return false;

    default:
      return state;
  }
}

function isSearchGettingMore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.SearchTypes.SEARCH_POSTS_REQUEST:
      return action.isGettingMore;

    case _action_types.SearchTypes.SEARCH_POSTS_FAILURE:
    case _action_types.SearchTypes.SEARCH_POSTS_SUCCESS:
      return false;

    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  // An ordered array with posts ids of flagged posts
  flagged: flagged,
  // An Object where every key is a channel id mapping to an ordered array with posts ids of pinned posts
  pinned: pinned,
  // An ordered array with posts ids from the search results
  results: results,
  // Object where every key is a post id mapping to an array of matched words in that post
  matches: matches,
  // Object where every key is a team composed with
  // an object where the key is the term and the value indicates is "or" search
  recent: recent,
  // Object holding the current searches for every team
  current: current,
  // Boolean true if we are are searching initally
  isSearchingTerm: isSearchingTerm,
  // Boolean true if we are getting more search results
  isSearchGettingMore: isSearchGettingMore
});

exports.default = _default;