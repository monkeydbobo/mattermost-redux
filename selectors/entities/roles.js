"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = getRoles;
exports.haveICurrentChannelPermission = exports.haveICurrentTeamPermission = exports.haveIChannelPermission = exports.haveITeamPermission = exports.haveISystemPermission = exports.getMyChannelPermissions = exports.getMyTeamPermissions = exports.getMyCurrentChannelPermissions = exports.getMyCurrentTeamPermissions = exports.getMySystemPermissions = exports.getRolesById = exports.getMyRoles = exports.getMyChannelRoles = exports.getMyTeamRoles = exports.getMySystemRoles = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _reselect = require("reselect");

var _common = require("./common");

var _teams = require("./teams");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
var getMySystemRoles = (0, _reselect.createSelector)(_common.getCurrentUser, function (user) {
  if (user) {
    return new Set(user.roles.split(' '));
  }

  return new Set();
});
exports.getMySystemRoles = getMySystemRoles;
var getMyTeamRoles = (0, _reselect.createSelector)(_teams.getTeamMemberships, function (teamsMemberships) {
  var roles = {};

  if (teamsMemberships) {
    for (var key in teamsMemberships) {
      if (teamsMemberships.hasOwnProperty(key) && teamsMemberships[key].roles) {
        roles[key] = new Set(teamsMemberships[key].roles.split(' '));
      }
    }
  }

  return roles;
});
exports.getMyTeamRoles = getMyTeamRoles;
var getMyChannelRoles = (0, _reselect.createSelector)(function (state) {
  return state.entities.channels.myMembers;
}, function (channelsMemberships) {
  var roles = {};

  if (channelsMemberships) {
    for (var key in channelsMemberships) {
      if (channelsMemberships.hasOwnProperty(key) && channelsMemberships[key].roles) {
        roles[key] = new Set(channelsMemberships[key].roles.split(' '));
      }
    }
  }

  return roles;
});
exports.getMyChannelRoles = getMyChannelRoles;
var getMyRoles = (0, _reselect.createSelector)(getMySystemRoles, getMyTeamRoles, getMyChannelRoles, function (systemRoles, teamRoles, channelRoles) {
  return {
    system: systemRoles,
    team: teamRoles,
    channel: channelRoles
  };
});
exports.getMyRoles = getMyRoles;

function getRoles(state) {
  return state.entities.roles.roles;
}

