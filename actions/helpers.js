"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceLogoutIfNecessary = forceLogoutIfNecessary;
exports.requestData = requestData;
exports.requestSuccess = requestSuccess;
exports.requestFailure = requestFailure;
exports.bindClientFunc = bindClientFunc;
exports.debounce = debounce;
exports.FormattedError = void 0;

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.map");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.reflect.apply");

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

var _reduxBatchedActions = require("redux-batched-actions");

var _client = require("../client");

var _action_types = require("../action_types");

var _errors = require("./errors");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var HTTP_UNAUTHORIZED = 401;

function forceLogoutIfNecessary(err
/*: Client4Error*/
, dispatch
/*: DispatchFunc*/
, getState
/*: GetStateFunc*/
) {
  var currentUserId = getState().entities.users.currentUserId;

  if (err.status_code === HTTP_UNAUTHORIZED && err.url && err.url.indexOf('/login') === -1 && currentUserId) {
    _client.Client4.setToken('');

    dispatch({
      type: _action_types.UserTypes.LOGOUT_SUCCESS,
      data: {}
    });
  }
}

function dispatcher(type
/*: ActionType*/
, data
/*: any*/
, dispatch
/*: DispatchFunc*/
, getState
/*: GetStateFunc*/
) {
  if (type.indexOf('SUCCESS') === -1) {
    // we don't want to pass the data for the request types
    dispatch(requestSuccess(type, data), getState);
  } else {
    dispatch(requestData(type), getState);
  }
}

function requestData(type
/*: ActionType*/
)
/*: GenericAction*/
{
  return {
    type: type,
    data: null
  };
}

function requestSuccess(type
/*: ActionType*/
, data
/*: any*/
) {
  return {
    type: type,
    data: data
  };
}

function requestFailure(type
/*: ActionType*/
, error
/*: Client4Error*/
) {
  return {
    type: type,
    error: error
  };
}
/**
 * Returns an ActionFunc which calls a specfied (client) function and
 * dispatches the specifed actions on request, success or failure.
 *
 * @export
 * @param {Object} obj                                       an object for destructirung required properties
 * @param {() => Promise<mixed>} obj.clientFunc              clientFunc to execute
 * @param {ActionType} obj.onRequest                         ActionType to dispatch on request
 * @param {(ActionType | Array<ActionType>)} obj.onSuccess   ActionType to dispatch on success
 * @param {ActionType} obj.onFailure                         ActionType to dispatch on failure
 * @param {...Array<any>} obj.params
 * @returns {ActionFunc} ActionFunc
 */


function bindClientFunc(_ref)
/*: ActionFunc*/
{
  var clientFunc = _ref.clientFunc,
      onRequest = _ref.onRequest,
      onSuccess = _ref.onSuccess,
      onFailure = _ref.onFailure,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? [] : _ref$params;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var data, actions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (onRequest) {
                  dispatch(requestData(onRequest), getState);
                }

                data = null;
                _context.prev = 2;
                _context.next = 5;
                return clientFunc.apply(void 0, _toConsumableArray(params));

              case 5:
                data = _context.sent;
                _context.next = 15;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                forceLogoutIfNecessary(_context.t0, dispatch, getState);
                actions = [(0, _errors.logError)(_context.t0)];

                if (onFailure) {
                  actions.push(requestFailure(onFailure, _context.t0));
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions));
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 15:
                if (Array.isArray(onSuccess)) {
                  onSuccess.forEach(function (s) {
                    dispatcher(s, data, dispatch, getState);
                  });
                } else if (onSuccess) {
                  dispatcher(onSuccess, data, dispatch, getState);
                }

                return _context.abrupt("return", {
                  data: data
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
} // Debounce function based on underscores modified to use es6 and a cb


function debounce(func
/*: (...args: any) => mixed*/
, wait
/*: number*/
, immediate
/*: boolean*/
, cb
/*: () => mixed*/
) {
  var timeout;
  return function fx() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var runLater = function runLater() {
      timeout = null;

      if (!immediate) {
        Reflect.apply(func, _this, args);

        if (cb) {
          cb();
        }
      }
    };

    var callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(runLater, wait);

    if (callNow) {
      Reflect.apply(func, this, args);

      if (cb) {
        cb();
      }
    }
  };
}

var FormattedError =
/*#__PURE__*/
function (_Error) {
  _inherits(FormattedError, _Error);

  function FormattedError(id
  /*: string*/
  , defaultMessage
  /*: string*/
  ) {
    var _this2;

    var values
    /*: Object*/
    = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, FormattedError);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FormattedError).call(this, defaultMessage));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "intl", void 0);

    _this2.intl = {
      id: id,
      defaultMessage: defaultMessage,
      values: values
    };
    return _this2;
  }

  return FormattedError;
}(_wrapNativeSuper(Error));

exports.FormattedError = FormattedError;