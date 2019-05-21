"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = getPost;
exports.createPost = createPost;
exports.createPostImmediately = createPostImmediately;
exports.resetCreatePostRequest = resetCreatePostRequest;
exports.deletePost = deletePost;
exports.editPost = editPost;
exports.pinPost = pinPost;
exports.unpinPost = unpinPost;
exports.addReaction = addReaction;
exports.removeReaction = removeReaction;
exports.getCustomEmojiForReaction = getCustomEmojiForReaction;
exports.getReactionsForPost = getReactionsForPost;
exports.flagPost = flagPost;
exports.getPostThread = getPostThread;
exports.getPostThreadWithRetry = getPostThreadWithRetry;
exports.getPosts = getPosts;
exports.getPostsWithRetry = getPostsWithRetry;
exports.getPostsSince = getPostsSince;
exports.getPostsSinceWithRetry = getPostsSinceWithRetry;
exports.getPostsBefore = getPostsBefore;
exports.getPostsBeforeWithRetry = getPostsBeforeWithRetry;
exports.getPostsAfter = getPostsAfter;
exports.getPostsAfterWithRetry = getPostsAfterWithRetry;
exports.getProfilesAndStatusesForPosts = getProfilesAndStatusesForPosts;
exports.getNeededAtMentionedUsernames = getNeededAtMentionedUsernames;
exports.getNeededCustomEmojis = getNeededCustomEmojis;
exports.removePost = removePost;
exports.selectPost = selectPost;
exports.selectFocusedPostId = selectFocusedPostId;
exports.unflagPost = unflagPost;
exports.getOpenGraphMetadata = getOpenGraphMetadata;
exports.doPostAction = doPostAction;
exports.addMessageIntoHistory = addMessageIntoHistory;
exports.resetHistoryIndex = resetHistoryIndex;
exports.moveHistoryIndexBack = moveHistoryIndexBack;
exports.moveHistoryIndexForward = moveHistoryIndexForward;
exports.handleNewPost = handleNewPost;
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

var _reduxBatchedActions = require("redux-batched-actions");

var _client = require("../client");

var _constants = require("../constants");

var _action_types = require("../action_types");

var _channels = require("../selectors/entities/channels");

var _emojis = require("../selectors/entities/emojis");

var _general = require("../selectors/entities/general");

var Selectors = _interopRequireWildcard(require("../selectors/entities/posts"));

var _users = require("../selectors/entities/users");

var _channel_utils = require("../utils/channel_utils");

var _emoji_utils = require("../utils/emoji_utils");

var _post_utils = require("../utils/post_utils");

var _channels2 = require("./channels");

var _emojis2 = require("./emojis");

var _errors = require("./errors");

var _helpers = require("./helpers");

var _preferences = require("./preferences");

