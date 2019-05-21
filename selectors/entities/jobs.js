"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllJobs = getAllJobs;
exports.getJobsByType = getJobsByType;
exports.makeGetJobsByType = makeGetJobsByType;

var _reselect = require("reselect");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getAllJobs(state
/*: GlobalState*/
)
/*: IDMappedObjects<Job>*/
{
  return state.entities.jobs.jobs;
}

function getJobsByType(state
/*: GlobalState*/
)
/*: {[JobType]: Array<Job>}*/
{
  return state.entities.jobs.jobsByTypeList;
}

function makeGetJobsByType(type
/*: JobType*/
)
/*: (state: GlobalState) => Array<Job>*/
{
  return (0, _reselect.createSelector)(getJobsByType, function (jobsByType) {
    return jobsByType[type] || [];
  });
}