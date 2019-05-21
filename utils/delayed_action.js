"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
var DelayedAction = function DelayedAction(action
/*: Function*/
) {
  var _this = this;

  _classCallCheck(this, DelayedAction);

  _defineProperty(this, "action", void 0);

  _defineProperty(this, "timer", void 0);

  _defineProperty(this, "fire", function ()
  /*: void*/
  {
    _this.action();

    _this.timer = null;
  });

  _defineProperty(this, "fireAfter", function (timeout
  /*: number*/
  )
  /*: void*/
  {
    if (_this.timer !== null) {
      clearTimeout(_this.timer);
    }

    _this.timer = setTimeout(_this.fire, timeout);
  });

  _defineProperty(this, "cancel", function ()
  /*: void*/
  {
    if (_this.timer !== null) {
      clearTimeout(_this.timer);
    }
  });

  this.action = action;
  this.timer = null;
};

exports.default = DelayedAction;