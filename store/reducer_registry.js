"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ReducerRegistry = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// Based on http://nicolasgallagher.com/redux-modules-and-code-splitting/
var ReducerRegistry = function ReducerRegistry() {
  var _this = this;

  _classCallCheck(this, ReducerRegistry);

  _defineProperty(this, "setReducers", function (reducers) {
    _this.reducers = reducers;
  });

  _defineProperty(this, "getReducers", function () {
    return _objectSpread({}, _this.reducers);
  });

  _defineProperty(this, "register", function (name, reducer) {
    _this.reducers = _objectSpread({}, _this.reducers, _defineProperty({}, name, reducer));

    if (_this.emitChange) {
      _this.emitChange(_this.getReducers());
    }
  });

  _defineProperty(this, "setChangeListener", function (listener) {
    _this.emitChange = listener;
  });

  this.emitChange = null;
  this.reducers = {};
};

exports.ReducerRegistry = ReducerRegistry;
var reducerRegistry = new ReducerRegistry();
var _default = reducerRegistry;
exports.default = _default;