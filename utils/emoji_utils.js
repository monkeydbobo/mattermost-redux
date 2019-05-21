"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmojiImageUrl = getEmojiImageUrl;
exports.parseNeededCustomEmojisFromText = parseNeededCustomEmojisFromText;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _client = require("../client");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getEmojiImageUrl(emoji
/*: Emoji*/
)
/*: string*/
{
  if (emoji.id) {
    return _client.Client4.getEmojiRoute(emoji.id) + '/image';
  }

  var systemEmoji = ((emoji
  /*: any*/
  )
  /*: SystemEmoji*/
  );
  var filename = systemEmoji.filename || systemEmoji.aliases[0];
  return _client.Client4.getSystemEmojiImageUrl(filename);
}

function parseNeededCustomEmojisFromText(text
/*: string*/
, systemEmojis
/*: Map<string, SystemEmoji>*/
, customEmojisByName
/*: Map<string, CustomEmoji>*/
, nonExistentEmoji
/*: Set<string>*/
)
/*: Set<string>*/
{
  if (!text.includes(':')) {
    return new Set();
  }

  var pattern = /:([A-Za-z0-9_-]+):/gi;
  var customEmojis = new Set();
  var match;

  while ((match = pattern.exec(text)) !== null) {
    if (!match) {
      continue;
    }

    if (systemEmojis.has(match[1])) {
      // It's a system emoji, go the next match
      continue;
    }

    if (nonExistentEmoji.has(match[1])) {
      // We've previously confirmed this is not a custom emoji
      continue;
    }

    if (customEmojisByName.has(match[1])) {
      // We have the emoji, go to the next match
      continue;
    }

    customEmojis.add(match[1]);
  }

  return customEmojis;
}