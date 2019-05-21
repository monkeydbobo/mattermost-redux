"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIncomingHook = createIncomingHook;
exports.getIncomingHook = getIncomingHook;
exports.getIncomingHooks = getIncomingHooks;
exports.removeIncomingHook = removeIncomingHook;
exports.updateIncomingHook = updateIncomingHook;
exports.createOutgoingHook = createOutgoingHook;
exports.getOutgoingHook = getOutgoingHook;
exports.getOutgoingHooks = getOutgoingHooks;
exports.removeOutgoingHook = removeOutgoingHook;
exports.updateOutgoingHook = updateOutgoingHook;
exports.regenOutgoingHookToken = regenOutgoingHookToken;
exports.getCommands = getCommands;
exports.getAutocompleteCommands = getAutocompleteCommands;
exports.getCustomTeamCommands = getCustomTeamCommands;
exports.addCommand = addCommand;
exports.editCommand = editCommand;
exports.executeCommand = executeCommand;
exports.regenCommandToken = regenCommandToken;
exports.deleteCommand = deleteCommand;
exports.addOAuthApp = addOAuthApp;
exports.editOAuthApp = editOAuthApp;
exports.getOAuthApps = getOAuthApps;
exports.getOAuthApp = getOAuthApp;
exports.deleteOAuthApp = deleteOAuthApp;
exports.regenOAuthAppSecret = regenOAuthAppSecret;
exports.submitInteractiveDialog = submitInteractiveDialog;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _action_types = require("../action_types");

var _constants = require("../constants");

var _reduxBatchedActions = require("redux-batched-actions");

var _client = require("../client");

var _channels = require("../selectors/entities/channels");

var _teams = require("../selectors/entities/teams");

var _errors = require("./errors");

var _helpers = require("./helpers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createIncomingHook(hook
/*: IncomingWebhook*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.createIncomingWebhook,
    onRequest: _action_types.IntegrationTypes.CREATE_INCOMING_HOOK_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_INCOMING_HOOK, _action_types.IntegrationTypes.CREATE_INCOMING_HOOK_SUCCESS],
    onFailure: _action_types.IntegrationTypes.CREATE_INCOMING_HOOK_FAILURE,
    params: [hook]
  });
}

function getIncomingHook(hookId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getIncomingWebhook,
    onRequest: _action_types.IntegrationTypes.GET_INCOMING_HOOKS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_INCOMING_HOOK, _action_types.IntegrationTypes.GET_INCOMING_HOOKS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_INCOMING_HOOKS_FAILURE,
    params: [hookId]
  });
}

function getIncomingHooks() {
  var teamId
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getIncomingWebhooks,
    onRequest: _action_types.IntegrationTypes.GET_INCOMING_HOOKS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_INCOMING_HOOKS, _action_types.IntegrationTypes.GET_INCOMING_HOOKS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_INCOMING_HOOKS_FAILURE,
    params: [teamId, page, perPage]
  });
}

function removeIncomingHook(hookId
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _action_types.IntegrationTypes.DELETE_INCOMING_HOOK_REQUEST,
                  data: {}
                }, getState);
                _context.prev = 1;
                _context.next = 4;
                return _client.Client4.removeIncomingWebhook(hookId);

              case 4:
                _context.next = 11;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETE_INCOMING_HOOK_FAILURE,
                  error: _context.t0
                }, (0, _errors.logError)(_context.t0)]), getState);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETED_INCOMING_HOOK,
                  data: {
                    id: hookId
                  }
                }, {
                  type: _action_types.IntegrationTypes.DELETE_INCOMING_HOOK_SUCCESS
                }]), getState);
                return _context.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function updateIncomingHook(hook
/*: IncomingWebhook*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.updateIncomingWebhook,
    onRequest: _action_types.IntegrationTypes.UPDATE_INCOMING_HOOK_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_INCOMING_HOOK, _action_types.IntegrationTypes.UPDATE_INCOMING_HOOK_SUCCESS],
    onFailure: _action_types.IntegrationTypes.UPDATE_INCOMING_HOOK_FAILURE,
    params: [hook]
  });
}

function createOutgoingHook(hook
/*: OutgoingWebhook*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.createOutgoingWebhook,
    onRequest: _action_types.IntegrationTypes.CREATE_OUTGOING_HOOK_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OUTGOING_HOOK, _action_types.IntegrationTypes.CREATE_OUTGOING_HOOK_SUCCESS],
    onFailure: _action_types.IntegrationTypes.CREATE_OUTGOING_HOOK_FAILURE,
    params: [hook]
  });
}

function getOutgoingHook(hookId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getOutgoingWebhook,
    onRequest: _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OUTGOING_HOOK, _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_FAILURE,
    params: [hookId]
  });
}

function getOutgoingHooks() {
  var channelId
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var teamId
  /*: string*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var page
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var perPage
  /*: number*/
  = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getOutgoingWebhooks,
    onRequest: _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OUTGOING_HOOKS, _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_OUTGOING_HOOKS_FAILURE,
    params: [channelId, teamId, page, perPage]
  });
}

