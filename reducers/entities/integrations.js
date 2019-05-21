"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _redux = require("redux");

var _action_types = require("../../action_types");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function incomingHooks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.IntegrationTypes.RECEIVED_INCOMING_HOOK:
      {
        var nextState = _objectSpread({}, state);

        nextState[action.data.id] = action.data;
        return nextState;
      }

    case _action_types.IntegrationTypes.RECEIVED_INCOMING_HOOKS:
      {
        var _nextState = _objectSpread({}, state);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = action.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var hook = _step.value;
            _nextState[hook.id] = hook;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return _nextState;
      }

    case _action_types.IntegrationTypes.DELETED_INCOMING_HOOK:
      {
        var _nextState2 = _objectSpread({}, state);

        Reflect.deleteProperty(_nextState2, action.data.id);
        return _nextState2;
      }

    case _action_types.ChannelTypes.RECEIVED_CHANNEL_DELETED:
      {
        var _nextState3 = _objectSpread({}, state);

        var deleted = false;
        Object.keys(_nextState3).forEach(function (id) {
          if (_nextState3[id].channel_id === action.data.id) {
            deleted = true;
            Reflect.deleteProperty(_nextState3, id);
          }
        });

        if (deleted) {
          return _nextState3;
        }

        return state;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function outgoingHooks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.IntegrationTypes.RECEIVED_OUTGOING_HOOK:
      {
        var nextState = _objectSpread({}, state);

        nextState[action.data.id] = action.data;
        return nextState;
      }

    case _action_types.IntegrationTypes.RECEIVED_OUTGOING_HOOKS:
      {
        var _nextState4 = _objectSpread({}, state);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = action.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var hook = _step2.value;
            _nextState4[hook.id] = hook;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return _nextState4;
      }

    case _action_types.IntegrationTypes.DELETED_OUTGOING_HOOK:
      {
        var _nextState5 = _objectSpread({}, state);

        Reflect.deleteProperty(_nextState5, action.data.id);
        return _nextState5;
      }

    case _action_types.ChannelTypes.RECEIVED_CHANNEL_DELETED:
      {
        var _nextState6 = _objectSpread({}, state);

        var deleted = false;
        Object.keys(_nextState6).forEach(function (id) {
          if (_nextState6[id].channel_id === action.data.id) {
            deleted = true;
            Reflect.deleteProperty(_nextState6, id);
          }
        });

        if (deleted) {
          return _nextState6;
        }

        return state;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function commands() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.IntegrationTypes.RECEIVED_COMMANDS:
    case _action_types.IntegrationTypes.RECEIVED_CUSTOM_TEAM_COMMANDS:
      {
        var nextState = _objectSpread({}, state);

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = action.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var command = _step3.value;

            if (command.id) {
              var id = command.id;
              nextState[id] = command;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return nextState;
      }

    case _action_types.IntegrationTypes.RECEIVED_COMMAND:
      if (action.data.id) {
        return _objectSpread({}, state, _defineProperty({}, action.data.id, action.data));
      }

      return state;

    case _action_types.IntegrationTypes.RECEIVED_COMMAND_TOKEN:
      {
        var _action$data = action.data,
            _id = _action$data.id,
            token = _action$data.token;
        return _objectSpread({}, state, _defineProperty({}, _id, _objectSpread({}, state[_id], {
          token: token
        })));
      }

    case _action_types.IntegrationTypes.DELETED_COMMAND:
      {
        var _nextState7 = _objectSpread({}, state);

        Reflect.deleteProperty(_nextState7, action.data.id);
        return _nextState7;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function systemCommands() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.IntegrationTypes.RECEIVED_COMMANDS:
      {
        var nextCommands = {};
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = action.data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var command = _step4.value;

            if (!command.id) {
              nextCommands[command.trigger] = command;
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return nextCommands;
      }

    case _action_types.IntegrationTypes.RECEIVED_COMMAND:
      if (!action.data.id) {
        return _objectSpread({}, state, _defineProperty({}, action.data.trigger, action.data));
      }

      return state;

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function oauthApps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.IntegrationTypes.RECEIVED_OAUTH_APPS:
      {
        var nextState = _objectSpread({}, state);

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = action.data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var app = _step5.value;
            nextState[app.id] = app;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        return nextState;
      }

    case _action_types.IntegrationTypes.RECEIVED_OAUTH_APP:
      return _objectSpread({}, state, _defineProperty({}, action.data.id, action.data));

    case _action_types.IntegrationTypes.DELETED_OAUTH_APP:
      {
        var _nextState8 = _objectSpread({}, state);

        Reflect.deleteProperty(_nextState8, action.data.id);
        return _nextState8;
      }

    case _action_types.UserTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}

function dialogTriggerId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.IntegrationTypes.RECEIVED_DIALOG_TRIGGER_ID:
      return action.data;

    default:
      return state;
  }
}

function dialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.IntegrationTypes.RECEIVED_DIALOG:
      return action.data;

    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  // object where every key is the hook id and has an object with the incoming hook details
  incomingHooks: incomingHooks,
  // object where every key is the hook id and has an object with the outgoing hook details
  outgoingHooks: outgoingHooks,
  // object to represent installed slash commands for a current team
  commands: commands,
  // object to represent registered oauth apps with app id as the key
  oauthApps: oauthApps,
  // object to represent built-in slash commands
  systemCommands: systemCommands,
  // trigger ID for interactive dialogs
  dialogTriggerId: dialogTriggerId,
  // data for an interactive dialog to display
  dialog: dialog
});

exports.default = _default;