var getRolesById = (0, _reselect.createSelector)(getRoles, function (rolesByName) {
  var rolesById = {};

  var _arr = Object.values(rolesByName);

  for (var _i = 0; _i < _arr.length; _i++) {
    var role = _arr[_i];
    rolesById[role.id] = role;
  }

  return rolesById;
});
exports.getRolesById = getRolesById;
var getMySystemPermissions = (0, _reselect.createSelector)(getMySystemRoles, getRoles, function (mySystemRoles, roles) {
  var permissions = new Set();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mySystemRoles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var roleName = _step.value;

      if (roles[roleName]) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = roles[roleName].permissions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var permission = _step2.value;
            permissions.add(permission);
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
      }
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

  return permissions;
});
exports.getMySystemPermissions = getMySystemPermissions;
var getMyCurrentTeamPermissions = (0, _reselect.createSelector)(getMyTeamRoles, getRoles, getMySystemPermissions, _teams.getCurrentTeamId, function (myTeamRoles, roles, systemPermissions, teamId) {
  var permissions = new Set();

  if (myTeamRoles[teamId]) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = myTeamRoles[teamId][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var roleName = _step3.value;

        if (roles[roleName]) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = roles[roleName].permissions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var permission = _step4.value;
              permissions.add(permission);
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
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = systemPermissions[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _permission = _step5.value;
      permissions.add(_permission);
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

  return permissions;
});
exports.getMyCurrentTeamPermissions = getMyCurrentTeamPermissions;
var getMyCurrentChannelPermissions = (0, _reselect.createSelector)(getMyChannelRoles, getRoles, getMyCurrentTeamPermissions, _common.getCurrentChannelId, function (myChannelRoles, roles, teamPermissions, channelId) {
  var permissions = new Set();

  if (myChannelRoles[channelId]) {
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = myChannelRoles[channelId][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var roleName = _step6.value;

        if (roles[roleName]) {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = roles[roleName].permissions[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var permission = _step7.value;
              permissions.add(permission);
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }

  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = teamPermissions[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var _permission2 = _step8.value;
      permissions.add(_permission2);
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  return permissions;
});
exports.getMyCurrentChannelPermissions = getMyCurrentChannelPermissions;
var getMyTeamPermissions = (0, _reselect.createSelector)(getMyTeamRoles, getRoles, getMySystemPermissions, function (state, options) {
  return options.team;
}, function (myTeamRoles, roles, systemPermissions, teamId) {
  var permissions = new Set();

  if (myTeamRoles[teamId]) {
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = myTeamRoles[teamId][Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var roleName = _step9.value;

        if (roles[roleName]) {
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = roles[roleName].permissions[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var permission = _step10.value;
              permissions.add(permission);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
          _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }
  }

  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = systemPermissions[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var _permission3 = _step11.value;
      permissions.add(_permission3);
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
        _iterator11.return();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }

  return permissions;
});
exports.getMyTeamPermissions = getMyTeamPermissions;
var getMyChannelPermissions = (0, _reselect.createSelector)(getMyChannelRoles, getRoles, getMyTeamPermissions, function (state, options) {
  return options.channel;
}, function (myChannelRoles, roles, teamPermissions, channelId) {
  var permissions = new Set();

  if (myChannelRoles[channelId]) {
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = myChannelRoles[channelId][Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var roleName = _step12.value;

        if (roles[roleName]) {
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = roles[roleName].permissions[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var permission = _step13.value;
              permissions.add(permission);
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                _iterator13.return();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
          _iterator12.return();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }
  }

  var _iteratorNormalCompletion14 = true;
  var _didIteratorError14 = false;
  var _iteratorError14 = undefined;

  try {
    for (var _iterator14 = teamPermissions[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
      var _permission4 = _step14.value;
      permissions.add(_permission4);
    }
  } catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
        _iterator14.return();
      }
    } finally {
      if (_didIteratorError14) {
        throw _iteratorError14;
      }
    }
  }

  return permissions;
});
exports.getMyChannelPermissions = getMyChannelPermissions;
var haveISystemPermission = (0, _reselect.createSelector)(getMySystemPermissions, function (state, options) {
  return options.permission;
}, function (permissions, permission) {
  return permissions.has(permission);
});
exports.haveISystemPermission = haveISystemPermission;
var haveITeamPermission = (0, _reselect.createSelector)(getMyTeamPermissions, function (state, options) {
  return options.permission;
}, function (permissions, permission) {
  return permissions.has(permission);
});
exports.haveITeamPermission = haveITeamPermission;
var haveIChannelPermission = (0, _reselect.createSelector)(getMyChannelPermissions, function (state, options) {
  return options.permission;
}, function (permissions, permission) {
  return permissions.has(permission);
});
exports.haveIChannelPermission = haveIChannelPermission;
var haveICurrentTeamPermission = (0, _reselect.createSelector)(getMyCurrentTeamPermissions, function (state, options) {
  return options.permission;
}, function (permissions, permission) {
  return permissions.has(permission);
});
exports.haveICurrentTeamPermission = haveICurrentTeamPermission;
var haveICurrentChannelPermission = (0, _reselect.createSelector)(getMyCurrentChannelPermissions, function (state, options) {
  return options.permission;
}, function (permissions, permission) {
  return permissions.has(permission);
});
exports.haveICurrentChannelPermission = haveICurrentChannelPermission;