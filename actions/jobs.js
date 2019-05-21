"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createJob = createJob;
exports.getJob = getJob;
exports.getJobs = getJobs;
exports.getJobsByType = getJobsByType;
exports.cancelJob = cancelJob;

var _action_types = require("../action_types");

var _client = require("../client");

var _constants = require("../constants");

var _helpers = require("./helpers");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function createJob(job
/*: Job*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.createJob,
    onRequest: _action_types.JobTypes.CREATE_JOB_REQUEST,
    onSuccess: [_action_types.JobTypes.RECEIVED_JOB, _action_types.JobTypes.CREATE_JOB_SUCCESS],
    onFailure: _action_types.JobTypes.CREATE_JOB_FAILURE,
    params: [job]
  });
}

function getJob(id
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getJob,
    onRequest: _action_types.JobTypes.GET_JOB_REQUEST,
    onSuccess: [_action_types.JobTypes.RECEIVED_JOB, _action_types.JobTypes.GET_JOB_SUCCESS],
    onFailure: _action_types.JobTypes.GET_JOB_FAILURE,
    params: [id]
  });
}

function getJobs()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.JOBS_CHUNK_SIZE;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getJobs,
    onRequest: _action_types.JobTypes.GET_JOBS_REQUEST,
    onSuccess: [_action_types.JobTypes.RECEIVED_JOBS, _action_types.JobTypes.GET_JOBS_SUCCESS],
    onFailure: _action_types.JobTypes.GET_JOBS_FAILURE,
    params: [page, perPage]
  });
}

function getJobsByType(type
/*: JobType*/
)
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var perPage
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.General.JOBS_CHUNK_SIZE;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getJobsByType,
    onRequest: _action_types.JobTypes.GET_JOBS_REQUEST,
    onSuccess: [_action_types.JobTypes.RECEIVED_JOBS, _action_types.JobTypes.RECEIVED_JOBS_BY_TYPE, _action_types.JobTypes.GET_JOBS_SUCCESS],
    onFailure: _action_types.JobTypes.GET_JOBS_FAILURE,
    params: [type, page, perPage]
  });
}

function cancelJob(job
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.cancelJob,
    onRequest: _action_types.JobTypes.CANCEL_JOB_REQUEST,
    onSuccess: _action_types.JobTypes.CANCEL_JOB_SUCCESS,
    onFailure: _action_types.JobTypes.CANCEL_JOB_FAILURE,
    params: [job]
  });
}