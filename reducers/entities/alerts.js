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

var _redux = require("redux");

var _action_types = require("../../action_types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function alertStack() {
  var state
  /*: Array<AlertType>*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  var nextState = _toConsumableArray(state);

  switch (action.type) {
    case _action_types.AlertTypes.PUSH_ALERT:
      {
        nextState.unshift(action.data);
        return nextState;
      }

    case _action_types.AlertTypes.CLEAR_ALERT:
      {
        nextState.shift();
        return nextState;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return [];

    default:
      return state;
  }
}

var _default = ((0, _redux.combineReducers)({
  // array acting as a stack where every object is an alert
  alertStack: alertStack
})
/*: ({| alertStack: Array<AlertType> |}, GenericAction) => {| alertStack: Array<AlertType> |}*/
);

exports.default = _default;