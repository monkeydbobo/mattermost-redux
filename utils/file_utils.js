"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormattedFileSize = getFormattedFileSize;
exports.getFileType = getFileType;
exports.lookupMimeType = lookupMimeType;
exports.getFileUrl = getFileUrl;
exports.getFileDownloadUrl = getFileDownloadUrl;
exports.getFileThumbnailUrl = getFileThumbnailUrl;
exports.getFilePreviewUrl = getFilePreviewUrl;
exports.sortFileInfos = sortFileInfos;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.find");

var _constants = require("../constants");

var _client = require("../client");

var _mimeDb = _interopRequireDefault(require("mime-db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getFormattedFileSize(file
/*: FileInfo*/
)
/*: string*/
{
  var bytes = file.size;
  var fileSizes = [['TB', 1024 * 1024 * 1024 * 1024], ['GB', 1024 * 1024 * 1024], ['MB', 1024 * 1024], ['KB', 1024]];
  var size = fileSizes.find(function (unitAndMinBytes) {
    var minBytes = unitAndMinBytes[1];
    return bytes > minBytes;
  });

  if (size) {
    return "".concat(Math.floor(bytes / size[1]), " ").concat(size[0]);
  }

  return "".concat(bytes, " B");
}

function getFileType(file
/*: FileInfo*/
)
/*: string*/
{
  if (!file || !file.extension) {
    return 'other';
  }

  var fileExt = file.extension.toLowerCase();
  var fileTypes = ['image', 'code', 'pdf', 'video', 'audio', 'spreadsheet', 'word', 'presentation', 'patch'];
  return fileTypes.find(function (fileType) {
    var constForFileTypeExtList = "".concat(fileType, "_types").toUpperCase();
    var fileTypeExts = _constants.Files[constForFileTypeExtList];
    return fileTypeExts.indexOf(fileExt) > -1;
  }) || 'other';
}

var extToMime;

function buildExtToMime() {
  extToMime = {};
  Object.keys(_mimeDb.default).forEach(function (key) {
    var mime = _mimeDb.default[key];

    if (mime.extensions) {
      mime.extensions.forEach(function (ext) {
        extToMime[ext] = key;
      });
    }
  });
}

function lookupMimeType(filename
/*: string*/
)
/*: string*/
{
  if (!extToMime) {
    buildExtToMime();
  }

  var ext = filename.split('.').pop();
  return extToMime[ext] || 'application/octet-stream';
}

function getFileUrl(fileId
/*: string*/
)
/*: string*/
{
  return _client.Client4.getFileRoute(fileId);
}

function getFileDownloadUrl(fileId
/*: string*/
)
/*: string*/
{
  return "".concat(_client.Client4.getFileRoute(fileId), "?download=1");
}

function getFileThumbnailUrl(fileId
/*: string*/
)
/*: string*/
{
  return "".concat(_client.Client4.getFileRoute(fileId), "/thumbnail");
}

function getFilePreviewUrl(fileId
/*: string*/
)
/*: string*/
{
  return "".concat(_client.Client4.getFileRoute(fileId), "/preview");
}

function sortFileInfos()
/*: Array<FileInfo>*/
{
  var fileInfos
  /*: Array<FileInfo>*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var locale
  /*: string*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.DEFAULT_LOCALE;
  return fileInfos.sort(function (a, b) {
    if (a.create_at !== b.create_at) {
      return a.create_at - b.create_at;
    }

    return a.name.localeCompare(b.name, locale, {
      numeric: true
    });
  });
}