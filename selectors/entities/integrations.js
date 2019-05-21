"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIncomingHooks = getIncomingHooks;
exports.getOutgoingHooks = getOutgoingHooks;
exports.getCommands = getCommands;
exports.getOAuthApps = getOAuthApps;
exports.getSystemCommands = getSystemCommands;
exports.getAutocompleteCommandsList = exports.getAllCommands = exports.getOutgoingHooksInCurrentTeam = void 0;

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

var _reselect = require("reselect");

var _teams = require("./teams");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getIncomingHooks(state) {
  return state.entities.integrations.incomingHooks;
}

function getOutgoingHooks(state) {
  return state.entities.integrations.outgoingHooks;
}

function getCommands(state) {
  return state.entities.integrations.commands;
}

function getOAuthApps(state) {
  return state.entities.integrations.oauthApps;
}

function getSystemCommands(state) {
  return state.entities.integrations.systemCommands;
}
/**
 * get outgoing hooks in current team
 */


var getOutgoingHooksInCurrentTeam = (0, _reselect.createSelector)(_teams.getCurrentTeamId, getOutgoingHooks, function (teamId, hooks) {
  return Object.values(hooks).filter(function (o) {
    return o.teamId === teamId;
  });
});
exports.getOutgoingHooksInCurrentTeam = getOutgoingHooksInCurrentTeam;
var getAllCommands = (0, _reselect.createSelector)(getCommands, getSystemCommands, function (commands, systemCommands) {
  return _objectSpread({}, commands, systemCommands);
});
exports.getAllCommands = getAllCommands;
var getAutocompleteCommandsList = (0, _reselect.createSelector)(getAllCommands, _teams.getCurrentTeamId, function (commands, currentTeamId) {
  return Object.values(commands).filter(function (command) {
    return command && (!command.team_id || command.team_id === currentTeamId) && command.auto_complete;
  }).sort(function (a, b) {
    return a.display_name.localeCompare(b.display_name);
  });
});
exports.getAutocompleteCommandsList = getAutocompleteCommandsList;