"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPreferenceKey = getPreferenceKey;
exports.getPreferencesByCategory = getPreferencesByCategory;

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getPreferenceKey(category
/*: string*/
, name
/*: string*/
)
/*: string*/
{
  return "".concat(category, "--").concat(name);
}

function getPreferencesByCategory(myPreferences
/*: Object*/
, category
/*: string*/
)
/*: Map<string, any>*/
{
  var prefix = "".concat(category, "--");
  var preferences = new Map();
  Object.keys(myPreferences).forEach(function (key) {
    if (key.startsWith(prefix)) {
      preferences.set(key.substring(prefix.length), myPreferences[key]);
    }
  });
  return preferences;
}