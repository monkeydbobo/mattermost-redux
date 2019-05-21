"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSchemes = getSchemes;
exports.getScheme = getScheme;
exports.makeGetSchemeChannels = makeGetSchemeChannels;
exports.makeGetSchemeTeams = makeGetSchemeTeams;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/web.dom.iterable");

var _reselect = require("reselect");

var _channels = require("./channels");

var _teams = require("./teams");

var _schemes = require("../../constants/schemes");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getSchemes(state
/*: GlobalState*/
)
/*: { [string]: Scheme }*/
{
  return state.entities.schemes.schemes;
}

function getScheme(state
/*: GlobalState*/
, id
/*: string*/
)
/*: Scheme*/
{
  var schemes = getSchemes(state);
  return schemes[id];
}

function makeGetSchemeChannels() {
  return ((0, _reselect.createSelector)(_channels.getAllChannels, function (state, props
  /*: {schemeId: string}*/
  ) {
    return getScheme(state, props.schemeId);
  }, function (allChannels, scheme) {
    if (!scheme) {
      return [];
    }

    if (scheme.scope === _schemes.ScopeTypes.TEAM) {
      var msg = "Not implemented: scheme '".concat(scheme.id, "' is team-scope but 'getSchemeChannels' only accepts channel-scoped schemes.");
      console.log(msg); // eslint-disable-line no-console

      return [];
    }

    var schemeChannels
    /*: Array<Channel>*/
    = []; // $FlowFixMe

    Object.entries(allChannels).forEach(function (item
    /*: [string, Channel]*/
    ) {
      var _item = _slicedToArray(item, 2),
          channel
      /*: Channel*/
      = _item[1];

      if (channel.scheme_id === scheme.id) {
        schemeChannels.push(channel);
      }
    });
    return schemeChannels;
  })
  /*: (GlobalState, {schemeId: string}) => Array<Channel>*/
  );
}

function makeGetSchemeTeams() {
  return ((0, _reselect.createSelector)(_teams.getTeams, function (state, props
  /*: {schemeId: string}*/
  ) {
    return getScheme(state, props.schemeId);
  }, function (allTeams, scheme) {
    if (!scheme) {
      return [];
    }

    if (scheme.scope === _schemes.ScopeTypes.CHANNEL) {
      var msg = "Error: scheme '".concat(scheme.id, "' is channel-scoped but 'getSchemeChannels' only accepts team-scoped schemes.");
      console.log(msg); // eslint-disable-line no-console

      return [];
    }

    var schemeTeams
    /*: Array<Team>*/
    = []; // $FlowFixMe

    Object.entries(allTeams).forEach(function (item
    /*: [string, Team]*/
    ) {
      var _item2 = _slicedToArray(item, 2),
          team
      /*: Team*/
      = _item2[1];

      if (team.scheme_id === scheme.id) {
        schemeTeams.push(team);
      }
    });
    return schemeTeams;
  })
  /*: (GlobalState, {schemeId: string}) => Array<Team>*/
  );
}