var _users2 = require("./users");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPost(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var post;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _client.Client4.getPost(postId);

              case 3:
                post = _context.sent;
                getProfilesAndStatusesForPosts([post], dispatch, getState);
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.GET_POSTS_FAILURE,
                  error: _context.t0
                }, (0, _errors.logError)(_context.t0)]), getState);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.RECEIVED_POST,
                  data: post
                }, {
                  type: _action_types.PostTypes.GET_POSTS_SUCCESS
                }]));
                return _context.abrupt("return", {
                  data: post
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function createPost(post) {
  var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var state, currentUserId, timestamp, pendingPostId, newPost, fileIds;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                state = getState();
                currentUserId = state.entities.users.currentUserId;
                timestamp = Date.now();
                pendingPostId = post.pending_post_id || "".concat(currentUserId, ":").concat(timestamp);

                if (!Selectors.isPostIdSending(state, pendingPostId)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", {
                  data: true
                });

              case 6:
                newPost = _objectSpread({}, post, {
                  pending_post_id: pendingPostId,
                  create_at: timestamp,
                  update_at: timestamp
                }); // We are retrying a pending post that had files

                if (newPost.file_ids && !files.length) {
                  files = newPost.file_ids.map(function (id) {
                    return state.entities.files.files[id];
                  }); // eslint-disable-line
                }

                if (files.length) {
                  fileIds = files.map(function (file) {
                    return file.id;
                  });
                  newPost = _objectSpread({}, newPost, {
                    file_ids: fileIds
                  });
                  dispatch({
                    type: _action_types.FileTypes.RECEIVED_FILES_FOR_POST,
                    postId: pendingPostId,
                    data: files
                  });
                }

                dispatch({
                  type: _action_types.PostTypes.RECEIVED_NEW_POST,
                  data: _objectSpread({
                    id: pendingPostId
                  }, newPost),
                  meta: {
                    offline: {
                      effect: function effect() {
                        return _client.Client4.createPost(_objectSpread({}, newPost, {
                          create_at: 0
                        }));
                      },
                      commit: function commit(success, payload) {
                        // Use RECEIVED_POSTS to clear pending and sending posts
                        var actions = [{
                          type: _action_types.PostTypes.RECEIVED_POSTS,
                          data: {
                            order: [],
                            posts: _defineProperty({}, payload.id, payload)
                          },
                          channelId: payload.channel_id
                        }];

                        if (files) {
                          actions.push({
                            type: _action_types.FileTypes.RECEIVED_FILES_FOR_POST,
                            postId: payload.id,
                            data: files
                          });
                        }

                        actions.push({
                          type: _action_types.PostTypes.CREATE_POST_SUCCESS
                        });
                        dispatch((0, _reduxBatchedActions.batchActions)(actions));
                      },
                      maxRetry: 0,
                      offlineRollback: true,
                      rollback: function rollback(success, error) {
                        var data = _objectSpread({}, newPost, {
                          id: pendingPostId,
                          failed: true
                        });

                        var actions = [{
                          type: _action_types.PostTypes.CREATE_POST_FAILURE,
                          error: error
                        }]; // If the failure was because: the root post was deleted or
                        // TownSquareIsReadOnly=true then remove the post

                        if (error.server_error_id === 'api.post.create_post.root_id.app_error' || error.server_error_id === 'api.post.create_post.town_square_read_only') {
                          dispatch(removePost(data));
                        } else {
                          actions.push({
                            type: _action_types.PostTypes.RECEIVED_POST,
                            data: data
                          });
                        }

                        dispatch((0, _reduxBatchedActions.batchActions)(actions));
                      }
                    }
                  }
                });
                return _context2.abrupt("return", {
                  data: true
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function createPostImmediately(post) {
  var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        var state, currentUserId, timestamp, pendingPostId, newPost, fileIds, created, actions;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                state = getState();
                currentUserId = state.entities.users.currentUserId;
                timestamp = Date.now();
                pendingPostId = "".concat(currentUserId, ":").concat(timestamp);
                newPost = _objectSpread({}, post, {
                  pending_post_id: pendingPostId,
                  create_at: timestamp,
                  update_at: timestamp
                });

                if (files.length) {
                  fileIds = files.map(function (file) {
                    return file.id;
                  });
                  newPost = _objectSpread({}, newPost, {
                    file_ids: fileIds
                  });
                  dispatch({
                    type: _action_types.FileTypes.RECEIVED_FILES_FOR_POST,
                    postId: pendingPostId,
                    data: files
                  });
                }

                dispatch({
                  type: _action_types.PostTypes.RECEIVED_NEW_POST,
                  data: _objectSpread({
                    id: pendingPostId
                  }, newPost)
                });
                _context3.prev = 7;
                _context3.next = 10;
                return _client.Client4.createPost(_objectSpread({}, newPost, {
                  create_at: 0
                }));

              case 10:
                created = _context3.sent;
                newPost.id = created.id;
                _context3.next = 19;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](7);
                (0, _helpers.forceLogoutIfNecessary)(_context3.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.CREATE_POST_FAILURE,
                  error: _context3.t0
                }, {
                  type: _action_types.PostTypes.REMOVE_PENDING_POST,
                  data: {
                    id: pendingPostId,
                    channel_id: newPost.channel_id
                  }
                }, (0, _errors.logError)(_context3.t0)]), getState);
                return _context3.abrupt("return", {
                  error: _context3.t0
                });

              case 19:
                actions = [{
                  type: _action_types.PostTypes.RECEIVED_POSTS,
                  data: {
                    order: [],
                    posts: _defineProperty({}, newPost.id, newPost)
                  },
                  channelId: newPost.channel_id
                }];

                if (files) {
                  actions.push({
                    type: _action_types.FileTypes.RECEIVED_FILES_FOR_POST,
                    postId: newPost.id,
                    data: files
                  });
                }

                actions.push({
                  type: _action_types.PostTypes.CREATE_POST_SUCCESS
                });
                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context3.abrupt("return", {
                  data: newPost
                });

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 14]]);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

function resetCreatePostRequest() {
  return {
    type: _action_types.PostTypes.CREATE_POST_RESET_REQUEST
  };
}

function deletePost(post) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch, getState) {
        var state, delPost;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                state = getState();
                delPost = _objectSpread({}, post);

                if (delPost.type === _constants.Posts.POST_TYPES.COMBINED_USER_ACTIVITY) {
                  delPost.system_post_ids.forEach(function (systemPostId) {
                    var systemPost = Selectors.getPost(state, systemPostId);

                    if (systemPost) {
                      dispatch(deletePost(systemPost));
                    }
                  });
                  dispatch({
                    type: _action_types.PostTypes.POST_DELETED,
                    data: delPost
                  });
                } else {
                  dispatch({
                    type: _action_types.PostTypes.POST_DELETED,
                    data: delPost,
                    meta: {
                      offline: {
                        effect: function effect() {
                          return _client.Client4.deletePost(post.id);
                        },
                        commit: {
                          type: _action_types.PostTypes.POST_DELETED
                        },
                        rollback: {
                          type: _action_types.PostTypes.RECEIVED_POST,
                          data: delPost
                        }
                      }
                    }
                  });
                }

                return _context4.abrupt("return", {
                  data: true
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function editPost(post) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.patchPost,
    onRequest: _action_types.PostTypes.EDIT_POST_REQUEST,
    onSuccess: [_action_types.PostTypes.RECEIVED_POST, _action_types.PostTypes.EDIT_POST_SUCCESS],
    onFailure: _action_types.PostTypes.EDIT_POST_FAILURE,
    params: [post]
  });
}

