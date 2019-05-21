"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientError = exports.default = exports.HEADER_X_VERSION_ID = void 0;

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

var _fetch_etag = _interopRequireDefault(require("./fetch_etag"));

var _helpers = require("../utils/helpers");

var _sentry = require("../utils/sentry");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
var FormData = require('form-data');

var HEADER_AUTH = 'Authorization';
var HEADER_BEARER = 'BEARER';
var HEADER_REQUESTED_WITH = 'X-Requested-With';
var HEADER_USER_AGENT = 'User-Agent';
var HEADER_X_CLUSTER_ID = 'X-Cluster-Id';
var HEADER_X_VERSION_ID = 'X-Version-Id';
exports.HEADER_X_VERSION_ID = HEADER_X_VERSION_ID;
var PER_PAGE_DEFAULT = 60;
var LOGS_PER_PAGE_DEFAULT = 10000;
/* eslint-disable no-throw-literal */

var Client4 =
/*#__PURE__*/
function () {
  function Client4() {
    var _this = this;

    _classCallCheck(this, Client4);

    _defineProperty(this, "createUser",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(user, token, inviteId) {
        var queryParams;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.trackEvent('api', 'api_users_create');

                queryParams = {};

                if (token) {
                  queryParams.t = token;
                }

                if (inviteId) {
                  queryParams.iid = inviteId;
                }

                return _context.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute()).concat((0, _helpers.buildQueryString)(queryParams)), {
                  method: 'post',
                  body: JSON.stringify(user)
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "patchMe",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(userPatch) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/patch"), {
                  method: 'put',
                  body: JSON.stringify(userPatch)
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "patchUser",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(userPatch) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.trackEvent('api', 'api_users_patch');

                return _context3.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userPatch.id), "/patch"), {
                  method: 'put',
                  body: JSON.stringify(userPatch)
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x5) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateUser",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(user) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.trackEvent('api', 'api_users_update');

                return _context4.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(user.id)), {
                  method: 'put',
                  body: JSON.stringify(user)
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x6) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateUserRoles",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(userId, roles) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this.trackEvent('api', 'api_users_update_roles');

                return _context5.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/roles"), {
                  method: 'put',
                  body: JSON.stringify({
                    roles: roles
                  })
                }));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateUserMfa",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(userId, activate, code) {
        var body;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                body = {
                  activate: activate
                };

                if (activate) {
                  body.code = code;
                }

                return _context6.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/mfa"), {
                  method: 'put',
                  body: JSON.stringify(body)
                }));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x9, _x10, _x11) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateUserPassword",
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(userId, currentPassword, newPassword) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this.trackEvent('api', 'api_users_newpassword');

                return _context7.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/password"), {
                  method: 'put',
                  body: JSON.stringify({
                    current_password: currentPassword,
                    new_password: newPassword
                  })
                }));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x12, _x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }());

    _defineProperty(this, "resetUserPassword",
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(token, newPassword) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this.trackEvent('api', 'api_users_reset_password');

                return _context8.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/password/reset"), {
                  method: 'post',
                  body: JSON.stringify({
                    token: token,
                    new_password: newPassword
                  })
                }));

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(this, "sendPasswordResetEmail",
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(email) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this.trackEvent('api', 'api_users_send_password_reset');

                return _context9.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/password/reset/send"), {
                  method: 'post',
                  body: JSON.stringify({
                    email: email
                  })
                }));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x17) {
        return _ref9.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateUserActive",
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(userId, active) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _this.trackEvent('api', 'api_users_update_active');

                return _context10.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/active"), {
                  method: 'put',
                  body: JSON.stringify({
                    active: active
                  })
                }));

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x18, _x19) {
        return _ref10.apply(this, arguments);
      };
    }());

    _defineProperty(this, "uploadProfileImage",
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(userId, imageData) {
        var formData, request;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _this.trackEvent('api', 'api_users_update_profile_picture');

                formData = new FormData();
                formData.append('image', imageData);
                request = {
                  method: 'post',
                  body: formData
                };

                if (formData.getBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData.getBoundary())
                  };
                }

                return _context11.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/image"), request));

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function (_x20, _x21) {
        return _ref11.apply(this, arguments);
      };
    }());

    _defineProperty(this, "setDefaultProfileImage",
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(userId) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _this.trackEvent('api', 'api_users_set_default_profile_picture');

                return _context12.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/image"), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function (_x22) {
        return _ref12.apply(this, arguments);
      };
    }());

    _defineProperty(this, "verifyUserEmail",
    /*#__PURE__*/
    function () {
      var _ref13 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(token) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/email/verify"), {
                  method: 'post',
                  body: JSON.stringify({
                    token: token
                  })
                }));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function (_x23) {
        return _ref13.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMyTermsOfServiceStatus",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee14() {
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/terms_of_service"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    })));

    _defineProperty(this, "updateMyTermsOfServiceStatus",
    /*#__PURE__*/
    function () {
      var _ref15 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15(termsOfServiceId, accepted) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/terms_of_service"), {
                  method: 'post',
                  body: JSON.stringify({
                    termsOfServiceId: termsOfServiceId,
                    accepted: accepted
                  })
                }));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function (_x24, _x25) {
        return _ref15.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTermsOfService",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee16() {
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/terms_of_service"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    })));

    _defineProperty(this, "createTermsOfService",
    /*#__PURE__*/
    function () {
      var _ref17 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17(text) {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/terms_of_service"), {
                  method: 'post',
                  body: JSON.stringify({
                    text: text
                  })
                }));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function (_x26) {
        return _ref17.apply(this, arguments);
      };
    }());

    _defineProperty(this, "sendVerificationEmail",
    /*#__PURE__*/
    function () {
      var _ref18 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18(email) {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/email/verify/send"), {
                  method: 'post',
                  body: JSON.stringify({
                    email: email
                  })
                }));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function (_x27) {
        return _ref18.apply(this, arguments);
      };
    }());

    _defineProperty(this, "login",
    /*#__PURE__*/
    function () {
      var _ref19 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee19(loginId, password) {
        var token,
            deviceId,
            ldapOnly,
            body,
            _ref20,
            data,
            _args19 = arguments;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                token = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : '';
                deviceId = _args19.length > 3 && _args19[3] !== undefined ? _args19[3] : '';
                ldapOnly = _args19.length > 4 && _args19[4] !== undefined ? _args19[4] : false;

                _this.trackEvent('api', 'api_users_login');

                if (ldapOnly) {
                  _this.trackEvent('api', 'api_users_login_ldap');
                }

                body = {
                  device_id: deviceId,
                  login_id: loginId,
                  password: password,
                  token: token
                };

                if (ldapOnly) {
                  body.ldap_only = 'true';
                }

                _context19.next = 9;
                return _this.doFetchWithResponse("".concat(_this.getUsersRoute(), "/login"), {
                  method: 'post',
                  body: JSON.stringify(body)
                });

              case 9:
                _ref20 = _context19.sent;
                data = _ref20.data;
                return _context19.abrupt("return", data);

              case 12:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function (_x28, _x29) {
        return _ref19.apply(this, arguments);
      };
    }());

    _defineProperty(this, "loginById",
    /*#__PURE__*/
    function () {
      var _ref21 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee20(id, password) {
        var token,
            deviceId,
            body,
            _ref22,
            data,
            _args20 = arguments;

        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                token = _args20.length > 2 && _args20[2] !== undefined ? _args20[2] : '';
                deviceId = _args20.length > 3 && _args20[3] !== undefined ? _args20[3] : '';

                _this.trackEvent('api', 'api_users_login');

                body = {
                  device_id: deviceId,
                  id: id,
                  password: password,
                  token: token
                };
                _context20.next = 6;
                return _this.doFetchWithResponse("".concat(_this.getUsersRoute(), "/login"), {
                  method: 'post',
                  body: JSON.stringify(body)
                });

              case 6:
                _ref22 = _context20.sent;
                data = _ref22.data;
                return _context20.abrupt("return", data);

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function (_x30, _x31) {
        return _ref21.apply(this, arguments);
      };
    }());

    _defineProperty(this, "logout",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee21() {
      var _ref24, response;

      return regeneratorRuntime.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _this.trackEvent('api', 'api_users_logout');

              _context21.next = 3;
              return _this.doFetchWithResponse("".concat(_this.getUsersRoute(), "/logout"), {
                method: 'post'
              });

            case 3:
              _ref24 = _context21.sent;
              response = _ref24.response;

              if (response.ok) {
                _this.token = '';
              }

              _this.serverVersion = '';
              return _context21.abrupt("return", response);

            case 8:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    })));

    _defineProperty(this, "getProfiles",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee22() {
      var page,
          perPage,
          options,
          _args22 = arguments;
      return regeneratorRuntime.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              page = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : 0;
              perPage = _args22.length > 1 && _args22[1] !== undefined ? _args22[1] : PER_PAGE_DEFAULT;
              options = _args22.length > 2 && _args22[2] !== undefined ? _args22[2] : {};

              _this.trackEvent('api', 'api_profiles_get');

              return _context22.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute()).concat((0, _helpers.buildQueryString)(_objectSpread({
                page: page,
                per_page: perPage
              }, options))), {
                method: 'get'
              }));

            case 5:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this);
    })));

    _defineProperty(this, "getProfilesByIds",
    /*#__PURE__*/
    function () {
      var _ref26 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee23(userIds) {
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _this.trackEvent('api', 'api_profiles_get_by_ids');

                return _context23.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/ids"), {
                  method: 'post',
                  body: JSON.stringify(userIds)
                }));

              case 2:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function (_x32) {
        return _ref26.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getProfilesByUsernames",
    /*#__PURE__*/
    function () {
      var _ref27 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee24(usernames) {
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _this.trackEvent('api', 'api_profiles_get_by_usernames');

                return _context24.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/usernames"), {
                  method: 'post',
                  body: JSON.stringify(usernames)
                }));

              case 2:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      return function (_x33) {
        return _ref27.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getProfilesInTeam",
    /*#__PURE__*/
    function () {
      var _ref28 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee25(teamId) {
        var page,
            perPage,
            sort,
            _args25 = arguments;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                page = _args25.length > 1 && _args25[1] !== undefined ? _args25[1] : 0;
                perPage = _args25.length > 2 && _args25[2] !== undefined ? _args25[2] : PER_PAGE_DEFAULT;
                sort = _args25.length > 3 && _args25[3] !== undefined ? _args25[3] : '';

                _this.trackEvent('api', 'api_profiles_get_in_team', {
                  team_id: teamId,
                  sort: sort
                });

                return _context25.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute()).concat((0, _helpers.buildQueryString)({
                  in_team: teamId,
                  page: page,
                  per_page: perPage,
                  sort: sort
                })), {
                  method: 'get'
                }));

              case 5:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      return function (_x34) {
        return _ref28.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getProfilesNotInTeam",
    /*#__PURE__*/
    function () {
      var _ref29 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee26(teamId) {
        var page,
            perPage,
            _args26 = arguments;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                page = _args26.length > 1 && _args26[1] !== undefined ? _args26[1] : 0;
                perPage = _args26.length > 2 && _args26[2] !== undefined ? _args26[2] : PER_PAGE_DEFAULT;

                _this.trackEvent('api', 'api_profiles_get_not_in_team', {
                  team_id: teamId
                });

                return _context26.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute()).concat((0, _helpers.buildQueryString)({
                  not_in_team: teamId,
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 4:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      return function (_x35) {
        return _ref29.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getProfilesWithoutTeam",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee27() {
      var page,
          perPage,
          _args27 = arguments;
      return regeneratorRuntime.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              page = _args27.length > 0 && _args27[0] !== undefined ? _args27[0] : 0;
              perPage = _args27.length > 1 && _args27[1] !== undefined ? _args27[1] : PER_PAGE_DEFAULT;

              _this.trackEvent('api', 'api_profiles_get_without_team');

              return _context27.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute()).concat((0, _helpers.buildQueryString)({
                without_team: 1,
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 4:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27, this);
    })));

    _defineProperty(this, "getProfilesInChannel",
    /*#__PURE__*/
    function () {
      var _ref31 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee28(channelId) {
        var page,
            perPage,
            sort,
            serverVersion,
            queryStringObj,
            _args28 = arguments;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                page = _args28.length > 1 && _args28[1] !== undefined ? _args28[1] : 0;
                perPage = _args28.length > 2 && _args28[2] !== undefined ? _args28[2] : PER_PAGE_DEFAULT;
                sort = _args28.length > 3 && _args28[3] !== undefined ? _args28[3] : '';

                _this.trackEvent('api', 'api_profiles_get_in_channel', {
                  channel_id: channelId
                });

                serverVersion = _this.getServerVersion();

                if ((0, _helpers.isMinimumServerVersion)(serverVersion, 4, 7)) {
                  queryStringObj = {
                    in_channel: channelId,
                    page: page,
                    per_page: perPage,
                    sort: sort
                  };
                } else {
                  queryStringObj = {
                    in_channel: channelId,
                    page: page,
                    per_page: perPage
                  };
                }

                return _context28.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute()).concat((0, _helpers.buildQueryString)(queryStringObj)), {
                  method: 'get'
                }));

              case 7:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      return function (_x36) {
        return _ref31.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getProfilesNotInChannel",
    /*#__PURE__*/
    function () {
      var _ref32 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee29(teamId, channelId) {
        var page,
            perPage,
            _args29 = arguments;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                page = _args29.length > 2 && _args29[2] !== undefined ? _args29[2] : 0;
                perPage = _args29.length > 3 && _args29[3] !== undefined ? _args29[3] : PER_PAGE_DEFAULT;

                _this.trackEvent('api', 'api_profiles_get_not_in_channel', {
                  team_id: teamId,
                  channel_id: channelId
                });

                return _context29.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute()).concat((0, _helpers.buildQueryString)({
                  in_team: teamId,
                  not_in_channel: channelId,
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 4:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      return function (_x37, _x38) {
        return _ref32.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMe",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee30() {
      return regeneratorRuntime.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              return _context30.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me')), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30, this);
    })));

    _defineProperty(this, "getUser",
    /*#__PURE__*/
    function () {
      var _ref34 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee31(userId) {
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId)), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      return function (_x39) {
        return _ref34.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserByUsername",
    /*#__PURE__*/
    function () {
      var _ref35 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee32(username) {
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                return _context32.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/username/").concat(username), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      return function (_x40) {
        return _ref35.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserByEmail",
    /*#__PURE__*/
    function () {
      var _ref36 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee33(email) {
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/email/").concat(email), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      return function (_x41) {
        return _ref36.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getProfilePictureUrl", function (userId, lastPictureUpdate) {
      var params = {};

      if (lastPictureUpdate) {
        params._ = lastPictureUpdate;
      }

      return "".concat(_this.getUserRoute(userId), "/image").concat((0, _helpers.buildQueryString)(params));
    });

    _defineProperty(this, "getDefaultProfilePictureUrl", function (userId) {
      return "".concat(_this.getUserRoute(userId), "/image/default");
    });

    _defineProperty(this, "autocompleteUsers",
    /*#__PURE__*/
    function () {
      var _ref37 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee34(name, teamId, channelId) {
        var options,
            _args34 = arguments;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                options = _args34.length > 3 && _args34[3] !== undefined ? _args34[3] : {
                  limit: _constants.General.AUTOCOMPLETE_LIMIT_DEFAULT
                };
                return _context34.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/autocomplete").concat((0, _helpers.buildQueryString)({
                  in_team: teamId,
                  in_channel: channelId,
                  name: name,
                  limit: options.limit
                })), {
                  method: 'get'
                }));

              case 2:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      return function (_x42, _x43, _x44) {
        return _ref37.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getSessions",
    /*#__PURE__*/
    function () {
      var _ref38 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee35(userId) {
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                return _context35.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/sessions"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      return function (_x45) {
        return _ref38.apply(this, arguments);
      };
    }());

    _defineProperty(this, "revokeSession",
    /*#__PURE__*/
    function () {
      var _ref39 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee36(userId, sessionId) {
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/sessions/revoke"), {
                  method: 'post',
                  body: JSON.stringify({
                    session_id: sessionId
                  })
                }));

              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      return function (_x46, _x47) {
        return _ref39.apply(this, arguments);
      };
    }());

    _defineProperty(this, "revokeAllSessionsForUser",
    /*#__PURE__*/
    function () {
      var _ref40 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee37(userId) {
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                return _context37.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/sessions/revoke/all"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      return function (_x48) {
        return _ref40.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserAudits",
    /*#__PURE__*/
    function () {
      var _ref41 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee38(userId) {
        var page,
            perPage,
            _args38 = arguments;
        return regeneratorRuntime.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                page = _args38.length > 1 && _args38[1] !== undefined ? _args38[1] : 0;
                perPage = _args38.length > 2 && _args38[2] !== undefined ? _args38[2] : PER_PAGE_DEFAULT;
                return _context38.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/audits").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      return function (_x49) {
        return _ref41.apply(this, arguments);
      };
    }());

    _defineProperty(this, "checkUserMfa",
    /*#__PURE__*/
    function () {
      var _ref42 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee39(loginId) {
        return regeneratorRuntime.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                return _context39.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/mfa"), {
                  method: 'post',
                  body: JSON.stringify({
                    login_id: loginId
                  })
                }));

              case 1:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      return function (_x50) {
        return _ref42.apply(this, arguments);
      };
    }());

    _defineProperty(this, "generateMfaSecret",
    /*#__PURE__*/
    function () {
      var _ref43 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee40(userId) {
        return regeneratorRuntime.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                return _context40.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/mfa/generate"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      return function (_x51) {
        return _ref43.apply(this, arguments);
      };
    }());

    _defineProperty(this, "attachDevice",
    /*#__PURE__*/
    function () {
      var _ref44 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee41(deviceId) {
        return regeneratorRuntime.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                return _context41.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/sessions/device"), {
                  method: 'put',
                  body: JSON.stringify({
                    device_id: deviceId
                  })
                }));

              case 1:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      return function (_x52) {
        return _ref44.apply(this, arguments);
      };
    }());

    _defineProperty(this, "searchUsers", function (term, options) {
      _this.trackEvent('api', 'api_search_users');

      return _this.doFetch("".concat(_this.getUsersRoute(), "/search"), {
        method: 'post',
        body: JSON.stringify(_objectSpread({
          term: term
        }, options))
      });
    });

    _defineProperty(this, "getStatusesByIds",
    /*#__PURE__*/
    function () {
      var _ref45 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee42(userIds) {
        return regeneratorRuntime.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                return _context42.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/status/ids"), {
                  method: 'post',
                  body: JSON.stringify(userIds)
                }));

              case 1:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      return function (_x53) {
        return _ref45.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getStatus",
    /*#__PURE__*/
    function () {
      var _ref46 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee43(userId) {
        return regeneratorRuntime.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                return _context43.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/status"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      return function (_x54) {
        return _ref46.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateStatus",
    /*#__PURE__*/
    function () {
      var _ref47 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee44(status) {
        return regeneratorRuntime.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                return _context44.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(status.user_id), "/status"), {
                  method: 'put',
                  body: JSON.stringify(status)
                }));

              case 1:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      return function (_x55) {
        return _ref47.apply(this, arguments);
      };
    }());

    _defineProperty(this, "switchEmailToOAuth",
    /*#__PURE__*/
    function () {
      var _ref48 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee45(service, email, password) {
        var mfaCode,
            _args45 = arguments;
        return regeneratorRuntime.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                mfaCode = _args45.length > 3 && _args45[3] !== undefined ? _args45[3] : '';

                _this.trackEvent('api', 'api_users_email_to_oauth');

                return _context45.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/login/switch"), {
                  method: 'post',
                  body: JSON.stringify({
                    current_service: 'email',
                    new_service: service,
                    email: email,
                    password: password,
                    mfa_code: mfaCode
                  })
                }));

              case 3:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      return function (_x56, _x57, _x58) {
        return _ref48.apply(this, arguments);
      };
    }());

    _defineProperty(this, "switchOAuthToEmail",
    /*#__PURE__*/
    function () {
      var _ref49 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee46(currentService, email, password) {
        return regeneratorRuntime.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _this.trackEvent('api', 'api_users_oauth_to_email');

                return _context46.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/login/switch"), {
                  method: 'post',
                  body: JSON.stringify({
                    current_service: currentService,
                    new_service: 'email',
                    email: email,
                    new_password: password
                  })
                }));

              case 2:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      return function (_x59, _x60, _x61) {
        return _ref49.apply(this, arguments);
      };
    }());

    _defineProperty(this, "switchEmailToLdap",
    /*#__PURE__*/
    function () {
      var _ref50 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee47(email, emailPassword, ldapId, ldapPassword) {
        var mfaCode,
            _args47 = arguments;
        return regeneratorRuntime.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                mfaCode = _args47.length > 4 && _args47[4] !== undefined ? _args47[4] : '';

                _this.trackEvent('api', 'api_users_email_to_ldap');

                return _context47.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/login/switch"), {
                  method: 'post',
                  body: JSON.stringify({
                    current_service: 'email',
                    new_service: 'ldap',
                    email: email,
                    password: emailPassword,
                    ldap_id: ldapId,
                    new_password: ldapPassword,
                    mfa_code: mfaCode
                  })
                }));

              case 3:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      return function (_x62, _x63, _x64, _x65) {
        return _ref50.apply(this, arguments);
      };
    }());

    _defineProperty(this, "switchLdapToEmail",
    /*#__PURE__*/
    function () {
      var _ref51 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee48(ldapPassword, email, emailPassword) {
        var mfaCode,
            _args48 = arguments;
        return regeneratorRuntime.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                mfaCode = _args48.length > 3 && _args48[3] !== undefined ? _args48[3] : '';

                _this.trackEvent('api', 'api_users_ldap_to_email');

                return _context48.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/login/switch"), {
                  method: 'post',
                  body: JSON.stringify({
                    current_service: 'ldap',
                    new_service: 'email',
                    email: email,
                    password: ldapPassword,
                    new_password: emailPassword,
                    mfa_code: mfaCode
                  })
                }));

              case 3:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      return function (_x66, _x67, _x68) {
        return _ref51.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getAuthorizedOAuthApps",
    /*#__PURE__*/
    function () {
      var _ref52 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee49(userId) {
        return regeneratorRuntime.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                return _context49.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/oauth/apps/authorized"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      return function (_x69) {
        return _ref52.apply(this, arguments);
      };
    }());

    _defineProperty(this, "authorizeOAuthApp",
    /*#__PURE__*/
    function () {
      var _ref53 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee50(responseType, clientId, redirectUri, state, scope) {
        return regeneratorRuntime.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                return _context50.abrupt("return", _this.doFetch("".concat(_this.url, "/oauth/authorize"), {
                  method: 'post',
                  body: JSON.stringify({
                    client_id: clientId,
                    response_type: responseType,
                    redirect_uri: redirectUri,
                    state: state,
                    scope: scope
                  })
                }));

              case 1:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      return function (_x70, _x71, _x72, _x73, _x74) {
        return _ref53.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deauthorizeOAuthApp",
    /*#__PURE__*/
    function () {
      var _ref54 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee51(clientId) {
        return regeneratorRuntime.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                return _context51.abrupt("return", _this.doFetch("".concat(_this.url, "/oauth/deauthorize"), {
                  method: 'post',
                  body: JSON.stringify({
                    client_id: clientId
                  })
                }));

              case 1:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      return function (_x75) {
        return _ref54.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createUserAccessToken",
    /*#__PURE__*/
    function () {
      var _ref55 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee52(userId, description) {
        return regeneratorRuntime.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _this.trackEvent('api', 'api_users_create_access_token');

                return _context52.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/tokens"), {
                  method: 'post',
                  body: JSON.stringify({
                    description: description
                  })
                }));

              case 2:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      return function (_x76, _x77) {
        return _ref55.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserAccessToken",
    /*#__PURE__*/
    function () {
      var _ref56 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee53(tokenId) {
        return regeneratorRuntime.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                return _context53.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/tokens/").concat(tokenId), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      return function (_x78) {
        return _ref56.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserAccessTokensForUser",
    /*#__PURE__*/
    function () {
      var _ref57 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee54(userId) {
        var page,
            perPage,
            _args54 = arguments;
        return regeneratorRuntime.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                page = _args54.length > 1 && _args54[1] !== undefined ? _args54[1] : 0;
                perPage = _args54.length > 2 && _args54[2] !== undefined ? _args54[2] : PER_PAGE_DEFAULT;
                return _context54.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/tokens").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      return function (_x79) {
        return _ref57.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserAccessTokens",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee55() {
      var page,
          perPage,
          _args55 = arguments;
      return regeneratorRuntime.wrap(function _callee55$(_context55) {
        while (1) {
          switch (_context55.prev = _context55.next) {
            case 0:
              page = _args55.length > 0 && _args55[0] !== undefined ? _args55[0] : 0;
              perPage = _args55.length > 1 && _args55[1] !== undefined ? _args55[1] : PER_PAGE_DEFAULT;
              return _context55.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/tokens").concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context55.stop();
          }
        }
      }, _callee55, this);
    })));

    _defineProperty(this, "revokeUserAccessToken",
    /*#__PURE__*/
    function () {
      var _ref59 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee56(tokenId) {
        return regeneratorRuntime.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                _this.trackEvent('api', 'api_users_revoke_access_token');

                return _context56.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/tokens/revoke"), {
                  method: 'post',
                  body: JSON.stringify({
                    token_id: tokenId
                  })
                }));

              case 2:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      return function (_x80) {
        return _ref59.apply(this, arguments);
      };
    }());

    _defineProperty(this, "disableUserAccessToken",
    /*#__PURE__*/
    function () {
      var _ref60 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee57(tokenId) {
        return regeneratorRuntime.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                return _context57.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/tokens/disable"), {
                  method: 'post',
                  body: JSON.stringify({
                    token_id: tokenId
                  })
                }));

              case 1:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      return function (_x81) {
        return _ref60.apply(this, arguments);
      };
    }());

    _defineProperty(this, "enableUserAccessToken",
    /*#__PURE__*/
    function () {
      var _ref61 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee58(tokenId) {
        return regeneratorRuntime.wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                return _context58.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/tokens/enable"), {
                  method: 'post',
                  body: JSON.stringify({
                    token_id: tokenId
                  })
                }));

              case 1:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));

      return function (_x82) {
        return _ref61.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createTeam",
    /*#__PURE__*/
    function () {
      var _ref62 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee59(team) {
        return regeneratorRuntime.wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_create');

                return _context59.abrupt("return", _this.doFetch("".concat(_this.getTeamsRoute()), {
                  method: 'post',
                  body: JSON.stringify(team)
                }));

              case 2:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      return function (_x83) {
        return _ref62.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteTeam",
    /*#__PURE__*/
    function () {
      var _ref63 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee60(teamId) {
        return regeneratorRuntime.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_delete');

                return _context60.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      return function (_x84) {
        return _ref63.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateTeam",
    /*#__PURE__*/
    function () {
      var _ref64 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee61(team) {
        return regeneratorRuntime.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_update_name', {
                  team_id: team.id
                });

                return _context61.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(team.id)), {
                  method: 'put',
                  body: JSON.stringify(team)
                }));

              case 2:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      return function (_x85) {
        return _ref64.apply(this, arguments);
      };
    }());

    _defineProperty(this, "patchTeam",
    /*#__PURE__*/
    function () {
      var _ref65 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee62(team) {
        return regeneratorRuntime.wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_patch_name', {
                  team_id: team.id
                });

                return _context62.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(team.id), "/patch"), {
                  method: 'put',
                  body: JSON.stringify(team)
                }));

              case 2:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      return function (_x86) {
        return _ref65.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateTeamScheme",
    /*#__PURE__*/
    function () {
      var _ref66 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee63(teamId, schemeId) {
        var patch;
        return regeneratorRuntime.wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                patch = {
                  scheme_id: schemeId
                };

                _this.trackEvent('api', 'api_teams_update_scheme', _objectSpread({
                  team_id: teamId
                }, patch));

                return _context63.abrupt("return", _this.doFetch("".concat(_this.getTeamSchemeRoute(teamId)), {
                  method: 'put',
                  body: JSON.stringify(patch)
                }));

              case 3:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));

      return function (_x87, _x88) {
        return _ref66.apply(this, arguments);
      };
    }());

    _defineProperty(this, "checkIfTeamExists",
    /*#__PURE__*/
    function () {
      var _ref67 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee64(teamName) {
        return regeneratorRuntime.wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                return _context64.abrupt("return", _this.doFetch("".concat(_this.getTeamNameRoute(teamName), "/exists"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this);
      }));

      return function (_x89) {
        return _ref67.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTeams",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee65() {
      var page,
          perPage,
          _args65 = arguments;
      return regeneratorRuntime.wrap(function _callee65$(_context65) {
        while (1) {
          switch (_context65.prev = _context65.next) {
            case 0:
              page = _args65.length > 0 && _args65[0] !== undefined ? _args65[0] : 0;
              perPage = _args65.length > 1 && _args65[1] !== undefined ? _args65[1] : PER_PAGE_DEFAULT;
              return _context65.abrupt("return", _this.doFetch("".concat(_this.getTeamsRoute()).concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context65.stop();
          }
        }
      }, _callee65, this);
    })));

    _defineProperty(this, "searchTeams", function (term) {
      _this.trackEvent('api', 'api_search_teams');

      return _this.doFetch("".concat(_this.getTeamsRoute(), "/search"), {
        method: 'post',
        body: JSON.stringify({
          term: term
        })
      });
    });

    _defineProperty(this, "getTeam",
    /*#__PURE__*/
    function () {
      var _ref69 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee66(teamId) {
        return regeneratorRuntime.wrap(function _callee66$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                return _context66.abrupt("return", _this.doFetch(_this.getTeamRoute(teamId), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee66, this);
      }));

      return function (_x90) {
        return _ref69.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTeamByName",
    /*#__PURE__*/
    function () {
      var _ref70 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee67(teamName) {
        return regeneratorRuntime.wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_get_team_by_name');

                return _context67.abrupt("return", _this.doFetch(_this.getTeamNameRoute(teamName), {
                  method: 'get'
                }));

              case 2:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67, this);
      }));

      return function (_x91) {
        return _ref70.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMyTeams",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee68() {
      return regeneratorRuntime.wrap(function _callee68$(_context68) {
        while (1) {
          switch (_context68.prev = _context68.next) {
            case 0:
              return _context68.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/teams"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context68.stop();
          }
        }
      }, _callee68, this);
    })));

    _defineProperty(this, "getTeamsForUser",
    /*#__PURE__*/
    function () {
      var _ref72 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee69(userId) {
        return regeneratorRuntime.wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                return _context69.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/teams"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69, this);
      }));

      return function (_x92) {
        return _ref72.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMyTeamMembers",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee70() {
      return regeneratorRuntime.wrap(function _callee70$(_context70) {
        while (1) {
          switch (_context70.prev = _context70.next) {
            case 0:
              return _context70.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/teams/members"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context70.stop();
          }
        }
      }, _callee70, this);
    })));

    _defineProperty(this, "getMyTeamUnreads",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee71() {
      return regeneratorRuntime.wrap(function _callee71$(_context71) {
        while (1) {
          switch (_context71.prev = _context71.next) {
            case 0:
              return _context71.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/teams/unread"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context71.stop();
          }
        }
      }, _callee71, this);
    })));

    _defineProperty(this, "getTeamMembers",
    /*#__PURE__*/
    function () {
      var _ref75 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee72(teamId) {
        var page,
            perPage,
            _args72 = arguments;
        return regeneratorRuntime.wrap(function _callee72$(_context72) {
          while (1) {
            switch (_context72.prev = _context72.next) {
              case 0:
                page = _args72.length > 1 && _args72[1] !== undefined ? _args72[1] : 0;
                perPage = _args72.length > 2 && _args72[2] !== undefined ? _args72[2] : PER_PAGE_DEFAULT;
                return _context72.abrupt("return", _this.doFetch("".concat(_this.getTeamMembersRoute(teamId)).concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context72.stop();
            }
          }
        }, _callee72, this);
      }));

      return function (_x93) {
        return _ref75.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTeamMembersForUser",
    /*#__PURE__*/
    function () {
      var _ref76 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee73(userId) {
        return regeneratorRuntime.wrap(function _callee73$(_context73) {
          while (1) {
            switch (_context73.prev = _context73.next) {
              case 0:
                return _context73.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/teams/members"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context73.stop();
            }
          }
        }, _callee73, this);
      }));

      return function (_x94) {
        return _ref76.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTeamMember",
    /*#__PURE__*/
    function () {
      var _ref77 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee74(teamId, userId) {
        return regeneratorRuntime.wrap(function _callee74$(_context74) {
          while (1) {
            switch (_context74.prev = _context74.next) {
              case 0:
                return _context74.abrupt("return", _this.doFetch("".concat(_this.getTeamMemberRoute(teamId, userId)), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context74.stop();
            }
          }
        }, _callee74, this);
      }));

      return function (_x95, _x96) {
        return _ref77.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTeamMembersByIds",
    /*#__PURE__*/
    function () {
      var _ref78 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee75(teamId, userIds) {
        return regeneratorRuntime.wrap(function _callee75$(_context75) {
          while (1) {
            switch (_context75.prev = _context75.next) {
              case 0:
                return _context75.abrupt("return", _this.doFetch("".concat(_this.getTeamMembersRoute(teamId), "/ids"), {
                  method: 'post',
                  body: JSON.stringify(userIds)
                }));

              case 1:
              case "end":
                return _context75.stop();
            }
          }
        }, _callee75, this);
      }));

      return function (_x97, _x98) {
        return _ref78.apply(this, arguments);
      };
    }());

    _defineProperty(this, "addToTeam",
    /*#__PURE__*/
    function () {
      var _ref79 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee76(teamId, userId) {
        var member;
        return regeneratorRuntime.wrap(function _callee76$(_context76) {
          while (1) {
            switch (_context76.prev = _context76.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_invite_members', {
                  team_id: teamId
                });

                member = {
                  user_id: userId,
                  team_id: teamId
                };
                return _context76.abrupt("return", _this.doFetch("".concat(_this.getTeamMembersRoute(teamId)), {
                  method: 'post',
                  body: JSON.stringify(member)
                }));

              case 3:
              case "end":
                return _context76.stop();
            }
          }
        }, _callee76, this);
      }));

      return function (_x99, _x100) {
        return _ref79.apply(this, arguments);
      };
    }());

    _defineProperty(this, "addToTeamFromInvite",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee77() {
      var token,
          inviteId,
          query,
          _args77 = arguments;
      return regeneratorRuntime.wrap(function _callee77$(_context77) {
        while (1) {
          switch (_context77.prev = _context77.next) {
            case 0:
              token = _args77.length > 0 && _args77[0] !== undefined ? _args77[0] : '';
              inviteId = _args77.length > 1 && _args77[1] !== undefined ? _args77[1] : '';

              _this.trackEvent('api', 'api_teams_invite_members');

              query = (0, _helpers.buildQueryString)({
                token: token,
                invite_id: inviteId
              });
              return _context77.abrupt("return", _this.doFetch("".concat(_this.getTeamsRoute(), "/members/invite").concat(query), {
                method: 'post'
              }));

            case 5:
            case "end":
              return _context77.stop();
          }
        }
      }, _callee77, this);
    })));

    _defineProperty(this, "addUsersToTeam",
    /*#__PURE__*/
    function () {
      var _ref81 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee78(teamId, userIds) {
        var members;
        return regeneratorRuntime.wrap(function _callee78$(_context78) {
          while (1) {
            switch (_context78.prev = _context78.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_batch_add_members', {
                  team_id: teamId,
                  count: userIds.length
                });

                members = [];
                userIds.forEach(function (id) {
                  return members.push({
                    team_id: teamId,
                    user_id: id
                  });
                });
                return _context78.abrupt("return", _this.doFetch("".concat(_this.getTeamMembersRoute(teamId), "/batch"), {
                  method: 'post',
                  body: JSON.stringify(members)
                }));

              case 4:
              case "end":
                return _context78.stop();
            }
          }
        }, _callee78, this);
      }));

      return function (_x101, _x102) {
        return _ref81.apply(this, arguments);
      };
    }());

    _defineProperty(this, "joinTeam",
    /*#__PURE__*/
    function () {
      var _ref82 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee79(inviteId) {
        var query;
        return regeneratorRuntime.wrap(function _callee79$(_context79) {
          while (1) {
            switch (_context79.prev = _context79.next) {
              case 0:
                query = (0, _helpers.buildQueryString)({
                  invite_id: inviteId
                });
                return _context79.abrupt("return", _this.doFetch("".concat(_this.getTeamsRoute(), "/members/invite").concat(query), {
                  method: 'post'
                }));

              case 2:
              case "end":
                return _context79.stop();
            }
          }
        }, _callee79, this);
      }));

      return function (_x103) {
        return _ref82.apply(this, arguments);
      };
    }());

    _defineProperty(this, "removeFromTeam",
    /*#__PURE__*/
    function () {
      var _ref83 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee80(teamId, userId) {
        return regeneratorRuntime.wrap(function _callee80$(_context80) {
          while (1) {
            switch (_context80.prev = _context80.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_remove_members', {
                  team_id: teamId
                });

                return _context80.abrupt("return", _this.doFetch("".concat(_this.getTeamMemberRoute(teamId, userId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context80.stop();
            }
          }
        }, _callee80, this);
      }));

      return function (_x104, _x105) {
        return _ref83.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTeamStats",
    /*#__PURE__*/
    function () {
      var _ref84 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee81(teamId) {
        return regeneratorRuntime.wrap(function _callee81$(_context81) {
          while (1) {
            switch (_context81.prev = _context81.next) {
              case 0:
                return _context81.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/stats"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context81.stop();
            }
          }
        }, _callee81, this);
      }));

      return function (_x106) {
        return _ref84.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTotalUsersStats",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee82() {
      return regeneratorRuntime.wrap(function _callee82$(_context82) {
        while (1) {
          switch (_context82.prev = _context82.next) {
            case 0:
              return _context82.abrupt("return", _this.doFetch("".concat(_this.getUsersRoute(), "/stats"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context82.stop();
          }
        }
      }, _callee82, this);
    })));

    _defineProperty(this, "getTeamInviteInfo",
    /*#__PURE__*/
    function () {
      var _ref86 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee83(inviteId) {
        return regeneratorRuntime.wrap(function _callee83$(_context83) {
          while (1) {
            switch (_context83.prev = _context83.next) {
              case 0:
                return _context83.abrupt("return", _this.doFetch("".concat(_this.getTeamsRoute(), "/invite/").concat(inviteId), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context83.stop();
            }
          }
        }, _callee83, this);
      }));

      return function (_x107) {
        return _ref86.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateTeamMemberRoles",
    /*#__PURE__*/
    function () {
      var _ref87 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee84(teamId, userId, roles) {
        return regeneratorRuntime.wrap(function _callee84$(_context84) {
          while (1) {
            switch (_context84.prev = _context84.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_update_member_roles', {
                  team_id: teamId
                });

                return _context84.abrupt("return", _this.doFetch("".concat(_this.getTeamMemberRoute(teamId, userId), "/roles"), {
                  method: 'put',
                  body: JSON.stringify({
                    roles: roles
                  })
                }));

              case 2:
              case "end":
                return _context84.stop();
            }
          }
        }, _callee84, this);
      }));

      return function (_x108, _x109, _x110) {
        return _ref87.apply(this, arguments);
      };
    }());

    _defineProperty(this, "sendEmailInvitesToTeam",
    /*#__PURE__*/
    function () {
      var _ref88 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee85(teamId, emails) {
        return regeneratorRuntime.wrap(function _callee85$(_context85) {
          while (1) {
            switch (_context85.prev = _context85.next) {
              case 0:
                _this.trackEvent('api', 'api_teams_invite_members', {
                  team_id: teamId
                });

                return _context85.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/invite/email"), {
                  method: 'post',
                  body: JSON.stringify(emails)
                }));

              case 2:
              case "end":
                return _context85.stop();
            }
          }
        }, _callee85, this);
      }));

      return function (_x111, _x112) {
        return _ref88.apply(this, arguments);
      };
    }());

    _defineProperty(this, "importTeam",
    /*#__PURE__*/
    function () {
      var _ref89 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee86(teamId, file, importFrom) {
        var formData, request;
        return regeneratorRuntime.wrap(function _callee86$(_context86) {
          while (1) {
            switch (_context86.prev = _context86.next) {
              case 0:
                formData = new FormData();
                formData.append('file', file, file.name);
                formData.append('filesize', file.size);
                formData.append('importFrom', importFrom);
                request = {
                  method: 'post',
                  body: formData
                };

                if (formData.getBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData.getBoundary())
                  };
                }

                return _context86.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/import"), request));

              case 7:
              case "end":
                return _context86.stop();
            }
          }
        }, _callee86, this);
      }));

      return function (_x113, _x114, _x115) {
        return _ref89.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTeamIconUrl", function (teamId, lastTeamIconUpdate) {
      var params = {};

      if (lastTeamIconUpdate) {
        params._ = lastTeamIconUpdate;
      }

      return "".concat(_this.getTeamRoute(teamId), "/image").concat((0, _helpers.buildQueryString)(params));
    });

    _defineProperty(this, "setTeamIcon",
    /*#__PURE__*/
    function () {
      var _ref90 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee87(teamId, imageData) {
        var formData, request;
        return regeneratorRuntime.wrap(function _callee87$(_context87) {
          while (1) {
            switch (_context87.prev = _context87.next) {
              case 0:
                _this.trackEvent('api', 'api_team_set_team_icon');

                formData = new FormData();
                formData.append('image', imageData);
                request = {
                  method: 'post',
                  body: formData
                };

                if (formData.getBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData.getBoundary())
                  };
                }

                return _context87.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/image"), request));

              case 6:
              case "end":
                return _context87.stop();
            }
          }
        }, _callee87, this);
      }));

      return function (_x116, _x117) {
        return _ref90.apply(this, arguments);
      };
    }());

    _defineProperty(this, "removeTeamIcon",
    /*#__PURE__*/
    function () {
      var _ref91 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee88(teamId) {
        return regeneratorRuntime.wrap(function _callee88$(_context88) {
          while (1) {
            switch (_context88.prev = _context88.next) {
              case 0:
                _this.trackEvent('api', 'api_team_remove_team_icon');

                return _context88.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/image"), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context88.stop();
            }
          }
        }, _callee88, this);
      }));

      return function (_x118) {
        return _ref91.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateTeamMemberSchemeRoles",
    /*#__PURE__*/
    function () {
      var _ref92 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee89(teamId, userId, isSchemeUser, isSchemeAdmin) {
        var body;
        return regeneratorRuntime.wrap(function _callee89$(_context89) {
          while (1) {
            switch (_context89.prev = _context89.next) {
              case 0:
                body = {
                  scheme_user: isSchemeUser,
                  scheme_admin: isSchemeAdmin
                };
                return _context89.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/members/").concat(userId, "/schemeRoles"), {
                  method: 'put',
                  body: JSON.stringify(body)
                }));

              case 2:
              case "end":
                return _context89.stop();
            }
          }
        }, _callee89, this);
      }));

      return function (_x119, _x120, _x121, _x122) {
        return _ref92.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getAllChannels",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee90() {
      var page,
          perPage,
          _args90 = arguments;
      return regeneratorRuntime.wrap(function _callee90$(_context90) {
        while (1) {
          switch (_context90.prev = _context90.next) {
            case 0:
              page = _args90.length > 0 && _args90[0] !== undefined ? _args90[0] : 0;
              perPage = _args90.length > 1 && _args90[1] !== undefined ? _args90[1] : PER_PAGE_DEFAULT;
              return _context90.abrupt("return", _this.doFetch("".concat(_this.getChannelsRoute()).concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context90.stop();
          }
        }
      }, _callee90, this);
    })));

    _defineProperty(this, "createChannel",
    /*#__PURE__*/
    function () {
      var _ref94 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee91(channel) {
        return regeneratorRuntime.wrap(function _callee91$(_context91) {
          while (1) {
            switch (_context91.prev = _context91.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_create', {
                  team_id: channel.team_id
                });

                return _context91.abrupt("return", _this.doFetch("".concat(_this.getChannelsRoute()), {
                  method: 'post',
                  body: JSON.stringify(channel)
                }));

              case 2:
              case "end":
                return _context91.stop();
            }
          }
        }, _callee91, this);
      }));

      return function (_x123) {
        return _ref94.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createDirectChannel",
    /*#__PURE__*/
    function () {
      var _ref95 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee92(userIds) {
        return regeneratorRuntime.wrap(function _callee92$(_context92) {
          while (1) {
            switch (_context92.prev = _context92.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_create_direct');

                return _context92.abrupt("return", _this.doFetch("".concat(_this.getChannelsRoute(), "/direct"), {
                  method: 'post',
                  body: JSON.stringify(userIds)
                }));

              case 2:
              case "end":
                return _context92.stop();
            }
          }
        }, _callee92, this);
      }));

      return function (_x124) {
        return _ref95.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createGroupChannel",
    /*#__PURE__*/
    function () {
      var _ref96 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee93(userIds) {
        return regeneratorRuntime.wrap(function _callee93$(_context93) {
          while (1) {
            switch (_context93.prev = _context93.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_create_group');

                return _context93.abrupt("return", _this.doFetch("".concat(_this.getChannelsRoute(), "/group"), {
                  method: 'post',
                  body: JSON.stringify(userIds)
                }));

              case 2:
              case "end":
                return _context93.stop();
            }
          }
        }, _callee93, this);
      }));

      return function (_x125) {
        return _ref96.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteChannel",
    /*#__PURE__*/
    function () {
      var _ref97 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee94(channelId) {
        return regeneratorRuntime.wrap(function _callee94$(_context94) {
          while (1) {
            switch (_context94.prev = _context94.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_delete', {
                  channel_id: channelId
                });

                return _context94.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context94.stop();
            }
          }
        }, _callee94, this);
      }));

      return function (_x126) {
        return _ref97.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateChannel",
    /*#__PURE__*/
    function () {
      var _ref98 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee95(channel) {
        return regeneratorRuntime.wrap(function _callee95$(_context95) {
          while (1) {
            switch (_context95.prev = _context95.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_update', {
                  channel_id: channel.id
                });

                return _context95.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channel.id)), {
                  method: 'put',
                  body: JSON.stringify(channel)
                }));

              case 2:
              case "end":
                return _context95.stop();
            }
          }
        }, _callee95, this);
      }));

      return function (_x127) {
        return _ref98.apply(this, arguments);
      };
    }());

    _defineProperty(this, "convertChannelToPrivate",
    /*#__PURE__*/
    function () {
      var _ref99 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee96(channelId) {
        return regeneratorRuntime.wrap(function _callee96$(_context96) {
          while (1) {
            switch (_context96.prev = _context96.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_convert_to_private', {
                  channel_id: channelId
                });

                return _context96.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/convert"), {
                  method: 'post'
                }));

              case 2:
              case "end":
                return _context96.stop();
            }
          }
        }, _callee96, this);
      }));

      return function (_x128) {
        return _ref99.apply(this, arguments);
      };
    }());

    _defineProperty(this, "patchChannel",
    /*#__PURE__*/
    function () {
      var _ref100 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee97(channelId, channelPatch) {
        return regeneratorRuntime.wrap(function _callee97$(_context97) {
          while (1) {
            switch (_context97.prev = _context97.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_patch', {
                  channel_id: channelId
                });

                return _context97.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/patch"), {
                  method: 'put',
                  body: JSON.stringify(channelPatch)
                }));

              case 2:
              case "end":
                return _context97.stop();
            }
          }
        }, _callee97, this);
      }));

      return function (_x129, _x130) {
        return _ref100.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateChannelNotifyProps",
    /*#__PURE__*/
    function () {
      var _ref101 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee98(props) {
        return regeneratorRuntime.wrap(function _callee98$(_context98) {
          while (1) {
            switch (_context98.prev = _context98.next) {
              case 0:
                _this.trackEvent('api', 'api_users_update_channel_notifcations', {
                  channel_id: props.channel_id
                });

                return _context98.abrupt("return", _this.doFetch("".concat(_this.getChannelMemberRoute(props.channel_id, props.user_id), "/notify_props"), {
                  method: 'put',
                  body: JSON.stringify(props)
                }));

              case 2:
              case "end":
                return _context98.stop();
            }
          }
        }, _callee98, this);
      }));

      return function (_x131) {
        return _ref101.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateChannelScheme",
    /*#__PURE__*/
    function () {
      var _ref102 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee99(channelId, schemeId) {
        var patch;
        return regeneratorRuntime.wrap(function _callee99$(_context99) {
          while (1) {
            switch (_context99.prev = _context99.next) {
              case 0:
                patch = {
                  scheme_id: schemeId
                };

                _this.trackEvent('api', 'api_channels_update_scheme', _objectSpread({
                  channel_id: channelId
                }, patch));

                return _context99.abrupt("return", _this.doFetch("".concat(_this.getChannelSchemeRoute(channelId)), {
                  method: 'put',
                  body: JSON.stringify(patch)
                }));

              case 3:
              case "end":
                return _context99.stop();
            }
          }
        }, _callee99, this);
      }));

      return function (_x132, _x133) {
        return _ref102.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannel",
    /*#__PURE__*/
    function () {
      var _ref103 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee100(channelId) {
        return regeneratorRuntime.wrap(function _callee100$(_context100) {
          while (1) {
            switch (_context100.prev = _context100.next) {
              case 0:
                _this.trackEvent('api', 'api_channel_get', {
                  channel_id: channelId
                });

                return _context100.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId)), {
                  method: 'get'
                }));

              case 2:
              case "end":
                return _context100.stop();
            }
          }
        }, _callee100, this);
      }));

      return function (_x134) {
        return _ref103.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannelByName",
    /*#__PURE__*/
    function () {
      var _ref104 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee101(teamId, channelName) {
        var includeDeleted,
            _args101 = arguments;
        return regeneratorRuntime.wrap(function _callee101$(_context101) {
          while (1) {
            switch (_context101.prev = _context101.next) {
              case 0:
                includeDeleted = _args101.length > 2 && _args101[2] !== undefined ? _args101[2] : false;
                return _context101.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/channels/name/").concat(channelName, "?include_deleted=").concat(includeDeleted), {
                  method: 'get'
                }));

              case 2:
              case "end":
                return _context101.stop();
            }
          }
        }, _callee101, this);
      }));

      return function (_x135, _x136) {
        return _ref104.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannelByNameAndTeamName",
    /*#__PURE__*/
    function () {
      var _ref105 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee102(teamName, channelName) {
        var includeDeleted,
            _args102 = arguments;
        return regeneratorRuntime.wrap(function _callee102$(_context102) {
          while (1) {
            switch (_context102.prev = _context102.next) {
              case 0:
                includeDeleted = _args102.length > 2 && _args102[2] !== undefined ? _args102[2] : false;

                _this.trackEvent('api', 'api_channel_get_by_name_and_teamName', {
                  channel_name: channelName,
                  team_name: teamName,
                  include_deleted: includeDeleted
                });

                return _context102.abrupt("return", _this.doFetch("".concat(_this.getTeamNameRoute(teamName), "/channels/name/").concat(channelName, "?include_deleted=").concat(includeDeleted), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context102.stop();
            }
          }
        }, _callee102, this);
      }));

      return function (_x137, _x138) {
        return _ref105.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannels",
    /*#__PURE__*/
    function () {
      var _ref106 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee103(teamId) {
        var page,
            perPage,
            _args103 = arguments;
        return regeneratorRuntime.wrap(function _callee103$(_context103) {
          while (1) {
            switch (_context103.prev = _context103.next) {
              case 0:
                page = _args103.length > 1 && _args103[1] !== undefined ? _args103[1] : 0;
                perPage = _args103.length > 2 && _args103[2] !== undefined ? _args103[2] : PER_PAGE_DEFAULT;
                return _context103.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/channels").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context103.stop();
            }
          }
        }, _callee103, this);
      }));

      return function (_x139) {
        return _ref106.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMyChannels",
    /*#__PURE__*/
    function () {
      var _ref107 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee104(teamId) {
        return regeneratorRuntime.wrap(function _callee104$(_context104) {
          while (1) {
            switch (_context104.prev = _context104.next) {
              case 0:
                return _context104.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/teams/").concat(teamId, "/channels"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context104.stop();
            }
          }
        }, _callee104, this);
      }));

      return function (_x140) {
        return _ref107.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMyChannelMember",
    /*#__PURE__*/
    function () {
      var _ref108 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee105(channelId) {
        return regeneratorRuntime.wrap(function _callee105$(_context105) {
          while (1) {
            switch (_context105.prev = _context105.next) {
              case 0:
                return _context105.abrupt("return", _this.doFetch("".concat(_this.getChannelMemberRoute(channelId, 'me')), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context105.stop();
            }
          }
        }, _callee105, this);
      }));

      return function (_x141) {
        return _ref108.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMyChannelMembers",
    /*#__PURE__*/
    function () {
      var _ref109 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee106(teamId) {
        return regeneratorRuntime.wrap(function _callee106$(_context106) {
          while (1) {
            switch (_context106.prev = _context106.next) {
              case 0:
                return _context106.abrupt("return", _this.doFetch("".concat(_this.getUserRoute('me'), "/teams/").concat(teamId, "/channels/members"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context106.stop();
            }
          }
        }, _callee106, this);
      }));

      return function (_x142) {
        return _ref109.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannelMembers",
    /*#__PURE__*/
    function () {
      var _ref110 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee107(channelId) {
        var page,
            perPage,
            _args107 = arguments;
        return regeneratorRuntime.wrap(function _callee107$(_context107) {
          while (1) {
            switch (_context107.prev = _context107.next) {
              case 0:
                page = _args107.length > 1 && _args107[1] !== undefined ? _args107[1] : 0;
                perPage = _args107.length > 2 && _args107[2] !== undefined ? _args107[2] : PER_PAGE_DEFAULT;
                return _context107.abrupt("return", _this.doFetch("".concat(_this.getChannelMembersRoute(channelId)).concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context107.stop();
            }
          }
        }, _callee107, this);
      }));

      return function (_x143) {
        return _ref110.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannelTimezones",
    /*#__PURE__*/
    function () {
      var _ref111 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee108(channelId) {
        return regeneratorRuntime.wrap(function _callee108$(_context108) {
          while (1) {
            switch (_context108.prev = _context108.next) {
              case 0:
                return _context108.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/timezones"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context108.stop();
            }
          }
        }, _callee108, this);
      }));

      return function (_x144) {
        return _ref111.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannelMember",
    /*#__PURE__*/
    function () {
      var _ref112 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee109(channelId, userId) {
        return regeneratorRuntime.wrap(function _callee109$(_context109) {
          while (1) {
            switch (_context109.prev = _context109.next) {
              case 0:
                return _context109.abrupt("return", _this.doFetch("".concat(_this.getChannelMemberRoute(channelId, userId)), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context109.stop();
            }
          }
        }, _callee109, this);
      }));

      return function (_x145, _x146) {
        return _ref112.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannelMembersByIds",
    /*#__PURE__*/
    function () {
      var _ref113 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee110(channelId, userIds) {
        return regeneratorRuntime.wrap(function _callee110$(_context110) {
          while (1) {
            switch (_context110.prev = _context110.next) {
              case 0:
                return _context110.abrupt("return", _this.doFetch("".concat(_this.getChannelMembersRoute(channelId), "/ids"), {
                  method: 'post',
                  body: JSON.stringify(userIds)
                }));

              case 1:
              case "end":
                return _context110.stop();
            }
          }
        }, _callee110, this);
      }));

      return function (_x147, _x148) {
        return _ref113.apply(this, arguments);
      };
    }());

    _defineProperty(this, "addToChannel",
    /*#__PURE__*/
    function () {
      var _ref114 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee111(userId, channelId) {
        var postRootId,
            member,
            _args111 = arguments;
        return regeneratorRuntime.wrap(function _callee111$(_context111) {
          while (1) {
            switch (_context111.prev = _context111.next) {
              case 0:
                postRootId = _args111.length > 2 && _args111[2] !== undefined ? _args111[2] : '';

                _this.trackEvent('api', 'api_channels_add_member', {
                  channel_id: channelId
                });

                member = {
                  user_id: userId,
                  channel_id: channelId,
                  post_root_id: postRootId
                };
                return _context111.abrupt("return", _this.doFetch("".concat(_this.getChannelMembersRoute(channelId)), {
                  method: 'post',
                  body: JSON.stringify(member)
                }));

              case 4:
              case "end":
                return _context111.stop();
            }
          }
        }, _callee111, this);
      }));

      return function (_x149, _x150) {
        return _ref114.apply(this, arguments);
      };
    }());

    _defineProperty(this, "removeFromChannel",
    /*#__PURE__*/
    function () {
      var _ref115 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee112(userId, channelId) {
        return regeneratorRuntime.wrap(function _callee112$(_context112) {
          while (1) {
            switch (_context112.prev = _context112.next) {
              case 0:
                _this.trackEvent('api', 'api_channels_remove_member', {
                  channel_id: channelId
                });

                return _context112.abrupt("return", _this.doFetch("".concat(_this.getChannelMemberRoute(channelId, userId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context112.stop();
            }
          }
        }, _callee112, this);
      }));

      return function (_x151, _x152) {
        return _ref115.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateChannelMemberRoles",
    /*#__PURE__*/
    function () {
      var _ref116 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee113(channelId, userId, roles) {
        return regeneratorRuntime.wrap(function _callee113$(_context113) {
          while (1) {
            switch (_context113.prev = _context113.next) {
              case 0:
                return _context113.abrupt("return", _this.doFetch("".concat(_this.getChannelMemberRoute(channelId, userId), "/roles"), {
                  method: 'put',
                  body: JSON.stringify({
                    roles: roles
                  })
                }));

              case 1:
              case "end":
                return _context113.stop();
            }
          }
        }, _callee113, this);
      }));

      return function (_x153, _x154, _x155) {
        return _ref116.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getChannelStats",
    /*#__PURE__*/
    function () {
      var _ref117 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee114(channelId) {
        return regeneratorRuntime.wrap(function _callee114$(_context114) {
          while (1) {
            switch (_context114.prev = _context114.next) {
              case 0:
                return _context114.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/stats"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context114.stop();
            }
          }
        }, _callee114, this);
      }));

      return function (_x156) {
        return _ref117.apply(this, arguments);
      };
    }());

    _defineProperty(this, "viewMyChannel",
    /*#__PURE__*/
    function () {
      var _ref118 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee115(channelId, prevChannelId) {
        var data;
        return regeneratorRuntime.wrap(function _callee115$(_context115) {
          while (1) {
            switch (_context115.prev = _context115.next) {
              case 0:
                data = {
                  channel_id: channelId,
                  prev_channel_id: prevChannelId
                };
                return _context115.abrupt("return", _this.doFetch("".concat(_this.getChannelsRoute(), "/members/me/view"), {
                  method: 'post',
                  body: JSON.stringify(data)
                }));

              case 2:
              case "end":
                return _context115.stop();
            }
          }
        }, _callee115, this);
      }));

      return function (_x157, _x158) {
        return _ref118.apply(this, arguments);
      };
    }());

    _defineProperty(this, "autocompleteChannels",
    /*#__PURE__*/
    function () {
      var _ref119 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee116(teamId, name) {
        return regeneratorRuntime.wrap(function _callee116$(_context116) {
          while (1) {
            switch (_context116.prev = _context116.next) {
              case 0:
                return _context116.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/channels/autocomplete").concat((0, _helpers.buildQueryString)({
                  name: name
                })), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context116.stop();
            }
          }
        }, _callee116, this);
      }));

      return function (_x159, _x160) {
        return _ref119.apply(this, arguments);
      };
    }());

    _defineProperty(this, "autocompleteChannelsForSearch",
    /*#__PURE__*/
    function () {
      var _ref120 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee117(teamId, name) {
        return regeneratorRuntime.wrap(function _callee117$(_context117) {
          while (1) {
            switch (_context117.prev = _context117.next) {
              case 0:
                return _context117.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/channels/search_autocomplete").concat((0, _helpers.buildQueryString)({
                  name: name
                })), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context117.stop();
            }
          }
        }, _callee117, this);
      }));

      return function (_x161, _x162) {
        return _ref120.apply(this, arguments);
      };
    }());

    _defineProperty(this, "searchChannels",
    /*#__PURE__*/
    function () {
      var _ref121 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee118(teamId, term) {
        return regeneratorRuntime.wrap(function _callee118$(_context118) {
          while (1) {
            switch (_context118.prev = _context118.next) {
              case 0:
                return _context118.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/channels/search"), {
                  method: 'post',
                  body: JSON.stringify({
                    term: term
                  })
                }));

              case 1:
              case "end":
                return _context118.stop();
            }
          }
        }, _callee118, this);
      }));

      return function (_x163, _x164) {
        return _ref121.apply(this, arguments);
      };
    }());

    _defineProperty(this, "searchAllChannels",
    /*#__PURE__*/
    function () {
      var _ref122 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee119(term) {
        return regeneratorRuntime.wrap(function _callee119$(_context119) {
          while (1) {
            switch (_context119.prev = _context119.next) {
              case 0:
                return _context119.abrupt("return", _this.doFetch("".concat(_this.getChannelsRoute(), "/search"), {
                  method: 'post',
                  body: JSON.stringify({
                    term: term
                  })
                }));

              case 1:
              case "end":
                return _context119.stop();
            }
          }
        }, _callee119, this);
      }));

      return function (_x165) {
        return _ref122.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateChannelMemberSchemeRoles",
    /*#__PURE__*/
    function () {
      var _ref123 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee120(channelId, userId, isSchemeUser, isSchemeAdmin) {
        var body;
        return regeneratorRuntime.wrap(function _callee120$(_context120) {
          while (1) {
            switch (_context120.prev = _context120.next) {
              case 0:
                body = {
                  scheme_user: isSchemeUser,
                  scheme_admin: isSchemeAdmin
                };
                return _context120.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/members/").concat(userId, "/schemeRoles"), {
                  method: 'put',
                  body: JSON.stringify(body)
                }));

              case 2:
              case "end":
                return _context120.stop();
            }
          }
        }, _callee120, this);
      }));

      return function (_x166, _x167, _x168, _x169) {
        return _ref123.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createPost",
    /*#__PURE__*/
    function () {
      var _ref124 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee121(post) {
        return regeneratorRuntime.wrap(function _callee121$(_context121) {
          while (1) {
            switch (_context121.prev = _context121.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_create', {
                  channel_id: post.channel_id
                });

                if (post.root_id != null && post.root_id !== '') {
                  _this.trackEvent('api', 'api_posts_replied', {
                    channel_id: post.channel_id
                  });
                }

                return _context121.abrupt("return", _this.doFetch("".concat(_this.getPostsRoute()), {
                  method: 'post',
                  body: JSON.stringify(post)
                }));

              case 3:
              case "end":
                return _context121.stop();
            }
          }
        }, _callee121, this);
      }));

      return function (_x170) {
        return _ref124.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updatePost",
    /*#__PURE__*/
    function () {
      var _ref125 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee122(post) {
        return regeneratorRuntime.wrap(function _callee122$(_context122) {
          while (1) {
            switch (_context122.prev = _context122.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_update', {
                  channel_id: post.channel_id
                });

                return _context122.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(post.id)), {
                  method: 'put',
                  body: JSON.stringify(post)
                }));

              case 2:
              case "end":
                return _context122.stop();
            }
          }
        }, _callee122, this);
      }));

      return function (_x171) {
        return _ref125.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPost",
    /*#__PURE__*/
    function () {
      var _ref126 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee123(postId) {
        return regeneratorRuntime.wrap(function _callee123$(_context123) {
          while (1) {
            switch (_context123.prev = _context123.next) {
              case 0:
                return _context123.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId)), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context123.stop();
            }
          }
        }, _callee123, this);
      }));

      return function (_x172) {
        return _ref126.apply(this, arguments);
      };
    }());

    _defineProperty(this, "patchPost",
    /*#__PURE__*/
    function () {
      var _ref127 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee124(postPatch) {
        return regeneratorRuntime.wrap(function _callee124$(_context124) {
          while (1) {
            switch (_context124.prev = _context124.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_patch', {
                  channel_id: postPatch.channel_id
                });

                return _context124.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postPatch.id), "/patch"), {
                  method: 'put',
                  body: JSON.stringify(postPatch)
                }));

              case 2:
              case "end":
                return _context124.stop();
            }
          }
        }, _callee124, this);
      }));

      return function (_x173) {
        return _ref127.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deletePost",
    /*#__PURE__*/
    function () {
      var _ref128 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee125(postId) {
        return regeneratorRuntime.wrap(function _callee125$(_context125) {
          while (1) {
            switch (_context125.prev = _context125.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_delete');

                return _context125.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context125.stop();
            }
          }
        }, _callee125, this);
      }));

      return function (_x174) {
        return _ref128.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPostThread",
    /*#__PURE__*/
    function () {
      var _ref129 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee126(postId) {
        return regeneratorRuntime.wrap(function _callee126$(_context126) {
          while (1) {
            switch (_context126.prev = _context126.next) {
              case 0:
                return _context126.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId), "/thread"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context126.stop();
            }
          }
        }, _callee126, this);
      }));

      return function (_x175) {
        return _ref129.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPosts",
    /*#__PURE__*/
    function () {
      var _ref130 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee127(channelId) {
        var page,
            perPage,
            _args127 = arguments;
        return regeneratorRuntime.wrap(function _callee127$(_context127) {
          while (1) {
            switch (_context127.prev = _context127.next) {
              case 0:
                page = _args127.length > 1 && _args127[1] !== undefined ? _args127[1] : 0;
                perPage = _args127.length > 2 && _args127[2] !== undefined ? _args127[2] : PER_PAGE_DEFAULT;
                return _context127.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/posts").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context127.stop();
            }
          }
        }, _callee127, this);
      }));

      return function (_x176) {
        return _ref130.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPostsSince",
    /*#__PURE__*/
    function () {
      var _ref131 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee128(channelId, since) {
        return regeneratorRuntime.wrap(function _callee128$(_context128) {
          while (1) {
            switch (_context128.prev = _context128.next) {
              case 0:
                return _context128.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/posts").concat((0, _helpers.buildQueryString)({
                  since: since
                })), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context128.stop();
            }
          }
        }, _callee128, this);
      }));

      return function (_x177, _x178) {
        return _ref131.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPostsBefore",
    /*#__PURE__*/
    function () {
      var _ref132 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee129(channelId, postId) {
        var page,
            perPage,
            _args129 = arguments;
        return regeneratorRuntime.wrap(function _callee129$(_context129) {
          while (1) {
            switch (_context129.prev = _context129.next) {
              case 0:
                page = _args129.length > 2 && _args129[2] !== undefined ? _args129[2] : 0;
                perPage = _args129.length > 3 && _args129[3] !== undefined ? _args129[3] : PER_PAGE_DEFAULT;

                _this.trackEvent('api', 'api_posts_get_before', {
                  channel_id: channelId
                });

                return _context129.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/posts").concat((0, _helpers.buildQueryString)({
                  before: postId,
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 4:
              case "end":
                return _context129.stop();
            }
          }
        }, _callee129, this);
      }));

      return function (_x179, _x180) {
        return _ref132.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPostsAfter",
    /*#__PURE__*/
    function () {
      var _ref133 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee130(channelId, postId) {
        var page,
            perPage,
            _args130 = arguments;
        return regeneratorRuntime.wrap(function _callee130$(_context130) {
          while (1) {
            switch (_context130.prev = _context130.next) {
              case 0:
                page = _args130.length > 2 && _args130[2] !== undefined ? _args130[2] : 0;
                perPage = _args130.length > 3 && _args130[3] !== undefined ? _args130[3] : PER_PAGE_DEFAULT;

                _this.trackEvent('api', 'api_posts_get_after', {
                  channel_id: channelId
                });

                return _context130.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/posts").concat((0, _helpers.buildQueryString)({
                  after: postId,
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 4:
              case "end":
                return _context130.stop();
            }
          }
        }, _callee130, this);
      }));

      return function (_x181, _x182) {
        return _ref133.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getFileInfosForPost",
    /*#__PURE__*/
    function () {
      var _ref134 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee131(postId) {
        return regeneratorRuntime.wrap(function _callee131$(_context131) {
          while (1) {
            switch (_context131.prev = _context131.next) {
              case 0:
                return _context131.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId), "/files/info"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context131.stop();
            }
          }
        }, _callee131, this);
      }));

      return function (_x183) {
        return _ref134.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getFlaggedPosts",
    /*#__PURE__*/
    function () {
      var _ref135 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee132(userId) {
        var channelId,
            teamId,
            page,
            perPage,
            _args132 = arguments;
        return regeneratorRuntime.wrap(function _callee132$(_context132) {
          while (1) {
            switch (_context132.prev = _context132.next) {
              case 0:
                channelId = _args132.length > 1 && _args132[1] !== undefined ? _args132[1] : '';
                teamId = _args132.length > 2 && _args132[2] !== undefined ? _args132[2] : '';
                page = _args132.length > 3 && _args132[3] !== undefined ? _args132[3] : 0;
                perPage = _args132.length > 4 && _args132[4] !== undefined ? _args132[4] : PER_PAGE_DEFAULT;

                _this.trackEvent('api', 'api_posts_get_flagged', {
                  team_id: teamId
                });

                return _context132.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/posts/flagged").concat((0, _helpers.buildQueryString)({
                  channel_id: channelId,
                  team_id: teamId,
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 6:
              case "end":
                return _context132.stop();
            }
          }
        }, _callee132, this);
      }));

      return function (_x184) {
        return _ref135.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPinnedPosts",
    /*#__PURE__*/
    function () {
      var _ref136 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee133(channelId) {
        return regeneratorRuntime.wrap(function _callee133$(_context133) {
          while (1) {
            switch (_context133.prev = _context133.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_get_pinned', {
                  channel_id: channelId
                });

                return _context133.abrupt("return", _this.doFetch("".concat(_this.getChannelRoute(channelId), "/pinned"), {
                  method: 'get'
                }));

              case 2:
              case "end":
                return _context133.stop();
            }
          }
        }, _callee133, this);
      }));

      return function (_x185) {
        return _ref136.apply(this, arguments);
      };
    }());

    _defineProperty(this, "pinPost",
    /*#__PURE__*/
    function () {
      var _ref137 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee134(postId) {
        return regeneratorRuntime.wrap(function _callee134$(_context134) {
          while (1) {
            switch (_context134.prev = _context134.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_pin');

                return _context134.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId), "/pin"), {
                  method: 'post'
                }));

              case 2:
              case "end":
                return _context134.stop();
            }
          }
        }, _callee134, this);
      }));

      return function (_x186) {
        return _ref137.apply(this, arguments);
      };
    }());

    _defineProperty(this, "unpinPost",
    /*#__PURE__*/
    function () {
      var _ref138 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee135(postId) {
        return regeneratorRuntime.wrap(function _callee135$(_context135) {
          while (1) {
            switch (_context135.prev = _context135.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_unpin');

                return _context135.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId), "/unpin"), {
                  method: 'post'
                }));

              case 2:
              case "end":
                return _context135.stop();
            }
          }
        }, _callee135, this);
      }));

      return function (_x187) {
        return _ref138.apply(this, arguments);
      };
    }());

    _defineProperty(this, "addReaction",
    /*#__PURE__*/
    function () {
      var _ref139 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee136(userId, postId, emojiName) {
        return regeneratorRuntime.wrap(function _callee136$(_context136) {
          while (1) {
            switch (_context136.prev = _context136.next) {
              case 0:
                _this.trackEvent('api', 'api_reactions_save', {
                  post_id: postId
                });

                return _context136.abrupt("return", _this.doFetch("".concat(_this.getReactionsRoute()), {
                  method: 'post',
                  body: JSON.stringify({
                    user_id: userId,
                    post_id: postId,
                    emoji_name: emojiName
                  })
                }));

              case 2:
              case "end":
                return _context136.stop();
            }
          }
        }, _callee136, this);
      }));

      return function (_x188, _x189, _x190) {
        return _ref139.apply(this, arguments);
      };
    }());

    _defineProperty(this, "removeReaction",
    /*#__PURE__*/
    function () {
      var _ref140 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee137(userId, postId, emojiName) {
        return regeneratorRuntime.wrap(function _callee137$(_context137) {
          while (1) {
            switch (_context137.prev = _context137.next) {
              case 0:
                _this.trackEvent('api', 'api_reactions_delete', {
                  post_id: postId
                });

                return _context137.abrupt("return", _this.doFetch("".concat(_this.getUserRoute(userId), "/posts/").concat(postId, "/reactions/").concat(emojiName), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context137.stop();
            }
          }
        }, _callee137, this);
      }));

      return function (_x191, _x192, _x193) {
        return _ref140.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getReactionsForPost",
    /*#__PURE__*/
    function () {
      var _ref141 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee138(postId) {
        return regeneratorRuntime.wrap(function _callee138$(_context138) {
          while (1) {
            switch (_context138.prev = _context138.next) {
              case 0:
                return _context138.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId), "/reactions"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context138.stop();
            }
          }
        }, _callee138, this);
      }));

      return function (_x194) {
        return _ref141.apply(this, arguments);
      };
    }());

    _defineProperty(this, "searchPostsWithParams",
    /*#__PURE__*/
    function () {
      var _ref142 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee139(teamId, params) {
        return regeneratorRuntime.wrap(function _callee139$(_context139) {
          while (1) {
            switch (_context139.prev = _context139.next) {
              case 0:
                _this.trackEvent('api', 'api_posts_search', {
                  team_id: teamId
                });

                return _context139.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/posts/search"), {
                  method: 'post',
                  body: JSON.stringify(params)
                }));

              case 2:
              case "end":
                return _context139.stop();
            }
          }
        }, _callee139, this);
      }));

      return function (_x195, _x196) {
        return _ref142.apply(this, arguments);
      };
    }());

    _defineProperty(this, "searchPosts",
    /*#__PURE__*/
    function () {
      var _ref143 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee140(teamId, terms, isOrSearch) {
        return regeneratorRuntime.wrap(function _callee140$(_context140) {
          while (1) {
            switch (_context140.prev = _context140.next) {
              case 0:
                return _context140.abrupt("return", _this.searchPostsWithParams(teamId, {
                  terms: terms,
                  is_or_search: isOrSearch
                }));

              case 1:
              case "end":
                return _context140.stop();
            }
          }
        }, _callee140, this);
      }));

      return function (_x197, _x198, _x199) {
        return _ref143.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getOpenGraphMetadata",
    /*#__PURE__*/
    function () {
      var _ref144 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee141(url) {
        return regeneratorRuntime.wrap(function _callee141$(_context141) {
          while (1) {
            switch (_context141.prev = _context141.next) {
              case 0:
                return _context141.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/opengraph"), {
                  method: 'post',
                  body: JSON.stringify({
                    url: url
                  })
                }));

              case 1:
              case "end":
                return _context141.stop();
            }
          }
        }, _callee141, this);
      }));

      return function (_x200) {
        return _ref144.apply(this, arguments);
      };
    }());

    _defineProperty(this, "doPostAction",
    /*#__PURE__*/
    function () {
      var _ref145 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee142(postId, actionId) {
        var selectedOption,
            _args142 = arguments;
        return regeneratorRuntime.wrap(function _callee142$(_context142) {
          while (1) {
            switch (_context142.prev = _context142.next) {
              case 0:
                selectedOption = _args142.length > 2 && _args142[2] !== undefined ? _args142[2] : '';

                if (selectedOption) {
                  _this.trackEvent('api', 'api_interactive_messages_menu_selected');
                } else {
                  _this.trackEvent('api', 'api_interactive_messages_button_clicked');
                }

                return _context142.abrupt("return", _this.doFetch("".concat(_this.getPostRoute(postId), "/actions/").concat(encodeURIComponent(actionId)), {
                  method: 'post',
                  body: JSON.stringify({
                    selected_option: selectedOption
                  })
                }));

              case 3:
              case "end":
                return _context142.stop();
            }
          }
        }, _callee142, this);
      }));

      return function (_x201, _x202) {
        return _ref145.apply(this, arguments);
      };
    }());

    _defineProperty(this, "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref146 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee143(fileFormData, formBoundary) {
        var request;
        return regeneratorRuntime.wrap(function _callee143$(_context143) {
          while (1) {
            switch (_context143.prev = _context143.next) {
              case 0:
                _this.trackEvent('api', 'api_files_upload');

                request = {
                  method: 'post',
                  body: fileFormData
                };

                if (formBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formBoundary)
                  };
                }

                return _context143.abrupt("return", _this.doFetch("".concat(_this.getFilesRoute()), request));

              case 4:
              case "end":
                return _context143.stop();
            }
          }
        }, _callee143, this);
      }));

      return function (_x203, _x204) {
        return _ref146.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getFilePublicLink",
    /*#__PURE__*/
    function () {
      var _ref147 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee144(fileId) {
        return regeneratorRuntime.wrap(function _callee144$(_context144) {
          while (1) {
            switch (_context144.prev = _context144.next) {
              case 0:
                return _context144.abrupt("return", _this.doFetch("".concat(_this.getFileRoute(fileId), "/link"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context144.stop();
            }
          }
        }, _callee144, this);
      }));

      return function (_x205) {
        return _ref147.apply(this, arguments);
      };
    }());

    _defineProperty(this, "savePreferences",
    /*#__PURE__*/
    function () {
      var _ref148 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee145(userId, preferences) {
        return regeneratorRuntime.wrap(function _callee145$(_context145) {
          while (1) {
            switch (_context145.prev = _context145.next) {
              case 0:
                return _context145.abrupt("return", _this.doFetch("".concat(_this.getPreferencesRoute(userId)), {
                  method: 'put',
                  body: JSON.stringify(preferences)
                }));

              case 1:
              case "end":
                return _context145.stop();
            }
          }
        }, _callee145, this);
      }));

      return function (_x206, _x207) {
        return _ref148.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getMyPreferences",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee146() {
      return regeneratorRuntime.wrap(function _callee146$(_context146) {
        while (1) {
          switch (_context146.prev = _context146.next) {
            case 0:
              return _context146.abrupt("return", _this.doFetch("".concat(_this.getPreferencesRoute('me')), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context146.stop();
          }
        }
      }, _callee146, this);
    })));

    _defineProperty(this, "deletePreferences",
    /*#__PURE__*/
    function () {
      var _ref150 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee147(userId, preferences) {
        return regeneratorRuntime.wrap(function _callee147$(_context147) {
          while (1) {
            switch (_context147.prev = _context147.next) {
              case 0:
                return _context147.abrupt("return", _this.doFetch("".concat(_this.getPreferencesRoute(userId), "/delete"), {
                  method: 'post',
                  body: JSON.stringify(preferences)
                }));

              case 1:
              case "end":
                return _context147.stop();
            }
          }
        }, _callee147, this);
      }));

      return function (_x208, _x209) {
        return _ref150.apply(this, arguments);
      };
    }());

    _defineProperty(this, "ping",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee148() {
      return regeneratorRuntime.wrap(function _callee148$(_context148) {
        while (1) {
          switch (_context148.prev = _context148.next) {
            case 0:
              return _context148.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/system/ping?time=").concat(Date.now()), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context148.stop();
          }
        }
      }, _callee148, this);
    })));

    _defineProperty(this, "logClientError",
    /*#__PURE__*/
    function () {
      var _ref152 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee149(message) {
        var level,
            url,
            _args149 = arguments;
        return regeneratorRuntime.wrap(function _callee149$(_context149) {
          while (1) {
            switch (_context149.prev = _context149.next) {
              case 0:
                level = _args149.length > 1 && _args149[1] !== undefined ? _args149[1] : 'ERROR';
                url = "".concat(_this.getBaseRoute(), "/logs");

                if (_this.enableLogging) {
                  _context149.next = 4;
                  break;
                }

                throw new ClientError(_this.getUrl(), {
                  message: 'Logging disabled.',
                  url: url
                });

              case 4:
                return _context149.abrupt("return", _this.doFetch(url, {
                  method: 'post',
                  body: JSON.stringify({
                    message: message,
                    level: level
                  })
                }));

              case 5:
              case "end":
                return _context149.stop();
            }
          }
        }, _callee149, this);
      }));

      return function (_x210) {
        return _ref152.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getClientConfigOld",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee150() {
      return regeneratorRuntime.wrap(function _callee150$(_context150) {
        while (1) {
          switch (_context150.prev = _context150.next) {
            case 0:
              return _context150.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/config/client?format=old"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context150.stop();
          }
        }
      }, _callee150, this);
    })));

    _defineProperty(this, "getClientLicenseOld",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee151() {
      return regeneratorRuntime.wrap(function _callee151$(_context151) {
        while (1) {
          switch (_context151.prev = _context151.next) {
            case 0:
              return _context151.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/license/client?format=old"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context151.stop();
          }
        }
      }, _callee151, this);
    })));

    _defineProperty(this, "getTranslations",
    /*#__PURE__*/
    function () {
      var _ref155 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee152(url) {
        return regeneratorRuntime.wrap(function _callee152$(_context152) {
          while (1) {
            switch (_context152.prev = _context152.next) {
              case 0:
                return _context152.abrupt("return", _this.doFetch(url, {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context152.stop();
            }
          }
        }, _callee152, this);
      }));

      return function (_x211) {
        return _ref155.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getWebSocketUrl", function () {
      return "".concat(_this.getBaseRoute(), "/websocket");
    });

    _defineProperty(this, "webrtcToken",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee153() {
      return regeneratorRuntime.wrap(function _callee153$(_context153) {
        while (1) {
          switch (_context153.prev = _context153.next) {
            case 0:
              return _context153.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/webrtc/token"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context153.stop();
          }
        }
      }, _callee153, this);
    })));

    _defineProperty(this, "createIncomingWebhook",
    /*#__PURE__*/
    function () {
      var _ref157 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee154(hook) {
        return regeneratorRuntime.wrap(function _callee154$(_context154) {
          while (1) {
            switch (_context154.prev = _context154.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_created', {
                  team_id: hook.team_id
                });

                return _context154.abrupt("return", _this.doFetch("".concat(_this.getIncomingHooksRoute()), {
                  method: 'post',
                  body: JSON.stringify(hook)
                }));

              case 2:
              case "end":
                return _context154.stop();
            }
          }
        }, _callee154, this);
      }));

      return function (_x212) {
        return _ref157.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getIncomingWebhook",
    /*#__PURE__*/
    function () {
      var _ref158 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee155(hookId) {
        return regeneratorRuntime.wrap(function _callee155$(_context155) {
          while (1) {
            switch (_context155.prev = _context155.next) {
              case 0:
                return _context155.abrupt("return", _this.doFetch("".concat(_this.getIncomingHookRoute(hookId)), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context155.stop();
            }
          }
        }, _callee155, this);
      }));

      return function (_x213) {
        return _ref158.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getIncomingWebhooks",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee156() {
      var teamId,
          page,
          perPage,
          queryParams,
          _args156 = arguments;
      return regeneratorRuntime.wrap(function _callee156$(_context156) {
        while (1) {
          switch (_context156.prev = _context156.next) {
            case 0:
              teamId = _args156.length > 0 && _args156[0] !== undefined ? _args156[0] : '';
              page = _args156.length > 1 && _args156[1] !== undefined ? _args156[1] : 0;
              perPage = _args156.length > 2 && _args156[2] !== undefined ? _args156[2] : PER_PAGE_DEFAULT;
              queryParams = {
                page: page,
                per_page: perPage
              };

              if (teamId) {
                queryParams.team_id = teamId;
              }

              return _context156.abrupt("return", _this.doFetch("".concat(_this.getIncomingHooksRoute()).concat((0, _helpers.buildQueryString)(queryParams)), {
                method: 'get'
              }));

            case 6:
            case "end":
              return _context156.stop();
          }
        }
      }, _callee156, this);
    })));

    _defineProperty(this, "removeIncomingWebhook",
    /*#__PURE__*/
    function () {
      var _ref160 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee157(hookId) {
        return regeneratorRuntime.wrap(function _callee157$(_context157) {
          while (1) {
            switch (_context157.prev = _context157.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_deleted');

                return _context157.abrupt("return", _this.doFetch("".concat(_this.getIncomingHookRoute(hookId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context157.stop();
            }
          }
        }, _callee157, this);
      }));

      return function (_x214) {
        return _ref160.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateIncomingWebhook",
    /*#__PURE__*/
    function () {
      var _ref161 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee158(hook) {
        return regeneratorRuntime.wrap(function _callee158$(_context158) {
          while (1) {
            switch (_context158.prev = _context158.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_updated', {
                  team_id: hook.team_id
                });

                return _context158.abrupt("return", _this.doFetch("".concat(_this.getIncomingHookRoute(hook.id)), {
                  method: 'put',
                  body: JSON.stringify(hook)
                }));

              case 2:
              case "end":
                return _context158.stop();
            }
          }
        }, _callee158, this);
      }));

      return function (_x215) {
        return _ref161.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createOutgoingWebhook",
    /*#__PURE__*/
    function () {
      var _ref162 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee159(hook) {
        return regeneratorRuntime.wrap(function _callee159$(_context159) {
          while (1) {
            switch (_context159.prev = _context159.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_created', {
                  team_id: hook.team_id
                });

                return _context159.abrupt("return", _this.doFetch("".concat(_this.getOutgoingHooksRoute()), {
                  method: 'post',
                  body: JSON.stringify(hook)
                }));

              case 2:
              case "end":
                return _context159.stop();
            }
          }
        }, _callee159, this);
      }));

      return function (_x216) {
        return _ref162.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getOutgoingWebhook",
    /*#__PURE__*/
    function () {
      var _ref163 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee160(hookId) {
        return regeneratorRuntime.wrap(function _callee160$(_context160) {
          while (1) {
            switch (_context160.prev = _context160.next) {
              case 0:
                return _context160.abrupt("return", _this.doFetch("".concat(_this.getOutgoingHookRoute(hookId)), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context160.stop();
            }
          }
        }, _callee160, this);
      }));

      return function (_x217) {
        return _ref163.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getOutgoingWebhooks",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee161() {
      var channelId,
          teamId,
          page,
          perPage,
          queryParams,
          _args161 = arguments;
      return regeneratorRuntime.wrap(function _callee161$(_context161) {
        while (1) {
          switch (_context161.prev = _context161.next) {
            case 0:
              channelId = _args161.length > 0 && _args161[0] !== undefined ? _args161[0] : '';
              teamId = _args161.length > 1 && _args161[1] !== undefined ? _args161[1] : '';
              page = _args161.length > 2 && _args161[2] !== undefined ? _args161[2] : 0;
              perPage = _args161.length > 3 && _args161[3] !== undefined ? _args161[3] : PER_PAGE_DEFAULT;
              queryParams = {
                page: page,
                per_page: perPage
              };

              if (channelId) {
                queryParams.channel_id = channelId;
              }

              if (teamId) {
                queryParams.team_id = teamId;
              }

              return _context161.abrupt("return", _this.doFetch("".concat(_this.getOutgoingHooksRoute()).concat((0, _helpers.buildQueryString)(queryParams)), {
                method: 'get'
              }));

            case 8:
            case "end":
              return _context161.stop();
          }
        }
      }, _callee161, this);
    })));

    _defineProperty(this, "removeOutgoingWebhook",
    /*#__PURE__*/
    function () {
      var _ref165 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee162(hookId) {
        return regeneratorRuntime.wrap(function _callee162$(_context162) {
          while (1) {
            switch (_context162.prev = _context162.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_deleted');

                return _context162.abrupt("return", _this.doFetch("".concat(_this.getOutgoingHookRoute(hookId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context162.stop();
            }
          }
        }, _callee162, this);
      }));

      return function (_x218) {
        return _ref165.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateOutgoingWebhook",
    /*#__PURE__*/
    function () {
      var _ref166 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee163(hook) {
        return regeneratorRuntime.wrap(function _callee163$(_context163) {
          while (1) {
            switch (_context163.prev = _context163.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_updated', {
                  team_id: hook.team_id
                });

                return _context163.abrupt("return", _this.doFetch("".concat(_this.getOutgoingHookRoute(hook.id)), {
                  method: 'put',
                  body: JSON.stringify(hook)
                }));

              case 2:
              case "end":
                return _context163.stop();
            }
          }
        }, _callee163, this);
      }));

      return function (_x219) {
        return _ref166.apply(this, arguments);
      };
    }());

    _defineProperty(this, "regenOutgoingHookToken",
    /*#__PURE__*/
    function () {
      var _ref167 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee164(id) {
        return regeneratorRuntime.wrap(function _callee164$(_context164) {
          while (1) {
            switch (_context164.prev = _context164.next) {
              case 0:
                return _context164.abrupt("return", _this.doFetch("".concat(_this.getOutgoingHookRoute(id), "/regen_token"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context164.stop();
            }
          }
        }, _callee164, this);
      }));

      return function (_x220) {
        return _ref167.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getCommandsList",
    /*#__PURE__*/
    function () {
      var _ref168 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee165(teamId) {
        return regeneratorRuntime.wrap(function _callee165$(_context165) {
          while (1) {
            switch (_context165.prev = _context165.next) {
              case 0:
                return _context165.abrupt("return", _this.doFetch("".concat(_this.getCommandsRoute(), "?team_id=").concat(teamId), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context165.stop();
            }
          }
        }, _callee165, this);
      }));

      return function (_x221) {
        return _ref168.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getAutocompleteCommandsList",
    /*#__PURE__*/
    function () {
      var _ref169 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee166(teamId) {
        var page,
            perPage,
            _args166 = arguments;
        return regeneratorRuntime.wrap(function _callee166$(_context166) {
          while (1) {
            switch (_context166.prev = _context166.next) {
              case 0:
                page = _args166.length > 1 && _args166[1] !== undefined ? _args166[1] : 0;
                perPage = _args166.length > 2 && _args166[2] !== undefined ? _args166[2] : PER_PAGE_DEFAULT;
                return _context166.abrupt("return", _this.doFetch("".concat(_this.getTeamRoute(teamId), "/commands/autocomplete").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context166.stop();
            }
          }
        }, _callee166, this);
      }));

      return function (_x222) {
        return _ref169.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getCustomTeamCommands",
    /*#__PURE__*/
    function () {
      var _ref170 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee167(teamId) {
        return regeneratorRuntime.wrap(function _callee167$(_context167) {
          while (1) {
            switch (_context167.prev = _context167.next) {
              case 0:
                return _context167.abrupt("return", _this.doFetch("".concat(_this.getCommandsRoute(), "?team_id=").concat(teamId, "&custom_only=true"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context167.stop();
            }
          }
        }, _callee167, this);
      }));

      return function (_x223) {
        return _ref170.apply(this, arguments);
      };
    }());

    _defineProperty(this, "executeCommand",
    /*#__PURE__*/
    function () {
      var _ref171 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee168(command) {
        var commandArgs,
            _args168 = arguments;
        return regeneratorRuntime.wrap(function _callee168$(_context168) {
          while (1) {
            switch (_context168.prev = _context168.next) {
              case 0:
                commandArgs = _args168.length > 1 && _args168[1] !== undefined ? _args168[1] : {};

                _this.trackEvent('api', 'api_integrations_used');

                return _context168.abrupt("return", _this.doFetch("".concat(_this.getCommandsRoute(), "/execute"), {
                  method: 'post',
                  body: JSON.stringify(_objectSpread({
                    command: command
                  }, commandArgs))
                }));

              case 3:
              case "end":
                return _context168.stop();
            }
          }
        }, _callee168, this);
      }));

      return function (_x224) {
        return _ref171.apply(this, arguments);
      };
    }());

    _defineProperty(this, "addCommand",
    /*#__PURE__*/
    function () {
      var _ref172 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee169(command) {
        return regeneratorRuntime.wrap(function _callee169$(_context169) {
          while (1) {
            switch (_context169.prev = _context169.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_created');

                return _context169.abrupt("return", _this.doFetch("".concat(_this.getCommandsRoute()), {
                  method: 'post',
                  body: JSON.stringify(command)
                }));

              case 2:
              case "end":
                return _context169.stop();
            }
          }
        }, _callee169, this);
      }));

      return function (_x225) {
        return _ref172.apply(this, arguments);
      };
    }());

    _defineProperty(this, "editCommand",
    /*#__PURE__*/
    function () {
      var _ref173 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee170(command) {
        return regeneratorRuntime.wrap(function _callee170$(_context170) {
          while (1) {
            switch (_context170.prev = _context170.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_created');

                return _context170.abrupt("return", _this.doFetch("".concat(_this.getCommandsRoute(), "/").concat(command.id), {
                  method: 'put',
                  body: JSON.stringify(command)
                }));

              case 2:
              case "end":
                return _context170.stop();
            }
          }
        }, _callee170, this);
      }));

      return function (_x226) {
        return _ref173.apply(this, arguments);
      };
    }());

    _defineProperty(this, "regenCommandToken",
    /*#__PURE__*/
    function () {
      var _ref174 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee171(id) {
        return regeneratorRuntime.wrap(function _callee171$(_context171) {
          while (1) {
            switch (_context171.prev = _context171.next) {
              case 0:
                return _context171.abrupt("return", _this.doFetch("".concat(_this.getCommandsRoute(), "/").concat(id, "/regen_token"), {
                  method: 'put'
                }));

              case 1:
              case "end":
                return _context171.stop();
            }
          }
        }, _callee171, this);
      }));

      return function (_x227) {
        return _ref174.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteCommand",
    /*#__PURE__*/
    function () {
      var _ref175 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee172(id) {
        return regeneratorRuntime.wrap(function _callee172$(_context172) {
          while (1) {
            switch (_context172.prev = _context172.next) {
              case 0:
                _this.trackEvent('api', 'api_integrations_deleted');

                return _context172.abrupt("return", _this.doFetch("".concat(_this.getCommandsRoute(), "/").concat(id), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context172.stop();
            }
          }
        }, _callee172, this);
      }));

      return function (_x228) {
        return _ref175.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createOAuthApp",
    /*#__PURE__*/
    function () {
      var _ref176 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee173(app) {
        return regeneratorRuntime.wrap(function _callee173$(_context173) {
          while (1) {
            switch (_context173.prev = _context173.next) {
              case 0:
                _this.trackEvent('api', 'api_apps_register');

                return _context173.abrupt("return", _this.doFetch("".concat(_this.getOAuthAppsRoute()), {
                  method: 'post',
                  body: JSON.stringify(app)
                }));

              case 2:
              case "end":
                return _context173.stop();
            }
          }
        }, _callee173, this);
      }));

      return function (_x229) {
        return _ref176.apply(this, arguments);
      };
    }());

    _defineProperty(this, "editOAuthApp",
    /*#__PURE__*/
    function () {
      var _ref177 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee174(app) {
        return regeneratorRuntime.wrap(function _callee174$(_context174) {
          while (1) {
            switch (_context174.prev = _context174.next) {
              case 0:
                return _context174.abrupt("return", _this.doFetch("".concat(_this.getOAuthAppsRoute(), "/").concat(app.id), {
                  method: 'put',
                  body: JSON.stringify(app)
                }));

              case 1:
              case "end":
                return _context174.stop();
            }
          }
        }, _callee174, this);
      }));

      return function (_x230) {
        return _ref177.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getOAuthApps",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee175() {
      var page,
          perPage,
          _args175 = arguments;
      return regeneratorRuntime.wrap(function _callee175$(_context175) {
        while (1) {
          switch (_context175.prev = _context175.next) {
            case 0:
              page = _args175.length > 0 && _args175[0] !== undefined ? _args175[0] : 0;
              perPage = _args175.length > 1 && _args175[1] !== undefined ? _args175[1] : PER_PAGE_DEFAULT;
              return _context175.abrupt("return", _this.doFetch("".concat(_this.getOAuthAppsRoute()).concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context175.stop();
          }
        }
      }, _callee175, this);
    })));

    _defineProperty(this, "getOAuthApp",
    /*#__PURE__*/
    function () {
      var _ref179 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee176(appId) {
        return regeneratorRuntime.wrap(function _callee176$(_context176) {
          while (1) {
            switch (_context176.prev = _context176.next) {
              case 0:
                return _context176.abrupt("return", _this.doFetch("".concat(_this.getOAuthAppRoute(appId)), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context176.stop();
            }
          }
        }, _callee176, this);
      }));

      return function (_x231) {
        return _ref179.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getOAuthAppInfo",
    /*#__PURE__*/
    function () {
      var _ref180 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee177(appId) {
        return regeneratorRuntime.wrap(function _callee177$(_context177) {
          while (1) {
            switch (_context177.prev = _context177.next) {
              case 0:
                return _context177.abrupt("return", _this.doFetch("".concat(_this.getOAuthAppRoute(appId), "/info"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context177.stop();
            }
          }
        }, _callee177, this);
      }));

      return function (_x232) {
        return _ref180.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteOAuthApp",
    /*#__PURE__*/
    function () {
      var _ref181 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee178(appId) {
        return regeneratorRuntime.wrap(function _callee178$(_context178) {
          while (1) {
            switch (_context178.prev = _context178.next) {
              case 0:
                _this.trackEvent('api', 'api_apps_delete');

                return _context178.abrupt("return", _this.doFetch("".concat(_this.getOAuthAppRoute(appId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context178.stop();
            }
          }
        }, _callee178, this);
      }));

      return function (_x233) {
        return _ref181.apply(this, arguments);
      };
    }());

    _defineProperty(this, "regenOAuthAppSecret",
    /*#__PURE__*/
    function () {
      var _ref182 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee179(appId) {
        return regeneratorRuntime.wrap(function _callee179$(_context179) {
          while (1) {
            switch (_context179.prev = _context179.next) {
              case 0:
                return _context179.abrupt("return", _this.doFetch("".concat(_this.getOAuthAppRoute(appId), "/regen_secret"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context179.stop();
            }
          }
        }, _callee179, this);
      }));

      return function (_x234) {
        return _ref182.apply(this, arguments);
      };
    }());

    _defineProperty(this, "submitInteractiveDialog",
    /*#__PURE__*/
    function () {
      var _ref183 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee180(data) {
        return regeneratorRuntime.wrap(function _callee180$(_context180) {
          while (1) {
            switch (_context180.prev = _context180.next) {
              case 0:
                _this.trackEvent('api', 'api_interactive_messages_dialog_submitted');

                return _context180.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/actions/dialogs/submit"), {
                  method: 'post',
                  body: JSON.stringify(data)
                }));

              case 2:
              case "end":
                return _context180.stop();
            }
          }
        }, _callee180, this);
      }));

      return function (_x235) {
        return _ref183.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createCustomEmoji",
    /*#__PURE__*/
    function () {
      var _ref184 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee181(emoji, imageData) {
        var formData, request;
        return regeneratorRuntime.wrap(function _callee181$(_context181) {
          while (1) {
            switch (_context181.prev = _context181.next) {
              case 0:
                _this.trackEvent('api', 'api_emoji_custom_add');

                formData = new FormData();
                formData.append('image', imageData);
                formData.append('emoji', JSON.stringify(emoji));
                request = {
                  method: 'post',
                  body: formData
                };

                if (formData.getBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData.getBoundary())
                  };
                }

                return _context181.abrupt("return", _this.doFetch("".concat(_this.getEmojisRoute()), request));

              case 7:
              case "end":
                return _context181.stop();
            }
          }
        }, _callee181, this);
      }));

      return function (_x236, _x237) {
        return _ref184.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getCustomEmoji",
    /*#__PURE__*/
    function () {
      var _ref185 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee182(id) {
        return regeneratorRuntime.wrap(function _callee182$(_context182) {
          while (1) {
            switch (_context182.prev = _context182.next) {
              case 0:
                return _context182.abrupt("return", _this.doFetch("".concat(_this.getEmojisRoute(), "/").concat(id), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context182.stop();
            }
          }
        }, _callee182, this);
      }));

      return function (_x238) {
        return _ref185.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getCustomEmojiByName",
    /*#__PURE__*/
    function () {
      var _ref186 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee183(name) {
        return regeneratorRuntime.wrap(function _callee183$(_context183) {
          while (1) {
            switch (_context183.prev = _context183.next) {
              case 0:
                return _context183.abrupt("return", _this.doFetch("".concat(_this.getEmojisRoute(), "/name/").concat(name), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context183.stop();
            }
          }
        }, _callee183, this);
      }));

      return function (_x239) {
        return _ref186.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getCustomEmojis",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee184() {
      var page,
          perPage,
          sort,
          _args184 = arguments;
      return regeneratorRuntime.wrap(function _callee184$(_context184) {
        while (1) {
          switch (_context184.prev = _context184.next) {
            case 0:
              page = _args184.length > 0 && _args184[0] !== undefined ? _args184[0] : 0;
              perPage = _args184.length > 1 && _args184[1] !== undefined ? _args184[1] : PER_PAGE_DEFAULT;
              sort = _args184.length > 2 && _args184[2] !== undefined ? _args184[2] : '';
              return _context184.abrupt("return", _this.doFetch("".concat(_this.getEmojisRoute()).concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage,
                sort: sort
              })), {
                method: 'get'
              }));

            case 4:
            case "end":
              return _context184.stop();
          }
        }
      }, _callee184, this);
    })));

    _defineProperty(this, "deleteCustomEmoji",
    /*#__PURE__*/
    function () {
      var _ref188 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee185(emojiId) {
        return regeneratorRuntime.wrap(function _callee185$(_context185) {
          while (1) {
            switch (_context185.prev = _context185.next) {
              case 0:
                _this.trackEvent('api', 'api_emoji_custom_delete');

                return _context185.abrupt("return", _this.doFetch("".concat(_this.getEmojiRoute(emojiId)), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context185.stop();
            }
          }
        }, _callee185, this);
      }));

      return function (_x240) {
        return _ref188.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getSystemEmojiImageUrl", function (filename) {
      return "".concat(_this.url, "/static/emoji/").concat(filename, ".png");
    });

    _defineProperty(this, "getCustomEmojiImageUrl", function (id) {
      return "".concat(_this.getEmojiRoute(id), "/image");
    });

    _defineProperty(this, "searchCustomEmoji",
    /*#__PURE__*/
    function () {
      var _ref189 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee186(term) {
        var options,
            _args186 = arguments;
        return regeneratorRuntime.wrap(function _callee186$(_context186) {
          while (1) {
            switch (_context186.prev = _context186.next) {
              case 0:
                options = _args186.length > 1 && _args186[1] !== undefined ? _args186[1] : {};
                return _context186.abrupt("return", _this.doFetch("".concat(_this.getEmojisRoute(), "/search"), {
                  method: 'post',
                  body: JSON.stringify(_objectSpread({
                    term: term
                  }, options))
                }));

              case 2:
              case "end":
                return _context186.stop();
            }
          }
        }, _callee186, this);
      }));

      return function (_x241) {
        return _ref189.apply(this, arguments);
      };
    }());

    _defineProperty(this, "autocompleteCustomEmoji",
    /*#__PURE__*/
    function () {
      var _ref190 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee187(name) {
        return regeneratorRuntime.wrap(function _callee187$(_context187) {
          while (1) {
            switch (_context187.prev = _context187.next) {
              case 0:
                return _context187.abrupt("return", _this.doFetch("".concat(_this.getEmojisRoute(), "/autocomplete").concat((0, _helpers.buildQueryString)({
                  name: name
                })), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context187.stop();
            }
          }
        }, _callee187, this);
      }));

      return function (_x242) {
        return _ref190.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getTimezones",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee188() {
      return regeneratorRuntime.wrap(function _callee188$(_context188) {
        while (1) {
          switch (_context188.prev = _context188.next) {
            case 0:
              return _context188.abrupt("return", _this.doFetch("".concat(_this.getTimezonesRoute()), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context188.stop();
          }
        }
      }, _callee188, this);
    })));

    _defineProperty(this, "getDataRetentionPolicy", function () {
      return _this.doFetch("".concat(_this.getDataRetentionRoute(), "/policy"), {
        method: 'get'
      });
    });

    _defineProperty(this, "getJob",
    /*#__PURE__*/
    function () {
      var _ref192 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee189(id) {
        return regeneratorRuntime.wrap(function _callee189$(_context189) {
          while (1) {
            switch (_context189.prev = _context189.next) {
              case 0:
                return _context189.abrupt("return", _this.doFetch("".concat(_this.getJobsRoute(), "/").concat(id), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context189.stop();
            }
          }
        }, _callee189, this);
      }));

      return function (_x243) {
        return _ref192.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getJobs",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee190() {
      var page,
          perPage,
          _args190 = arguments;
      return regeneratorRuntime.wrap(function _callee190$(_context190) {
        while (1) {
          switch (_context190.prev = _context190.next) {
            case 0:
              page = _args190.length > 0 && _args190[0] !== undefined ? _args190[0] : 0;
              perPage = _args190.length > 1 && _args190[1] !== undefined ? _args190[1] : PER_PAGE_DEFAULT;
              return _context190.abrupt("return", _this.doFetch("".concat(_this.getJobsRoute()).concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context190.stop();
          }
        }
      }, _callee190, this);
    })));

    _defineProperty(this, "getJobsByType",
    /*#__PURE__*/
    function () {
      var _ref194 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee191(type) {
        var page,
            perPage,
            _args191 = arguments;
        return regeneratorRuntime.wrap(function _callee191$(_context191) {
          while (1) {
            switch (_context191.prev = _context191.next) {
              case 0:
                page = _args191.length > 1 && _args191[1] !== undefined ? _args191[1] : 0;
                perPage = _args191.length > 2 && _args191[2] !== undefined ? _args191[2] : PER_PAGE_DEFAULT;
                return _context191.abrupt("return", _this.doFetch("".concat(_this.getJobsRoute(), "/type/").concat(type).concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context191.stop();
            }
          }
        }, _callee191, this);
      }));

      return function (_x244) {
        return _ref194.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createJob",
    /*#__PURE__*/
    function () {
      var _ref195 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee192(job) {
        return regeneratorRuntime.wrap(function _callee192$(_context192) {
          while (1) {
            switch (_context192.prev = _context192.next) {
              case 0:
                return _context192.abrupt("return", _this.doFetch("".concat(_this.getJobsRoute()), {
                  method: 'post',
                  body: JSON.stringify(job)
                }));

              case 1:
              case "end":
                return _context192.stop();
            }
          }
        }, _callee192, this);
      }));

      return function (_x245) {
        return _ref195.apply(this, arguments);
      };
    }());

    _defineProperty(this, "cancelJob",
    /*#__PURE__*/
    function () {
      var _ref196 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee193(id) {
        return regeneratorRuntime.wrap(function _callee193$(_context193) {
          while (1) {
            switch (_context193.prev = _context193.next) {
              case 0:
                return _context193.abrupt("return", _this.doFetch("".concat(_this.getJobsRoute(), "/").concat(id, "/cancel"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context193.stop();
            }
          }
        }, _callee193, this);
      }));

      return function (_x246) {
        return _ref196.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getLogs",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee194() {
      var page,
          perPage,
          _args194 = arguments;
      return regeneratorRuntime.wrap(function _callee194$(_context194) {
        while (1) {
          switch (_context194.prev = _context194.next) {
            case 0:
              page = _args194.length > 0 && _args194[0] !== undefined ? _args194[0] : 0;
              perPage = _args194.length > 1 && _args194[1] !== undefined ? _args194[1] : LOGS_PER_PAGE_DEFAULT;
              return _context194.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/logs").concat((0, _helpers.buildQueryString)({
                page: page,
                logs_per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context194.stop();
          }
        }
      }, _callee194, this);
    })));

    _defineProperty(this, "getAudits",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee195() {
      var page,
          perPage,
          _args195 = arguments;
      return regeneratorRuntime.wrap(function _callee195$(_context195) {
        while (1) {
          switch (_context195.prev = _context195.next) {
            case 0:
              page = _args195.length > 0 && _args195[0] !== undefined ? _args195[0] : 0;
              perPage = _args195.length > 1 && _args195[1] !== undefined ? _args195[1] : PER_PAGE_DEFAULT;
              return _context195.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/audits").concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context195.stop();
          }
        }
      }, _callee195, this);
    })));

    _defineProperty(this, "getConfig",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee196() {
      return regeneratorRuntime.wrap(function _callee196$(_context196) {
        while (1) {
          switch (_context196.prev = _context196.next) {
            case 0:
              return _context196.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/config"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context196.stop();
          }
        }
      }, _callee196, this);
    })));

    _defineProperty(this, "updateConfig",
    /*#__PURE__*/
    function () {
      var _ref200 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee197(config) {
        return regeneratorRuntime.wrap(function _callee197$(_context197) {
          while (1) {
            switch (_context197.prev = _context197.next) {
              case 0:
                return _context197.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/config"), {
                  method: 'put',
                  body: JSON.stringify(config)
                }));

              case 1:
              case "end":
                return _context197.stop();
            }
          }
        }, _callee197, this);
      }));

      return function (_x247) {
        return _ref200.apply(this, arguments);
      };
    }());

    _defineProperty(this, "reloadConfig",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee198() {
      return regeneratorRuntime.wrap(function _callee198$(_context198) {
        while (1) {
          switch (_context198.prev = _context198.next) {
            case 0:
              return _context198.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/config/reload"), {
                method: 'post'
              }));

            case 1:
            case "end":
              return _context198.stop();
          }
        }
      }, _callee198, this);
    })));

    _defineProperty(this, "getEnvironmentConfig",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee199() {
      return regeneratorRuntime.wrap(function _callee199$(_context199) {
        while (1) {
          switch (_context199.prev = _context199.next) {
            case 0:
              return _context199.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/config/environment"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context199.stop();
          }
        }
      }, _callee199, this);
    })));

    _defineProperty(this, "testEmail",
    /*#__PURE__*/
    function () {
      var _ref203 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee200(config) {
        return regeneratorRuntime.wrap(function _callee200$(_context200) {
          while (1) {
            switch (_context200.prev = _context200.next) {
              case 0:
                return _context200.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/email/test"), {
                  method: 'post',
                  body: JSON.stringify(config)
                }));

              case 1:
              case "end":
                return _context200.stop();
            }
          }
        }, _callee200, this);
      }));

      return function (_x248) {
        return _ref203.apply(this, arguments);
      };
    }());

    _defineProperty(this, "testS3Connection",
    /*#__PURE__*/
    function () {
      var _ref204 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee201(config) {
        return regeneratorRuntime.wrap(function _callee201$(_context201) {
          while (1) {
            switch (_context201.prev = _context201.next) {
              case 0:
                return _context201.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/file/s3_test"), {
                  method: 'post',
                  body: JSON.stringify(config)
                }));

              case 1:
              case "end":
                return _context201.stop();
            }
          }
        }, _callee201, this);
      }));

      return function (_x249) {
        return _ref204.apply(this, arguments);
      };
    }());

    _defineProperty(this, "invalidateCaches",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee202() {
      return regeneratorRuntime.wrap(function _callee202$(_context202) {
        while (1) {
          switch (_context202.prev = _context202.next) {
            case 0:
              return _context202.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/caches/invalidate"), {
                method: 'post'
              }));

            case 1:
            case "end":
              return _context202.stop();
          }
        }
      }, _callee202, this);
    })));

    _defineProperty(this, "recycleDatabase",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee203() {
      return regeneratorRuntime.wrap(function _callee203$(_context203) {
        while (1) {
          switch (_context203.prev = _context203.next) {
            case 0:
              return _context203.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/database/recycle"), {
                method: 'post'
              }));

            case 1:
            case "end":
              return _context203.stop();
          }
        }
      }, _callee203, this);
    })));

    _defineProperty(this, "createComplianceReport",
    /*#__PURE__*/
    function () {
      var _ref207 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee204(job) {
        return regeneratorRuntime.wrap(function _callee204$(_context204) {
          while (1) {
            switch (_context204.prev = _context204.next) {
              case 0:
                return _context204.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/compliance/reports"), {
                  method: 'post',
                  body: JSON.stringify(job)
                }));

              case 1:
              case "end":
                return _context204.stop();
            }
          }
        }, _callee204, this);
      }));

      return function (_x250) {
        return _ref207.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getComplianceReport",
    /*#__PURE__*/
    function () {
      var _ref208 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee205(reportId) {
        return regeneratorRuntime.wrap(function _callee205$(_context205) {
          while (1) {
            switch (_context205.prev = _context205.next) {
              case 0:
                return _context205.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/compliance/reports/").concat(reportId), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context205.stop();
            }
          }
        }, _callee205, this);
      }));

      return function (_x251) {
        return _ref208.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getComplianceReports",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee206() {
      var page,
          perPage,
          _args206 = arguments;
      return regeneratorRuntime.wrap(function _callee206$(_context206) {
        while (1) {
          switch (_context206.prev = _context206.next) {
            case 0:
              page = _args206.length > 0 && _args206[0] !== undefined ? _args206[0] : 0;
              perPage = _args206.length > 1 && _args206[1] !== undefined ? _args206[1] : PER_PAGE_DEFAULT;
              return _context206.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/compliance/reports").concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context206.stop();
          }
        }
      }, _callee206, this);
    })));

    _defineProperty(this, "uploadBrandImage",
    /*#__PURE__*/
    function () {
      var _ref210 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee207(imageData) {
        var formData, request;
        return regeneratorRuntime.wrap(function _callee207$(_context207) {
          while (1) {
            switch (_context207.prev = _context207.next) {
              case 0:
                formData = new FormData();
                formData.append('image', imageData);
                request = {
                  method: 'post',
                  body: formData
                };

                if (formData.getBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData.getBoundary())
                  };
                }

                return _context207.abrupt("return", _this.doFetch("".concat(_this.getBrandRoute(), "/image"), request));

              case 5:
              case "end":
                return _context207.stop();
            }
          }
        }, _callee207, this);
      }));

      return function (_x252) {
        return _ref210.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteBrandImage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee208() {
      return regeneratorRuntime.wrap(function _callee208$(_context208) {
        while (1) {
          switch (_context208.prev = _context208.next) {
            case 0:
              return _context208.abrupt("return", _this.doFetch("".concat(_this.getBrandRoute(), "/image"), {
                method: 'delete'
              }));

            case 1:
            case "end":
              return _context208.stop();
          }
        }
      }, _callee208, this);
    })));

    _defineProperty(this, "getClusterStatus",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee209() {
      return regeneratorRuntime.wrap(function _callee209$(_context209) {
        while (1) {
          switch (_context209.prev = _context209.next) {
            case 0:
              return _context209.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/cluster/status"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context209.stop();
          }
        }
      }, _callee209, this);
    })));

    _defineProperty(this, "testLdap",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee210() {
      return regeneratorRuntime.wrap(function _callee210$(_context210) {
        while (1) {
          switch (_context210.prev = _context210.next) {
            case 0:
              return _context210.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/ldap/test"), {
                method: 'post'
              }));

            case 1:
            case "end":
              return _context210.stop();
          }
        }
      }, _callee210, this);
    })));

    _defineProperty(this, "syncLdap",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee211() {
      return regeneratorRuntime.wrap(function _callee211$(_context211) {
        while (1) {
          switch (_context211.prev = _context211.next) {
            case 0:
              return _context211.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/ldap/sync"), {
                method: 'post'
              }));

            case 1:
            case "end":
              return _context211.stop();
          }
        }
      }, _callee211, this);
    })));

    _defineProperty(this, "getLdapGroups",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee212() {
      var page,
          perPage,
          _args212 = arguments;
      return regeneratorRuntime.wrap(function _callee212$(_context212) {
        while (1) {
          switch (_context212.prev = _context212.next) {
            case 0:
              page = _args212.length > 0 && _args212[0] !== undefined ? _args212[0] : 0;
              perPage = _args212.length > 1 && _args212[1] !== undefined ? _args212[1] : PER_PAGE_DEFAULT;
              return _context212.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/ldap/groups").concat((0, _helpers.buildQueryString)({
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context212.stop();
          }
        }
      }, _callee212, this);
    })));

    _defineProperty(this, "linkLdapGroup",
    /*#__PURE__*/
    function () {
      var _ref216 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee213(key) {
        return regeneratorRuntime.wrap(function _callee213$(_context213) {
          while (1) {
            switch (_context213.prev = _context213.next) {
              case 0:
                return _context213.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/ldap/groups/").concat(encodeURI(key), "/link"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context213.stop();
            }
          }
        }, _callee213, this);
      }));

      return function (_x253) {
        return _ref216.apply(this, arguments);
      };
    }());

    _defineProperty(this, "unlinkLdapGroup",
    /*#__PURE__*/
    function () {
      var _ref217 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee214(key) {
        return regeneratorRuntime.wrap(function _callee214$(_context214) {
          while (1) {
            switch (_context214.prev = _context214.next) {
              case 0:
                return _context214.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/ldap/groups/").concat(encodeURI(key), "/link"), {
                  method: 'delete'
                }));

              case 1:
              case "end":
                return _context214.stop();
            }
          }
        }, _callee214, this);
      }));

      return function (_x254) {
        return _ref217.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getSamlCertificateStatus",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee215() {
      return regeneratorRuntime.wrap(function _callee215$(_context215) {
        while (1) {
          switch (_context215.prev = _context215.next) {
            case 0:
              return _context215.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/saml/certificate/status"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context215.stop();
          }
        }
      }, _callee215, this);
    })));

    _defineProperty(this, "uploadPublicSamlCertificate",
    /*#__PURE__*/
    function () {
      var _ref219 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee216(fileData) {
        var formData;
        return regeneratorRuntime.wrap(function _callee216$(_context216) {
          while (1) {
            switch (_context216.prev = _context216.next) {
              case 0:
                formData = new FormData();
                formData.append('certificate', fileData);
                return _context216.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/saml/certificate/public"), {
                  method: 'post',
                  body: formData
                }));

              case 3:
              case "end":
                return _context216.stop();
            }
          }
        }, _callee216, this);
      }));

      return function (_x255) {
        return _ref219.apply(this, arguments);
      };
    }());

    _defineProperty(this, "uploadPrivateSamlCertificate",
    /*#__PURE__*/
    function () {
      var _ref220 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee217(fileData) {
        var formData;
        return regeneratorRuntime.wrap(function _callee217$(_context217) {
          while (1) {
            switch (_context217.prev = _context217.next) {
              case 0:
                formData = new FormData();
                formData.append('certificate', fileData);
                return _context217.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/saml/certificate/private"), {
                  method: 'post',
                  body: formData
                }));

              case 3:
              case "end":
                return _context217.stop();
            }
          }
        }, _callee217, this);
      }));

      return function (_x256) {
        return _ref220.apply(this, arguments);
      };
    }());

    _defineProperty(this, "uploadIdpSamlCertificate",
    /*#__PURE__*/
    function () {
      var _ref221 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee218(fileData) {
        var formData;
        return regeneratorRuntime.wrap(function _callee218$(_context218) {
          while (1) {
            switch (_context218.prev = _context218.next) {
              case 0:
                formData = new FormData();
                formData.append('certificate', fileData);
                return _context218.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/saml/certificate/idp"), {
                  method: 'post',
                  body: formData
                }));

              case 3:
              case "end":
                return _context218.stop();
            }
          }
        }, _callee218, this);
      }));

      return function (_x257) {
        return _ref221.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deletePublicSamlCertificate",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee219() {
      return regeneratorRuntime.wrap(function _callee219$(_context219) {
        while (1) {
          switch (_context219.prev = _context219.next) {
            case 0:
              return _context219.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/saml/certificate/public"), {
                method: 'delete'
              }));

            case 1:
            case "end":
              return _context219.stop();
          }
        }
      }, _callee219, this);
    })));

    _defineProperty(this, "deletePrivateSamlCertificate",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee220() {
      return regeneratorRuntime.wrap(function _callee220$(_context220) {
        while (1) {
          switch (_context220.prev = _context220.next) {
            case 0:
              return _context220.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/saml/certificate/private"), {
                method: 'delete'
              }));

            case 1:
            case "end":
              return _context220.stop();
          }
        }
      }, _callee220, this);
    })));

    _defineProperty(this, "deleteIdpSamlCertificate",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee221() {
      return regeneratorRuntime.wrap(function _callee221$(_context221) {
        while (1) {
          switch (_context221.prev = _context221.next) {
            case 0:
              return _context221.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/saml/certificate/idp"), {
                method: 'delete'
              }));

            case 1:
            case "end":
              return _context221.stop();
          }
        }
      }, _callee221, this);
    })));

    _defineProperty(this, "testElasticsearch",
    /*#__PURE__*/
    function () {
      var _ref225 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee222(config) {
        return regeneratorRuntime.wrap(function _callee222$(_context222) {
          while (1) {
            switch (_context222.prev = _context222.next) {
              case 0:
                return _context222.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/elasticsearch/test"), {
                  method: 'post',
                  body: JSON.stringify(config)
                }));

              case 1:
              case "end":
                return _context222.stop();
            }
          }
        }, _callee222, this);
      }));

      return function (_x258) {
        return _ref225.apply(this, arguments);
      };
    }());

    _defineProperty(this, "purgeElasticsearchIndexes",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee223() {
      return regeneratorRuntime.wrap(function _callee223$(_context223) {
        while (1) {
          switch (_context223.prev = _context223.next) {
            case 0:
              return _context223.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/elasticsearch/purge_indexes"), {
                method: 'post'
              }));

            case 1:
            case "end":
              return _context223.stop();
          }
        }
      }, _callee223, this);
    })));

    _defineProperty(this, "uploadLicense",
    /*#__PURE__*/
    function () {
      var _ref227 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee224(fileData) {
        var formData, request;
        return regeneratorRuntime.wrap(function _callee224$(_context224) {
          while (1) {
            switch (_context224.prev = _context224.next) {
              case 0:
                _this.trackEvent('api', 'api_license_upload');

                formData = new FormData();
                formData.append('license', fileData);
                request = {
                  method: 'post',
                  body: formData
                };

                if (formData.getBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData.getBoundary())
                  };
                }

                return _context224.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/license"), request));

              case 6:
              case "end":
                return _context224.stop();
            }
          }
        }, _callee224, this);
      }));

      return function (_x259) {
        return _ref227.apply(this, arguments);
      };
    }());

    _defineProperty(this, "removeLicense",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee225() {
      return regeneratorRuntime.wrap(function _callee225$(_context225) {
        while (1) {
          switch (_context225.prev = _context225.next) {
            case 0:
              return _context225.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/license"), {
                method: 'delete'
              }));

            case 1:
            case "end":
              return _context225.stop();
          }
        }
      }, _callee225, this);
    })));

    _defineProperty(this, "getAnalytics",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee226() {
      var name,
          teamId,
          _args226 = arguments;
      return regeneratorRuntime.wrap(function _callee226$(_context226) {
        while (1) {
          switch (_context226.prev = _context226.next) {
            case 0:
              name = _args226.length > 0 && _args226[0] !== undefined ? _args226[0] : 'standard';
              teamId = _args226.length > 1 && _args226[1] !== undefined ? _args226[1] : '';
              return _context226.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/analytics/old").concat((0, _helpers.buildQueryString)({
                name: name,
                team_id: teamId
              })), {
                method: 'get'
              }));

            case 3:
            case "end":
              return _context226.stop();
          }
        }
      }, _callee226, this);
    })));

    _defineProperty(this, "getRole",
    /*#__PURE__*/
    function () {
      var _ref230 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee227(roleId) {
        return regeneratorRuntime.wrap(function _callee227$(_context227) {
          while (1) {
            switch (_context227.prev = _context227.next) {
              case 0:
                return _context227.abrupt("return", _this.doFetch("".concat(_this.getRolesRoute(), "/").concat(roleId), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context227.stop();
            }
          }
        }, _callee227, this);
      }));

      return function (_x260) {
        return _ref230.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getRoleByName",
    /*#__PURE__*/
    function () {
      var _ref231 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee228(roleName) {
        return regeneratorRuntime.wrap(function _callee228$(_context228) {
          while (1) {
            switch (_context228.prev = _context228.next) {
              case 0:
                return _context228.abrupt("return", _this.doFetch("".concat(_this.getRolesRoute(), "/name/").concat(roleName), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context228.stop();
            }
          }
        }, _callee228, this);
      }));

      return function (_x261) {
        return _ref231.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getRolesByNames",
    /*#__PURE__*/
    function () {
      var _ref232 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee229(rolesNames) {
        return regeneratorRuntime.wrap(function _callee229$(_context229) {
          while (1) {
            switch (_context229.prev = _context229.next) {
              case 0:
                return _context229.abrupt("return", _this.doFetch("".concat(_this.getRolesRoute(), "/names"), {
                  method: 'post',
                  body: JSON.stringify(rolesNames)
                }));

              case 1:
              case "end":
                return _context229.stop();
            }
          }
        }, _callee229, this);
      }));

      return function (_x262) {
        return _ref232.apply(this, arguments);
      };
    }());

    _defineProperty(this, "patchRole",
    /*#__PURE__*/
    function () {
      var _ref233 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee230(roleId, rolePatch) {
        return regeneratorRuntime.wrap(function _callee230$(_context230) {
          while (1) {
            switch (_context230.prev = _context230.next) {
              case 0:
                return _context230.abrupt("return", _this.doFetch("".concat(_this.getRolesRoute(), "/").concat(roleId, "/patch"), {
                  method: 'put',
                  body: JSON.stringify(rolePatch)
                }));

              case 1:
              case "end":
                return _context230.stop();
            }
          }
        }, _callee230, this);
      }));

      return function (_x263, _x264) {
        return _ref233.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getSchemes",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee231() {
      var scope,
          page,
          perPage,
          _args231 = arguments;
      return regeneratorRuntime.wrap(function _callee231$(_context231) {
        while (1) {
          switch (_context231.prev = _context231.next) {
            case 0:
              scope = _args231.length > 0 && _args231[0] !== undefined ? _args231[0] : '';
              page = _args231.length > 1 && _args231[1] !== undefined ? _args231[1] : 0;
              perPage = _args231.length > 2 && _args231[2] !== undefined ? _args231[2] : PER_PAGE_DEFAULT;
              return _context231.abrupt("return", _this.doFetch("".concat(_this.getSchemesRoute()).concat((0, _helpers.buildQueryString)({
                scope: scope,
                page: page,
                per_page: perPage
              })), {
                method: 'get'
              }));

            case 4:
            case "end":
              return _context231.stop();
          }
        }
      }, _callee231, this);
    })));

    _defineProperty(this, "createScheme",
    /*#__PURE__*/
    function () {
      var _ref235 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee232(scheme) {
        return regeneratorRuntime.wrap(function _callee232$(_context232) {
          while (1) {
            switch (_context232.prev = _context232.next) {
              case 0:
                _this.trackEvent('api', 'api_schemes_create');

                return _context232.abrupt("return", _this.doFetch("".concat(_this.getSchemesRoute()), {
                  method: 'post',
                  body: JSON.stringify(scheme)
                }));

              case 2:
              case "end":
                return _context232.stop();
            }
          }
        }, _callee232, this);
      }));

      return function (_x265) {
        return _ref235.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getScheme",
    /*#__PURE__*/
    function () {
      var _ref236 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee233(schemeId) {
        return regeneratorRuntime.wrap(function _callee233$(_context233) {
          while (1) {
            switch (_context233.prev = _context233.next) {
              case 0:
                return _context233.abrupt("return", _this.doFetch("".concat(_this.getSchemesRoute(), "/").concat(schemeId), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context233.stop();
            }
          }
        }, _callee233, this);
      }));

      return function (_x266) {
        return _ref236.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteScheme",
    /*#__PURE__*/
    function () {
      var _ref237 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee234(schemeId) {
        return regeneratorRuntime.wrap(function _callee234$(_context234) {
          while (1) {
            switch (_context234.prev = _context234.next) {
              case 0:
                _this.trackEvent('api', 'api_schemes_delete');

                return _context234.abrupt("return", _this.doFetch("".concat(_this.getSchemesRoute(), "/").concat(schemeId), {
                  method: 'delete'
                }));

              case 2:
              case "end":
                return _context234.stop();
            }
          }
        }, _callee234, this);
      }));

      return function (_x267) {
        return _ref237.apply(this, arguments);
      };
    }());

    _defineProperty(this, "patchScheme",
    /*#__PURE__*/
    function () {
      var _ref238 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee235(schemeId, schemePatch) {
        return regeneratorRuntime.wrap(function _callee235$(_context235) {
          while (1) {
            switch (_context235.prev = _context235.next) {
              case 0:
                _this.trackEvent('api', 'api_schemes_patch', {
                  scheme_id: schemeId
                });

                return _context235.abrupt("return", _this.doFetch("".concat(_this.getSchemesRoute(), "/").concat(schemeId, "/patch"), {
                  method: 'put',
                  body: JSON.stringify(schemePatch)
                }));

              case 2:
              case "end":
                return _context235.stop();
            }
          }
        }, _callee235, this);
      }));

      return function (_x268, _x269) {
        return _ref238.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getSchemeTeams",
    /*#__PURE__*/
    function () {
      var _ref239 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee236(schemeId) {
        var page,
            perPage,
            _args236 = arguments;
        return regeneratorRuntime.wrap(function _callee236$(_context236) {
          while (1) {
            switch (_context236.prev = _context236.next) {
              case 0:
                page = _args236.length > 1 && _args236[1] !== undefined ? _args236[1] : 0;
                perPage = _args236.length > 2 && _args236[2] !== undefined ? _args236[2] : PER_PAGE_DEFAULT;
                return _context236.abrupt("return", _this.doFetch("".concat(_this.getSchemesRoute(), "/").concat(schemeId, "/teams").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context236.stop();
            }
          }
        }, _callee236, this);
      }));

      return function (_x270) {
        return _ref239.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getSchemeChannels",
    /*#__PURE__*/
    function () {
      var _ref240 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee237(schemeId) {
        var page,
            perPage,
            _args237 = arguments;
        return regeneratorRuntime.wrap(function _callee237$(_context237) {
          while (1) {
            switch (_context237.prev = _context237.next) {
              case 0:
                page = _args237.length > 1 && _args237[1] !== undefined ? _args237[1] : 0;
                perPage = _args237.length > 2 && _args237[2] !== undefined ? _args237[2] : PER_PAGE_DEFAULT;
                return _context237.abrupt("return", _this.doFetch("".concat(_this.getSchemesRoute(), "/").concat(schemeId, "/channels").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context237.stop();
            }
          }
        }, _callee237, this);
      }));

      return function (_x271) {
        return _ref240.apply(this, arguments);
      };
    }());

    _defineProperty(this, "uploadPlugin",
    /*#__PURE__*/
    function () {
      var _ref241 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee238(fileData) {
        var force,
            formData,
            request,
            _args238 = arguments;
        return regeneratorRuntime.wrap(function _callee238$(_context238) {
          while (1) {
            switch (_context238.prev = _context238.next) {
              case 0:
                force = _args238.length > 1 && _args238[1] !== undefined ? _args238[1] : false;

                _this.trackEvent('api', 'api_plugin_upload');

                formData = new FormData();

                if (force) {
                  formData.append('force', 'true');
                }

                formData.append('plugin', fileData);
                request = {
                  method: 'post',
                  body: formData
                };

                if (formData.getBoundary) {
                  request.headers = {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData.getBoundary())
                  };
                }

                return _context238.abrupt("return", _this.doFetch(_this.getPluginsRoute(), request));

              case 8:
              case "end":
                return _context238.stop();
            }
          }
        }, _callee238, this);
      }));

      return function (_x272) {
        return _ref241.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getPlugins",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee239() {
      return regeneratorRuntime.wrap(function _callee239$(_context239) {
        while (1) {
          switch (_context239.prev = _context239.next) {
            case 0:
              return _context239.abrupt("return", _this.doFetch(_this.getPluginsRoute(), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context239.stop();
          }
        }
      }, _callee239, this);
    })));

    _defineProperty(this, "getPluginStatuses",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee240() {
      return regeneratorRuntime.wrap(function _callee240$(_context240) {
        while (1) {
          switch (_context240.prev = _context240.next) {
            case 0:
              return _context240.abrupt("return", _this.doFetch("".concat(_this.getPluginsRoute(), "/statuses"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context240.stop();
          }
        }
      }, _callee240, this);
    })));

    _defineProperty(this, "removePlugin",
    /*#__PURE__*/
    function () {
      var _ref244 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee241(pluginId) {
        return regeneratorRuntime.wrap(function _callee241$(_context241) {
          while (1) {
            switch (_context241.prev = _context241.next) {
              case 0:
                return _context241.abrupt("return", _this.doFetch(_this.getPluginRoute(pluginId), {
                  method: 'delete'
                }));

              case 1:
              case "end":
                return _context241.stop();
            }
          }
        }, _callee241, this);
      }));

      return function (_x273) {
        return _ref244.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getWebappPlugins",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee242() {
      return regeneratorRuntime.wrap(function _callee242$(_context242) {
        while (1) {
          switch (_context242.prev = _context242.next) {
            case 0:
              return _context242.abrupt("return", _this.doFetch("".concat(_this.getPluginsRoute(), "/webapp"), {
                method: 'get'
              }));

            case 1:
            case "end":
              return _context242.stop();
          }
        }
      }, _callee242, this);
    })));

    _defineProperty(this, "enablePlugin",
    /*#__PURE__*/
    function () {
      var _ref246 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee243(pluginId) {
        return regeneratorRuntime.wrap(function _callee243$(_context243) {
          while (1) {
            switch (_context243.prev = _context243.next) {
              case 0:
                return _context243.abrupt("return", _this.doFetch("".concat(_this.getPluginRoute(pluginId), "/enable"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context243.stop();
            }
          }
        }, _callee243, this);
      }));

      return function (_x274) {
        return _ref246.apply(this, arguments);
      };
    }());

    _defineProperty(this, "disablePlugin",
    /*#__PURE__*/
    function () {
      var _ref247 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee244(pluginId) {
        return regeneratorRuntime.wrap(function _callee244$(_context244) {
          while (1) {
            switch (_context244.prev = _context244.next) {
              case 0:
                return _context244.abrupt("return", _this.doFetch("".concat(_this.getPluginRoute(pluginId), "/disable"), {
                  method: 'post'
                }));

              case 1:
              case "end":
                return _context244.stop();
            }
          }
        }, _callee244, this);
      }));

      return function (_x275) {
        return _ref247.apply(this, arguments);
      };
    }());

    _defineProperty(this, "linkGroupSyncable",
    /*#__PURE__*/
    function () {
      var _ref248 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee245(groupID, syncableID, syncableType, patch) {
        return regeneratorRuntime.wrap(function _callee245$(_context245) {
          while (1) {
            switch (_context245.prev = _context245.next) {
              case 0:
                return _context245.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/groups/").concat(groupID, "/").concat(syncableType, "s/").concat(syncableID, "/link"), {
                  method: 'post',
                  body: JSON.stringify(patch)
                }));

              case 1:
              case "end":
                return _context245.stop();
            }
          }
        }, _callee245, this);
      }));

      return function (_x276, _x277, _x278, _x279) {
        return _ref248.apply(this, arguments);
      };
    }());

    _defineProperty(this, "unlinkGroupSyncable",
    /*#__PURE__*/
    function () {
      var _ref249 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee246(groupID, syncableID, syncableType) {
        return regeneratorRuntime.wrap(function _callee246$(_context246) {
          while (1) {
            switch (_context246.prev = _context246.next) {
              case 0:
                return _context246.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/groups/").concat(groupID, "/").concat(syncableType, "s/").concat(syncableID, "/link"), {
                  method: 'delete'
                }));

              case 1:
              case "end":
                return _context246.stop();
            }
          }
        }, _callee246, this);
      }));

      return function (_x280, _x281, _x282) {
        return _ref249.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getGroupSyncables",
    /*#__PURE__*/
    function () {
      var _ref250 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee247(groupID, syncableType) {
        return regeneratorRuntime.wrap(function _callee247$(_context247) {
          while (1) {
            switch (_context247.prev = _context247.next) {
              case 0:
                return _context247.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/groups/").concat(groupID, "/").concat(syncableType, "s"), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context247.stop();
            }
          }
        }, _callee247, this);
      }));

      return function (_x283, _x284) {
        return _ref250.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getGroupMembers",
    /*#__PURE__*/
    function () {
      var _ref251 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee248(groupID) {
        var page,
            perPage,
            _args248 = arguments;
        return regeneratorRuntime.wrap(function _callee248$(_context248) {
          while (1) {
            switch (_context248.prev = _context248.next) {
              case 0:
                page = _args248.length > 1 && _args248[1] !== undefined ? _args248[1] : 0;
                perPage = _args248.length > 2 && _args248[2] !== undefined ? _args248[2] : PER_PAGE_DEFAULT;
                return _context248.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/groups/").concat(groupID, "/members").concat((0, _helpers.buildQueryString)({
                  page: page,
                  per_page: perPage
                })), {
                  method: 'get'
                }));

              case 3:
              case "end":
                return _context248.stop();
            }
          }
        }, _callee248, this);
      }));

      return function (_x285) {
        return _ref251.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getGroup",
    /*#__PURE__*/
    function () {
      var _ref252 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee249(groupID) {
        return regeneratorRuntime.wrap(function _callee249$(_context249) {
          while (1) {
            switch (_context249.prev = _context249.next) {
              case 0:
                return _context249.abrupt("return", _this.doFetch("".concat(_this.getBaseRoute(), "/groups/").concat(groupID), {
                  method: 'get'
                }));

              case 1:
              case "end":
                return _context249.stop();
            }
          }
        }, _callee249, this);
      }));

      return function (_x286) {
        return _ref252.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getRedirectLocation",
    /*#__PURE__*/
    function () {
      var _ref253 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee250(urlParam) {
        var url;
        return regeneratorRuntime.wrap(function _callee250$(_context250) {
          while (1) {
            switch (_context250.prev = _context250.next) {
              case 0:
                if (urlParam.length) {
                  _context250.next = 2;
                  break;
                }

                return _context250.abrupt("return", Promise.resolve());

              case 2:
                url = "".concat(_this.getRedirectLocationRoute()).concat((0, _helpers.buildQueryString)({
                  url: urlParam
                }));
                return _context250.abrupt("return", _this.doFetch(url, {
                  method: 'get'
                }));

              case 4:
              case "end":
                return _context250.stop();
            }
          }
        }, _callee250, this);
      }));

      return function (_x287) {
        return _ref253.apply(this, arguments);
      };
    }());

    _defineProperty(this, "doFetch",
    /*#__PURE__*/
    function () {
      var _ref254 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee251(url, options) {
        var _ref255, data;

        return regeneratorRuntime.wrap(function _callee251$(_context251) {
          while (1) {
            switch (_context251.prev = _context251.next) {
              case 0:
                _context251.next = 2;
                return _this.doFetchWithResponse(url, options);

              case 2:
                _ref255 = _context251.sent;
                data = _ref255.data;
                return _context251.abrupt("return", data);

              case 5:
              case "end":
                return _context251.stop();
            }
          }
        }, _callee251, this);
      }));

      return function (_x288, _x289) {
        return _ref254.apply(this, arguments);
      };
    }());

    _defineProperty(this, "doFetchWithResponse",
    /*#__PURE__*/
    function () {
      var _ref256 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee252(url, options) {
        var response, headers, data, serverVersion, clusterId, msg;
        return regeneratorRuntime.wrap(function _callee252$(_context252) {
          while (1) {
            switch (_context252.prev = _context252.next) {
              case 0:
                if (_this.online) {
                  _context252.next = 2;
                  break;
                }

                throw new ClientError(_this.getUrl(), {
                  message: 'no internet connection',
                  url: url
                });

              case 2:
                _context252.next = 4;
                return (0, _fetch_etag.default)(url, _this.getOptions(options));

              case 4:
                response = _context252.sent;
                headers = parseAndMergeNestedHeaders(response.headers);
                _context252.prev = 6;
                _context252.next = 9;
                return response.json();

              case 9:
                data = _context252.sent;
                _context252.next = 15;
                break;

              case 12:
                _context252.prev = 12;
                _context252.t0 = _context252["catch"](6);
                throw new ClientError(_this.getUrl(), {
                  message: 'Received invalid response from the server.',
                  intl: {
                    id: 'mobile.request.invalid_response',
                    defaultMessage: 'Received invalid response from the server.'
                  },
                  url: url
                });

              case 15:
                if (headers.has(HEADER_X_VERSION_ID) && !headers.get('Cache-Control')) {
                  serverVersion = headers.get(HEADER_X_VERSION_ID);

                  if (serverVersion && _this.serverVersion !== serverVersion) {
                    _this.serverVersion = serverVersion;
                  }
                }

                if (headers.has(HEADER_X_CLUSTER_ID)) {
                  clusterId = headers.get(HEADER_X_CLUSTER_ID);

                  if (clusterId && _this.clusterId !== clusterId) {
                    _this.clusterId = clusterId;
                  }
                }

                if (!response.ok) {
                  _context252.next = 19;
                  break;
                }

                return _context252.abrupt("return", {
                  response: response,
                  headers: headers,
                  data: data
                });

              case 19:
                msg = data.message || '';

                if (_this.logToConsole) {
                  console.error(msg); // eslint-disable-line no-console
                }

                throw new ClientError(_this.getUrl(), {
                  message: msg,
                  server_error_id: data.id,
                  status_code: data.status_code,
                  url: url
                });

              case 22:
              case "end":
                return _context252.stop();
            }
          }
        }, _callee252, this, [[6, 12]]);
      }));

      return function (_x290, _x291) {
        return _ref256.apply(this, arguments);
      };
    }());

    this.logToConsole = false;
    this.serverVersion = '';
    this.clusterId = '';
    this.token = '';
    this.url = '';
    this.urlVersion = '/api/v4';
    this.userAgent = null;
    this.enableLogging = false;
    this.defaultHeaders = {};
    this.userId = '';
    this.diagnosticId = '';
    this.includeCookies = true;
    this.online = true;
    this.translations = {
      connectionError: 'There appears to be a problem with your internet connection.',
      unknownError: 'We received an unexpected status code from the server.'
    };
  }

  _createClass(Client4, [{
    key: "getUrl",
    value: function getUrl() {
      return this.url;
    }
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      this.url = url;
    }
  }, {
    key: "setOnline",
    value: function setOnline(online) {
      this.online = online;
    }
  }, {
    key: "setUserAgent",
    value: function setUserAgent(userAgent) {
      this.userAgent = userAgent;
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return this.token;
    }
  }, {
    key: "setToken",
    value: function setToken(token) {
      this.token = token;
    }
  }, {
    key: "setAcceptLanguage",
    value: function setAcceptLanguage(locale) {
      this.defaultHeaders['Accept-Language'] = locale;
    }
  }, {
    key: "setEnableLogging",
    value: function setEnableLogging(enable) {
      this.enableLogging = enable;
    }
  }, {
    key: "setIncludeCookies",
    value: function setIncludeCookies(include) {
      this.includeCookies = include;
    }
  }, {
    key: "setUserId",
    value: function setUserId(userId) {
      this.userId = userId;
    }
  }, {
    key: "setDiagnosticId",
    value: function setDiagnosticId(diagnosticId) {
      this.diagnosticId = diagnosticId;
    }
  }, {
    key: "getServerVersion",
    value: function getServerVersion() {
      return this.serverVersion;
    }
  }, {
    key: "getUrlVersion",
    value: function getUrlVersion() {
      return this.urlVersion;
    }
  }, {
    key: "getBaseRoute",
    value: function getBaseRoute() {
      return "".concat(this.url).concat(this.urlVersion);
    }
  }, {
    key: "getUsersRoute",
    value: function getUsersRoute() {
      return "".concat(this.getBaseRoute(), "/users");
    }
  }, {
    key: "getUserRoute",
    value: function getUserRoute(userId) {
      return "".concat(this.getUsersRoute(), "/").concat(userId);
    }
  }, {
    key: "getTeamsRoute",
    value: function getTeamsRoute() {
      return "".concat(this.getBaseRoute(), "/teams");
    }
  }, {
    key: "getTeamRoute",
    value: function getTeamRoute(teamId) {
      return "".concat(this.getTeamsRoute(), "/").concat(teamId);
    }
  }, {
    key: "getTeamSchemeRoute",
    value: function getTeamSchemeRoute(teamId) {
      return "".concat(this.getTeamRoute(teamId), "/scheme");
    }
  }, {
    key: "getTeamNameRoute",
    value: function getTeamNameRoute(teamName) {
      return "".concat(this.getTeamsRoute(), "/name/").concat(teamName);
    }
  }, {
    key: "getTeamMembersRoute",
    value: function getTeamMembersRoute(teamId) {
      return "".concat(this.getTeamRoute(teamId), "/members");
    }
  }, {
    key: "getTeamMemberRoute",
    value: function getTeamMemberRoute(teamId, userId) {
      return "".concat(this.getTeamMembersRoute(teamId), "/").concat(userId);
    }
  }, {
    key: "getChannelsRoute",
    value: function getChannelsRoute() {
      return "".concat(this.getBaseRoute(), "/channels");
    }
  }, {
    key: "getChannelRoute",
    value: function getChannelRoute(channelId) {
      return "".concat(this.getChannelsRoute(), "/").concat(channelId);
    }
  }, {
    key: "getChannelMembersRoute",
    value: function getChannelMembersRoute(channelId) {
      return "".concat(this.getChannelRoute(channelId), "/members");
    }
  }, {
    key: "getChannelMemberRoute",
    value: function getChannelMemberRoute(channelId, userId) {
      return "".concat(this.getChannelMembersRoute(channelId), "/").concat(userId);
    }
  }, {
    key: "getChannelSchemeRoute",
    value: function getChannelSchemeRoute(channelId) {
      return "".concat(this.getChannelRoute(channelId), "/scheme");
    }
  }, {
    key: "getPostsRoute",
    value: function getPostsRoute() {
      return "".concat(this.getBaseRoute(), "/posts");
    }
  }, {
    key: "getPostRoute",
    value: function getPostRoute(postId) {
      return "".concat(this.getPostsRoute(), "/").concat(postId);
    }
  }, {
    key: "getReactionsRoute",
    value: function getReactionsRoute() {
      return "".concat(this.getBaseRoute(), "/reactions");
    }
  }, {
    key: "getCommandsRoute",
    value: function getCommandsRoute() {
      return "".concat(this.getBaseRoute(), "/commands");
    }
  }, {
    key: "getFilesRoute",
    value: function getFilesRoute() {
      return "".concat(this.getBaseRoute(), "/files");
    }
  }, {
    key: "getFileRoute",
    value: function getFileRoute(fileId) {
      return "".concat(this.getFilesRoute(), "/").concat(fileId);
    }
  }, {
    key: "getPreferencesRoute",
    value: function getPreferencesRoute(userId) {
      return "".concat(this.getUserRoute(userId), "/preferences");
    }
  }, {
    key: "getIncomingHooksRoute",
    value: function getIncomingHooksRoute() {
      return "".concat(this.getBaseRoute(), "/hooks/incoming");
    }
  }, {
    key: "getIncomingHookRoute",
    value: function getIncomingHookRoute(hookId) {
      return "".concat(this.getBaseRoute(), "/hooks/incoming/").concat(hookId);
    }
  }, {
    key: "getOutgoingHooksRoute",
    value: function getOutgoingHooksRoute() {
      return "".concat(this.getBaseRoute(), "/hooks/outgoing");
    }
  }, {
    key: "getOutgoingHookRoute",
    value: function getOutgoingHookRoute(hookId) {
      return "".concat(this.getBaseRoute(), "/hooks/outgoing/").concat(hookId);
    }
  }, {
    key: "getOAuthRoute",
    value: function getOAuthRoute() {
      return "".concat(this.url, "/oauth");
    }
  }, {
    key: "getOAuthAppsRoute",
    value: function getOAuthAppsRoute() {
      return "".concat(this.getBaseRoute(), "/oauth/apps");
    }
  }, {
    key: "getOAuthAppRoute",
    value: function getOAuthAppRoute(appId) {
      return "".concat(this.getOAuthAppsRoute(), "/").concat(appId);
    }
  }, {
    key: "getEmojisRoute",
    value: function getEmojisRoute() {
      return "".concat(this.getBaseRoute(), "/emoji");
    }
  }, {
    key: "getEmojiRoute",
    value: function getEmojiRoute(emojiId) {
      return "".concat(this.getEmojisRoute(), "/").concat(emojiId);
    }
  }, {
    key: "getBrandRoute",
    value: function getBrandRoute() {
      return "".concat(this.getBaseRoute(), "/brand");
    }
  }, {
    key: "getBrandImageUrl",
    value: function getBrandImageUrl(timestamp) {
      return "".concat(this.getBrandRoute(), "/image?t=").concat(timestamp);
    }
  }, {
    key: "getDataRetentionRoute",
    value: function getDataRetentionRoute() {
      return "".concat(this.getBaseRoute(), "/data_retention");
    }
  }, {
    key: "getJobsRoute",
    value: function getJobsRoute() {
      return "".concat(this.getBaseRoute(), "/jobs");
    }
  }, {
    key: "getPluginsRoute",
    value: function getPluginsRoute() {
      return "".concat(this.getBaseRoute(), "/plugins");
    }
  }, {
    key: "getPluginRoute",
    value: function getPluginRoute(pluginId) {
      return "".concat(this.getPluginsRoute(), "/").concat(pluginId);
    }
  }, {
    key: "getRolesRoute",
    value: function getRolesRoute() {
      return "".concat(this.getBaseRoute(), "/roles");
    }
  }, {
    key: "getTimezonesRoute",
    value: function getTimezonesRoute() {
      return "".concat(this.getBaseRoute(), "/system/timezones");
    }
  }, {
    key: "getSchemesRoute",
    value: function getSchemesRoute() {
      return "".concat(this.getBaseRoute(), "/schemes");
    }
  }, {
    key: "getRedirectLocationRoute",
    value: function getRedirectLocationRoute() {
      return "".concat(this.getBaseRoute(), "/redirect_location");
    }
  }, {
    key: "getOptions",
    value: function getOptions(options) {
      var newOptions = Object.assign({}, options);

      var headers = _objectSpread(_defineProperty({}, HEADER_REQUESTED_WITH, 'XMLHttpRequest'), this.defaultHeaders);

      if (this.token) {
        headers[HEADER_AUTH] = "".concat(HEADER_BEARER, " ").concat(this.token);
      }

      if (this.includeCookies) {
        newOptions.credentials = 'include';
      }

      if (this.userAgent) {
        headers[HEADER_USER_AGENT] = this.userAgent;
      }

      if (newOptions.headers) {
        Object.assign(headers, newOptions.headers);
      }

      return _objectSpread({}, newOptions, {
        headers: headers
      });
    } // User Routes

  }, {
    key: "getFileUrl",
    // Files Routes
    value: function getFileUrl(fileId, timestamp) {
      var url = "".concat(this.getFileRoute(fileId));

      if (timestamp) {
        url += "?".concat(timestamp);
      }

      return url;
    }
  }, {
    key: "getFileThumbnailUrl",
    value: function getFileThumbnailUrl(fileId, timestamp) {
      var url = "".concat(this.getFileRoute(fileId), "/thumbnail");

      if (timestamp) {
        url += "?".concat(timestamp);
      }

      return url;
    }
  }, {
    key: "getFilePreviewUrl",
    value: function getFilePreviewUrl(fileId, timestamp) {
      var url = "".concat(this.getFileRoute(fileId), "/preview");

      if (timestamp) {
        url += "?".concat(timestamp);
      }

      return url;
    }
  }, {
    key: "trackEvent",
    value: function trackEvent(category, event, props) {
      // Temporary change to allow only certain events to reduce data rate - see MM-13062
      if (!['api_posts_create', 'api_interactive_messages_button_clicked', 'api_interactive_messages_menu_selected', 'api_interactive_messages_dialog_submitted'].includes(event)) {
        return;
      }

      var properties = Object.assign({
        category: category,
        type: event,
        user_actual_id: this.userId
      }, props);
      var options = {
        context: {
          ip: '0.0.0.0'
        },
        page: {
          path: '',
          referrer: '',
          search: '',
          title: '',
          url: ''
        },
        anonymousId: '00000000000000000000000000'
      };

      if (global && global.window && global.window.analytics && global.window.analytics.initialized) {
        global.window.analytics.track('event', properties, options);
      } else if (global && global.analytics) {
        if (global.analytics_context) {
          options.context = global.analytics_context;
        }

        global.analytics.track(Object.assign({
          event: 'event',
          userId: this.diagnosticId
        }, {
          properties: properties
        }, options));
      }
    }
  }]);

  return Client4;
}();

