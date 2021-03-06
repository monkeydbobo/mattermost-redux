"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPing = getPing;
exports.resetPing = resetPing;
exports.getClientConfig = getClientConfig;
exports.getDataRetentionPolicy = getDataRetentionPolicy;
exports.getLicenseConfig = getLicenseConfig;
exports.logClientError = logClientError;
exports.setAppState = setAppState;
exports.setDeviceToken = setDeviceToken;
exports.setServerVersion = setServerVersion;
exports.setStoreFromLocalData = setStoreFromLocalData;
exports.getSupportedTimezones = getSupportedTimezones;
exports.setUrl = setUrl;
exports.getRedirectLocation = getRedirectLocation;
exports.default = void 0;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _client = require("../client");

var _helpers = require("./helpers.js");

var _action_types = require("../action_types");

var _users = require("./users");

var _roles = require("./roles");

var _errors = require("./errors");

var _reduxBatchedActions = require("redux-batched-actions");

var _general = require("../selectors/entities/general");

var _helpers2 = require("../utils/helpers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPing()
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var data, pingError;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _action_types.GeneralTypes.PING_REQUEST,
                  data: {}
                }, getState);
                pingError = new _helpers.FormattedError('mobile.server_ping_failed', 'Cannot connect to the server. Please check your server URL and internet connection.');
                _context.prev = 2;
                _context.next = 5;
                return _client.Client4.ping();

              case 5:
                data = _context.sent;

                if (!(data.status !== 'OK')) {
                  _context.next = 9;
                  break;
                }

                // successful ping but not the right return {data}
                dispatch({
                  type: _action_types.GeneralTypes.PING_FAILURE,
                  data: {},
                  error: pingError
                }, getState);
                return _context.abrupt("return", {
                  error: pingError
                });

              case 9:
                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                // Client4Error
                if (_context.t0.status_code === 401) {
                  // When the server requires a client certificate to connect.
                  pingError = _context.t0;
                }

                dispatch({
                  type: _action_types.GeneralTypes.PING_FAILURE,
                  data: {},
                  error: pingError
                }, getState);
                return _context.abrupt("return", {
                  error: pingError
                });

              case 16:
                dispatch({
                  type: _action_types.GeneralTypes.PING_SUCCESS,
                  data: data
                }, getState);
                return _context.abrupt("return", {
                  data: data
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function resetPing()
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: _action_types.GeneralTypes.PING_RESET,
                  data: {}
                }, getState);
                return _context2.abrupt("return", {
                  data: true
                });

              case 2:
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

function getClientConfig()
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: _action_types.GeneralTypes.CLIENT_CONFIG_REQUEST,
                  data: {}
                }, getState);
                _context3.prev = 1;
                _context3.next = 4;
                return _client.Client4.getClientConfigOld();

              case 4:
                data = _context3.sent;
                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context3.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GeneralTypes.CLIENT_CONFIG_FAILURE,
                  error: _context3.t0
                }, (0, _errors.logError)(_context3.t0)]), getState);
                return _context3.abrupt("return", {
                  error: _context3.t0
                });

              case 12:
                _client.Client4.setEnableLogging(data.EnableDeveloper === 'true');

                _client.Client4.setDiagnosticId(data.DiagnosticId);

                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GeneralTypes.CLIENT_CONFIG_RECEIVED,
                  data: data
                }, {
                  type: _action_types.GeneralTypes.CLIENT_CONFIG_SUCCESS
                }]));
                return _context3.abrupt("return", {
                  data: data
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 7]]);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

function getDataRetentionPolicy()
/*: ActionFunc*/
{
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
                dispatch({
                  type: _action_types.GeneralTypes.DATA_RETENTION_POLICY_REQUEST,
                  data: {}
                }, getState);
                _context4.prev = 1;
                _context4.next = 4;
                return _client.Client4.getDataRetentionPolicy();

              case 4:
                data = _context4.sent;
                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context4.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GeneralTypes.DATA_RETENTION_POLICY_FAILURE,
                  error: _context4.t0
                }, (0, _errors.logError)(_context4.t0)]), getState);
                return _context4.abrupt("return", {
                  error: _context4.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GeneralTypes.RECEIVED_DATA_RETENTION_POLICY,
                  data: data
                }, {
                  type: _action_types.GeneralTypes.DATA_RETENTION_POLICY_SUCCESS
                }]));
                return _context4.abrupt("return", {
                  data: data
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 7]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function getLicenseConfig()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getClientLicenseOld,
    onRequest: _action_types.GeneralTypes.CLIENT_LICENSE_REQUEST,
    onSuccess: [_action_types.GeneralTypes.CLIENT_LICENSE_RECEIVED, _action_types.GeneralTypes.CLIENT_LICENSE_SUCCESS],
    onFailure: _action_types.GeneralTypes.CLIENT_LICENSE_FAILURE
  });
}