function pinPost(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch, getState) {
        var posts, actions, post;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.EDIT_POST_REQUEST
                }, getState);
                _context5.prev = 1;
                _context5.next = 4;
                return _client.Client4.pinPost(postId);

              case 4:
                posts = _context5.sent;
                _context5.next = 12;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context5.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.EDIT_POST_FAILURE,
                  error: _context5.t0
                }, (0, _errors.logError)(_context5.t0)]), getState);
                return _context5.abrupt("return", {
                  error: _context5.t0
                });

              case 12:
                actions = [{
                  type: _action_types.PostTypes.EDIT_POST_SUCCESS
                }];
                post = Selectors.getPost(getState(), postId);

                if (post) {
                  actions.push({
                    type: _action_types.PostTypes.RECEIVED_POST,
                    data: _objectSpread({}, post, {
                      is_pinned: true
                    })
                  });
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context5.abrupt("return", {
                  data: posts
                });

              case 17:
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

function unpinPost(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(dispatch, getState) {
        var posts, actions, post;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.EDIT_POST_REQUEST
                }, getState);
                _context6.prev = 1;
                _context6.next = 4;
                return _client.Client4.unpinPost(postId);

              case 4:
                posts = _context6.sent;
                _context6.next = 12;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context6.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.EDIT_POST_FAILURE,
                  error: _context6.t0
                }, (0, _errors.logError)(_context6.t0)]), getState);
                return _context6.abrupt("return", {
                  error: _context6.t0
                });

              case 12:
                actions = [{
                  type: _action_types.PostTypes.EDIT_POST_SUCCESS
                }];
                post = Selectors.getPost(getState(), postId);

                if (post) {
                  actions.push({
                    type: _action_types.PostTypes.RECEIVED_POST,
                    data: _objectSpread({}, post, {
                      is_pinned: false
                    })
                  });
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context6.abrupt("return", {
                  data: posts
                });

              case 17:
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

function addReaction(postId, emojiName) {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(dispatch, getState) {
        var currentUserId, reaction;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                _context7.prev = 1;
                _context7.next = 4;
                return _client.Client4.addReaction(currentUserId, postId, emojiName);

              case 4:
                reaction = _context7.sent;
                _context7.next = 12;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context7.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context7.t0));
                return _context7.abrupt("return", {
                  error: _context7.t0
                });

              case 12:
                dispatch({
                  type: _action_types.PostTypes.RECEIVED_REACTION,
                  data: reaction
                });
                return _context7.abrupt("return", {
                  data: true
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

function removeReaction(postId, emojiName) {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(dispatch, getState) {
        var currentUserId;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                _context8.prev = 1;
                _context8.next = 4;
                return _client.Client4.removeReaction(currentUserId, postId, emojiName);

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
                dispatch({
                  type: _action_types.PostTypes.REACTION_DELETED,
                  data: {
                    user_id: currentUserId,
                    post_id: postId,
                    emoji_name: emojiName
                  }
                });
                return _context8.abrupt("return", {
                  data: true
                });

              case 13:
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

function getCustomEmojiForReaction(name) {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(dispatch, getState) {
        var nonExistentEmoji, customEmojisByName;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                nonExistentEmoji = getState().entities.emojis.nonExistentEmoji;
                customEmojisByName = (0, _emojis.getCustomEmojisByName)(getState());

                if (!_emojis2.systemEmojis.has(name)) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt("return", {
                  data: true
                });

              case 4:
                if (!nonExistentEmoji.has(name)) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", {
                  data: true
                });

              case 6:
                if (!customEmojisByName.has(name)) {
                  _context9.next = 8;
                  break;
                }

                return _context9.abrupt("return", {
                  data: true
                });

              case 8:
                return _context9.abrupt("return", dispatch((0, _emojis2.getCustomEmojiByName)(name)));

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
}

function getReactionsForPost(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(dispatch, getState) {
        var reactions, nonExistentEmoji, customEmojisByName, emojisToLoad;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _client.Client4.getReactionsForPost(postId);

              case 3:
                reactions = _context10.sent;
                _context10.next = 11;
                break;

              case 6:
                _context10.prev = 6;
                _context10.t0 = _context10["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context10.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context10.t0));
                return _context10.abrupt("return", {
                  error: _context10.t0
                });

              case 11:
                if (reactions && reactions.length > 0) {
                  nonExistentEmoji = getState().entities.emojis.nonExistentEmoji;
                  customEmojisByName = (0, _emojis.getCustomEmojisByName)(getState());
                  emojisToLoad = new Set();
                  reactions.forEach(function (r) {
                    var name = r.emoji_name;

                    if (_emojis2.systemEmojis.has(name)) {
                      // It's a system emoji, go the next match
                      return;
                    }

                    if (nonExistentEmoji.has(name)) {
                      // We've previously confirmed this is not a custom emoji
                      return;
                    }

                    if (customEmojisByName.has(name)) {
                      // We have the emoji, go to the next match
                      return;
                    }

                    emojisToLoad.add(name);
                  });
                  dispatch((0, _emojis2.getCustomEmojisByName)(Array.from(emojisToLoad)));
                }

                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.RECEIVED_REACTIONS,
                  data: reactions,
                  postId: postId
                }]));
                return _context10.abrupt("return", reactions);

              case 14:
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

function flagPost(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(dispatch, getState) {
        var currentUserId, preference;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                preference = {
                  user_id: currentUserId,
                  category: _constants.Preferences.CATEGORY_FLAGGED_POST,
                  name: postId,
                  value: 'true'
                };

                _client.Client4.trackEvent('action', 'action_posts_flag');

                return _context11.abrupt("return", (0, _preferences.savePreferences)(currentUserId, [preference])(dispatch, getState));

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function (_x21, _x22) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
}

function getPostThread(postId) {
  var skipAddToChannel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(dispatch, getState) {
        var posts, post;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.GET_POST_THREAD_REQUEST
                }, getState);
                _context12.prev = 1;
                _context12.next = 4;
                return _client.Client4.getPostThread(postId);

              case 4:
                posts = _context12.sent;
                getProfilesAndStatusesForPosts(posts.posts, dispatch, getState);
                _context12.next = 13;
                break;

              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context12.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.GET_POST_THREAD_FAILURE,
                  error: _context12.t0
                }, (0, _errors.logError)(_context12.t0)]), getState);
                return _context12.abrupt("return", {
                  error: _context12.t0
                });

              case 13:
                post = posts.posts[postId];
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.RECEIVED_POSTS,
                  data: posts,
                  channelId: post.channel_id,
                  skipAddToChannel: skipAddToChannel
                }, {
                  type: _action_types.PostTypes.GET_POST_THREAD_SUCCESS
                }], 'BATCH_GET_POST_THREAD'), getState);
                return _context12.abrupt("return", {
                  data: posts
                });

              case 16:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 8]]);
      }));

      return function (_x23, _x24) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
}

