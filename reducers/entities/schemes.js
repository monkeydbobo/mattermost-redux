"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _redux = require("redux");

var _action_types = require("../../action_types");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function schemes()
/*: { [string]: Scheme }*/
{
  var state
  /*: { [string]: Scheme }*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.SchemeTypes.CREATED_SCHEME:
    case _action_types.SchemeTypes.PATCHED_SCHEME:
    case _action_types.SchemeTypes.RECEIVED_SCHEME:
      {
        return _objectSpread({}, state, _defineProperty({}, action.data.id, action.data));
      }

    case _action_types.SchemeTypes.RECEIVED_SCHEMES:
      {
        var nextState = _objectSpread({}, state);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = action.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var scheme = _step.value;
            nextState[scheme.id] = scheme;
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

        return nextState;
      }

    case _action_types.SchemeTypes.DELETED_SCHEME:
      {
        var _nextState = _objectSpread({}, state);

        Reflect.deleteProperty(_nextState, action.data.schemeId);
        return _nextState;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

var _default = ((0, _redux.combineReducers)({
  schemes: schemes
})
/*: (SchemesState, GenericAction) => SchemesState*/
);

exports.default = _default;