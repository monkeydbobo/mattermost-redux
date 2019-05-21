"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTeam = selectTeam;
exports.getMyTeams = getMyTeams;
exports.getMyTeamUnreads = getMyTeamUnreads;
exports.getTeam = getTeam;
exports.getTeamByName = getTeamByName;
exports.getTeams = getTeams;
exports.searchTeams = searchTeams;
exports.createTeam = createTeam;
exports.deleteTeam = deleteTeam;
exports.updateTeam = updateTeam;
exports.patchTeam = patchTeam;
exports.getMyTeamMembers = getMyTeamMembers;
exports.getTeamMembers = getTeamMembers;
exports.getTeamMember = getTeamMember;
exports.getTeamMembersByIds = getTeamMembersByIds;
exports.getTeamsForUser = getTeamsForUser;
exports.getTeamMembersForUser = getTeamMembersForUser;
exports.getTeamStats = getTeamStats;
exports.addUserToTeamFromInvite = addUserToTeamFromInvite;
exports.addUserToTeam = addUserToTeam;
exports.addUsersToTeam = addUsersToTeam;
exports.removeUserFromTeam = removeUserFromTeam;
exports.updateTeamMemberRoles = updateTeamMemberRoles;
exports.sendEmailInvitesToTeam = sendEmailInvitesToTeam;
exports.getTeamInviteInfo = getTeamInviteInfo;
exports.checkIfTeamExists = checkIfTeamExists;
exports.joinTeam = joinTeam;
exports.setTeamIcon = setTeamIcon;
exports.removeTeamIcon = removeTeamIcon;
exports.updateTeamScheme = updateTeamScheme;
exports.updateTeamMemberSchemeRoles = updateTeamMemberSchemeRoles;

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.promise");

require("core-js/modules/es7.object.values");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

require("core-js/modules/es6.regexp.split");

require("regenerator-runtime/runtime");

var _reduxBatchedActions = require("redux-batched-actions");

var _client = require("../client");

var _constants = require("../constants");

var _action_types = require("../action_types");

var _event_emitter = _interopRequireDefault(require("../utils/event_emitter"));

var _errors = require("./errors");

var _helpers = require("./helpers");

var _users = require("./users");

var _roles = require("./roles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProfilesAndStatusesForMembers(_x, _x2, _x3) {
  return _getProfilesAndStatusesForMembers.apply(this, arguments);
}

function _getProfilesAndStatusesForMembers() {
  _getProfilesAndStatusesForMembers = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15(userIds, dispatch, getState) {
    var _getState$entities$us, currentUserId, profiles, statuses, profilesToLoad, statusesToLoad, requests;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _getState$entities$us = getState().entities.users, currentUserId = _getState$entities$us.currentUserId, profiles = _getState$entities$us.profiles, statuses = _getState$entities$us.statuses;
            profilesToLoad = [];
            statusesToLoad = [];
            userIds.forEach(function (userId) {
              if (!profiles[userId] && !profilesToLoad.includes(userId) && userId !== currentUserId) {
                profilesToLoad.push(userId);
              }

              if (!statuses[userId] && !statusesToLoad.includes(userId) && userId !== currentUserId) {
                statusesToLoad.push(userId);
              }
            });
            requests = [];

            if (profilesToLoad.length) {
              requests.push((0, _users.getProfilesByIds)(profilesToLoad)(dispatch, getState));
            }

            if (statusesToLoad.length) {
              requests.push((0, _users.getStatusesByIds)(statusesToLoad)(dispatch, getState));
            }

            _context15.next = 9;
            return Promise.all(requests);

          case 9:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, this);
  }));
  return _getProfilesAndStatusesForMembers.apply(this, arguments);
}

function selectTeam(team
/*: Team*/
)
/*: ActionFunc*/
{
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
                  type: _action_types.TeamTypes.SELECT_TEAM,
                  data: team.id
                }, getState);
                return _context.abrupt("return", {
                  data: true
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function getMyTeams()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getMyTeams,
    onRequest: _action_types.TeamTypes.MY_TEAMS_REQUEST,
    onSuccess: [_action_types.TeamTypes.RECEIVED_TEAMS_LIST, _action_types.TeamTypes.MY_TEAMS_SUCCESS],
    onFailure: _action_types.TeamTypes.MY_TEAMS_FAILURE
  });
}

