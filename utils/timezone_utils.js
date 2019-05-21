/*:: import type {UserTimezone} from 'types/users';*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserCurrentTimezone = getUserCurrentTimezone;
exports.getTimezoneRegion = getTimezoneRegion;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getUserCurrentTimezone(userTimezone
/*: UserTimezone*/
)
/*: ?string*/
{
  if (!userTimezone) {
    return null;
  }

  var useAutomaticTimezone = userTimezone.useAutomaticTimezone,
      automaticTimezone = userTimezone.automaticTimezone,
      manualTimezone = userTimezone.manualTimezone;
  var useAutomatic = useAutomaticTimezone;

  if (typeof useAutomaticTimezone === 'string') {
    useAutomatic = useAutomaticTimezone === 'true';
  }

  if (useAutomatic) {
    return automaticTimezone;
  }

  return manualTimezone;
}

function getTimezoneRegion(timezone
/*: string*/
)
/*: string*/
{
  if (timezone) {
    var split = timezone.split('/');

    if (split.length > 1) {
      return split.pop().replace(/_/g, ' ');
    }
  }

  return timezone;
}