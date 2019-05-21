"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomEmojis = getCustomEmojis;
exports.getCustomEmojiIdsSortedByName = exports.getCustomEmojisByName = exports.getCustomEmojisAsMap = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

var _reselect = require("reselect");

var _helpers = require("../../utils/helpers");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getCustomEmojis(state
/*: GlobalState*/
)
/*: IDMappedObjects<CustomEmoji>*/
{
  if (state.entities.general.config.EnableCustomEmoji !== 'true') {
    return {};
  }

  return state.entities.emojis.customEmoji;
}

var getCustomEmojisAsMap
/*: (state: GlobalState) => Map<string, CustomEmoji>*/
= (0, _reselect.createSelector)(getCustomEmojis, function (emojis) {
  var map = new Map();
  Object.keys(emojis).forEach(function (key
  /*: string*/
  ) {
    map.set(key, emojis[key]);
  });
  return map;
});
exports.getCustomEmojisAsMap = getCustomEmojisAsMap;
var getCustomEmojisByName
/*: (state: GlobalState) => Map<string, CustomEmoji>*/
= (0, _reselect.createSelector)(getCustomEmojis, function (emojis
/*: IDMappedObjects<CustomEmoji>*/
)
/*: Map<string, CustomEmoji>*/
{
  var map
  /*: Map<string, CustomEmoji>*/
  = new Map();
  Object.keys(emojis).forEach(function (key
  /*: string*/
  ) {
    map.set(emojis[key].name, emojis[key]);
  });
  return map;
});
exports.getCustomEmojisByName = getCustomEmojisByName;
var getCustomEmojiIdsSortedByName
/*: (state: GlobalState) => Array<string>*/
= (0, _helpers.createIdsSelector)(function (state) {
  return state.entities.emojis.customEmoji;
}, function (emojis
/*: IDMappedObjects<CustomEmoji>*/
)
/*: Array<string>*/
{
  return Object.keys(emojis).sort(function (a
  /*: string*/
  , b
  /*: string*/
  ) {
    return (
      /*: number*/
      emojis[a].name.localeCompare(emojis[b].name)
    );
  });
});
exports.getCustomEmojiIdsSortedByName = getCustomEmojiIdsSortedByName;