function getMyTeamUnreads()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getMyTeamUnreads,
    onSuccess: _action_types.TeamTypes.RECEIVED_MY_TEAM_UNREADS
  });
}

function getTeam(teamId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeam,
    onSuccess: _action_types.TeamTypes.RECEIVED_TEAM,
    params: [teamId]
  });
}

function getTeamByName(teamName
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeamByName,
    onSuccess: _action_types.TeamTypes.RECEIVED_TEAM,
    params: [teamName]
  });
}

function getTeams()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.TEAMS_CHUNK_SIZE;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeams,
    onRequest: _action_types.TeamTypes.GET_TEAMS_REQUEST,
    onSuccess: [_action_types.TeamTypes.RECEIVED_TEAMS_LIST, _action_types.TeamTypes.GET_TEAMS_SUCCESS],
    onFailure: _action_types.TeamTypes.GET_TEAMS_FAILURE,
    params: [page, perPage]
  });
}

function searchTeams(term
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.searchTeams,
    onRequest: _action_types.TeamTypes.GET_TEAMS_REQUEST,
    onSuccess: [_action_types.TeamTypes.RECEIVED_TEAMS_LIST, _action_types.TeamTypes.GET_TEAMS_SUCCESS],
    onFailure: _action_types.TeamTypes.GET_TEAMS_FAILURE,
    params: [term]
  });
}

function createTeam(team
/*: Team*/
)
/*: ActionFunc*/
{
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
        var created, member;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _client.Client4.createTeam(team);

              case 3:
                created = _context2.sent;
                _context2.next = 11;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context2.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context2.t0));
                return _context2.abrupt("return", {
                  error: _context2.t0
                });

              case 11:
                member = {
                  team_id: created.id,
                  user_id: getState().entities.users.currentUserId,
                  roles: "".concat(_constants.General.TEAM_ADMIN_ROLE, " ").concat(_constants.General.TEAM_USER_ROLE),
                  delete_at: 0,
                  msg_count: 0,
                  mention_count: 0
                };
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.TeamTypes.CREATED_TEAM,
                  data: created
                }, {
                  type: _action_types.TeamTypes.RECEIVED_MY_TEAM_MEMBER,
                  data: member
                }, {
                  type: _action_types.TeamTypes.SELECT_TEAM,
                  data: created.id
                }]), getState);
                dispatch((0, _roles.loadRolesIfNeeded)(member.roles.split(' ')));
                return _context2.abrupt("return", {
                  data: created
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      return function (_x6, _x7) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function deleteTeam(teamId
/*: string*/
)
/*: ActionFunc*/
{
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
        var entities, currentTeamId, actions;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _client.Client4.deleteTeam(teamId);

              case 3:
                _context3.next = 10;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context3.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context3.t0));
                return _context3.abrupt("return", {
                  error: _context3.t0
                });

              case 10:
                entities = getState().entities;
                currentTeamId = entities.teams.currentTeamId;
                actions = [];

                if (teamId === currentTeamId) {
                  _event_emitter.default.emit('leave_team');

                  actions.push({
                    type: _action_types.ChannelTypes.SELECT_CHANNEL,
                    data: ''
                  });
                }

                actions.push({
                  type: _action_types.TeamTypes.RECEIVED_TEAM_DELETED,
                  data: {
                    id: teamId
                  }
                });
                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context3.abrupt("return", {
                  data: true
                });

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      return function (_x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

function updateTeam(team
/*: Team*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.updateTeam,
    onSuccess: _action_types.TeamTypes.UPDATED_TEAM,
    params: [team]
  });
}

function patchTeam(team
/*: Team*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.patchTeam,
    onSuccess: _action_types.TeamTypes.PATCHED_TEAM,
    params: [team]
  });
}

function getMyTeamMembers()
/*: ActionFunc*/
{
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
        var getMyTeamMembersFunc, teamMembers, roles, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, teamMember, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, role;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                getMyTeamMembersFunc = (0, _helpers.bindClientFunc)({
                  clientFunc: _client.Client4.getMyTeamMembers,
                  onSuccess: _action_types.TeamTypes.RECEIVED_MY_TEAM_MEMBERS
                });
                _context4.next = 3;
                return getMyTeamMembersFunc(dispatch, getState);

              case 3:
                teamMembers
                /*: ActionResult*/
                = _context4.sent;

                if (!teamMembers.data) {
                  _context4.next = 50;
                  break;
                }

                roles = new Set();
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 9;
                _iterator = teamMembers.data[Symbol.iterator]();

              case 11:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 35;
                  break;
                }

                teamMember = _step.value;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 16;

                for (_iterator2 = teamMember.roles.split(' ')[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  role = _step2.value;
                  roles.add(role);
                }

                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](16);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t0;

              case 24:
                _context4.prev = 24;
                _context4.prev = 25;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 27:
                _context4.prev = 27;

                if (!_didIteratorError2) {
                  _context4.next = 30;
                  break;
                }

                throw _iteratorError2;

              case 30:
                return _context4.finish(27);

              case 31:
                return _context4.finish(24);

              case 32:
                _iteratorNormalCompletion = true;
                _context4.next = 11;
                break;

              case 35:
                _context4.next = 41;
                break;

              case 37:
                _context4.prev = 37;
                _context4.t1 = _context4["catch"](9);
                _didIteratorError = true;
                _iteratorError = _context4.t1;

              case 41:
                _context4.prev = 41;
                _context4.prev = 42;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 44:
                _context4.prev = 44;

                if (!_didIteratorError) {
                  _context4.next = 47;
                  break;
                }

                throw _iteratorError;

              case 47:
                return _context4.finish(44);

              case 48:
                return _context4.finish(41);

              case 49:
                if (roles.size > 0) {
                  dispatch((0, _roles.loadRolesIfNeeded)(_toConsumableArray(roles)));
                }

              case 50:
                return _context4.abrupt("return", teamMembers);

              case 51:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[9, 37, 41, 49], [16, 20, 24, 32], [25,, 27, 31], [42,, 44, 48]]);
      }));

      return function (_x10, _x11) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function getTeamMembers(teamId
/*: string*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.TEAMS_CHUNK_SIZE;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeamMembers,
    onRequest: _action_types.TeamTypes.GET_TEAM_MEMBERS_REQUEST,
    onSuccess: [_action_types.TeamTypes.RECEIVED_MEMBERS_IN_TEAM, _action_types.TeamTypes.GET_TEAM_MEMBERS_SUCCESS],
    onFailure: _action_types.TeamTypes.GET_TEAM_MEMBERS_FAILURE,
    params: [teamId, page, perPage]
  });
}

function getTeamMember(teamId
/*: string*/
, userId
/*: string*/
)
/*: ActionFunc*/
{
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
        var member, memberRequest;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                memberRequest = _client.Client4.getTeamMember(teamId, userId);
                getProfilesAndStatusesForMembers([userId], dispatch, getState);
                _context5.next = 5;
                return memberRequest;

              case 5:
                member = _context5.sent;
                _context5.next = 13;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context5.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context5.t0));
                return _context5.abrupt("return", {
                  error: _context5.t0
                });

              case 13:
                dispatch({
                  type: _action_types.TeamTypes.RECEIVED_MEMBERS_IN_TEAM,
                  data: [member]
                });
                return _context5.abrupt("return", {
                  data: member
                });

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      return function (_x12, _x13) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

