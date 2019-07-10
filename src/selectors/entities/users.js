// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {createSelector} from 'reselect';

import {
    getCurrentChannelId,
    getCurrentUser,
    getCurrentUserId,
    getMyCurrentChannelMembership,
    getUsers,
} from 'selectors/entities/common';

import {getConfig, getLicense} from 'selectors/entities/general';
import {
    getDirectShowPreferences,
    getTeammateNameDisplaySetting,
} from 'selectors/entities/preferences';

import {
    displayUsername,
    filterProfilesMatchingTerm,
    sortByUsername,
    isSystemAdmin,
} from 'utils/user_utils';

export {getCurrentUserId, getCurrentUser, getUsers};

export function getUserIdsInChannels(state) {
    return state.entities.users.profilesInChannel;
}

export function getUserIdsNotInChannels(state) {
    return state.entities.users.profilesNotInChannel;
}

export function getUserIdsInTeams(state) {
    return state.entities.users.profilesInTeam;
}

export function getUserIdsNotInTeams(state) {
    return state.entities.users.profilesNotInTeam;
}

export function getUserIdsWithoutTeam(state) {
    return state.entities.users.profilesWithoutTeam;
}

export function getUserStatuses(state) {
    return state.entities.users.statuses;
}

export function getUserSessions(state) {
    return state.entities.users.mySessions;
}

export function getUserAudits(state) {
    return state.entities.users.myAudits;
}

export function getUser(state, id) {
    return state.entities.users.profiles[id];
}

export const getUsersByUsername = createSelector(
    getUsers,
    (users) => {
        const usersByUsername = {};

        for (const id in users) {
            if (users.hasOwnProperty(id)) {
                const user = users[id];
                usersByUsername[user.username] = user;
            }
        }

        return usersByUsername;
    }
);

export function getUserByUsername(state, username) {
    return getUsersByUsername(state)[username];
}

export const getUsersByEmail = createSelector(
    getUsers,
    (users) => {
        const usersByEmail = {};

        for (const user of Object.values(users)) {
            usersByEmail[user.email] = user;
        }

        return usersByEmail;
    }
);

export function getUserByEmail(state, email) {
    return getUsersByEmail(state)[email];
}

export const isCurrentUserSystemAdmin = createSelector(
    getCurrentUser,
    (user) => {
        const roles = user.roles || '';
        return isSystemAdmin(roles);
    }
);

export const getCurrentUserRoles = createSelector(
    getMyCurrentChannelMembership,
    (state) => state.entities.teams.myMembers[state.entities.teams.currentTeamId],
    getCurrentUser,
    (currentChannelMembership, currentTeamMembership, currentUser) => {
        let roles = '';
        if (currentTeamMembership) {
            roles += `${currentTeamMembership.roles} `;
        }

        if (currentChannelMembership) {
            roles += `${currentChannelMembership.roles} `;
        }

        if (currentUser) {
            roles += currentUser.roles;
        }
        return roles.trim();
    }
);

export const getCurrentUserMentionKeys = createSelector(
    getCurrentUser,
    (user) => {
        let keys = [];

        if (!user || !user.notify_props) {
            return keys;
        }

        if (user.notify_props.mention_keys) {
            keys = keys.concat(
                user.notify_props.mention_keys.split(',').map((key) => {
                    return {key};
                })
            );
        }

        if (user.notify_props.first_name === 'true' && user.first_name) {
            keys.push({key: user.first_name, caseSensitive: true});
        }

        if (user.notify_props.channel === 'true') {
            keys.push({key: '@channel'});
            keys.push({key: '@all'});
            keys.push({key: '@here'});
        }

        const usernameKey = '@' + user.username;
        if (keys.findIndex((key) => key.key === usernameKey) === -1) {
            keys.push({key: usernameKey});
        }

        return keys;
    }
);

export const getProfileSetInCurrentChannel = createSelector(
    getCurrentChannelId,
    getUserIdsInChannels,
    (currentChannel, channelProfiles) => {
        return channelProfiles[currentChannel];
    }
);

export const getProfileSetNotInCurrentChannel = createSelector(
    getCurrentChannelId,
    getUserIdsNotInChannels,
    (currentChannel, channelProfiles) => {
        return channelProfiles[currentChannel];
    }
);

export const getProfileSetInCurrentTeam = createSelector(
    (state) => state.entities.teams.currentTeamId,
    getUserIdsInTeams,
    (currentTeam, teamProfiles) => {
        return teamProfiles[currentTeam];
    }
);

export const getProfileSetNotInCurrentTeam = createSelector(
    (state) => state.entities.teams.currentTeamId,
    getUserIdsNotInTeams,
    (currentTeam, teamProfiles) => {
        return teamProfiles[currentTeam];
    }
);

