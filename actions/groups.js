"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkGroupSyncable = linkGroupSyncable;
exports.unlinkGroupSyncable = unlinkGroupSyncable;
exports.getGroupSyncables = getGroupSyncables;
exports.getGroupMembers = getGroupMembers;
exports.getGroup = getGroup;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _action_types = require("../action_types");

var _constants = require("../constants");

var _client = require("../client");

var _errors = require("./errors");

var _helpers = require("./helpers");

var _reduxBatchedActions = require("redux-batched-actions");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function linkGroupSyncable(groupID
/*: string*/
, syncableID
/*: string*/
, syncableType
/*: SyncableType*/
, patch
/*: SyncablePatch*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var data, type;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _action_types.GroupTypes.LINK_GROUP_SYNCABLE_REQUEST,
                  data: {
                    groupID: groupID,
                    syncableID: syncableID
                  }
                });
                _context.prev = 1;
                _context.next = 4;
                return _client.Client4.linkGroupSyncable(groupID, syncableID, syncableType, patch);

              case 4:
                data = _context.sent;
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.LINK_GROUP_SYNCABLE_FAILURE,
                  error: _context.t0,
                  data: {
                    groupID: groupID,
                    syncableID: syncableID
                  }
                }, (0, _errors.logError)(_context.t0)]));
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 12:
                _context.t1 = syncableType;
                _context.next = _context.t1 === _constants.Groups.SYNCABLE_TYPE_TEAM ? 15 : _context.t1 === _constants.Groups.SYNCABLE_TYPE_CHANNEL ? 17 : 19;
                break;

              case 15:
                type = _action_types.GroupTypes.LINKED_GROUP_TEAM;
                return _context.abrupt("break", 20);

              case 17:
                type = _action_types.GroupTypes.LINKED_GROUP_CHANNEL;
                return _context.abrupt("break", 20);

              case 19:
                console.warn("unhandled syncable type ".concat(syncableType));

              case 20:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.LINK_GROUP_SYNCABLE_SUCCESS,
                  data: null
                }, {
                  type: type,
                  data: data
                }]));
                return _context.abrupt("return", {
                  data: true
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function unlinkGroupSyncable(groupID
/*: string*/
, syncableID
/*: string*/
, syncableType
/*: SyncableType*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var type, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: _action_types.GroupTypes.UNLINK_GROUP_SYNCABLE_REQUEST,
                  data: {
                    groupID: groupID,
                    syncableID: syncableID
                  }
                });
                _context2.prev = 1;
                _context2.next = 4;
                return _client.Client4.unlinkGroupSyncable(groupID, syncableID, syncableType);

              case 4:
                _context2.next = 11;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context2.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.UNLINK_GROUP_SYNCABLE_FAILURE,
                  error: _context2.t0,
                  data: {
                    groupID: groupID,
                    syncableID: syncableID
                  }
                }, (0, _errors.logError)(_context2.t0)]));
                return _context2.abrupt("return", {
                  error: _context2.t0
                });

              case 11:
                data = {
                  group_id: groupID,
                  syncable_id: syncableID
                };
                _context2.t1 = syncableType;
                _context2.next = _context2.t1 === _constants.Groups.SYNCABLE_TYPE_TEAM ? 15 : _context2.t1 === _constants.Groups.SYNCABLE_TYPE_CHANNEL ? 18 : 21;
                break;

              case 15:
                type = _action_types.GroupTypes.UNLINKED_GROUP_TEAM;
                data.syncable_id = syncableID;
                return _context2.abrupt("break", 22);

              case 18:
                type = _action_types.GroupTypes.UNLINKED_GROUP_CHANNEL;
                data.syncable_id = syncableID;
                return _context2.abrupt("break", 22);

              case 21:
                console.warn("unhandled syncable type ".concat(syncableType));

              case 22:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.UNLINK_GROUP_SYNCABLE_SUCCESS,
                  data: null
                }, {
                  type: type,
                  data: data
                }]));
                return _context2.abrupt("return", {
                  data: true
                });

              case 24:
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

function getGroupSyncables(groupID
/*: string*/
, syncableType
/*: SyncableType*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        var data, type;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: _action_types.GroupTypes.GET_GROUP_SYNCABLES_REQUEST,
                  data: {
                    groupID: groupID
                  }
                });
                _context3.prev = 1;
                _context3.next = 4;
                return _client.Client4.getGroupSyncables(groupID, syncableType);

              case 4:
                data = _context3.sent;
                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context3.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.GET_GROUP_SYNCABLES_FAILURE,
                  error: _context3.t0,
                  data: {
                    groupID: groupID
                  }
                }, (0, _errors.logError)(_context3.t0)]));
                return _context3.abrupt("return", {
                  error: _context3.t0
                });

              case 12:
                _context3.t1 = syncableType;
                _context3.next = _context3.t1 === _constants.Groups.SYNCABLE_TYPE_TEAM ? 15 : _context3.t1 === _constants.Groups.SYNCABLE_TYPE_CHANNEL ? 17 : 19;
                break;

              case 15:
                type = _action_types.GroupTypes.RECEIVED_GROUP_TEAMS;
                return _context3.abrupt("break", 20);

              case 17:
                type = _action_types.GroupTypes.RECEIVED_GROUP_CHANNELS;
                return _context3.abrupt("break", 20);

              case 19:
                console.warn("unhandled syncable type ".concat(syncableType));

              case 20:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.GET_GROUP_SYNCABLES_SUCCESS,
                  data: null
                }, {
                  type: type,
                  data: data,
                  group_id: groupID
                }]));
                return _context3.abrupt("return", {
                  data: true
                });

              case 22:
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

function getGroupMembers(groupID
/*: string*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.PAGE_SIZE_DEFAULT;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: _action_types.GroupTypes.GET_GROUP_MEMBERS_REQUEST,
                  data: {
                    groupID: groupID,
                    page: page,
                    perPage: perPage
                  }
                });
                _context4.prev = 1;
                _context4.next = 4;
                return _client.Client4.getGroupMembers(groupID, page, perPage);

              case 4:
                data = _context4.sent;
                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context4.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.GET_GROUP_MEMBERS_FAILURE,
                  error: _context4.t0,
                  data: {
                    groupID: groupID,
                    page: page,
                    perPage: perPage
                  }
                }, (0, _errors.logError)(_context4.t0)]));
                return _context4.abrupt("return", {
                  error: _context4.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.GroupTypes.GET_GROUP_MEMBERS_SUCCESS,
                  data: null
                }, {
                  type: _action_types.GroupTypes.RECEIVED_GROUP_MEMBERS,
                  group_id: groupID,
                  data: data
                }]));
                return _context4.abrupt("return", {
                  data: true
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 7]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function getGroup(id
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getGroup,
    onRequest: _action_types.GroupTypes.GET_GROUP_REQUEST,
    onSuccess: [_action_types.GroupTypes.RECEIVED_GROUP, _action_types.GroupTypes.GET_GROUP_SUCCESS],
    onFailure: _action_types.GroupTypes.GET_GROUP_FAILURE,
    params: [id]
  });
}