function getPostThreadWithRetry(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref13 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.GET_POST_THREAD_REQUEST
                });
                dispatch({
                  type: _action_types.PostTypes.GET_POST_THREAD_WITH_RETRY_ATTEMPT,
                  data: {},
                  meta: {
                    offline: {
                      effect: function effect() {
                        return _client.Client4.getPostThread(postId);
                      },
                      commit: function commit(success, payload) {
                        var posts = payload.posts;
                        var post = posts[postId];
                        getProfilesAndStatusesForPosts(posts, dispatch, getState);
                        dispatch((0, _reduxBatchedActions.batchActions)([{
                          type: _action_types.PostTypes.RECEIVED_POSTS,
                          data: payload,
                          channelId: post.channel_id,
                          skipAddToChannel: true
                        }, {
                          type: _action_types.PostTypes.GET_POST_THREAD_SUCCESS
                        }]), getState);
                      },
                      maxRetry: 2,
                      cancel: true,
                      onRetryScheduled: function onRetryScheduled() {
                        dispatch({
                          type: _action_types.PostTypes.GET_POST_THREAD_WITH_RETRY_ATTEMPT
                        });
                      },
                      rollback: function rollback(success, error) {
                        (0, _helpers.forceLogoutIfNecessary)(error, dispatch, getState);
                        dispatch((0, _reduxBatchedActions.batchActions)([{
                          type: _action_types.PostTypes.GET_POST_THREAD_FAILURE,
                          error: error
                        }, (0, _errors.logError)(error)]), getState);
                      }
                    }
                  }
                });
                return _context13.abrupt("return", {
                  data: true
                });

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function (_x25, _x26) {
        return _ref13.apply(this, arguments);
      };
    }()
  );
}

function getPosts(channelId) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.Posts.POST_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(dispatch, getState) {
        var posts;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _client.Client4.getPosts(channelId, page, perPage);

              case 3:
                posts = _context14.sent;
                getProfilesAndStatusesForPosts(posts.posts, dispatch, getState);
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
                dispatch({
                  type: _action_types.PostTypes.RECEIVED_POSTS,
                  data: posts,
                  channelId: channelId
                });
                return _context14.abrupt("return", {
                  data: posts
                });

              case 14:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 7]]);
      }));

      return function (_x27, _x28) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
}

function getPostsWithRetry(channelId) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.Posts.POST_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref15 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.GET_POSTS_WITH_RETRY_ATTEMPT,
                  data: {},
                  meta: {
                    offline: {
                      effect: function effect() {
                        return _client.Client4.getPosts(channelId, page, perPage);
                      },
                      commit: function commit(success, payload) {
                        var posts = payload.posts;
                        getProfilesAndStatusesForPosts(posts, dispatch, getState);
                        dispatch((0, _reduxBatchedActions.batchActions)([{
                          type: _action_types.PostTypes.RECEIVED_POSTS,
                          data: payload,
                          channelId: channelId
                        }, {
                          type: _action_types.PostTypes.GET_POSTS_SUCCESS
                        }]));
                      },
                      maxRetry: 2,
                      cancel: true,
                      onRetryScheduled: function onRetryScheduled() {
                        dispatch({
                          type: _action_types.PostTypes.GET_POSTS_WITH_RETRY_ATTEMPT
                        });
                      },
                      rollback: function rollback(success, error) {
                        (0, _helpers.forceLogoutIfNecessary)(error, dispatch, getState);
                        dispatch((0, _errors.logError)(error));
                      }
                    }
                  }
                });
                return _context15.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function (_x29, _x30) {
        return _ref15.apply(this, arguments);
      };
    }()
  );
}

