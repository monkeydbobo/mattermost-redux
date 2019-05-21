"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typing;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.reflect.delete-property");

var _constants = require("../../constants");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function typing()
/*: Typing*/
{
  var state
  /*: Typing*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case _constants.WebsocketEvents.TYPING:
      {
        var id = data.id,
            userId = data.userId,
            now = data.now;

        if (id && userId) {
          return _objectSpread({}, state, _defineProperty({}, id, _objectSpread({}, state[id] || {}, _defineProperty({}, userId, now))));
        }

        return state;
      }

    case _constants.WebsocketEvents.STOP_TYPING:
      {
        var _id = data.id,
            _userId = data.userId,
            _now = data.now;

        if (state[_id] && state[_id][_userId] <= _now) {
          var nextState = _objectSpread({}, state, _defineProperty({}, _id, _objectSpread({}, state[_id])));

          Reflect.deleteProperty(nextState[_id], _userId);

          if (Object.keys(nextState[_id]).length === 0) {
            Reflect.deleteProperty(nextState, _id);
          }

          return nextState;
        }

        return state;
      }

    default:
      return state;
  }
}