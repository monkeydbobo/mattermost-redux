"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.assign");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
var MAX_WEBSOCKET_FAILS = 7;
var MIN_WEBSOCKET_RETRY_TIME = 3000; // 3 sec

var MAX_WEBSOCKET_RETRY_TIME = 300000; // 5 mins

var Socket;

var WebSocketClient =
/*#__PURE__*/
function () {
  function WebSocketClient() {
    _classCallCheck(this, WebSocketClient);

    this.conn = null;
    this.connectionUrl = null;
    this.token = null;
    this.sequence = 1;
    this.connectFailCount = 0;
    this.eventCallback = null;
    this.firstConnectCallback = null;
    this.reconnectCallback = null;
    this.errorCallback = null;
    this.closeCallback = null;
    this.connectingCallback = null;
    this.stop = false;
    this.platform = '';
  }

  _createClass(WebSocketClient, [{
    key: "initialize",
    value: function initialize(token, opts) {
      var _this = this;

      var defaults = {
        forceConnection: true,
        connectionUrl: this.connectionUrl,
        webSocketConnector: WebSocket
      };

      var _Object$assign = Object.assign({}, defaults, opts),
          connectionUrl = _Object$assign.connectionUrl,
          forceConnection = _Object$assign.forceConnection,
          webSocketConnector = _Object$assign.webSocketConnector,
          platform = _Object$assign.platform,
          additionalOptions = _objectWithoutProperties(_Object$assign, ["connectionUrl", "forceConnection", "webSocketConnector", "platform"]);

      if (platform) {
        this.platform = platform;
      }

      if (forceConnection) {
        this.stop = false;
      }

      return new Promise(function (resolve, reject) {
        if (_this.conn) {
          resolve();
          return;
        }

        if (connectionUrl == null) {
          console.log('websocket must have connection url'); //eslint-disable-line no-console

          reject(new Error('websocket must have connection url'));
          return;
        }

        if (_this.connectFailCount === 0) {
          console.log('websocket connecting to ' + connectionUrl); //eslint-disable-line no-console
        }

        Socket = webSocketConnector;

        if (_this.connectingCallback) {
          _this.connectingCallback();
        }

        var regex = /^(?:https?|wss?):(?:\/\/)?[^/]*/;
        var captured = regex.exec(connectionUrl);
        var origin;

        if (captured) {
          origin = captured[0];

          if (platform === 'android') {
            // this is done cause for android having the port 80 or 443 will fail the connection
            // the websocket will append them
            var split = origin.split(':');
            var port = split[2];

            if (port === '80' || port === '443') {
              origin = "".concat(split[0], ":").concat(split[1]);
            }
          }
        } else {
          // If we're unable to set the origin header, the websocket won't connect, but the URL is likely malformed anyway
          var errorMessage = 'websocket failed to parse origin from ' + connectionUrl;
          console.warn(errorMessage); // eslint-disable-line no-console

          reject(new Error(errorMessage));
          return;
        }

        _this.conn = new Socket(connectionUrl, [], _objectSpread({
          headers: {
            origin: origin
          }
        }, additionalOptions || {}));
        _this.connectionUrl = connectionUrl;
        _this.token = token;

        _this.conn.onopen = function () {
          if (token && platform !== 'android') {
            // we check for the platform as a workaround until we fix on the server that further authentications
            // are ignored
            _this.sendMessage('authentication_challenge', {
              token: token
            });
          }

          if (_this.connectFailCount > 0) {
            console.log('websocket re-established connection'); //eslint-disable-line no-console

            if (_this.reconnectCallback) {
              _this.reconnectCallback();
            }
          } else if (_this.firstConnectCallback) {
            _this.firstConnectCallback();
          }

          _this.connectFailCount = 0;
          resolve();
        };

        _this.conn.onclose = function () {
          _this.conn = null;
          _this.sequence = 1;

          if (_this.connectFailCount === 0) {
            console.log('websocket closed'); //eslint-disable-line no-console
          }

          _this.connectFailCount++;

          if (_this.closeCallback) {
            _this.closeCallback(_this.connectFailCount);
          }

          var retryTime = MIN_WEBSOCKET_RETRY_TIME; // If we've failed a bunch of connections then start backing off

          if (_this.connectFailCount > MAX_WEBSOCKET_FAILS) {
            retryTime = MIN_WEBSOCKET_RETRY_TIME * _this.connectFailCount;

            if (retryTime > MAX_WEBSOCKET_RETRY_TIME) {
              retryTime = MAX_WEBSOCKET_RETRY_TIME;
            }
          }

          if (_this.connectionTimeout) {
            clearTimeout(_this.connectionTimeout);
          }

          _this.connectionTimeout = setTimeout(function () {
            if (_this.stop) {
              clearTimeout(_this.connectionTimeout);
              return;
            }

            _this.initialize(token, opts);
          }, retryTime);
        };

        _this.conn.onerror = function (evt) {
          if (_this.connectFailCount <= 1) {
            console.log('websocket error'); //eslint-disable-line no-console

            console.log(evt); //eslint-disable-line no-console
          }

          if (_this.errorCallback) {
            _this.errorCallback(evt);
          }
        };

        _this.conn.onmessage = function (evt) {
          var msg = JSON.parse(evt.data);

          if (msg.seq_reply) {
            if (msg.error) {
              console.warn(msg); //eslint-disable-line no-console
            }
          } else if (_this.eventCallback) {
            _this.eventCallback(msg);
          }
        };
      });
    }
  }, {
    key: "setConnectingCallback",
    value: function setConnectingCallback(callback) {
      this.connectingCallback = callback;
    }
  }, {
    key: "setEventCallback",
    value: function setEventCallback(callback) {
      this.eventCallback = callback;
    }
  }, {
    key: "setFirstConnectCallback",
    value: function setFirstConnectCallback(callback) {
      this.firstConnectCallback = callback;
    }
  }, {
    key: "setReconnectCallback",
    value: function setReconnectCallback(callback) {
      this.reconnectCallback = callback;
    }
  }, {
    key: "setErrorCallback",
    value: function setErrorCallback(callback) {
      this.errorCallback = callback;
    }
  }, {
    key: "setCloseCallback",
    value: function setCloseCallback(callback) {
      this.closeCallback = callback;
    }
  }, {
    key: "close",
    value: function close() {
      var stop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.stop = stop;
      this.connectFailCount = 0;
      this.sequence = 1;

      if (this.conn && this.conn.readyState === Socket.OPEN) {
        this.conn.onclose = function () {}; //eslint-disable-line no-empty-function


        this.conn.close();
        this.conn = null;
        console.log('websocket closed'); //eslint-disable-line no-console
      }
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(action, data) {
      var msg = {
        action: action,
        seq: this.sequence++,
        data: data
      };

      if (this.conn && this.conn.readyState === Socket.OPEN) {
        this.conn.send(JSON.stringify(msg));
      } else if (!this.conn || this.conn.readyState === Socket.CLOSED) {
        this.conn = null;
        this.initialize(this.token, {
          platform: this.platform
        });
      }
    }
  }, {
    key: "userTyping",
    value: function userTyping(channelId, parentId) {
      this.sendMessage('user_typing', {
        channel_id: channelId,
        parent_id: parentId
      });
    }
  }, {
    key: "getStatuses",
    value: function getStatuses() {
      this.sendMessage('get_statuses', null);
    }
  }, {
    key: "getStatusesByIds",
    value: function getStatusesByIds(userIds) {
      this.sendMessage('get_statuses_by_ids', {
        user_ids: userIds
      });
    }
  }]);

  return WebSocketClient;
}();

var _default = new WebSocketClient();

exports.default = _default;