function getPostsSince(channelId, since) {
  return (
    /*#__PURE__*/
    function () {
      var _ref16 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee16(dispatch, getState) {
        var posts;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return _client.Client4.getPostsSince(channelId, since);

              case 3:
                posts = _context16.sent;
                getProfilesAndStatusesForPosts(posts.posts, dispatch, getState);
                _context16.next = 12;
                break;

              case 7:
                _context16.prev = 7;
                _context16.t0 = _context16["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context16.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context16.t0));
                return _context16.abrupt("return", {
                  error: _context16.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.PostTypes.RECEIVED_POSTS,
                  data: posts,
                  channelId: channelId
                }, {
                  type: _action_types.PostTypes.GET_POSTS_SINCE_SUCCESS
                }]));
                return _context16.abrupt("return", {
                  data: posts
                });

              case 14:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 7]]);
      }));

      return function (_x31, _x32) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
}

function getPostsSinceWithRetry(channelId, since) {
  return (
    /*#__PURE__*/
    function () {
      var _ref17 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.GET_POSTS_SINCE_WITH_RETRY_ATTEMPT,
                  data: {},
                  meta: {
                    offline: {
                      effect: function effect() {
                        return _client.Client4.getPostsSince(channelId, since);
                      },
                      commit: function commit(success, payload) {
                        var posts = payload.posts;
                        getProfilesAndStatusesForPosts(posts, dispatch, getState);
                        dispatch((0, _reduxBatchedActions.batchActions)([{
                          type: _action_types.PostTypes.RECEIVED_POSTS,
                          data: payload,
                          channelId: channelId
                        }, {
                          type: _action_types.PostTypes.GET_POSTS_SINCE_SUCCESS
                        }]));
                      },
                      maxRetry: 2,
                      cancel: true,
                      onRetryScheduled: function onRetryScheduled() {
                        dispatch({
                          type: _action_types.PostTypes.GET_POSTS_SINCE_WITH_RETRY_ATTEMPT
                        });
                      },
                      rollback: function rollback(success, error) {
                        (0, _helpers.forceLogoutIfNecessary)(error, dispatch, getState);
                        dispatch((0, _errors.logError)(error));
                      }
                    }
                  }
                });
                return _context17.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function (_x33, _x34) {
        return _ref17.apply(this, arguments);
      };
    }()
  );
}

function getPostsBefore(channelId, postId) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants.Posts.POST_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18(dispatch, getState) {
        var posts;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return _client.Client4.getPostsBefore(channelId, postId, page, perPage);

              case 3:
                posts = _context18.sent;
                getProfilesAndStatusesForPosts(posts.posts, dispatch, getState);
                _context18.next = 12;
                break;

              case 7:
                _context18.prev = 7;
                _context18.t0 = _context18["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context18.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context18.t0));
                return _context18.abrupt("return", {
                  error: _context18.t0
                });

              case 12:
                dispatch({
                  type: _action_types.PostTypes.RECEIVED_POSTS,
                  data: posts,
                  channelId: channelId
                });
                return _context18.abrupt("return", {
                  data: posts
                });

              case 14:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[0, 7]]);
      }));

      return function (_x35, _x36) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
}

function getPostsBeforeWithRetry(channelId, postId) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants.Posts.POST_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref19 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee19(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.GET_POSTS_BEFORE_WITH_RETRY_ATTEMPT,
                  data: {},
                  meta: {
                    offline: {
                      effect: function effect() {
                        return _client.Client4.getPostsBefore(channelId, postId, page, perPage);
                      },
                      commit: function commit(success, payload) {
                        var posts = payload.posts;
                        getProfilesAndStatusesForPosts(posts, dispatch, getState);
                        dispatch({
                          type: _action_types.PostTypes.RECEIVED_POSTS,
                          data: payload,
                          channelId: channelId
                        });
                      },
                      maxRetry: 2,
                      cancel: true,
                      onRetryScheduled: function onRetryScheduled() {
                        dispatch({
                          type: _action_types.PostTypes.GET_POSTS_BEFORE_WITH_RETRY_ATTEMPT
                        });
                      },
                      rollback: function rollback(success, error) {
                        (0, _helpers.forceLogoutIfNecessary)(error, dispatch, getState);
                        dispatch((0, _errors.logError)(error));
                      }
                    }
                  }
                });
                return _context19.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function (_x37, _x38) {
        return _ref19.apply(this, arguments);
      };
    }()
  );
}

function getPostsAfter(channelId, postId) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants.Posts.POST_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref20 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee20(dispatch, getState) {
        var posts;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.prev = 0;
                _context20.next = 3;
                return _client.Client4.getPostsAfter(channelId, postId, page, perPage);

              case 3:
                posts = _context20.sent;
                getProfilesAndStatusesForPosts(posts.posts, dispatch, getState);
                _context20.next = 12;
                break;

              case 7:
                _context20.prev = 7;
                _context20.t0 = _context20["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context20.t0, dispatch, getState);
                dispatch(getState);
                return _context20.abrupt("return", {
                  error: _context20.t0
                });

              case 12:
                dispatch({
                  type: _action_types.PostTypes.RECEIVED_POSTS,
                  data: posts,
                  channelId: channelId
                });
                return _context20.abrupt("return", {
                  data: posts
                });

              case 14:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[0, 7]]);
      }));

      return function (_x39, _x40) {
        return _ref20.apply(this, arguments);
      };
    }()
  );
}