function getTeamMembersByIds(teamId
/*: string*/
, userIds
/*: Array<string>*/
)
/*: ActionFunc*/
{
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
        var members, membersRequest;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                membersRequest = _client.Client4.getTeamMembersByIds(teamId, userIds);
                getProfilesAndStatusesForMembers(userIds, dispatch, getState);
                _context6.next = 5;
                return membersRequest;

              case 5:
                members = _context6.sent;
                _context6.next = 13;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context6.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context6.t0));
                return _context6.abrupt("return", {
                  error: _context6.t0
                });

              case 13:
                dispatch({
                  type: _action_types.TeamTypes.RECEIVED_MEMBERS_IN_TEAM,
                  data: members
                });
                return _context6.abrupt("return", {
                  data: members
                });

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      return function (_x14, _x15) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}

function getTeamsForUser(userId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeamsForUser,
    onRequest: _action_types.TeamTypes.GET_TEAMS_REQUEST,
    onSuccess: [_action_types.TeamTypes.RECEIVED_TEAMS_LIST, _action_types.TeamTypes.GET_TEAMS_SUCCESS],
    onFailure: _action_types.TeamTypes.GET_TEAMS_FAILURE,
    params: [userId]
  });
}

function getTeamMembersForUser(userId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeamMembersForUser,
    onSuccess: _action_types.TeamTypes.RECEIVED_TEAM_MEMBERS,
    params: [userId]
  });
}