const PROFILE_SET_ALL = 'all';
function sortAndInjectProfiles(profiles, profileSet, skipInactive = false) {
    let currentProfiles = [];
    if (typeof profileSet === 'undefined') {
        return currentProfiles;
    } else if (profileSet === PROFILE_SET_ALL) {
        currentProfiles = Object.values(profiles);
    } else {
        currentProfiles = Array.from(profileSet).map((p) => profiles[p]);
    }

    currentProfiles = currentProfiles.filter((profile) => Boolean(profile));

    if (skipInactive) {
        currentProfiles = currentProfiles.filter(
            (profile) => !(profile.delete_at && profile.delete_at !== 0)
        );
    }

    return currentProfiles.sort(sortByUsername);
}

export const getProfiles = createSelector(
    getUsers,
    (state, filters) => filters,
    (profiles, filters) => {
        return sortAndInjectProfiles(
            filterProfiles(profiles, filters),
            PROFILE_SET_ALL
        );
    }
);

function filterProfiles(profiles, filters) {
    if (!filters || Object.keys(filters).length === 0) {
        return profiles;
    }

    let users = Object.values(profiles);

    if (filters.role && filters.role !== '') {
        users = users.filter(
            (user) => user.roles && user.roles.indexOf(filters.role) !== -1
        );
    }

    if (filters.inactive) {
        users = users.filter((user) => user.delete_at !== 0);
    }

    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

export const getProfilesInCurrentChannel = createSelector(
    getUsers,
    getProfileSetInCurrentChannel,
    (profiles, currentChannelProfileSet) => {
        return sortAndInjectProfiles(profiles, currentChannelProfileSet);
    }
);

export const getProfilesNotInCurrentChannel = createSelector(
    getUsers,
    getProfileSetNotInCurrentChannel,
    (profiles, notInCurrentChannelProfileSet) => {
        return sortAndInjectProfiles(profiles, notInCurrentChannelProfileSet);
    }
);

export const getProfilesInCurrentTeam = createSelector(
    getUsers,
    getProfileSetInCurrentTeam,
    (profiles, currentTeamProfileSet) => {
        return sortAndInjectProfiles(profiles, currentTeamProfileSet);
    }
);

export const getProfilesInTeam = createSelector(
    getUsers,
    getUserIdsInTeams,
    (state, teamId) => teamId,
    (state, teamId, filters) => filters,
    (profiles, usersInTeams, teamId, filters) => {
        return sortAndInjectProfiles(
            filterProfiles(profiles, filters),
            usersInTeams[teamId] || new Set()
        );
    }
);

export const getProfilesNotInCurrentTeam = createSelector(
    getUsers,
    getProfileSetNotInCurrentTeam,
    (profiles, notInCurrentTeamProfileSet) => {
        return sortAndInjectProfiles(profiles, notInCurrentTeamProfileSet);
    }
);

export const getProfilesWithoutTeam = createSelector(
    getUsers,
    getUserIdsWithoutTeam,
    (state, filters) => filters,
    (profiles, withoutTeamProfileSet, filters) => {
        return sortAndInjectProfiles(
            filterProfiles(profiles, filters),
            withoutTeamProfileSet
        );
    }
);

export function getStatusForUserId(state, userId) {
    try {
        return getUserStatuses(state)[userId];
    } catch (error) {
        return 'offline';
    }
}

export function getTotalUsersStats(state) {
    return state.entities.users.stats;
}

export function searchProfiles(state, term, skipCurrent = false, filters = {}) {
    const profiles = filterProfilesMatchingTerm(
        Object.values(getUsers(state)),
        term,
        filters
    );
    const filteredProfiles = Object.values(filterProfiles(profiles, filters));
    if (skipCurrent) {
        removeCurrentUserFromList(filteredProfiles, getCurrentUserId(state));
    }

    return filteredProfiles;
}

export function searchProfilesInCurrentChannel(
    state,
    term,
    skipCurrent = false
) {
    const profiles = filterProfilesMatchingTerm(
        getProfilesInCurrentChannel(state),
        term
    );
    if (skipCurrent) {
        removeCurrentUserFromList(profiles, getCurrentUserId(state));
    }

    return profiles;
}

export function searchProfilesNotInCurrentChannel(
    state,
    term,
    skipCurrent = false
) {
    const profiles = filterProfilesMatchingTerm(
        getProfilesNotInCurrentChannel(state),
        term
    );
    if (skipCurrent) {
        removeCurrentUserFromList(profiles, getCurrentUserId(state));
    }

    return profiles;
}

export function searchProfilesInCurrentTeam(state, term, skipCurrent = false) {
    const profiles = filterProfilesMatchingTerm(
        getProfilesInCurrentTeam(state),
        term
    );
    if (skipCurrent) {
        removeCurrentUserFromList(profiles, getCurrentUserId(state));
    }

    return profiles;
}

export function searchProfilesInTeam(
    state,
    teamId,
    term,
    skipCurrent = false,
    filters = {}
) {
    const profiles = filterProfilesMatchingTerm(
        getProfilesInTeam(state, teamId),
        term
    );
    const filteredProfiles = Object.values(filterProfiles(profiles, filters));
    if (skipCurrent) {
        removeCurrentUserFromList(filteredProfiles, getCurrentUserId(state));
    }

    return filteredProfiles;
}

export function searchProfilesNotInCurrentTeam(
    state,
    term,
    skipCurrent = false
) {
    const profiles = filterProfilesMatchingTerm(
        getProfilesNotInCurrentTeam(state),
        term
    );
    if (skipCurrent) {
        removeCurrentUserFromList(profiles, getCurrentUserId(state));
    }

    return profiles;
}

export function searchProfilesWithoutTeam(
    state,
    term,
    skipCurrent = false,
    filters = {}
) {
    const profiles = filterProfilesMatchingTerm(
        getProfilesWithoutTeam(state),
        term
    );
    const filteredProfiles = Object.values(filterProfiles(profiles, filters));
    if (skipCurrent) {
        removeCurrentUserFromList(filteredProfiles, getCurrentUserId(state));
    }

    return filteredProfiles;
}

function removeCurrentUserFromList(profiles, currentUserId) {
    const index = profiles.findIndex((p) => p.id === currentUserId);
    if (index >= 0) {
        profiles.splice(index, 1);
    }
}

export function getMyAcceptedTermsOfServiceData(state) {
    return state.entities.users.myAcceptedTermsOfServiceData;
}

export const shouldShowTermsOfService = createSelector(
    getConfig,
    getCurrentUser,
    getLicense,
    getMyAcceptedTermsOfServiceData,
    (config, user, license, myAcceptedTermsOfServiceData) => {
        // Defaults to false if the user is not logged in or the setting doesn't exist

        const acceptedTermsId = myAcceptedTermsOfServiceData.id;
        const acceptedAt = myAcceptedTermsOfServiceData.time;

        const featureEnabled =
            license.IsLicensed === 'true' &&
            config.EnableCustomTermsOfService === 'true';
        const reacceptanceTime =
            config.CustomTermsOfServiceReAcceptancePeriod * 1000 * 60 * 60 * 24;
        const timeElapsed = new Date().getTime() - acceptedAt;
        return Boolean(
            user &&
                featureEnabled &&
                (config.CustomTermsOfServiceId !== acceptedTermsId ||
                    timeElapsed > reacceptanceTime)
        );
    }
);

export const getUsersInVisibleDMs = createSelector(
    getUsers,
    getDirectShowPreferences,
    (users, preferences) => {
        const dmUsers = [];
        preferences.forEach((pref) => {
            if (pref.value === 'true' && users[pref.name]) {
                dmUsers.push(users[pref.name]);
            }
        });
        return dmUsers;
    }
);

export function makeGetProfilesForReactions() {
    return createSelector(
        getUsers,
        (state, reactions) => reactions,
        (users, reactions) => {
            const profiles = [];
            reactions.forEach((r) => {
                if (users[r.user_id]) {
                    profiles.push(users[r.user_id]);
                }
            });
            return profiles;
        }
    );
}

export function makeGetProfilesInChannel() {
    return createSelector(
        getUsers,
        getUserIdsInChannels,
        (state, channelId) => channelId,
        (state, channelId, skipInactive) => skipInactive,
        (users, userIds, channelId, skipInactive = false) => {
            const userIdsInChannel = userIds[channelId];

            if (!userIdsInChannel) {
                return [];
            }

            return sortAndInjectProfiles(users, userIdsInChannel, skipInactive);
        }
    );
}

export function makeGetProfilesNotInChannel() {
    return createSelector(
        getUsers,
        getUserIdsNotInChannels,
        (state, channelId) => channelId,
        (state, channelId, skipInactive) => skipInactive,
        (users, userIds, channelId, skipInactive = false) => {
            const userIdsInChannel = userIds[channelId];

            if (!userIdsInChannel) {
                return [];
            }

            return sortAndInjectProfiles(users, userIdsInChannel, skipInactive);
        }
    );
}

export function makeGetProfilesByIdsAndUsernames() {
    return createSelector(
        getUsers,
        getUsersByUsername,
        (state, props) => props.allUserIds,
        (state, props) => props.allUsernames,
        (allProfilesById, allProfilesByUsername, allUserIds, allUsernames) => {
            const userProfiles = [];

            if (allUserIds && allUserIds.length > 0) {
                const profilesById = allUserIds.
                    filter((userId) => allProfilesById[userId]).
                    map((userId) => allProfilesById[userId]);

                if (profilesById && profilesById.length > 0) {
                    userProfiles.push(...profilesById);
                }
            }

            if (allUsernames && allUsernames.length > 0) {
                const profilesByUsername = allUsernames.
                    filter((username) => allProfilesByUsername[username]).
                    map((username) => allProfilesByUsername[username]);

                if (profilesByUsername && profilesByUsername.length > 0) {
                    userProfiles.push(...profilesByUsername);
                }
            }

            return userProfiles;
        }
    );
}

export function makeGetDisplayName() {
    return createSelector(
        (state, userId) => getUser(state, userId),
        getTeammateNameDisplaySetting,
        (state, _, useFallbackUsername = true) => useFallbackUsername,
        (user, teammateNameDisplaySetting, useFallbackUsername) => {
            return displayUsername(
                user,
                teammateNameDisplaySetting,
                useFallbackUsername
            );
        }
    );
}