function getPostsAfterWithRetry(channelId, postId) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var perPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants.Posts.POST_CHUNK_SIZE;
  return (
    /*#__PURE__*/
    function () {
      var _ref21 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee21(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.GET_POSTS_AFTER_WITH_RETRY_ATTEMPT,
                  data: {},
                  meta: {
                    offline: {
                      effect: function effect() {
                        return _client.Client4.getPostsAfter(channelId, postId, page, perPage);
                      },
                      commit: function commit(success, payload) {
                        var posts = payload.posts;
                        getProfilesAndStatusesForPosts(posts, dispatch, getState);
                        dispatch({
                          type: _action_types.PostTypes.RECEIVED_POSTS,
                          data: payload,
                          channelId: channelId
                        });
                      },
                      maxRetry: 2,
                      cancel: true,
                      onRetryScheduled: function onRetryScheduled() {
                        dispatch({
                          type: _action_types.PostTypes.GET_POSTS_AFTER_WITH_RETRY_ATTEMPT
                        });
                      },
                      rollback: function rollback(success, error) {
                        (0, _helpers.forceLogoutIfNecessary)(error, dispatch, getState);
                        dispatch((0, _errors.logError)(error));
                      }
                    }
                  }
                });
                return _context21.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function (_x41, _x42) {
        return _ref21.apply(this, arguments);
      };
    }()
  );
} // Note that getProfilesAndStatusesForPosts can take either an array of posts or a map of ids to posts


function getProfilesAndStatusesForPosts(postsArrayOrMap, dispatch, getState) {
  if (!postsArrayOrMap) {
    // Some API methods return {error} for no results
    return Promise.resolve();
  }

  var posts = Object.values(postsArrayOrMap);

  if (posts.length === 0) {
    return Promise.resolve();
  }

  var state = getState();
  var _state$entities$users = state.entities.users,
      currentUserId = _state$entities$users.currentUserId,
      profiles = _state$entities$users.profiles,
      statuses = _state$entities$users.statuses; // Statuses and profiles of the users who made the posts

  var userIdsToLoad = new Set();
  var statusesToLoad = new Set();
  Object.values(posts).forEach(function (post) {
    var userId = post.user_id;

    if (!statuses[userId]) {
      statusesToLoad.add(userId);
    }

    if (userId === currentUserId) {
      return;
    }

    if (!profiles[userId]) {
      userIdsToLoad.add(userId);
    }
  });
  var promises = [];

  if (userIdsToLoad.size > 0) {
    promises.push((0, _users2.getProfilesByIds)(Array.from(userIdsToLoad))(dispatch, getState));
  }

  if (statusesToLoad.size > 0) {
    promises.push((0, _users2.getStatusesByIds)(Array.from(statusesToLoad))(dispatch, getState));
  } // Profiles of users mentioned in the posts


  var usernamesToLoad = getNeededAtMentionedUsernames(state, posts);

  if (usernamesToLoad.size > 0) {
    promises.push((0, _users2.getProfilesByUsernames)(Array.from(usernamesToLoad))(dispatch, getState));
  } // Emojis used in the posts


  var emojisToLoad = getNeededCustomEmojis(state, posts);

  if (emojisToLoad && emojisToLoad.size > 0) {
    promises.push((0, _emojis2.getCustomEmojisByName)(Array.from(emojisToLoad))(dispatch, getState));
  }

  return Promise.all(promises);
}

function getNeededAtMentionedUsernames(state, posts) {
  var usersByUsername; // Populate this lazily since it's relatively expensive

  var usernamesToLoad = new Set();
  posts.forEach(function (post) {
    if (!post.message.includes('@')) {
      return;
    }

    if (!usersByUsername) {
      usersByUsername = (0, _users.getUsersByUsername)(state);
    }

    var pattern = /\B@(([a-z0-9_.-]*[a-z0-9_])[.-]*)/gi;
    var match;

    while ((match = pattern.exec(post.message)) !== null) {
      // match[1] is the matched mention including trailing punctuation
      // match[2] is the matched mention without trailing punctuation
      if (_constants.General.SPECIAL_MENTIONS.indexOf(match[2]) !== -1) {
        continue;
      }

      if (usersByUsername[match[1]] || usersByUsername[match[2]]) {
        // We have the user, go to the next match
        continue;
      } // If there's no trailing punctuation, this will only add 1 item to the set


      usernamesToLoad.add(match[1]);
      usernamesToLoad.add(match[2]);
    }
  });
  return usernamesToLoad;
}

function buildPostAttachmentText(attachments) {
  var attachmentText = '';
  attachments.forEach(function (a) {
    if (a.fields && a.fields.length) {
      a.fields.forEach(function (f) {
        attachmentText += ' ' + (f.value || '');
      });
    }

    if (a.pretext) {
      attachmentText += ' ' + a.pretext;
    }

    if (a.text) {
      attachmentText += ' ' + a.text;
    }
  });
  return attachmentText;
}

