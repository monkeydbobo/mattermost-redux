"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
var _default = {
  CATEGORY_CHANNEL_OPEN_TIME: 'channel_open_time',
  CATEGORY_CHANNEL_APPROXIMATE_VIEW_TIME: 'channel_approximate_view_time',
  CATEGORY_DIRECT_CHANNEL_SHOW: 'direct_channel_show',
  CATEGORY_GROUP_CHANNEL_SHOW: 'group_channel_show',
  CATEGORY_FLAGGED_POST: 'flagged_post',
  CATEGORY_FAVORITE_CHANNEL: 'favorite_channel',
  CATEGORY_AUTO_RESET_MANUAL_STATUS: 'auto_reset_manual_status',
  CATEGORY_NOTIFICATIONS: 'notifications',
  COMMENTS: 'comments',
  COMMENTS_ANY: 'any',
  COMMENTS_ROOT: 'root',
  COMMENTS_NEVER: 'never',
  EMAIL: 'email',
  EMAIL_INTERVAL: 'email_interval',
  INTERVAL_FIFTEEN_MINUTES: 15 * 60,
  INTERVAL_HOUR: 60 * 60,
  INTERVAL_IMMEDIATE: 30,
  // "immediate" is a 30 second interval
  INTERVAL_NEVER: 0,
  INTERVAL_NOT_SET: -1,
  CATEGORY_DISPLAY_SETTINGS: 'display_settings',
  NAME_NAME_FORMAT: 'name_format',
  DISPLAY_PREFER_NICKNAME: 'nickname_full_name',
  DISPLAY_PREFER_FULL_NAME: 'full_name',
  MENTION_KEYS: 'mention_keys',
  USE_MILITARY_TIME: 'use_military_time',
  CATEGORY_SIDEBAR_SETTINGS: 'sidebar_settings',
  CATEGORY_ADVANCED_SETTINGS: 'advanced_settings',
  ADVANCED_FILTER_JOIN_LEAVE: 'join_leave',
  ADVANCED_CODE_BLOCK_ON_CTRL_ENTER: 'code_block_ctrl_enter',
  ADVANCED_SEND_ON_CTRL_ENTER: 'send_on_ctrl_enter',
  CATEGORY_THEME: 'theme',
  THEMES: {
    default: {
      type: 'Mattermost',
      sidebarBg: '#145dbf',
      sidebarText: '#ffffff',
      sidebarUnreadText: '#ffffff',
      sidebarTextHoverBg: '#4578bf',
      sidebarTextActiveBorder: '#579eff',
      sidebarTextActiveColor: '#ffffff',
      sidebarHeaderBg: '#78c8fa',
      sidebarHeaderTextColor: '#ffffff',
      onlineIndicator: '#06d6a0',
      awayIndicator: '#ffbc42',
      dndIndicator: '#f74343',
      mentionBj: '#ffffff',
      mentionColor: '#145dbf',
      centerChannelBg: '#ffffff',
      centerChannelColor: '#3d3c40',
      newMessageSeparator: '#ff8800',
      linkColor: '#2389d7',
      buttonBg: '#166de0',
      buttonColor: '#ffffff',
      errorTextColor: '#fd5960',
      mentionHighlightBg: '#ffe577',
      mentionHighlightLink: '#166de0',
      codeTheme: 'github'
    },
    organization: {
      type: 'Organization',
      sidebarBg: '#145dbf',
      sidebarText: '#ffffff',
      sidebarUnreadText: '#ffffff',
      sidebarTextHoverBg: '#4578bf',
      sidebarTextActiveBorder: '#579eff',
      sidebarTextActiveColor: '#ffffff',
      sidebarHeaderBg: '#78c8fa',
      sidebarHeaderTextColor: '#ffffff',
      onlineIndicator: '#06d6a0',
      awayIndicator: '#ffbc42',
      dndIndicator: '#f74343',
      mentionBj: '#ffffff',
      mentionColor: '#145dbf',
      centerChannelBg: '#ffffff',
      centerChannelColor: '#3d3c40',
      newMessageSeparator: '#ff8800',
      linkColor: '#2389d7',
      buttonBg: '#166de0',
      buttonColor: '#ffffff',
      errorTextColor: '#fd5960',
      mentionHighlightBg: '#ffe577',
      mentionHighlightLink: '#166de0',
      codeTheme: 'github'
    },
    mattermostDark: {
      type: 'Mattermost Dark',
      sidebarBg: '#145dbf',
      sidebarText: '#ffffff',
      sidebarUnreadText: '#ffffff',
      sidebarTextHoverBg: '#4578bf',
      sidebarTextActiveBorder: '#579eff',
      sidebarTextActiveColor: '#ffffff',
      sidebarHeaderBg: '#78c8fa',
      sidebarHeaderTextColor: '#ffffff',
      onlineIndicator: '#06d6a0',
      awayIndicator: '#ffbc42',
      dndIndicator: '#f74343',
      mentionBj: '#ffffff',
      mentionColor: '#145dbf',
      centerChannelBg: '#ffffff',
      centerChannelColor: '#3d3c40',
      newMessageSeparator: '#ff8800',
      linkColor: '#2389d7',
      buttonBg: '#166de0',
      buttonColor: '#ffffff',
      errorTextColor: '#fd5960',
      mentionHighlightBg: '#ffe577',
      mentionHighlightLink: '#166de0',
      codeTheme: 'github'
    },
    windows10: {
      type: 'Windows Dark',
      sidebarBg: '#145dbf',
      sidebarText: '#ffffff',
      sidebarUnreadText: '#ffffff',
      sidebarTextHoverBg: '#4578bf',
      sidebarTextActiveBorder: '#579eff',
      sidebarTextActiveColor: '#ffffff',
      sidebarHeaderBg: '#78c8fa',
      sidebarHeaderTextColor: '#ffffff',
      onlineIndicator: '#06d6a0',
      awayIndicator: '#ffbc42',
      dndIndicator: '#f74343',
      mentionBj: '#ffffff',
      mentionColor: '#145dbf',
      centerChannelBg: '#ffffff',
      centerChannelColor: '#3d3c40',
      newMessageSeparator: '#ff8800',
      linkColor: '#2389d7',
      buttonBg: '#166de0',
      buttonColor: '#ffffff',
      errorTextColor: '#fd5960',
      mentionHighlightBg: '#ffe577',
      mentionHighlightLink: '#166de0',
      codeTheme: 'github'
    }
  }
};
exports.default = _default;