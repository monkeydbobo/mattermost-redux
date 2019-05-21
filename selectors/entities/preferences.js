"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMyPreferences = getMyPreferences;
exports.get = get;
exports.getBool = getBool;
exports.getInt = getInt;
exports.makeGetCategory = makeGetCategory;
exports.getDirectShowPreferences = getDirectShowPreferences;
exports.getGroupShowPreferences = getGroupShowPreferences;
exports.getFavoritesPreferences = getFavoritesPreferences;
exports.makeGetStyleFromTheme = makeGetStyleFromTheme;
exports.getSidebarPreferences = exports.getTheme = exports.getTeammateNameDisplaySetting = exports.getVisibleGroupIds = exports.getVisibleTeammate = void 0;

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.string.starts-with");

var _reselect = require("reselect");

var _constants = require("../../constants");

var _general = require("./general");

var _teams = require("./teams");

var _helpers = require("../../utils/helpers");

var _preference_utils = require("../../utils/preference_utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getMyPreferences(state) {
  return state.entities.preferences.myPreferences;
}

function get(state, category, name) {
  var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var key = (0, _preference_utils.getPreferenceKey)(category, name);
  var prefs = getMyPreferences(state);

  if (!(key in prefs)) {
    return defaultValue;
  }

  return prefs[key].value;
}

function getBool(state, category, name) {
  var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var value = get(state, category, name, String(defaultValue));
  return value !== 'false';
}

function getInt(state, category, name) {
  var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var value = get(state, category, name, defaultValue);
  return parseInt(value, 10);
}

function makeGetCategory() {
  return (0, _reselect.createSelector)(getMyPreferences, function (state, category) {
    return category;
  }, function (preferences, category) {
    var prefix = category + '--';
    var prefsInCategory = [];

    for (var key in preferences) {
      if (key.startsWith(prefix)) {
        prefsInCategory.push(preferences[key]);
      }
    }

    return prefsInCategory;
  });
}

var getDirectShowCategory = makeGetCategory();

function getDirectShowPreferences(state) {
  return getDirectShowCategory(state, _constants.Preferences.CATEGORY_DIRECT_CHANNEL_SHOW);
}

var getGroupShowCategory = makeGetCategory();

function getGroupShowPreferences(state) {
  return getGroupShowCategory(state, _constants.Preferences.CATEGORY_GROUP_CHANNEL_SHOW);
}

var getFavoritesCategory = makeGetCategory();

function getFavoritesPreferences(state) {
  var favorites = getFavoritesCategory(state, _constants.Preferences.CATEGORY_FAVORITE_CHANNEL);
  return favorites.filter(function (f) {
    return f.value === 'true';
  }).map(function (f) {
    return f.name;
  });
}

var getVisibleTeammate = (0, _reselect.createSelector)(getDirectShowPreferences, function (direct) {
  return direct.filter(function (dm) {
    return dm.value === 'true' && dm.name;
  }).map(function (dm) {
    return dm.name;
  });
});
exports.getVisibleTeammate = getVisibleTeammate;
var getVisibleGroupIds = (0, _reselect.createSelector)(getGroupShowPreferences, function (groups) {
  return groups.filter(function (dm) {
    return dm.value === 'true' && dm.name;
  }).map(function (dm) {
    return dm.name;
  });
});
exports.getVisibleGroupIds = getVisibleGroupIds;
var getTeammateNameDisplaySetting = (0, _reselect.createSelector)(_general.getConfig, getMyPreferences, function (config, preferences) {
  var key = (0, _preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_DISPLAY_SETTINGS, _constants.Preferences.NAME_NAME_FORMAT);

  if (preferences[key]) {
    return preferences[key].value;
  } else if (config.TeammateNameDisplay) {
    return config.TeammateNameDisplay;
  }

  return _constants.General.TEAMMATE_NAME_DISPLAY.SHOW_USERNAME;
});
exports.getTeammateNameDisplaySetting = getTeammateNameDisplaySetting;
var getThemePreference = (0, _reselect.createSelector)(getMyPreferences, _teams.getCurrentTeamId, function (myPreferences, currentTeamId) {
  // Prefer the user's current team-specific theme over the user's current global theme
  var themePreference;

  if (currentTeamId) {
    themePreference = myPreferences[(0, _preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_THEME, currentTeamId)];
  }

  if (!themePreference) {
    themePreference = myPreferences[(0, _preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_THEME, '')];
  }

  return themePreference;
});
var getDefaultTheme = (0, _reselect.createSelector)(_general.getConfig, function (config) {
  if (config.DefaultTheme) {
    var theme = _constants.Preferences.THEMES[config.DefaultTheme];

    if (theme) {
      return theme;
    }
  } // If no config.DefaultTheme or value doesn't refer to a valid theme name...


  return _constants.Preferences.THEMES.default;
});
var getTheme = (0, _helpers.createShallowSelector)(getThemePreference, getDefaultTheme, function (themePreference, defaultTheme) {
  var theme;

  if (themePreference) {
    theme = themePreference.value;
  } else {
    theme = defaultTheme;
  }

  if (typeof theme === 'string') {
    // A custom theme will be a JSON-serialized object stored in a preference
    theme = JSON.parse(theme);
  } // At this point, the theme should be a plain object
  // If this is a system theme, find it in case the user's theme is missing any fields


  if (theme.type && theme.type !== 'custom') {
    var match = Object.values(_constants.Preferences.THEMES).find(function (v) {
      return v.type === theme.type;
    });

    if (match) {
      if (!match.mentionBg) {
        match.mentionBg = match.mentionBj;
      }

      return match;
    }
  }

  var _arr = Object.keys(defaultTheme);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];

    if (theme[key]) {
      // Fix a case where upper case theme colours are rendered as black
      theme[key] = theme[key].toLowerCase();
    }
  } // Backwards compatability with old name


  if (!theme.mentionBg) {
    theme.mentionBg = theme.mentionBj;
  }

  return Object.assign({}, defaultTheme, theme);
});
exports.getTheme = getTheme;

function makeGetStyleFromTheme() {
  return (0, _reselect.createSelector)(getTheme, function (state, getStyleFromTheme) {
    return getStyleFromTheme;
  }, function (theme, getStyleFromTheme) {
    return getStyleFromTheme(theme);
  });
}

var defaultSidebarPrefs = {
  grouping: 'by_type',
  unreads_at_top: 'true',
  favorite_at_top: 'true',
  sorting: 'alpha'
};
var getSidebarPreferences = (0, _reselect.createSelector)(function (state) {
  var config = (0, _general.getConfig)(state);
  return config.ExperimentalGroupUnreadChannels !== _constants.General.DISABLED && getBool(state, _constants.Preferences.CATEGORY_SIDEBAR_SETTINGS, 'show_unread_section', config.ExperimentalGroupUnreadChannels === _constants.General.DEFAULT_ON);
}, function (state) {
  return get(state, _constants.Preferences.CATEGORY_SIDEBAR_SETTINGS, '', null);
}, function (showUnreadSection, sidebarPreference) {
  var sidebarPrefs = JSON.parse(sidebarPreference);

  if (sidebarPrefs === null) {
    // Support unread settings for old implementation
    sidebarPrefs = _objectSpread({}, defaultSidebarPrefs, {
      unreads_at_top: showUnreadSection ? 'true' : 'false'
    });
  }

  return sidebarPrefs;
});
exports.getSidebarPreferences = getSidebarPreferences;