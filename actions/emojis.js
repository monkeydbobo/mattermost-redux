"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSystemEmojis = setSystemEmojis;
exports.createCustomEmoji = createCustomEmoji;
exports.getCustomEmoji = getCustomEmoji;
exports.getCustomEmojiByName = getCustomEmojiByName;
exports.getCustomEmojisByName = getCustomEmojisByName;
exports.getCustomEmojisInText = getCustomEmojisInText;
exports.getCustomEmojis = getCustomEmojis;
exports.loadProfilesForCustomEmojis = loadProfilesForCustomEmojis;
exports.getAllCustomEmojis = getAllCustomEmojis;
exports.deleteCustomEmoji = deleteCustomEmoji;
exports.searchCustomEmojis = searchCustomEmojis;
exports.autocompleteCustomEmojis = autocompleteCustomEmojis;
exports.systemEmojis = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

var _client = require("../client");

var _action_types = require("../action_types");

var _constants = require("../constants");

var _users = require("./users");

var _emojis = require("../selectors/entities/emojis");

var _emoji_utils = require("../utils/emoji_utils");

var _helpers = require("../utils/helpers");

var _errors = require("./errors");

var _helpers2 = require("./helpers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var systemEmojis
/*: Map<string, Object>*/
= new Map();
exports.systemEmojis = systemEmojis;

function setSystemEmojis(emojis
/*: Map<string, Object>*/
) {
  exports.systemEmojis = systemEmojis = emojis;
}

function createCustomEmoji(emoji
/*: Object*/
, image
/*: Object*/
)
/*: ActionFunc*/
{
  return (0, _helpers2.bindClientFunc)({
    clientFunc: _client.Client4.createCustomEmoji,
    onSuccess: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJI,
    params: [emoji, image]
  });
}

function getCustomEmoji(emojiId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers2.bindClientFunc)({
    clientFunc: _client.Client4.getCustomEmoji,
    onSuccess: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJI,
    params: [emojiId]
  });
}

function getCustomEmojiByName(name
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
        var serverVersion, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                serverVersion = _client.Client4.getServerVersion();

                if ((0, _helpers.isMinimumServerVersion)(serverVersion, 4, 7)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", {
                  data: {}
                });

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _client.Client4.getCustomEmojiByName(name);

              case 6:
                data = _context.sent;
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                (0, _helpers2.forceLogoutIfNecessary)(_context.t0, dispatch, getState);

                if (_context.t0.status_code === 404) {
                  dispatch({
                    type: _action_types.EmojiTypes.CUSTOM_EMOJI_DOES_NOT_EXIST,
                    data: name
                  });
                } else {
                  dispatch((0, _errors.logError)(_context.t0));
                }

                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 14:
                dispatch({
                  type: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJI,
                  data: data
                });
                return _context.abrupt("return", {
                  data: data
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function getCustomEmojisByName(names
/*: Array<string>*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var promises;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!names || names.length === 0)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", {
                  data: true
                });

              case 2:
                promises = [];
                names.forEach(function (name) {
                  return promises.push(getCustomEmojiByName(name)(dispatch, getState));
                });
                _context2.next = 6;
                return Promise.all(promises);

              case 6:
                return _context2.abrupt("return", {
                  data: true
                });

              case 7:
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

function getCustomEmojisInText(text
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        var state, nonExistentEmoji, customEmojisByName, emojisToLoad;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (text) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", {
                  data: true
                });

              case 2:
                state = getState();
                nonExistentEmoji = state.entities.emojis.nonExistentEmoji;
                customEmojisByName = (0, _emojis.getCustomEmojisByName)(state);
                emojisToLoad = (0, _emoji_utils.parseNeededCustomEmojisFromText)(text, systemEmojis, customEmojisByName, nonExistentEmoji);
                return _context3.abrupt("return", getCustomEmojisByName(Array.from(emojisToLoad))(dispatch, getState));

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

function getCustomEmojis()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.PAGE_SIZE_DEFAULT;
  var sort
  /*: string*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.Emoji.SORT_BY_NAME;
  var loadUsers
  /*: boolean*/
  = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _client.Client4.getCustomEmojis(page, perPage, sort);

              case 3:
                data = _context4.sent;
                _context4.next = 11;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                (0, _helpers2.forceLogoutIfNecessary)(_context4.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context4.t0));
                return _context4.abrupt("return", {
                  error: _context4.t0
                });

              case 11:
                if (loadUsers) {
                  dispatch(loadProfilesForCustomEmojis(data));
                }

                dispatch({
                  type: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJIS,
                  data: data
                });
                return _context4.abrupt("return", {
                  data: data
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function loadProfilesForCustomEmojis(emojis
/*: Array<Object>*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var usersToLoad, userIds;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                usersToLoad = {};
                emojis.forEach(function (emoji
                /*: Object*/
                ) {
                  if (!getState().entities.users.profiles[emoji.creator_id]) {
                    usersToLoad[emoji.creator_id] = true;
                  }
                });
                userIds = Object.keys(usersToLoad);

                if (!(userIds.length > 0)) {
                  _context5.next = 6;
                  break;
                }

                _context5.next = 6;
                return dispatch((0, _users.getProfilesByIds)(userIds));

              case 6:
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

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

function getAllCustomEmojis()
/*: ActionFunc*/
{
  var perPage
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.General.PAGE_SIZE_MAXIMUM;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var hasMore, page, allEmojis, emojis;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch({
                  type: _action_types.EmojiTypes.CLEAR_CUSTOM_EMOJIS,
                  data: null
                });
                hasMore = true;
                page = 0;
                allEmojis = [];

              case 4:
                _context6.prev = 4;
                emojis = [];
                _context6.next = 8;
                return _client.Client4.getCustomEmojis(page, perPage, _constants.Emoji.SORT_BY_NAME);

              case 8:
                emojis = _context6.sent;

                // eslint-disable-line no-await-in-loop
                if (emojis.length < perPage) {
                  hasMore = false;
                } else {
                  page += 1;
                }

                allEmojis.push.apply(allEmojis, _toConsumableArray(emojis));
                _context6.next = 18;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](4);
                (0, _helpers2.forceLogoutIfNecessary)(_context6.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context6.t0));
                return _context6.abrupt("return", {
                  error: true
                });

              case 18:
                if (hasMore) {
                  _context6.next = 4;
                  break;
                }

              case 19:
                dispatch({
                  type: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJIS,
                  data: allEmojis
                });
                return _context6.abrupt("return", {
                  data: true
                });

              case 21:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 13]]);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}

