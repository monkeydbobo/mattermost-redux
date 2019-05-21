"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlerts = getAlerts;
exports.getLatestAlert = getLatestAlert;
exports.getLatestErrorAlert = exports.getLatestDeveloperAlert = exports.getLatestNotificationAlert = void 0;

require("core-js/modules/es6.array.find");

var _reselect = require("reselect");

var _constants = require("../../constants");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getAlerts(state
/*: GlobalState*/
) {
  return state.entities.alerts.alertStack;
}

function getLatestAlert(state
/*: GlobalState*/
) {
  return state.entities.alerts.alertStack[0];
}

var getLatestNotificationAlert
/*: (state: GlobalState) => ?AlertType*/
= (0, _reselect.createSelector)(getAlerts, function (alerts) {
  return alerts.find(function (a) {
    return a.type === _constants.Alerts.ALERT_NOTIFICATION;
  });
});
exports.getLatestNotificationAlert = getLatestNotificationAlert;
var getLatestDeveloperAlert
/*: (state: GlobalState) => ?AlertType*/
= (0, _reselect.createSelector)(getAlerts, function (alerts) {
  return alerts.find(function (a) {
    return a.type === _constants.Alerts.ALERT_DEVELOPER;
  });
});
exports.getLatestDeveloperAlert = getLatestDeveloperAlert;
var getLatestErrorAlert
/*: (state: GlobalState) => ?AlertType*/
= (0, _reselect.createSelector)(getAlerts, function (alerts) {
  return alerts.find(function (a) {
    return a.type === _constants.Alerts.ALERT_ERROR;
  });
});
exports.getLatestErrorAlert = getLatestErrorAlert;