function removeOutgoingHook(hookId
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: _action_types.IntegrationTypes.DELETE_OUTGOING_HOOK_REQUEST,
                  data: {}
                }, getState);
                _context2.prev = 1;
                _context2.next = 4;
                return _client.Client4.removeOutgoingWebhook(hookId);

              case 4:
                _context2.next = 11;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context2.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETE_OUTGOING_HOOK_FAILURE,
                  error: _context2.t0
                }, (0, _errors.logError)(_context2.t0)]), getState);
                return _context2.abrupt("return", {
                  error: _context2.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETED_OUTGOING_HOOK,
                  data: {
                    id: hookId
                  }
                }, {
                  type: _action_types.IntegrationTypes.DELETE_OUTGOING_HOOK_SUCCESS
                }]), getState);
                return _context2.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 6]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function updateOutgoingHook(hook
/*: OutgoingWebhook*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.updateOutgoingWebhook,
    onRequest: _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OUTGOING_HOOK, _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_SUCCESS],
    onFailure: _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_FAILURE,
    params: [hook]
  });
}

function regenOutgoingHookToken(hookId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.regenOutgoingHookToken,
    onRequest: _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OUTGOING_HOOK, _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_SUCCESS],
    onFailure: _action_types.IntegrationTypes.UPDATE_OUTGOING_HOOK_FAILURE,
    params: [hookId]
  });
}

function getCommands(teamId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getCommandsList,
    onRequest: _action_types.IntegrationTypes.GET_COMMANDS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_COMMANDS, _action_types.IntegrationTypes.GET_COMMANDS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_COMMANDS_FAILURE,
    params: [teamId]
  });
}

function getAutocompleteCommands(teamId
/*: string*/
) {
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getAutocompleteCommandsList,
    onRequest: _action_types.IntegrationTypes.GET_AUTOCOMPLETE_COMMANDS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_COMMANDS, _action_types.IntegrationTypes.GET_AUTOCOMPLETE_COMMANDS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_AUTOCOMPLETE_COMMANDS_FAILURE,
    params: [teamId, page, perPage]
  });
}

function getCustomTeamCommands(teamId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getCustomTeamCommands,
    onRequest: _action_types.IntegrationTypes.GET_CUSTOM_TEAM_COMMANDS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_CUSTOM_TEAM_COMMANDS, _action_types.IntegrationTypes.GET_CUSTOM_TEAM_COMMANDS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_CUSTOM_TEAM_COMMANDS_FAILURE,
    params: [teamId]
  });
}

