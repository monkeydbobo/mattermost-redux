"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customEmoji = customEmoji;
exports.default = void 0;

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _redux = require("redux");

var _action_types = require("../../action_types");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function customEmoji()
/*: IDMappedObjects<CustomEmoji>*/
{
  var state
  /*: IDMappedObjects<CustomEmoji>*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJI:
      {
        var nextState = _objectSpread({}, state);

        nextState[action.data.id] = action.data;
        return nextState;
      }

    case _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJIS:
      {
        var _nextState = _objectSpread({}, state);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = action.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var emoji = _step.value;
            _nextState[emoji.id] = emoji;
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

    case _action_types.EmojiTypes.DELETED_CUSTOM_EMOJI:
      {
        var _nextState2 = _objectSpread({}, state);

        Reflect.deleteProperty(_nextState2, action.data.id);
        return _nextState2;
      }

    case _action_types.EmojiTypes.CLEAR_CUSTOM_EMOJIS:
    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    case _action_types.PostTypes.RECEIVED_NEW_POST:
    case _action_types.PostTypes.RECEIVED_POST:
      {
        var post
        /*: Post*/
        = action.data;
        return storeEmojisForPost(state, post);
      }

    case _action_types.PostTypes.RECEIVED_POSTS:
      {
        var posts = Object.values(action.data.posts);
        return (posts
        /*: any*/
        ).reduce(storeEmojisForPost, state); // Cast to any to avoid typing problems caused by Object.values
      }

    default:
      return state;
  }
}

function storeEmojisForPost(state
/*: IDMappedObjects<CustomEmoji>*/
, post
/*: Post*/
)
/*: IDMappedObjects<CustomEmoji>*/
{
  if (!post.metadata || !post.metadata.emojis) {
    return state;
  }

  return post.metadata.emojis.reduce(function (nextState, emoji) {
    if (nextState[emoji.id]) {
      // Emoji is already in the store
      return nextState;
    }

    return _objectSpread({}, nextState, _defineProperty({}, emoji.id, emoji));
  }, state);
}

function nonExistentEmoji()
/*: Set<string>*/
{
  var state
  /*: Set<string>*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.EmojiTypes.CUSTOM_EMOJI_DOES_NOT_EXIST:
      {
        if (!state.has(action.data)) {
          var nextState = new Set(state);
          nextState.add(action.data);
          return nextState;
        }

        return state;
      }

    case _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJI:
      {
        if (action.data && state.has(action.data.name)) {
          var _nextState3 = new Set(state);

          _nextState3.delete(action.data.name);

          return _nextState3;
        }

        return state;
      }

    case _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJIS:
      {
        var data = action.data || [];

        var _nextState4 = new Set(state);

        var changed = false;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var emoji = _step2.value;

            if (emoji && _nextState4.has(emoji.name)) {
              _nextState4.delete(emoji.name);

              changed = true;
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

        return changed ? _nextState4 : state;
      }

    case _action_types.EmojiTypes.CLEAR_CUSTOM_EMOJIS:
    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return new Set();

    default:
      return state;
  }
}

var _default = ((0, _redux.combineReducers)({
  // object where every key is the custom emoji id and has an object with the custom emoji details
  customEmoji: customEmoji,
  // set containing custom emoji names that do not exist
  nonExistentEmoji: nonExistentEmoji
})
/*: (EmojisState, GenericAction) => EmojisState*/
);

exports.default = _default;