function deleteCustomEmoji(emojiId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _client.Client4.deleteCustomEmoji(emojiId);

              case 3:
                _context7.next = 10;
                break;

              case 5:
                _context7.prev = 5;
                _context7.t0 = _context7["catch"](0);
                (0, _helpers2.forceLogoutIfNecessary)(_context7.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context7.t0));
                return _context7.abrupt("return", {
                  error: _context7.t0
                });

              case 10:
                dispatch({
                  type: _action_types.EmojiTypes.DELETED_CUSTOM_EMOJI,
                  data: {
                    id: emojiId
                  }
                });
                return _context7.abrupt("return", {
                  data: true
                });

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 5]]);
      }));

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
}

function searchCustomEmojis(term
/*: string*/
)
/*: ActionFunc*/
{
  var options
  /*: Object*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var loadUsers
  /*: boolean*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(dispatch, getState) {
        var serverVersion, data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                serverVersion = _client.Client4.getServerVersion();

                if ((0, _helpers.isMinimumServerVersion)(serverVersion, 4, 7)) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", {
                  data: []
                });

              case 3:
                _context8.prev = 3;
                _context8.next = 6;
                return _client.Client4.searchCustomEmoji(term, options);

              case 6:
                data = _context8.sent;
                _context8.next = 14;
                break;

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](3);
                (0, _helpers2.forceLogoutIfNecessary)(_context8.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context8.t0));
                return _context8.abrupt("return", {
                  error: _context8.t0
                });

              case 14:
                if (loadUsers) {
                  dispatch(loadProfilesForCustomEmojis(data));
                }

                dispatch({
                  type: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJIS,
                  data: data
                });
                return _context8.abrupt("return", {
                  data: data
                });

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[3, 9]]);
      }));

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
}

function autocompleteCustomEmojis(name
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(dispatch, getState) {
        var serverVersion, data;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                serverVersion = _client.Client4.getServerVersion();

                if ((0, _helpers.isMinimumServerVersion)(serverVersion, 4, 7)) {
                  _context9.next = 3;
                  break;
                }

                return _context9.abrupt("return", {
                  data: []
                });

              case 3:
                _context9.prev = 3;
                _context9.next = 6;
                return _client.Client4.autocompleteCustomEmoji(name);

              case 6:
                data = _context9.sent;
                _context9.next = 14;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](3);
                (0, _helpers2.forceLogoutIfNecessary)(_context9.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context9.t0));
                return _context9.abrupt("return", {
                  error: _context9.t0
                });

              case 14:
                dispatch({
                  type: _action_types.EmojiTypes.RECEIVED_CUSTOM_EMOJIS,
                  data: data
                });
                return _context9.abrupt("return", {
                  data: data
                });

              case 16:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[3, 9]]);
      }));

      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
}