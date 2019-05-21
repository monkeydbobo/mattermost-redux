"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserTimezone = getUserTimezone;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
function getUserTimezone(state, id) {
  var profile = state.entities.users.profiles[id];

  if (profile && profile.timezone) {
    return _objectSpread({}, profile.timezone, {
      useAutomaticTimezone: profile.timezone.useAutomaticTimezone === 'true'
    });
  }

  return {
    useAutomaticTimezone: true,
    automaticTimezone: '',
    manualTimezone: ''
  };
}