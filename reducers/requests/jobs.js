"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _action_types = require("../../action_types");

var _helpers = require("./helpers");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function createJob()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.JobTypes.CREATE_JOB_REQUEST, _action_types.JobTypes.CREATE_JOB_SUCCESS, _action_types.JobTypes.CREATE_JOB_FAILURE, state, action);
}

function getJob()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.JobTypes.GET_JOB_REQUEST, _action_types.JobTypes.GET_JOB_SUCCESS, _action_types.JobTypes.GET_JOB_FAILURE, state, action);
}

function getJobs()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.JobTypes.GET_JOBS_REQUEST, _action_types.JobTypes.GET_JOBS_SUCCESS, _action_types.JobTypes.GET_JOBS_FAILURE, state, action);
}

function cancelJob()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.JobTypes.CANCEL_JOB_REQUEST, _action_types.JobTypes.CANCEL_JOB_SUCCESS, _action_types.JobTypes.CANCEL_JOB_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  createJob: createJob,
  getJob: getJob,
  getJobs: getJobs,
  cancelJob: cancelJob
})
/*: (JobsRequestsStatuses, GenericAction) => JobsRequestsStatuses*/
);

exports.default = _default;