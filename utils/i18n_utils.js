"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalizeFunction = setLocalizeFunction;
exports.localizeMessage = localizeMessage;
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
var localizeFunction = null;

function setLocalizeFunction(func
/*: Function*/
) {
  localizeFunction = func;
}

function localizeMessage(id
/*: string*/
, defaultMessage
/*: string*/
)
/*: string*/
{
  if (!localizeFunction) {
    return defaultMessage;
  }

  return localizeFunction(id, defaultMessage);
}