function addCommand(command
/*: Command*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.addCommand,
    onRequest: _action_types.IntegrationTypes.ADD_COMMAND_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_COMMAND, _action_types.IntegrationTypes.ADD_COMMAND_SUCCESS],
    onFailure: _action_types.IntegrationTypes.ADD_COMMAND_FAILURE,
    params: [command]
  });
}

function editCommand(command
/*: Command*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.editCommand,
    onRequest: _action_types.IntegrationTypes.EDIT_COMMAND_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_COMMAND, _action_types.IntegrationTypes.EDIT_COMMAND_SUCCESS],
    onFailure: _action_types.IntegrationTypes.EDIT_COMMAND_FAILURE,
    params: [command]
  });
}

function executeCommand(command
/*: Command*/
, args
/*: Array<string>*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.executeCommand,
    onRequest: _action_types.IntegrationTypes.EXECUTE_COMMAND_REQUEST,
    onSuccess: _action_types.IntegrationTypes.EXECUTE_COMMAND_SUCCESS,
    onFailure: _action_types.IntegrationTypes.EXECUTE_COMMAND_FAILURE,
    params: [command, args]
  });
}

function regenCommandToken(id
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: _action_types.IntegrationTypes.REGEN_COMMAND_TOKEN_REQUEST,
                  data: {}
                }, getState);
                _context3.prev = 1;
                _context3.next = 4;
                return _client.Client4.regenCommandToken(id);

              case 4:
                res = _context3.sent;
                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context3.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.REGEN_COMMAND_TOKEN_FAILURE,
                  error: _context3.t0
                }, (0, _errors.logError)(_context3.t0)]), getState);
                return _context3.abrupt("return", {
                  error: _context3.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.RECEIVED_COMMAND_TOKEN,
                  data: {
                    id: id,
                    token: res.token
                  }
                }, {
                  type: _action_types.IntegrationTypes.REGEN_COMMAND_TOKEN_SUCCESS
                }]), getState);
                return _context3.abrupt("return", {
                  data: true
                });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 7]]);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

function deleteCommand(id
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: _action_types.IntegrationTypes.DELETE_COMMAND_REQUEST,
                  data: {}
                }, getState);
                _context4.prev = 1;
                _context4.next = 4;
                return _client.Client4.deleteCommand(id);

              case 4:
                _context4.next = 11;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context4.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETE_COMMAND_FAILURE,
                  error: _context4.t0
                }, (0, _errors.logError)(_context4.t0)]), getState);
                return _context4.abrupt("return", {
                  error: _context4.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETED_COMMAND,
                  data: {
                    id: id
                  }
                }, {
                  type: _action_types.IntegrationTypes.DELETE_COMMAND_SUCCESS
                }]), getState);
                return _context4.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 6]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function addOAuthApp(app
/*: OAuthApp*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.createOAuthApp,
    onRequest: _action_types.IntegrationTypes.ADD_OAUTH_APP_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OAUTH_APP, _action_types.IntegrationTypes.ADD_OAUTH_APP_SUCCESS],
    onFailure: _action_types.IntegrationTypes.ADD_OAUTH_APP_FAILURE,
    params: [app]
  });
}

function editOAuthApp(app
/*: OAuthApp*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.editOAuthApp,
    onRequest: _action_types.IntegrationTypes.UPDATE_OAUTH_APP_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OAUTH_APP, _action_types.IntegrationTypes.UPDATE_OAUTH_APP_SUCCESS],
    onFailure: _action_types.IntegrationTypes.UPDATE_OAUTH_APP_FAILURE,
    params: [app]
  });
}

function getOAuthApps() {
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getOAuthApps,
    onRequest: _action_types.IntegrationTypes.GET_OAUTH_APPS_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OAUTH_APPS, _action_types.IntegrationTypes.GET_OAUTH_APPS_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_OAUTH_APPS_FAILURE,
    params: [page, perPage]
  });
}

function getOAuthApp(appId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getOAuthApp,
    onRequest: _action_types.IntegrationTypes.GET_OAUTH_APP_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OAUTH_APP, _action_types.IntegrationTypes.GET_OAUTH_APP_SUCCESS],
    onFailure: _action_types.IntegrationTypes.GET_OAUTH_APP_FAILURE,
    params: [appId]
  });
}

function deleteOAuthApp(id
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                dispatch({
                  type: _action_types.IntegrationTypes.DELETE_OAUTH_APP_REQUEST,
                  data: {}
                }, getState);
                _context5.prev = 1;
                _context5.next = 4;
                return _client.Client4.deleteOAuthApp(id);

              case 4:
                _context5.next = 11;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context5.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETE_OAUTH_APP_FAILURE,
                  error: _context5.t0
                }, (0, _errors.logError)(_context5.t0)]), getState);
                return _context5.abrupt("return", {
                  error: _context5.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.DELETED_OAUTH_APP,
                  data: {
                    id: id
                  }
                }, {
                  type: _action_types.IntegrationTypes.DELETE_OAUTH_APP_SUCCESS
                }]), getState);
                return _context5.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 6]]);
      }));

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

function regenOAuthAppSecret(appId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.regenOAuthAppSecret,
    onRequest: _action_types.IntegrationTypes.UPDATE_OAUTH_APP_REQUEST,
    onSuccess: [_action_types.IntegrationTypes.RECEIVED_OAUTH_APP, _action_types.IntegrationTypes.UPDATE_OAUTH_APP_SUCCESS],
    onFailure: _action_types.IntegrationTypes.UPDATE_OAUTH_APP_FAILURE,
    params: [appId]
  });
}

function submitInteractiveDialog(submission
/*: DialogSubmission*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var state, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch({
                  type: _action_types.IntegrationTypes.SUBMIT_INTERACTIVE_DIALOG_REQUEST,
                  data: {}
                });
                state = getState();
                submission.channel_id = (0, _channels.getCurrentChannelId)(state);
                submission.team_id = (0, _teams.getCurrentTeamId)(state);
                _context6.prev = 4;
                _context6.next = 7;
                return _client.Client4.submitInteractiveDialog(submission);

              case 7:
                data = _context6.sent;
                _context6.next = 15;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](4);
                (0, _helpers.forceLogoutIfNecessary)(_context6.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.IntegrationTypes.SUBMIT_INTERACTIVE_DIALOG_FAILURE,
                  error: _context6.t0
                }, (0, _errors.logError)(_context6.t0)]), getState);
                return _context6.abrupt("return", {
                  error: _context6.t0
                });

              case 15:
                dispatch({
                  type: _action_types.IntegrationTypes.SUBMIT_INTERACTIVE_DIALOG_SUCCESS,
                  data: {}
                });
                return _context6.abrupt("return", {
                  data: data
                });

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 10]]);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}