function logClientError(message
/*: string*/
) {
  var level
  /*: logLevel*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ERROR';
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.logClientError,
    onRequest: _action_types.GeneralTypes.LOG_CLIENT_ERROR_REQUEST,
    onSuccess: _action_types.GeneralTypes.LOG_CLIENT_ERROR_SUCCESS,
    onFailure: _action_types.GeneralTypes.LOG_CLIENT_ERROR_FAILURE,
    params: [message, level]
  });
}

function setAppState(state
/*: $PropertyType<GeneralState, 'appState'>*/
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
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                dispatch({
                  type: _action_types.GeneralTypes.RECEIVED_APP_STATE,
                  data: state
                }, getState);
                return _context5.abrupt("return", {
                  data: true
                });

              case 2:
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

function setDeviceToken(token
/*: $PropertyType<GeneralState, 'deviceToken'>*/
)
/*: ActionFunc*/
{
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
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch({
                  type: _action_types.GeneralTypes.RECEIVED_APP_DEVICE_TOKEN,
                  data: token
                }, getState);
                return _context6.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}

function setServerVersion(serverVersion
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(dispatch, getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                dispatch({
                  type: _action_types.GeneralTypes.RECEIVED_SERVER_VERSION,
                  data: serverVersion
                }, getState);
                dispatch((0, _roles.loadRolesIfNeeded)([]));
                return _context7.abrupt("return", {
                  data: true
                });

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
}

function setStoreFromLocalData(data
/*: { token: string, url: string }*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(dispatch
      /*: DispatchFunc*/
      , getState) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _client.Client4.setToken(data.token);

                _client.Client4.setUrl(data.url);

                return _context8.abrupt("return", (0, _users.loadMe)()(dispatch, getState));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
}

function getSupportedTimezones() {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTimezones,
    onRequest: _action_types.GeneralTypes.SUPPORTED_TIMEZONES_REQUEST,
    onSuccess: [_action_types.GeneralTypes.SUPPORTED_TIMEZONES_RECEIVED, _action_types.GeneralTypes.SUPPORTED_TIMEZONES_SUCCESS],
    onFailure: _action_types.GeneralTypes.SUPPORTED_TIMEZONES_FAILURE
  });
}

function setUrl(url
/*: string*/
) {
  _client.Client4.setUrl(url);

  return true;
}

function getRedirectLocation(url
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var pendingData, data;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                dispatch({
                  type: _action_types.GeneralTypes.REDIRECT_LOCATION_REQUEST,
                  data: {}
                }, getState);

                if ((0, _helpers2.isMinimumServerVersion)((0, _general.getServerVersion)(getState()), 5, 3)) {
                  pendingData = _client.Client4.getRedirectLocation(url);
                } else {
                  pendingData = Promise.resolve({
                    location: url
                  });
                }

                _context9.prev = 2;
                _context9.next = 5;
                return pendingData;

              case 5:
                data = _context9.sent;
                _context9.next = 13;
                break;

              case 8:
                _context9.prev = 8;
                _context9.t0 = _context9["catch"](2);
                (0, _helpers.forceLogoutIfNecessary)(_context9.t0, dispatch, getState);
                dispatch({
                  type: _action_types.GeneralTypes.REDIRECT_LOCATION_FAILURE,
                  data: _context9.t0
                }, getState);
                return _context9.abrupt("return", {
                  error: _context9.t0
                });

              case 13:
                dispatch({
                  type: _action_types.GeneralTypes.REDIRECT_LOCATION_SUCCESS,
                  data: data
                }, getState);
                return _context9.abrupt("return", {
                  data: data
                });

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[2, 8]]);
      }));

      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
}

var _default = {
  getPing: getPing,
  getClientConfig: getClientConfig,
  getDataRetentionPolicy: getDataRetentionPolicy,
  getSupportedTimezones: getSupportedTimezones,
  getLicenseConfig: getLicenseConfig,
  logClientError: logClientError,
  setAppState: setAppState,
  setDeviceToken: setDeviceToken,
  setServerVersion: setServerVersion,
  setStoreFromLocalData: setStoreFromLocalData,
  setUrl: setUrl,
  getRedirectLocation: getRedirectLocation
};
exports.default = _default;