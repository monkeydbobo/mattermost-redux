"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMissingChannelsFromPosts = getMissingChannelsFromPosts;
exports.searchPostsWithParams = searchPostsWithParams;
exports.searchPosts = searchPosts;
exports.getMorePostsForSearch = getMorePostsForSearch;
exports.clearSearch = clearSearch;
exports.getFlaggedPosts = getFlaggedPosts;
exports.getPinnedPosts = getPinnedPosts;
exports.clearPinnedPosts = clearPinnedPosts;
exports.getRecentMentions = getRecentMentions;
exports.removeSearchTerms = removeSearchTerms;
exports.default = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

var _reduxBatchedActions = require("redux-batched-actions");

var _client = require("../client");

var _action_types = require("../action_types");

var _teams = require("../selectors/entities/teams");

var _users = require("../selectors/entities/users");

var _channels = require("./channels");

var _helpers = require("./helpers");

var _errors = require("./errors");

var _posts = require("./posts");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var WEBAPP_SEARCH_PER_PAGE = 20;

function getMissingChannelsFromPosts(posts) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var _getState$entities$ch, channels, membersInChannel, myMembers, promises;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _getState$entities$ch = getState().entities.channels, channels = _getState$entities$ch.channels, membersInChannel = _getState$entities$ch.membersInChannel, myMembers = _getState$entities$ch.myMembers;
                promises = [];
                Object.values(posts).forEach(function (post) {
                  var id = post.channel_id;

                  if (!channels[id] || !myMembers[id]) {
                    promises.push(dispatch((0, _channels.getChannelAndMyMember)(id)));
                  }

                  if (!membersInChannel[id]) {
                    promises.push(dispatch((0, _channels.getChannelMembers)(id)));
                  }
                });
                return _context.abrupt("return", Promise.all(promises));

              case 4:
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

function searchPostsWithParams(teamId, params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var isGettingMore, posts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isGettingMore = params.page > 0;
                dispatch({
                  type: _action_types.SearchTypes.SEARCH_POSTS_REQUEST,
                  isGettingMore: isGettingMore
                });
                _context2.prev = 2;
                _context2.next = 5;
                return _client.Client4.searchPostsWithParams(teamId, params);

              case 5:
                posts = _context2.sent;
                _context2.next = 8;
                return Promise.all([(0, _posts.getProfilesAndStatusesForPosts)(posts.posts, dispatch, getState), dispatch(getMissingChannelsFromPosts(posts.posts))]);

              case 8:
                _context2.next = 15;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                (0, _helpers.forceLogoutIfNecessary)(_context2.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.SEARCH_POSTS_FAILURE,
                  error: _context2.t0
                }, (0, _errors.logError)(_context2.t0)]));
                return _context2.abrupt("return", {
                  error: _context2.t0
                });

              case 15:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.RECEIVED_SEARCH_POSTS,
                  data: posts,
                  isGettingMore: isGettingMore
                }, {
                  type: _action_types.SearchTypes.RECEIVED_SEARCH_TERM,
                  data: {
                    teamId: teamId,
                    params: params,
                    isEnd: posts.order.length === 0
                  }
                }, {
                  type: _action_types.SearchTypes.SEARCH_POSTS_SUCCESS
                }], 'SEARCH_POST_BATCH'));
                return _context2.abrupt("return", {
                  data: posts
                });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function searchPosts(teamId, terms, isOrSearch, includeDeletedChannels) {
  return searchPostsWithParams(teamId, {
    terms: terms,
    is_or_search: isOrSearch,
    include_deleted_channels: includeDeletedChannels,
    page: 0,
    per_page: WEBAPP_SEARCH_PER_PAGE
  });
}

function getMorePostsForSearch() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        var teamId, _getState$entities$se, params, isEnd, newParams;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                teamId = (0, _teams.getCurrentTeamId)(getState());
                _getState$entities$se = getState().entities.search.current[teamId], params = _getState$entities$se.params, isEnd = _getState$entities$se.isEnd;

                if (isEnd) {
                  _context3.next = 6;
                  break;
                }

                newParams = Object.assign({}, params);
                newParams.page += 1;
                return _context3.abrupt("return", dispatch(searchPostsWithParams(teamId, newParams)));

              case 6:
                return _context3.abrupt("return", {});

              case 7:
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

