"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPosts = getAllPosts;
exports.getPost = getPost;
exports.getPostsInThread = getPostsInThread;
exports.getReactionsForPosts = getReactionsForPosts;
exports.makeGetReactionsForPost = makeGetReactionsForPost;
exports.getOpenGraphMetadata = getOpenGraphMetadata;
exports.getOpenGraphMetadataForUrl = getOpenGraphMetadataForUrl;
exports.makeGetPostIdsForThread = makeGetPostIdsForThread;
exports.makeGetPostIdsAroundPost = makeGetPostIdsAroundPost;
exports.makeGetPostsInChannel = makeGetPostsInChannel;
exports.makeGetPostsAroundPost = makeGetPostsAroundPost;
exports.makeGetPostsForThread = makeGetPostsForThread;
exports.makeGetCommentCountForPost = makeGetCommentCountForPost;
exports.getSearchMatches = getSearchMatches;
exports.makeGetMessageInHistoryItem = makeGetMessageInHistoryItem;
exports.makeGetPostsForIds = makeGetPostsForIds;
exports.getPostIdsInChannel = getPostIdsInChannel;
exports.makeIsPostCommentMention = exports.isPostIdSending = exports.getCurrentUsersLatestPost = exports.getLatestReplyablePostId = exports.getMostRecentPostIdInChannel = exports.getLastPostPerChannel = exports.getSearchResults = exports.getPostsInCurrentChannel = exports.getPostIdsInCurrentChannel = void 0;

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _reselect = require("reselect");

var _common = require("./common");

var _preferences = require("./preferences");

var _helpers = require("../../utils/helpers");

var _constants = require("../../constants");

var _post_utils = require("../../utils/post_utils");

var _preference_utils = require("../../utils/preference_utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getAllPosts(state
/*: GlobalState*/
) {
  return state.entities.posts.posts;
}

function getPost(state
/*: GlobalState*/
, postId
/*: $ID<Post>*/
)
/*: Post*/
{
  return getAllPosts(state)[postId];
}

function getPostsInThread(state
/*: GlobalState*/
)
/*: RelationOneToMany<Post, Post>*/
{
  return state.entities.posts.postsInThread;
}

function getReactionsForPosts(state
/*: GlobalState*/
)
/*: RelationOneToOne<Post, Array<Reaction>>*/
{
  return state.entities.posts.reactions;
}

function makeGetReactionsForPost()
/*: (GlobalState, $ID<Post>) => ?Array<Reaction>*/
{
  return (0, _reselect.createSelector)(getReactionsForPosts, function (state
  /*: GlobalState*/
  , postId) {
    return postId;
  }, function (reactions, postId) {
    if (reactions[postId]) {
      return reactions[postId];
    }

    return null;
  });
}

function getOpenGraphMetadata(state
/*: GlobalState*/
)
/*: RelationOneToOne<Post, Object>*/
{
  return state.entities.posts.openGraph;
}

function getOpenGraphMetadataForUrl(state
/*: GlobalState*/
, url
/*: string*/
)
/*: Object*/
{
  return state.entities.posts.openGraph[url];
}

var getPostIdsInCurrentChannel
/*: (state: GlobalState) => Array<$ID<Post>>*/
= (0, _helpers.createIdsSelector)(function (state
/*: GlobalState*/
) {
  return state.entities.posts.postsInChannel[state.entities.channels.currentChannelId];
}, function (postIdsInCurrentChannel) {
  return postIdsInCurrentChannel || [];
});
exports.getPostIdsInCurrentChannel = getPostIdsInCurrentChannel;
var getPostsInCurrentChannel
/*: (GlobalState) => Array<Post>*/
= (0, _reselect.createSelector)(getAllPosts, getPostIdsInCurrentChannel, function (posts, postIds) {
  return postIds.map(function (id) {
    return posts[id];
  });
});
exports.getPostsInCurrentChannel = getPostsInCurrentChannel;

