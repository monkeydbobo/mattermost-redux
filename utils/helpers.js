"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoizeResult = memoizeResult;
exports.generateId = generateId;
exports.isEmail = isEmail;
exports.buildQueryString = buildQueryString;
exports.isMinimumServerVersion = exports.createShallowSelector = exports.createIdsSelector = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.reflect.apply");

var _reselect = require("reselect");

var _shallowEquals = _interopRequireDefault(require("shallow-equals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function memoizeResult(func
/*: Function*/
)
/*: Function*/
{
  var lastArgs = null;
  var lastResult = null; // we reference arguments instead of spreading them for performance reasons

  return function shallowCompare() {
    if (!(0, _shallowEquals.default)(lastArgs, arguments)) {
      //eslint-disable-line prefer-rest-params
      // apply arguments instead of spreading for performance.
      var result = Reflect.apply(func, null, arguments); //eslint-disable-line prefer-rest-params

      if (!(0, _shallowEquals.default)(lastResult, result)) {
        lastResult = result;
      }
    }

    lastArgs = arguments; //eslint-disable-line prefer-rest-params

    return lastResult;
  };
} // Use this selector when you want a shallow comparison of the arguments and you want to memoize the result
// try and use this only when your selector returns an array of ids


var createIdsSelector = (0, _reselect.createSelectorCreator)(memoizeResult); // Use this selector when you want a shallow comparison of the arguments and you don't need to memoize the result

exports.createIdsSelector = createIdsSelector;
var createShallowSelector = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _shallowEquals.default); // isMinimumServerVersion will return true if currentVersion is equal to higher or than the
// the provided minimum version. A non-equal major version will ignore minor and dot
// versions, and a non-equal minor version will ignore dot version.
// currentVersion is a string, e.g '4.6.0'
// minMajorVersion, minMinorVersion, minDotVersion are integers

exports.createShallowSelector = createShallowSelector;

var isMinimumServerVersion = function isMinimumServerVersion(currentVersion
/*: string*/
)
/*: boolean*/
{
  var minMajorVersion
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var minMinorVersion
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var minDotVersion
  /*: number*/
  = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!currentVersion || typeof currentVersion !== 'string') {
    return false;
  }

  var split = currentVersion.split('.');
  var major = parseInt(split[0], 10);
  var minor = parseInt(split[1] || '0', 10);
  var dot = parseInt(split[2] || '0', 10);

  if (major > minMajorVersion) {
    return true;
  }

  if (major < minMajorVersion) {
    return false;
  } // Major version is equal, check minor


  if (minor > minMinorVersion) {
    return true;
  }

  if (minor < minMinorVersion) {
    return false;
  } // Minor version is equal, check dot


  if (dot > minDotVersion) {
    return true;
  }

  if (dot < minDotVersion) {
    return false;
  } // Dot version is equal


  return true;
}; // Generates a RFC-4122 version 4 compliant globally unique identifier.


exports.isMinimumServerVersion = isMinimumServerVersion;

function generateId()
/*: string*/
{
  // implementation taken from http://stackoverflow.com/a/2117523
  var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  id = id.replace(/[xy]/g, function (c) {
    var r = Math.floor(Math.random() * 16);
    var v;

    if (c === 'x') {
      v = r;
    } else {
      v = r & 0x3 | 0x8;
    }

    return v.toString(16);
  });
  return id;
}

function isEmail(email
/*: string*/
)
/*: boolean*/
{
  // writing a regex to match all valid email addresses is really, really hard. (see http://stackoverflow.com/a/201378)
  // this regex ensures:
  // - at least one character that is not a space, comma, or @ symbol
  // - followed by a single @ symbol
  // - followed by at least one character that is not a space, comma, or @ symbol
  // this prevents <Outlook Style> outlook.style@domain.com addresses and multiple comma-separated addresses from being accepted
  return /^[^ ,@]+@[^ ,@]+$/.test(email);
}

function buildQueryString(parameters
/*: {}*/
)
/*: string*/
{
  var keys = Object.keys(parameters);

  if (keys.length === 0) {
    return '';
  }

  var query = '?';

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    query += key + '=' + encodeURIComponent(parameters[key]);

    if (i < keys.length - 1) {
      query += '&';
    }
  }

  return query;
}