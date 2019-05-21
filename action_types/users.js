"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _key_mirror = _interopRequireDefault(require("../utils/key_mirror"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
var _default = (0, _key_mirror.default)({
  CREATE_USER_REQUEST: null,
  CREATE_USER_SUCCESS: null,
  CREATE_USER_FAILURE: null,
  LOGIN_REQUEST: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAILURE: null,
  LOGOUT_REQUEST: null,
  LOGOUT_SUCCESS: null,
  LOGOUT_FAILURE: null,
  REVOKE_ALL_USER_SESSIONS_SUCCESS: null,
  CHECK_MFA_REQUEST: null,
  CHECK_MFA_SUCCESS: null,
  CHECK_MFA_FAILURE: null,
  AUTOCOMPLETE_USERS_REQUEST: null,
  AUTOCOMPLETE_USERS_SUCCESS: null,
  AUTOCOMPLETE_USERS_FAILURE: null,
  UPDATE_ME_REQUEST: null,
  UPDATE_ME_SUCCESS: null,
  UPDATE_ME_FAILURE: null,
  RECEIVED_ME: null,
  RECEIVED_TERMS_OF_SERVICE_STATUS: null,
  RECEIVED_PROFILE: null,
  RECEIVED_PROFILES: null,
  RECEIVED_PROFILES_LIST: null,
  RECEIVED_PROFILES_IN_TEAM: null,
  RECEIVED_PROFILE_IN_TEAM: null,
  RECEIVED_PROFILES_LIST_IN_TEAM: null,
  RECEIVED_PROFILE_NOT_IN_TEAM: null,
  RECEIVED_PROFILES_LIST_NOT_IN_TEAM: null,
  RECEIVED_PROFILE_WITHOUT_TEAM: null,
  RECEIVED_PROFILES_LIST_WITHOUT_TEAM: null,
  RECEIVED_PROFILES_IN_CHANNEL: null,
  RECEIVED_PROFILES_LIST_IN_CHANNEL: null,
  RECEIVED_PROFILE_IN_CHANNEL: null,
  RECEIVED_PROFILES_NOT_IN_CHANNEL: null,
  RECEIVED_PROFILES_LIST_NOT_IN_CHANNEL: null,
  RECEIVED_PROFILE_NOT_IN_CHANNEL: null,
  RECEIVED_SESSIONS: null,
  RECEIVED_REVOKED_SESSION: null,
  RECEIVED_AUDITS: null,
  RECEIVED_STATUS: null,
  RECEIVED_STATUSES: null,
  RECEIVED_AUTOCOMPLETE_IN_CHANNEL: null,
  RESET_LOGOUT_STATE: null,
  RECEIVED_MY_USER_ACCESS_TOKEN: null,
  RECEIVED_MY_USER_ACCESS_TOKENS: null,
  CLEAR_MY_USER_ACCESS_TOKENS: null,
  REVOKED_USER_ACCESS_TOKEN: null,
  DISABLED_USER_ACCESS_TOKEN: null,
  ENABLED_USER_ACCESS_TOKEN: null,
  RECEIVED_USER_STATS: null
});

exports.default = _default;