function getNeededCustomEmojis(state, posts) {
  if ((0, _general.getConfig)(state).EnableCustomEmoji !== 'true') {
    return new Set();
  } // If post metadata is supported, custom emojis will have been provided as part of that


  if (posts[0].metadata) {
    return new Set();
  }

  var customEmojisToLoad = new Set();
  var customEmojisByName; // Populate this lazily since it's relatively expensive

  var nonExistentEmoji = state.entities.emojis.nonExistentEmoji;
  posts.forEach(function (post) {
    if (post.message.includes(':')) {
      if (!customEmojisByName) {
        customEmojisByName = (0, _emojis.getCustomEmojisByName)(state);
      }

      var emojisFromPost = (0, _emoji_utils.parseNeededCustomEmojisFromText)(post.message, _emojis2.systemEmojis, customEmojisByName, nonExistentEmoji);

      if (emojisFromPost.size > 0) {
        customEmojisToLoad = new Set(_toConsumableArray(customEmojisToLoad).concat(_toConsumableArray(emojisFromPost)));
      }
    }

    var props = post.props;

    if (props && props.attachments && props.attachments.length) {
      if (!customEmojisByName) {
        customEmojisByName = (0, _emojis.getCustomEmojisByName)(state);
      }

      var attachmentText = buildPostAttachmentText(props.attachments);

      if (attachmentText) {
        var emojisFromAttachment = (0, _emoji_utils.parseNeededCustomEmojisFromText)(attachmentText, _emojis2.systemEmojis, customEmojisByName, nonExistentEmoji);

        if (emojisFromAttachment.size > 0) {
          customEmojisToLoad = new Set(_toConsumableArray(customEmojisToLoad).concat(_toConsumableArray(emojisFromAttachment)));
        }
      }
    }
  });
  return customEmojisToLoad;
}

function removePost(post) {
  return (
    /*#__PURE__*/
    function () {
      var _ref22 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee22(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.REMOVE_POST,
                  data: _objectSpread({}, post)
                }, getState);
                return _context22.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function (_x43, _x44) {
        return _ref22.apply(this, arguments);
      };
    }()
  );
}

function selectPost(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref23 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee23(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.RECEIVED_POST_SELECTED,
                  data: postId
                }, getState);
                return _context23.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function (_x45, _x46) {
        return _ref23.apply(this, arguments);
      };
    }()
  );
}

function selectFocusedPostId(postId) {
  return {
    type: _action_types.PostTypes.RECEIVED_FOCUSED_POST,
    data: postId
  };
}

function unflagPost(postId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref24 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee24(dispatch, getState) {
        var currentUserId, preference;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                currentUserId = getState().entities.users.currentUserId;
                preference = {
                  user_id: currentUserId,
                  category: _constants.Preferences.CATEGORY_FLAGGED_POST,
                  name: postId
                };

                _client.Client4.trackEvent('action', 'action_posts_unflag');

                return _context24.abrupt("return", (0, _preferences.deletePreferences)(currentUserId, [preference])(dispatch, getState));

              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      return function (_x47, _x48) {
        return _ref24.apply(this, arguments);
      };
    }()
  );
}

function getOpenGraphMetadata(url) {
  return (
    /*#__PURE__*/
    function () {
      var _ref25 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee25(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return _client.Client4.getOpenGraphMetadata(url);

              case 3:
                data = _context25.sent;
                _context25.next = 11;
                break;

              case 6:
                _context25.prev = 6;
                _context25.t0 = _context25["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context25.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context25.t0));
                return _context25.abrupt("return", {
                  error: _context25.t0
                });

              case 11:
                if (data && (data.url || data.type || data.title || data.description)) {
                  dispatch({
                    type: _action_types.PostTypes.RECEIVED_OPEN_GRAPH_METADATA,
                    data: data,
                    url: url
                  });
                }

                return _context25.abrupt("return", {
                  data: data
                });

              case 13:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[0, 6]]);
      }));

      return function (_x49, _x50) {
        return _ref25.apply(this, arguments);
      };
    }()
  );
}

function doPostAction(postId, actionId) {
  var selectedOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return (
    /*#__PURE__*/
    function () {
      var _ref26 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee26(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return _client.Client4.doPostAction(postId, actionId, selectedOption);

              case 3:
                data = _context26.sent;
                _context26.next = 11;
                break;

              case 6:
                _context26.prev = 6;
                _context26.t0 = _context26["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context26.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context26.t0));
                return _context26.abrupt("return", {
                  error: _context26.t0
                });

              case 11:
                if (data && data.trigger_id) {
                  dispatch({
                    type: _action_types.IntegrationTypes.RECEIVED_DIALOG_TRIGGER_ID,
                    data: data.trigger_id
                  });
                }

                return _context26.abrupt("return", {
                  data: data
                });

              case 13:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[0, 6]]);
      }));

      return function (_x51, _x52) {
        return _ref26.apply(this, arguments);
      };
    }()
  );
}

function addMessageIntoHistory(message) {
  return (
    /*#__PURE__*/
    function () {
      var _ref27 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee27(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.ADD_MESSAGE_INTO_HISTORY,
                  data: message
                }, getState);
                return _context27.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      return function (_x53, _x54) {
        return _ref27.apply(this, arguments);
      };
    }()
  );
}

function resetHistoryIndex(index) {
  return (
    /*#__PURE__*/
    function () {
      var _ref28 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee28(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.RESET_HISTORY_INDEX,
                  data: index
                }, getState);
                return _context28.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      return function (_x55, _x56) {
        return _ref28.apply(this, arguments);
      };
    }()
  );
}

function moveHistoryIndexBack(index) {
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
                dispatch({
                  type: _action_types.PostTypes.MOVE_HISTORY_INDEX_BACK,
                  data: index
                }, getState);
                return _context29.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      return function (_x57, _x58) {
        return _ref29.apply(this, arguments);
      };
    }()
  );
}

