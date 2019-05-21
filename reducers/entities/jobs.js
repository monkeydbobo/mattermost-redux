"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _redux = require("redux");

var _action_types = require("../../action_types");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function jobs()
/*: IDMappedObjects<Job>*/
{
  var state
  /*: IDMappedObjects<Job>*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.JobTypes.RECEIVED_JOB:
      {
        var nextState = _objectSpread({}, state);

        nextState[action.data.id] = action.data;
        return nextState;
      }

    case _action_types.JobTypes.RECEIVED_JOBS:
      {
        var _nextState = _objectSpread({}, state);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = action.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var job = _step.value;
            _nextState[job.id] = job;
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

    default:
      return state;
  }
}

function jobsByTypeList()
/*: {[JobType]: Array<Job>}*/
{
  var state
  /*: {[JobType]: Array<Job>}*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types.JobTypes.RECEIVED_JOBS_BY_TYPE:
      {
        var nextState = _objectSpread({}, state);

        if (action.data && action.data.length && action.data.length > 0) {
          nextState[action.data[0].type] = action.data;
        }

        return nextState;
      }

    default:
      return state;
  }
}

var _default = ((0, _redux.combineReducers)({
  // object where every key is the job id and has an object with the job details
  jobs: jobs,
  // object where every key is a job type and contains a list of jobs.
  jobsByTypeList: jobsByTypeList
})
/*: (JobsState, GenericAction) => JobsState*/
);

exports.default = _default;