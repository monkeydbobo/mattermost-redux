"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMiddleware = createMiddleware;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.object.assign");

var _reduxActionBuffer = _interopRequireDefault(require("redux-action-buffer"));

var _constants = require("redux-persist/constants");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultOptions = {
  additionalMiddleware: [],
  enableBuffer: true,
  enableThunk: true
};

function createMiddleware(clientOptions) {
  var options = Object.assign({}, defaultOptions, clientOptions);
  var additionalMiddleware = options.additionalMiddleware,
      enableBuffer = options.enableBuffer,
      enableThunk = options.enableThunk;
  var middleware = [];

  if (enableThunk) {
    middleware.push(_reduxThunk.default);
  }

  if (additionalMiddleware) {
    if (typeof additionalMiddleware === 'function') {
      middleware.push(additionalMiddleware);
    } else {
      middleware.push.apply(middleware, _toConsumableArray(additionalMiddleware));
    }
  }

  if (enableBuffer) {
    middleware.push((0, _reduxActionBuffer.default)(_constants.REHYDRATE));
  }

  return middleware;
}