function getTeamStats(teamId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeamStats,
    onSuccess: _action_types.TeamTypes.RECEIVED_TEAM_STATS,
    params: [teamId]
  });
}

function addUserToTeamFromInvite(token
/*: string*/
, inviteId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.addToTeamFromInvite,
    onRequest: _action_types.TeamTypes.ADD_TO_TEAM_FROM_INVITE_REQUEST,
    onSuccess: _action_types.TeamTypes.ADD_TO_TEAM_FROM_INVITE_SUCCESS,
    onFailure: _action_types.TeamTypes.ADD_TO_TEAM_FROM_INVITE_FAILURE,
    params: [token, inviteId]
  });
}

function addUserToTeam(teamId
/*: string*/
, userId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var member;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _client.Client4.addToTeam(teamId, userId);

              case 3:
                member = _context7.sent;
                _context7.next = 11;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context7.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context7.t0));
                return _context7.abrupt("return", {
                  error: _context7.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.UserTypes.RECEIVED_PROFILE_IN_TEAM,
                  data: {
                    id: teamId,
                    user_id: userId
                  }
                }, {
                  type: _action_types.TeamTypes.RECEIVED_MEMBER_IN_TEAM,
                  data: member
                }]), getState);
                return _context7.abrupt("return", {
                  data: member
                });

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 6]]);
      }));

      return function (_x16, _x17) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
}

function addUsersToTeam(teamId
/*: string*/
, userIds
/*: Array<string>*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var members, profiles;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _client.Client4.addUsersToTeam(teamId, userIds);

              case 3:
                members = _context8.sent;
                _context8.next = 11;
                break;

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context8.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context8.t0));
                return _context8.abrupt("return", {
                  error: _context8.t0
                });

              case 11:
                profiles = [];
                members.forEach(function (m) {
                  return profiles.push({
                    id: m.user_id
                  });
                });
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.UserTypes.RECEIVED_PROFILES_LIST_IN_TEAM,
                  data: profiles,
                  id: teamId
                }, {
                  type: _action_types.TeamTypes.RECEIVED_MEMBERS_IN_TEAM,
                  data: members
                }]), getState);
                return _context8.abrupt("return", {
                  data: members
                });

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 6]]);
      }));

      return function (_x18, _x19) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
}

function removeUserFromTeam(teamId
/*: string*/
, userId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var member, actions, state, currentUserId, _state$entities$chann, channels, myMembers, _arr, _i, channelMember, channel;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _client.Client4.removeFromTeam(teamId, userId);

              case 3:
                _context9.next = 10;
                break;

              case 5:
                _context9.prev = 5;
                _context9.t0 = _context9["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context9.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context9.t0));
                return _context9.abrupt("return", {
                  error: _context9.t0
                });

              case 10:
                member = {
                  team_id: teamId,
                  user_id: userId
                };
                actions = [{
                  type: _action_types.UserTypes.RECEIVED_PROFILE_NOT_IN_TEAM,
                  data: {
                    id: teamId,
                    user_id: userId
                  }
                }, {
                  type: _action_types.TeamTypes.REMOVE_MEMBER_FROM_TEAM,
                  data: member
                }];
                state = getState();
                currentUserId = state.entities.users.currentUserId;

                if (currentUserId === userId) {
                  _state$entities$chann = state.entities.channels, channels = _state$entities$chann.channels, myMembers = _state$entities$chann.myMembers;
                  _arr = Object.values(myMembers);

                  for (_i = 0; _i < _arr.length; _i++) {
                    channelMember = _arr[_i];
                    // https://github.com/facebook/flow/issues/2221
                    // $FlowFixMe - Object.values currently does not have good flow support
                    channel = channels[channelMember.channel_id];

                    if (channel && channel.team_id === teamId) {
                      actions.push({
                        type: _action_types.ChannelTypes.LEAVE_CHANNEL,
                        data: channel
                      });
                    }
                  }
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context9.abrupt("return", {
                  data: true
                });

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 5]]);
      }));

      return function (_x20, _x21) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
}

