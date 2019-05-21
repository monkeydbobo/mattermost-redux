"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = getConfig;
exports.getLicense = getLicense;
exports.getSupportedTimezones = getSupportedTimezones;
exports.getCurrentUrl = getCurrentUrl;
exports.hasNewPermissions = hasNewPermissions;
exports.getServerVersion = exports.getAutolinkedUrlSchemes = exports.canDownloadFilesOnMobile = exports.canUploadFilesOnMobile = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.match");

var _reselect = require("reselect");

var _helpers = require("../../utils/helpers");

var _constants = require("../../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getConfig(state
/*: GlobalState*/
)
/*: Object*/
{
  return state.entities.general.config;
}

function getLicense(state
/*: GlobalState*/
)
/*: Object*/
{
  return state.entities.general.license;
}

function getSupportedTimezones(state
/*: GlobalState*/
)
/*: Array<string>*/
{
  return state.entities.general.timezones;
}

function getCurrentUrl(state
/*: GlobalState*/
)
/*: string*/
{
  return state.entities.general.credentials.url;
}

function hasNewPermissions(state
/*: GlobalState*/
)
/*: boolean*/
{
  var version = state.entities.general.serverVersion; // FIXME This must be changed to 4, 9, 0 before we generate the 4.9.0 release

  return (0, _helpers.isMinimumServerVersion)(version, 4, 9, 0) || version.indexOf('dev') !== -1 && (0, _helpers.isMinimumServerVersion)(version, 4, 8, 0) || version.match(/^4.8.\d.\d\d\d\d.*$/) !== null && (0, _helpers.isMinimumServerVersion)(version, 4, 8, 0);
}

var canUploadFilesOnMobile
/*: (GlobalState) => boolean*/
= (0, _reselect.createSelector)(getConfig, getLicense, function (config
/*: Object*/
, license
/*: Object*/
)
/*: boolean*/
{
  // Defaults to true if either setting doesn't exist
  return config.EnableFileAttachments !== 'false' && (license.IsLicensed === 'false' || license.Compliance === 'false' || config.EnableMobileFileUpload !== 'false');
});
exports.canUploadFilesOnMobile = canUploadFilesOnMobile;
var canDownloadFilesOnMobile
/*: (GlobalState) => boolean*/
= (0, _reselect.createSelector)(getConfig, getLicense, function (config
/*: Object*/
, license
/*: Object*/
)
/*: boolean*/
{
  // Defaults to true if the setting doesn't exist
  return license.IsLicensed === 'false' || license.Compliance === 'false' || config.EnableMobileFileDownload !== 'false';
});
exports.canDownloadFilesOnMobile = canDownloadFilesOnMobile;
var getAutolinkedUrlSchemes
/*: (GlobalState) => string[]*/
= (0, _reselect.createSelector)(getConfig, function (config
/*: Object*/
)
/*: string[]*/
{
  if (!config.CustomUrlSchemes) {
    return _constants.General.DEFAULT_AUTOLINKED_URL_SCHEMES;
  }

  return _toConsumableArray(_constants.General.DEFAULT_AUTOLINKED_URL_SCHEMES).concat(_toConsumableArray(config.CustomUrlSchemes.split(',')));
});
exports.getAutolinkedUrlSchemes = getAutolinkedUrlSchemes;

var getServerVersion = function getServerVersion(state
/*: GlobalState*/
)
/*: string*/
{
  return state.entities.general.serverVersion;
};

exports.getServerVersion = getServerVersion;