"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function isFunction(obj
/*: any*/
)
/*: boolean*/
{
  return typeof obj === 'function';
}

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    _defineProperty(this, "listeners", void 0);

    this.listeners = new Map();
  }

  _createClass(EventEmitter, [{
    key: "addListener",
    value: function addListener(label
    /*: string*/
    , callback
    /*: Function*/
    )
    /*: void*/
    {
      if (!this.listeners.has(label)) {
        this.listeners.set(label, []);
      } // $FlowFixMe


      this.listeners.get(label).push(callback);
    }
  }, {
    key: "on",
    value: function on(label
    /*: string*/
    , callback
    /*: Function*/
    )
    /*: void*/
    {
      this.addListener(label, callback);
    }
  }, {
    key: "removeListener",
    value: function removeListener(label
    /*: string*/
    , callback
    /*: Function*/
    )
    /*: boolean*/
    {
      var listeners = this.listeners.get(label);
      var index;

      if (listeners && listeners.length) {
        index = listeners.reduce(function (i, listener, idx) {
          return isFunction(listener) && listener === callback ? idx : i;
        }, -1);

        if (index > -1) {
          listeners.splice(index, 1);
          this.listeners.set(label, listeners);
          return true;
        }
      }

      return false;
    }
  }, {
    key: "off",
    value: function off(label
    /*: string*/
    , callback
    /*: Function*/
    )
    /*: void*/
    {
      this.removeListener(label, callback);
    }
  }, {
    key: "emit",
    value: function emit(label
    /*: string*/
    )
    /*: boolean*/
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this.listeners.get(label);

      if (listeners && listeners.length) {
        listeners.forEach(function (listener) {
          listener.apply(void 0, args);
        });
        return true;
      }

      return false;
    }
  }]);

  return EventEmitter;
}();

var _default = new EventEmitter();

exports.default = _default;