function updateTeamMemberRoles(teamId
/*: string*/
, userId
/*: string*/
, roles
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var membersInTeam;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _client.Client4.updateTeamMemberRoles(teamId, userId, roles);

              case 3:
                _context10.next = 10;
                break;

              case 5:
                _context10.prev = 5;
                _context10.t0 = _context10["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context10.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context10.t0));
                return _context10.abrupt("return", {
                  error: _context10.t0
                });

              case 10:
                membersInTeam = getState().entities.teams.membersInTeam[teamId];

                if (membersInTeam && membersInTeam[userId]) {
                  dispatch({
                    type: _action_types.TeamTypes.RECEIVED_MEMBER_IN_TEAM,
                    data: _objectSpread({}, membersInTeam[userId], {
                      roles: roles
                    })
                  });
                }

                return _context10.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 5]]);
      }));

      return function (_x22, _x23) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
}

function sendEmailInvitesToTeam(teamId
/*: string*/
, emails
/*: Array<string>*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.sendEmailInvitesToTeam,
    params: [teamId, emails]
  });
}

function getTeamInviteInfo(inviteId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getTeamInviteInfo,
    onRequest: _action_types.TeamTypes.TEAM_INVITE_INFO_REQUEST,
    onSuccess: _action_types.TeamTypes.TEAM_INVITE_INFO_SUCCESS,
    onFailure: _action_types.TeamTypes.TEAM_INVITE_INFO_FAILURE,
    params: [inviteId]
  });
}

function checkIfTeamExists(teamName
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var data;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _client.Client4.checkIfTeamExists(teamName);

              case 3:
                data = _context11.sent;
                _context11.next = 11;
                break;

              case 6:
                _context11.prev = 6;
                _context11.t0 = _context11["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context11.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context11.t0));
                return _context11.abrupt("return", {
                  error: _context11.t0
                });

              case 11:
                return _context11.abrupt("return", {
                  data: data.exists
                });

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 6]]);
      }));

      return function (_x24, _x25) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
}

function joinTeam(inviteId
/*: string*/
, teamId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                dispatch({
                  type: _action_types.TeamTypes.JOIN_TEAM_REQUEST,
                  data: null
                }, getState);
                _context12.prev = 1;
                _context12.next = 4;
                return _client.Client4.joinTeam(inviteId);

              case 4:
                _context12.next = 11;
                break;

              case 6:
                _context12.prev = 6;
                _context12.t0 = _context12["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context12.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.TeamTypes.JOIN_TEAM_FAILURE,
                  error: _context12.t0
                }, (0, _errors.logError)(_context12.t0)]));
                return _context12.abrupt("return", {
                  error: _context12.t0
                });

              case 11:
                getMyTeamUnreads()(dispatch, getState);
                _context12.next = 14;
                return Promise.all([getTeam(teamId)(dispatch, getState), getMyTeamMembers()(dispatch, getState)]);

              case 14:
                dispatch({
                  type: _action_types.TeamTypes.JOIN_TEAM_SUCCESS,
                  data: null
                }, getState);
                return _context12.abrupt("return", {
                  data: true
                });

              case 16:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 6]]);
      }));

      return function (_x26, _x27) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
}

function setTeamIcon(teamId
/*: string*/
, imageData
/*: File*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.setTeamIcon,
    params: [teamId, imageData]
  });
}

function removeTeamIcon(teamId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.removeTeamIcon,
    params: [teamId]
  });
}

function updateTeamScheme(teamId
/*: string*/
, schemeId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: function () {
      var _clientFunc = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13() {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return _client.Client4.updateTeamScheme(teamId, schemeId);

              case 2:
                return _context13.abrupt("return", {
                  teamId: teamId,
                  schemeId: schemeId
                });

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function clientFunc() {
        return _clientFunc.apply(this, arguments);
      }

      return clientFunc;
    }(),
    onSuccess: _action_types.TeamTypes.UPDATED_TEAM_SCHEME
  });
}

function updateTeamMemberSchemeRoles(teamId
/*: string*/
, userId
/*: string*/
, isSchemeUser
/*: boolean*/
, isSchemeAdmin
/*: boolean*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: function () {
      var _clientFunc2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14() {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return _client.Client4.updateTeamMemberSchemeRoles(teamId, userId, isSchemeUser, isSchemeAdmin);

              case 2:
                return _context14.abrupt("return", {
                  teamId: teamId,
                  userId: userId,
                  isSchemeUser: isSchemeUser,
                  isSchemeAdmin: isSchemeAdmin
                });

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function clientFunc() {
        return _clientFunc2.apply(this, arguments);
      }

      return clientFunc;
    }(),
    onSuccess: _action_types.TeamTypes.UPDATED_TEAM_MEMBER_SCHEME_ROLES
  });
}