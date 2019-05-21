"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.find-index");

var _redux = require("redux");

var _action_types = require("../../action_types");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function syncables() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.GroupTypes.RECEIVED_GROUP_TEAMS:
      {
        return _objectSpread({}, state, _defineProperty({}, action.group_id, _objectSpread({}, state[action.group_id], {
          teams: action.data
        })));
      }

    case _action_types.GroupTypes.RECEIVED_GROUP_CHANNELS:
      {
        return _objectSpread({}, state, _defineProperty({}, action.group_id, _objectSpread({}, state[action.group_id], {
          channels: action.data
        })));
      }

    case _action_types.GroupTypes.LINKED_GROUP_TEAM:
      {
        var nextGroupTeams = [];

        if (!state[action.data.group_id] || !state[action.data.group_id].teams) {
          nextGroupTeams = [action.data];
        } else {
          nextGroupTeams = _objectSpread({}, state)[action.data.group_id].teams;

          for (var i = 0, len = nextGroupTeams.length; i < len; i++) {
            if (nextGroupTeams[i].team_id === action.data.team_id) {
              nextGroupTeams[i] = action.data;
            }
          }
        }

        return _objectSpread({}, state, _defineProperty({}, action.data.group_id, _objectSpread({}, state[action.data.group_id], {
          teams: nextGroupTeams
        })));
      }

    case _action_types.GroupTypes.LINKED_GROUP_CHANNEL:
      {
        var nextGroupChannels = [];

        if (!state[action.data.group_id] || !state[action.data.group_id].channels) {
          nextGroupChannels = [action.data];
        } else {
          nextGroupChannels = _objectSpread({}, state)[action.data.group_id].channels;

          for (var _i = 0, _len = nextGroupChannels.length; _i < _len; _i++) {
            if (nextGroupChannels[_i].channel_id === action.data.channel_id) {
              nextGroupChannels[_i] = action.data;
            }
          }
        }

        return _objectSpread({}, state, _defineProperty({}, action.data.group_id, _objectSpread({}, state[action.data.group_id], {
          channels: nextGroupChannels
        })));
      }

    case _action_types.GroupTypes.UNLINKED_GROUP_TEAM:
      {
        var nextTeams = state[action.data.group_id].teams.slice();
        var index = nextTeams.findIndex(function (groupTeam) {
          return groupTeam.team_id === action.data.syncable_id;
        });

        if (index !== -1) {
          nextTeams.splice(index, 1);
        }

        return _objectSpread({}, state, _defineProperty({}, action.data.group_id, _objectSpread({}, state[action.data.group_id], {
          teams: nextTeams
        })));
      }

    case _action_types.GroupTypes.UNLINKED_GROUP_CHANNEL:
      {
        var nextChannels = state[action.data.group_id].channels.slice();

        var _index = nextChannels.findIndex(function (groupChannel) {
          return groupChannel.channel_id === action.data.syncable_id;
        });

        if (_index !== -1) {
          nextChannels.splice(_index, 1);
        }

        return _objectSpread({}, state, _defineProperty({}, action.data.group_id, _objectSpread({}, state[action.data.group_id], {
          channels: nextChannels
        })));
      }

    default:
      return state;
  }
}

function members() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.GroupTypes.RECEIVED_GROUP_MEMBERS:
      {
        return _objectSpread({}, state, _defineProperty({}, action.group_id, {
          members: action.data.members,
          totalMemberCount: action.data.total_member_count
        }));
      }

    default:
      return state;
  }
}

function groups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.GroupTypes.RECEIVED_GROUP:
      {
        return _objectSpread({}, state, _defineProperty({}, action.data.id, action.data));
      }

    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  syncables: syncables,
  members: members,
  groups: groups
});

exports.default = _default;