function clearSearch() {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: _action_types.SearchTypes.REMOVE_SEARCH_POSTS
                });
                return _context4.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x7) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function getFlaggedPosts() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch, getState) {
        var state, userId, teamId, posts;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                state = getState();
                userId = (0, _users.getCurrentUserId)(state);
                teamId = (0, _teams.getCurrentTeamId)(state);
                dispatch({
                  type: _action_types.SearchTypes.SEARCH_FLAGGED_POSTS_REQUEST
                });
                _context5.prev = 4;
                _context5.next = 7;
                return _client.Client4.getFlaggedPosts(userId, '', teamId);

              case 7:
                posts = _context5.sent;
                _context5.next = 10;
                return Promise.all([(0, _posts.getProfilesAndStatusesForPosts)(posts.posts, dispatch, getState), dispatch(getMissingChannelsFromPosts(posts.posts))]);

              case 10:
                _context5.next = 17;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                (0, _helpers.forceLogoutIfNecessary)(_context5.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.SEARCH_FLAGGED_POSTS_FAILURE,
                  error: _context5.t0
                }, (0, _errors.logError)(_context5.t0)]));
                return _context5.abrupt("return", {
                  error: _context5.t0
                });

              case 17:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.RECEIVED_SEARCH_FLAGGED_POSTS,
                  data: posts
                }, {
                  type: _action_types.SearchTypes.SEARCH_FLAGGED_POSTS_SUCCESS
                }], 'SEARCH_FLAGGED_POSTS_BATCH'));
                return _context5.abrupt("return", {
                  data: posts
                });

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 12]]);
      }));

      return function (_x8, _x9) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

function getPinnedPosts(channelId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(dispatch, getState) {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch({
                  type: _action_types.SearchTypes.SEARCH_PINNED_POSTS_REQUEST
                });
                _context6.prev = 1;
                _context6.next = 4;
                return _client.Client4.getPinnedPosts(channelId);

              case 4:
                result = _context6.sent;
                _context6.next = 7;
                return Promise.all([(0, _posts.getProfilesAndStatusesForPosts)(result.posts, dispatch, getState), dispatch(getMissingChannelsFromPosts(result.posts))]);

              case 7:
                _context6.next = 14;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context6.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.SEARCH_PINNED_POSTS_FAILURE,
                  error: _context6.t0
                }, (0, _errors.logError)(_context6.t0)]));
                return _context6.abrupt("return", {
                  error: _context6.t0
                });

              case 14:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.RECEIVED_SEARCH_PINNED_POSTS,
                  data: {
                    pinned: result,
                    channelId: channelId
                  }
                }, {
                  type: _action_types.PostTypes.RECEIVED_POSTS,
                  data: {
                    order: [],
                    posts: result.posts
                  },
                  channelId: channelId
                }, {
                  type: _action_types.SearchTypes.SEARCH_PINNED_POSTS_SUCCESS
                }], 'SEARCH_PINNED_POSTS_BATCH'));
                return _context6.abrupt("return", {
                  data: result
                });

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 9]]);
      }));

      return function (_x10, _x11) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}

function clearPinnedPosts(channelId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(dispatch) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                dispatch({
                  type: _action_types.SearchTypes.REMOVE_SEARCH_PINNED_POSTS,
                  data: {
                    channelId: channelId
                  }
                });
                return _context7.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x12) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
}

function getRecentMentions() {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(dispatch, getState) {
        var state, teamId, posts, termKeys, terms;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                state = getState();
                teamId = (0, _teams.getCurrentTeamId)(state);
                dispatch({
                  type: _action_types.SearchTypes.SEARCH_RECENT_MENTIONS_REQUEST
                });
                _context8.prev = 3;
                termKeys = (0, _users.getCurrentUserMentionKeys)(state).filter(function (_ref9) {
                  var key = _ref9.key;
                  return key !== '@channel' && key !== '@all' && key !== '@here';
                });
                terms = termKeys.map(function (_ref10) {
                  var key = _ref10.key;
                  return key;
                }).join(' ').trim() + ' ';

                _client.Client4.trackEvent('api', 'api_posts_search_mention');

                _context8.next = 9;
                return _client.Client4.searchPosts(teamId, terms, true);

              case 9:
                posts = _context8.sent;
                _context8.next = 12;
                return Promise.all([(0, _posts.getProfilesAndStatusesForPosts)(posts.posts, dispatch, getState), dispatch(getMissingChannelsFromPosts(posts.posts))]);

              case 12:
                _context8.next = 19;
                break;

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](3);
                (0, _helpers.forceLogoutIfNecessary)(_context8.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.SEARCH_RECENT_MENTIONS_FAILURE,
                  error: _context8.t0
                }, (0, _errors.logError)(_context8.t0)]));
                return _context8.abrupt("return", {
                  error: _context8.t0
                });

              case 19:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.SearchTypes.RECEIVED_SEARCH_POSTS,
                  data: posts
                }, {
                  type: _action_types.SearchTypes.SEARCH_RECENT_MENTIONS_SUCCESS
                }], 'SEARCH_RECENT_MENTIONS_BATCH'));
                return _context8.abrupt("return", {
                  data: posts
                });

              case 21:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[3, 14]]);
      }));

      return function (_x13, _x14) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
}

function removeSearchTerms(teamId, terms) {
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(dispatch) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                dispatch({
                  type: _action_types.SearchTypes.REMOVE_SEARCH_TERM,
                  data: {
                    teamId: teamId,
                    terms: terms
                  }
                });
                return _context9.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x15) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
}

var _default = {
  clearSearch: clearSearch,
  removeSearchTerms: removeSearchTerms,
  searchPosts: searchPosts
};
exports.default = _default;