function moveHistoryIndexForward(index) {
  return (
    /*#__PURE__*/
    function () {
      var _ref30 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee30(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                dispatch({
                  type: _action_types.PostTypes.MOVE_HISTORY_INDEX_FORWARD,
                  data: index
                }, getState);
                return _context30.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      return function (_x59, _x60) {
        return _ref30.apply(this, arguments);
      };
    }()
  );
}

function handleNewPost(msg) {
  return (
    /*#__PURE__*/
    function () {
      var _ref31 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee31(dispatch, getState) {
        var state, currentUserId, post, myChannelMember, websocketMessageProps, otherUserId;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                state = getState();
                currentUserId = (0, _users.getCurrentUserId)(state);
                post = JSON.parse(msg.data.post);
                myChannelMember = (0, _channels.getMyChannelMember)(state, post.channel_id);
                websocketMessageProps = msg.data;

                if (!(myChannelMember && Object.keys(myChannelMember).length === 0 && myChannelMember.constructor === 'Object')) {
                  _context31.next = 8;
                  break;
                }

                _context31.next = 8;
                return dispatch((0, _channels2.getMyChannelMember)(post.channel_id));

              case 8:
                dispatch(completePostReceive(post, websocketMessageProps));

                if (msg.data.channel_type === _constants.General.DM_CHANNEL) {
                  otherUserId = (0, _channel_utils.getUserIdFromChannelName)(currentUserId, msg.data.channel_name);
                  dispatch((0, _preferences.makeDirectChannelVisibleIfNecessary)(otherUserId));
                } else if (msg.data.channel_type === _constants.General.GM_CHANNEL) {
                  dispatch((0, _preferences.makeGroupMessageVisibleIfNecessary)(post.channel_id));
                }

              case 10:
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

function completePostReceive(post, websocketMessageProps) {
  return (
    /*#__PURE__*/
    function () {
      var _ref32 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee32(dispatch, getState) {
        var state, rootPost, postsInChannel;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                state = getState();
                rootPost = Selectors.getPost(state, post.root_id);
                postsInChannel = Selectors.getPostIdsInChannel(state, post.channel_id); // skip calling getPostThread if there are no postsInChannel.
                // This leads to having few posts in channel before the first visit.

                if (post.root_id && !rootPost && postsInChannel && postsInChannel.length !== 0) {
                  dispatch(getPostThread(post.root_id));
                }

                dispatch(lastPostAction(post, websocketMessageProps));

              case 5:
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

function lastPostAction(post, websocketMessageProps) {
  return (
    /*#__PURE__*/
    function () {
      var _ref33 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee33(dispatch, getState) {
        var state, actions, markAsRead, markAsReadOnServer;
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                state = getState();
                actions = [{
                  type: _action_types.PostTypes.RECEIVED_NEW_POST,
                  data: _objectSpread({}, post)
                }, {
                  type: _constants.WebsocketEvents.STOP_TYPING,
                  data: {
                    id: post.channel_id + post.root_id,
                    userId: post.user_id,
                    now: Date.now()
                  }
                }];
                dispatch((0, _reduxBatchedActions.batchActions)(actions));

                if (!(0, _post_utils.shouldIgnorePost)(post)) {
                  _context33.next = 5;
                  break;
                }

                return _context33.abrupt("return");

              case 5:
                markAsRead = false;
                markAsReadOnServer = false;

                if (post.user_id === (0, _users.getCurrentUserId)(state) && !(0, _post_utils.isSystemMessage)(post) && !(0, _post_utils.isFromWebhook)(post)) {
                  markAsRead = true;
                  markAsReadOnServer = false;
                } else if (post.channel_id === (0, _channels.getCurrentChannelId)(state)) {
                  markAsRead = true;
                  markAsReadOnServer = true;
                }

                if (markAsRead) {
                  dispatch((0, _channels2.markChannelAsRead)(post.channel_id, null, markAsReadOnServer));
                  dispatch((0, _channels2.markChannelAsViewed)(post.channel_id));
                } else {
                  dispatch((0, _channels2.markChannelAsUnread)(websocketMessageProps.team_id, post.channel_id, websocketMessageProps.mentions));
                }

              case 9:
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
}

var _default = {
  createPost: createPost,
  createPostImmediately: createPostImmediately,
  resetCreatePostRequest: resetCreatePostRequest,
  editPost: editPost,
  deletePost: deletePost,
  removePost: removePost,
  getPostThread: getPostThread,
  getPostThreadWithRetry: getPostThreadWithRetry,
  getPosts: getPosts,
  getPostsWithRetry: getPostsWithRetry,
  getPostsSince: getPostsSince,
  getPostsSinceWithRetry: getPostsSinceWithRetry,
  getPostsBefore: getPostsBefore,
  getPostsBeforeWithRetry: getPostsBeforeWithRetry,
  getPostsAfter: getPostsAfter,
  getPostsAfterWithRetry: getPostsAfterWithRetry,
  selectPost: selectPost,
  selectFocusedPostId: selectFocusedPostId,
  addMessageIntoHistory: addMessageIntoHistory,
  resetHistoryIndex: resetHistoryIndex,
  moveHistoryIndexBack: moveHistoryIndexBack,
  moveHistoryIndexForward: moveHistoryIndexForward,
  handleNewPost: handleNewPost
};
exports.default = _default;