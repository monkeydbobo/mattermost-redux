"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _action_types = require("../../action_types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.ErrorTypes.DISMISS_ERROR:
      {
        var nextState = _toConsumableArray(state);

        nextState.splice(action.index, 1);
        return nextState;
      }

    case _action_types.ErrorTypes.LOG_ERROR:
      {
        var _nextState = _toConsumableArray(state);

        var displayable = action.displayable,
            error = action.error;

        _nextState.push({
          displayable: displayable,
          error: error,
          date: new Date(Date.now()).toUTCString()
        });

        return _nextState;
      }

    case _action_types.ErrorTypes.RESTORE_ERRORS:
      return action.data;

    case _action_types.ErrorTypes.CLEAR_ERRORS:
      {
        return [];
      }

    default:
      return state;
  }
};

exports.default = _default;