exports.default = Client4;

function parseAndMergeNestedHeaders(originalHeaders) {
  var headers = new Map();
  var nestedHeaders = new Map();
  originalHeaders.forEach(function (val, key) {
    var capitalizedKey = key.replace(/\b[a-z]/g, function (l) {
      return l.toUpperCase();
    });
    var realVal = val;

    if (val && val.match(/\n\S+:\s\S+/)) {
      var nestedHeaderStrings = val.split('\n');
      realVal = nestedHeaderStrings.shift();
      var moreNestedHeaders = new Map(nestedHeaderStrings.map(function (h) {
        return h.split(/:\s/);
      }));
      nestedHeaders = new Map(_toConsumableArray(nestedHeaders).concat(_toConsumableArray(moreNestedHeaders)));
    }

    headers.set(capitalizedKey, realVal);
  });
  return new Map(_toConsumableArray(headers).concat(_toConsumableArray(nestedHeaders)));
}

var ClientError =
/*#__PURE__*/
function (_Error) {
  _inherits(ClientError, _Error);

  function ClientError(baseUrl, data) {
    var _this2;

    _classCallCheck(this, ClientError);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ClientError).call(this, data.message + ': ' + (0, _sentry.cleanUrlForLogging)(baseUrl, data.url)));
    _this2.message = data.message;
    _this2.url = data.url;
    _this2.intl = data.intl;
    _this2.server_error_id = data.server_error_id;
    _this2.status_code = data.status_code; // Ensure message is treated as a property of this class when object spreading. Without this,
    // copying the object by using `{...error}` would not include the message.

    Object.defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), 'message', {
      enumerable: true
    });
    return _this2;
  }

  return ClientError;
}(_wrapNativeSuper(Error));

exports.ClientError = ClientError;