function makeGetPostIdsForThread()
/*: (GlobalState, $ID<Post>) => Array<$ID<Post>>*/
{
  return (0, _helpers.createIdsSelector)(getAllPosts, function (state
  /*: GlobalState*/
  , rootId) {
    return state.entities.posts.postsInThread[rootId] || [];
  }, function (state
  /*: GlobalState*/
  , rootId) {
    return state.entities.posts.posts[rootId];
  }, function (posts, postsForThread, rootPost) {
    var thread = [];

    if (rootPost) {
      thread.push(rootPost);
    }

    postsForThread.forEach(function (id) {
      var post = posts[id];

      if (post) {
        thread.push(post);
      }
    });
    thread.sort(_post_utils.comparePosts);
    return thread.map(function (post) {
      return post.id;
    });
  });
}

function makeGetPostIdsAroundPost()
/*: (GlobalState, $ID<Post>, $ID<Channel>, {postBeforeCount: number, postAfterCount: number}) => ?Array<$ID<Post>>*/
{
  return (0, _helpers.createIdsSelector)(function (state
  /*: GlobalState*/
  , focusedPostId, channelId) {
    return state.entities.posts.postsInChannel[channelId];
  }, function (state
  /*: GlobalState*/
  , focusedPostId) {
    return focusedPostId;
  }, function (state
  /*: GlobalState*/
  , focusedPostId, channelId, options) {
    return options && options.postsBeforeCount;
  }, function (state
  /*: GlobalState*/
  , focusedPostId, channelId, options) {
    return options && options.postsAfterCount;
  }, function (postIds, focusedPostId) {
    var postsBeforeCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.Posts.POST_CHUNK_SIZE / 2;
    var postsAfterCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants.Posts.POST_CHUNK_SIZE / 2;

    if (!postIds) {
      return null;
    }

    var focusedPostIndex = postIds.indexOf(focusedPostId);

    if (focusedPostIndex === -1) {
      return null;
    }

    var desiredPostIndexBefore = focusedPostIndex - postsBeforeCount;
    var minPostIndex = desiredPostIndexBefore < 0 ? 0 : desiredPostIndexBefore;
    var maxPostIndex = focusedPostIndex + postsAfterCount + 1; // Needs the extra 1 to include the focused post

    return postIds.slice(minPostIndex, maxPostIndex);
  });
}

