"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushNotificationAlert = pushNotificationAlert;
exports.pushDeveloperAlert = pushDeveloperAlert;
exports.pushErrorAlert = pushErrorAlert;
exports.clearLatestAlert = clearLatestAlert;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _action_types = require("../action_types");

var _constants = require("../constants");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pushNotificationAlert(message
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
        var notificationAlert;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                notificationAlert
                /*: AlertType*/
                = {
                  type: _constants.Alerts.ALERT_NOTIFICATION,
                  message: message
                };
                dispatch({
                  type: _action_types.AlertTypes.PUSH_ALERT,
                  data: notificationAlert
                }, getState);
                return _context.abrupt("return", {
                  data: true
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function pushDeveloperAlert(message
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var developerAlert;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                developerAlert
                /*: AlertType*/
                = {
                  type: _constants.Alerts.ALERT_DEVELOPER,
                  message: message
                };
                dispatch({
                  type: _action_types.AlertTypes.PUSH_ALERT,
                  data: developerAlert
                }, getState);
                return _context2.abrupt("return", {
                  data: true
                });

              case 3:
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

function pushErrorAlert(message
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
        var errorAlert;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                errorAlert
                /*: AlertType*/
                = {
                  type: _constants.Alerts.ALERT_ERROR,
                  message: message
                };
                dispatch({
                  type: _action_types.AlertTypes.PUSH_ALERT,
                  data: errorAlert
                }, getState);
                return _context3.abrupt("return", {
                  data: true
                });

              case 3:
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

function clearLatestAlert()
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: _action_types.AlertTypes.CLEAR_ALERT,
                  data: null
                }, getState);
                return _context4.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}