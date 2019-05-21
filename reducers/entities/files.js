"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.files = files;
exports.fileIdsByPostId = fileIdsByPostId;
exports.default = void 0;

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

var _redux = require("redux");

var _action_types = require("../../action_types");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function files() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.FileTypes.RECEIVED_UPLOAD_FILES:
    case _action_types.FileTypes.RECEIVED_FILES_FOR_POST:
      {
        var filesById = action.data.reduce(function (filesMap, file) {
          return _objectSpread({}, filesMap, _defineProperty({}, file.id, file));
        }, {});
        return _objectSpread({}, state, filesById);
      }

    case _action_types.PostTypes.RECEIVED_NEW_POST:
    case _action_types.PostTypes.RECEIVED_POST:
      {
        var post = action.data;
        return storeFilesForPost(state, post);
      }

    case _action_types.PostTypes.RECEIVED_POSTS:
      {
        var posts = Object.values(action.data.posts);
        return posts.reduce(storeFilesForPost, state);
      }

    case _action_types.PostTypes.POST_DELETED:
      {
        if (action.data && action.data.file_ids && action.data.file_ids.length) {
          var nextState = _objectSpread({}, state);

          var fileIds = action.data.file_ids;
          fileIds.forEach(function (id) {
            Reflect.deleteProperty(nextState, id);
          });
          return nextState;
        }

        return state;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function storeFilesForPost(state, post) {
  if (!post.metadata || !post.metadata.files) {
    return state;
  }

  return post.metadata.files.reduce(function (nextState, file) {
    if (nextState[file.id]) {
      // File is already in the store
      return nextState;
    }

    return _objectSpread({}, nextState, _defineProperty({}, file.id, file));
  }, state);
}

function fileIdsByPostId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.FileTypes.RECEIVED_FILES_FOR_POST:
      {
        var data = action.data,
            postId = action.postId;
        var filesIdsForPost = data.map(function (file) {
          return file.id;
        });
        return _objectSpread({}, state, _defineProperty({}, postId, filesIdsForPost));
      }

    case _action_types.PostTypes.RECEIVED_NEW_POST:
    case _action_types.PostTypes.RECEIVED_POST:
      {
        var post = action.data;
        return storeFilesIdsForPost(state, post);
      }

    case _action_types.PostTypes.RECEIVED_POSTS:
      {
        var posts = Object.values(action.data.posts);
        return posts.reduce(storeFilesIdsForPost, state);
      }

    case _action_types.PostTypes.POST_DELETED:
      {
        if (action.data) {
          var nextState = _objectSpread({}, state);

          Reflect.deleteProperty(nextState, action.data.id);
          return nextState;
        }

        return state;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function storeFilesIdsForPost(state, post) {
  if (!post.metadata || !post.metadata.files) {
    return state;
  }

  return _objectSpread({}, state, _defineProperty({}, post.id, post.metadata.files ? post.metadata.files.map(function (file) {
    return file.id;
  }) : []));
}

function filePublicLink() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.FileTypes.RECEIVED_FILE_PUBLIC_LINK:
      {
        return action.data;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return '';

    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  files: files,
  fileIdsByPostId: fileIdsByPostId,
  filePublicLink: filePublicLink
});

exports.default = _default;