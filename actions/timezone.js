"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoUpdateTimezone = autoUpdateTimezone;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _users = require("../selectors/entities/users");

var _timezone = require("../selectors/entities/timezone");

var _users2 = require("./users");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function autoUpdateTimezone(deviceTimezone
/*: string*/
) {
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
        var currentUer, currentTimezone, newTimezoneExists, timezone, updatedUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentUer = (0, _users.getCurrentUser)(getState());
                currentTimezone = (0, _timezone.getUserTimezone)(getState(), currentUer.id);
                newTimezoneExists = currentTimezone.automaticTimezone !== deviceTimezone;

                if (currentTimezone.useAutomaticTimezone && newTimezoneExists) {
                  timezone = {
                    useAutomaticTimezone: 'true',
                    automaticTimezone: deviceTimezone,
                    manualTimezone: currentTimezone.manualTimezone
                  };
                  updatedUser = _objectSpread({}, currentUer, {
                    timezone: timezone
                  });
                  (0, _users2.updateMe)(updatedUser)(dispatch, getState);
                }

              case 4:
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