function formatPostInChannel(post
/*: Post*/
, previousPost
/*: ?Post*/
, index
/*: number*/
, allPosts
/*: IDMappedObjects<Post>*/
, postsInThread
/*: RelationOneToMany<Post, Post>*/
, postIds
/*: Array<$ID<Post>>*/
, currentUser
/*: UserProfile*/
, focusedPostId
/*: $ID<Post>*/
)
/*: PostWithFormatData*/
{
  var isFirstReply = false;
  var isLastReply = false;
  var highlight = false;
  var commentedOnPost;

  if (post.id === focusedPostId) {
    highlight = true;
  }

  if (post.root_id) {
    if (previousPost && previousPost.root_id !== post.root_id) {
      // Post is the first reply in a list of consecutive replies
      isFirstReply = true;

      if (previousPost && previousPost.id !== post.root_id) {
        commentedOnPost = allPosts[post.root_id];
      }
    }

    if (index - 1 < 0 || allPosts[postIds[index - 1]].root_id !== post.root_id) {
      // Post is the last reply in a list of consecutive replies
      isLastReply = true;
    }
  }

  var previousPostIsComment = false;

  if (previousPost && previousPost.root_id) {
    previousPostIsComment = true;
  }

  var postFromWebhook = Boolean(post.props && post.props.from_webhook);
  var prevPostFromWebhook = Boolean(previousPost && previousPost.props && previousPost.props.from_webhook);
  var consecutivePostByUser = false;

  if (previousPost && previousPost.user_id === post.user_id && post.create_at - previousPost.create_at <= _constants.Posts.POST_COLLAPSE_TIMEOUT && !postFromWebhook && !prevPostFromWebhook && !(0, _post_utils.isSystemMessage)(post) && !(0, _post_utils.isSystemMessage)(previousPost)) {
    // The last post and this post were made by the same user within some time
    consecutivePostByUser = true;
  }

  var threadRepliedToByCurrentUser = false;
  var replyCount = 0;
  var isCommentMention = false;

  if (currentUser) {
    var rootId = post.root_id || post.id;
    var threadIds = postsInThread[rootId] || [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = threadIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var pid = _step.value;
        var p = allPosts[pid];

        if (!p) {
          continue;
        }

        if (p.user_id === currentUser.id) {
          threadRepliedToByCurrentUser = true;
        }

        if (!(0, _post_utils.isPostEphemeral)(p)) {
          replyCount += 1;
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

    var rootPost = allPosts[rootId];
    isCommentMention = (0, _post_utils.isPostCommentMention)({
      post: post,
      currentUser: currentUser,
      threadRepliedToByCurrentUser: threadRepliedToByCurrentUser,
      rootPost: rootPost
    });
  }

  return _objectSpread({}, post, {
    isFirstReply: isFirstReply,
    isLastReply: isLastReply,
    previousPostIsComment: previousPostIsComment,
    commentedOnPost: commentedOnPost,
    consecutivePostByUser: consecutivePostByUser,
    replyCount: replyCount,
    isCommentMention: isCommentMention,
    highlight: highlight
  });
}

function makeGetPostsInChannel()
/*: (GlobalState, $ID<Channel>, number) => ?Array<PostWithFormatData>*/
{
  return (0, _reselect.createSelector)(getAllPosts, getPostsInThread, function (state
  /*: GlobalState*/
  , channelId
  /*: $ID<Channel>*/
  ) {
    return state.entities.posts.postsInChannel[channelId];
  }, _common.getCurrentUser, _preferences.getMyPreferences, function (state
  /*: GlobalState*/
  , channelId
  /*: $ID<Channel>*/
  , numPosts
  /*: number*/
  ) {
    return numPosts || _constants.Posts.POST_CHUNK_SIZE;
  }, function (allPosts, postsInThread, postIds, currentUser, myPreferences, numPosts) {
    if (!postIds || !currentUser) {
      return null;
    }

    var posts = [];
    var joinLeavePref = myPreferences[(0, _preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_ADVANCED_SETTINGS, _constants.Preferences.ADVANCED_FILTER_JOIN_LEAVE)];
    var showJoinLeave = joinLeavePref ? joinLeavePref.value !== 'false' : true;

    for (var i = 0; i < postIds.length && i < numPosts; i++) {
      var post = allPosts[postIds[i]];

      if ((0, _post_utils.shouldFilterJoinLeavePost)(post, showJoinLeave, currentUser.username)) {
        continue;
      }

      var previousPost = allPosts[postIds[i + 1]] || null;
      posts.push(formatPostInChannel(post, previousPost, i, allPosts, postsInThread, postIds, currentUser, ''));
    }

    return posts;
  });
}

function makeGetPostsAroundPost()
/*: (GlobalState, $ID<Post>, $ID<Channel>) => ?Array<PostWithFormatData>*/
{
  return (0, _reselect.createSelector)(getAllPosts, getPostsInThread, function (state
  /*: GlobalState*/
  , postId, channelId) {
    return state.entities.posts.postsInChannel[channelId];
  }, function (state
  /*: GlobalState*/
  , postId) {
    return postId;
  }, _common.getCurrentUser, _preferences.getMyPreferences, function (allPosts, postsInThread, postIds, focusedPostId, currentUser, myPreferences) {
    if (!postIds || !currentUser) {
      return null;
    }

    var focusedPostIndex = postIds.indexOf(focusedPostId);

    if (focusedPostIndex === -1) {
      return null;
    }

    var desiredPostIndexBefore = focusedPostIndex - _constants.Posts.POST_CHUNK_SIZE / 2;
    var minPostIndex = desiredPostIndexBefore < 0 ? 0 : desiredPostIndexBefore;
    var slicedPostIds = postIds.slice(minPostIndex);
    var posts = [];
    var joinLeavePref = myPreferences[(0, _preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_ADVANCED_SETTINGS, _constants.Preferences.ADVANCED_FILTER_JOIN_LEAVE)];
    var showJoinLeave = joinLeavePref ? joinLeavePref.value !== 'false' : true;

    for (var i = 0; i < slicedPostIds.length; i++) {
      var post = allPosts[slicedPostIds[i]];

      if ((0, _post_utils.shouldFilterJoinLeavePost)(post, showJoinLeave, currentUser.username)) {
        continue;
      }

      var previousPost = allPosts[slicedPostIds[i + 1]] || null;
      var formattedPost = formatPostInChannel(post, previousPost, i, allPosts, postsInThread, slicedPostIds, currentUser, focusedPostId);
      posts.push(formattedPost);
    }

    return posts;
  });
} // Returns a function that creates a creates a selector that will get the posts for a given thread.
// That selector will take a props object (containing a rootId field) as its
// only argument and will be memoized based on that argument.


function makeGetPostsForThread()
/*: (GlobalState, {rootId: $ID<Post>}) => Array<Post>*/
{
  return (0, _reselect.createSelector)(getAllPosts, function (state
  /*: GlobalState*/
  , _ref) {
    var rootId = _ref.rootId;
    return state.entities.posts.postsInThread[rootId] || [];
  }, function (state
  /*: GlobalState*/
  , _ref2) {
    var rootId = _ref2.rootId;
    return state.entities.posts.posts[rootId];
  }, function (posts, postsForThread, rootPost) {
    var thread = [];

    if (rootPost) {
      thread.push(rootPost);
    }

    postsForThread.forEach(function (id) {
      var post = posts[id];

      if (post) {
        thread.push(post);
      }
    });
    thread.sort(_post_utils.comparePosts);
    return thread;
  });
}

function makeGetCommentCountForPost()
/*: (GlobalState, {post: Post}) => number*/
{
  return (0, _reselect.createSelector)(getAllPosts, function (state, _ref3) {
    var post = _ref3.post;
    return state.entities.posts.postsInThread[post ? post.id : ''] || [];
  }, function (state, props) {
    return props;
  }, function (posts, postsForThread, _ref4) {
    var currentPost = _ref4.post;

    if (!currentPost) {
      return 0;
    }

    var count = 0;
    postsForThread.forEach(function (id) {
      var post = posts[id];

      if (post && post.state !== _constants.Posts.POST_DELETED && !(0, _post_utils.isPostEphemeral)(post)) {
        count += 1;
      }
    });
    return count;
  });
}

var getSearchResults
/*: (GlobalState) => Array<Post>*/
= (0, _reselect.createSelector)(getAllPosts, function (state
/*: GlobalState*/
) {
  return state.entities.search.results;
}, function (posts, postIds) {
  if (!postIds) {
    return [];
  }

  return postIds.map(function (id) {
    return posts[id];
  });
}); // Returns the matched text from the search results, if the server has provided them.
// These matches will only be present if the server is running Mattermost 5.1 or higher
// with Elasticsearch enabled to search posts. Otherwise, null will be returned.

exports.getSearchResults = getSearchResults;

function getSearchMatches(state
/*: GlobalState*/
)
/*: {[string]: Array<string>}*/
{
  return state.entities.search.matches;
}

function makeGetMessageInHistoryItem(type
/*: string*/
)
/*: (GlobalState) => string*/
{
  return (0, _reselect.createSelector)(function (state
  /*: GlobalState*/
  ) {
    return state.entities.posts.messagesHistory;
  }, function (messagesHistory) {
    var idx = messagesHistory.index[type];
    var messages = messagesHistory.messages;

    if (idx >= 0 && messages && messages.length > idx) {
      return messages[idx];
    }

    return '';
  });
}

function makeGetPostsForIds()
/*: (GlobalState, Array<$ID<Post>>) => Array<Post>*/
{
  return (0, _helpers.createIdsSelector)(getAllPosts, function (state
  /*: GlobalState*/
  , postIds) {
    return postIds;
  }, function (allPosts, postIds) {
    if (!postIds) {
      return [];
    }

    return postIds.map(function (id) {
      return allPosts[id];
    });
  });
}

var getLastPostPerChannel
/*: (GlobalState) => RelationOneToOne<Channel, Post>*/
= (0, _reselect.createSelector)(getAllPosts, function (state
/*: GlobalState*/
) {
  return state.entities.posts.postsInChannel;
}, function (allPosts, allChannels) {
  var ret = {};

  for (var channelId in allChannels) {
    if (allChannels.hasOwnProperty(channelId)) {
      var channelPosts = allChannels[channelId];

      if (channelPosts.length > 0) {
        var postId = channelPosts[0];

        if (allPosts.hasOwnProperty(postId)) {
          ret[channelId] = allPosts[postId];
        }
      }
    }
  }

  return ret;
});
exports.getLastPostPerChannel = getLastPostPerChannel;
var getMostRecentPostIdInChannel
/*: (GlobalState, $ID<Channel>) => ?$ID<Post>*/
= (0, _reselect.createSelector)(getAllPosts, function (state
/*: GlobalState*/
, channelId) {
  return state.entities.posts.postsInChannel[channelId];
}, _preferences.getMyPreferences, function (posts, postIdsInChannel, preferences) {
  if (!postIdsInChannel) {
    return '';
  }

  var key = (0, _preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_ADVANCED_SETTINGS, _constants.Preferences.ADVANCED_FILTER_JOIN_LEAVE);
  var allowSystemMessages = preferences[key] ? preferences[key].value === 'true' : true;

  if (!allowSystemMessages) {
    // return the most recent non-system message in the channel
    var postId;

    for (var i = 0; i < postIdsInChannel.length; i++) {
      var p = posts[postIdsInChannel[i]];

      if (!p.type || !p.type.startsWith(_constants.Posts.SYSTEM_MESSAGE_PREFIX)) {
        postId = p.id;
        break;
      }
    }

    return postId;
  } // return the most recent message in the channel


  return postIdsInChannel[0];
});
exports.getMostRecentPostIdInChannel = getMostRecentPostIdInChannel;
var getLatestReplyablePostId
/*: (GlobalState) => ?$ID<Post>*/
= (0, _reselect.createSelector)(getPostsInCurrentChannel, function (posts) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = posts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var post = _step2.value;

      if (post.state !== _constants.Posts.POST_DELETED && !(0, _post_utils.isSystemMessage)(post) && !(0, _post_utils.isPostEphemeral)(post)) {
        return post.id;
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

  return null;
});
exports.getLatestReplyablePostId = getLatestReplyablePostId;
var getCurrentUsersLatestPost
/*: (GlobalState, $ID<Post>) => ?Post*/
= (0, _reselect.createSelector)(getPostsInCurrentChannel, _common.getCurrentUser, function (_, rootId) {
  return rootId;
}, function (posts, currentUser, rootId) {
  var lastPost = null;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = posts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var post = _step3.value;

      // don't edit webhook posts, deleted posts, or system messages
      if (post.user_id !== currentUser.id || post.props && post.props.from_webhook || post.state === _constants.Posts.POST_DELETED || (0, _post_utils.isSystemMessage)(post) || (0, _post_utils.isPostEphemeral)(post) || (0, _post_utils.isPostPendingOrFailed)(post)) {
        continue;
      }

      if (rootId) {
        if (post.root_id === rootId || post.id === rootId) {
          lastPost = post;
          break;
        }
      } else {
        lastPost = post;
        break;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return lastPost;
});
exports.getCurrentUsersLatestPost = getCurrentUsersLatestPost;

function getPostIdsInChannel(state
/*: GlobalState*/
, channelId
/*: $ID<Channel>*/
)
/*: Array<$ID<Post>>*/
{
  return state.entities.posts.postsInChannel[channelId];
}

var isPostIdSending = function isPostIdSending(state
/*: GlobalState*/
, postId
/*: $ID<Post>*/
) {
  return (
    /*: boolean*/
    state.entities.posts.sendingPostIds.some(function (sendingPostId) {
      return sendingPostId === postId;
    })
  );
};

exports.isPostIdSending = isPostIdSending;

var makeIsPostCommentMention = function makeIsPostCommentMention()
/*: ((GlobalState, $ID<Post>) => boolean)*/
{
  return (0, _reselect.createSelector)(getAllPosts, getPostsInThread, _common.getCurrentUser, getPost, function (allPosts, postsInThread, currentUser, post) {
    var threadRepliedToByCurrentUser = false;
    var isCommentMention = false;

    if (currentUser) {
      var rootId = post.root_id || post.id;
      var threadIds = postsInThread[rootId] || [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = threadIds[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var pid = _step4.value;
          var p = allPosts[pid];

          if (!p) {
            continue;
          }

          if (p.user_id === currentUser.id) {
            threadRepliedToByCurrentUser = true;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var rootPost = allPosts[rootId];
      isCommentMention = (0, _post_utils.isPostCommentMention)({
        post: post,
        currentUser: currentUser,
        threadRepliedToByCurrentUser: threadRepliedToByCurrentUser,
        rootPost: rootPost
      });
    }

    return isCommentMention;
  });
};

exports.makeIsPostCommentMention = makeIsPostCommentMention;