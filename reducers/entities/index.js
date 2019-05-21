"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _channels = _interopRequireDefault(require("./channels"));

var _general = _interopRequireDefault(require("./general"));

var _users = _interopRequireDefault(require("./users"));

var _teams = _interopRequireDefault(require("./teams"));

var _posts = _interopRequireDefault(require("./posts"));

var _files = _interopRequireDefault(require("./files"));

var _preferences = _interopRequireDefault(require("./preferences"));

var _typing = _interopRequireDefault(require("./typing"));

var _integrations = _interopRequireDefault(require("./integrations"));

var _emojis = _interopRequireDefault(require("./emojis"));

var _gifs = _interopRequireDefault(require("./gifs"));

var _admin = _interopRequireDefault(require("./admin"));

var _alerts = _interopRequireDefault(require("./alerts"));

var _jobs = _interopRequireDefault(require("./jobs"));

var _search = _interopRequireDefault(require("./search"));

var _roles = _interopRequireDefault(require("./roles"));

var _schemes = _interopRequireDefault(require("./schemes"));

var _groups = _interopRequireDefault(require("./groups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
var _default = (0, _redux.combineReducers)({
  general: _general.default,
  users: _users.default,
  teams: _teams.default,
  channels: _channels.default,
  posts: _posts.default,
  files: _files.default,
  preferences: _preferences.default,
  typing: _typing.default,
  integrations: _integrations.default,
  emojis: _emojis.default,
  gifs: _gifs.default,
  admin: _admin.default,
  alerts: _alerts.default,
  jobs: _jobs.default,
  search: _search.default,
  roles: _roles.default,
  schemes: _schemes.default,
  groups: _groups.default
});

exports.default = _default;