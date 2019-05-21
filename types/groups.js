/*:: export type SyncableType = 'team' | 'channel';*/

/*:: export type SyncablePatch = {|
    can_leave: boolean,
    auto_add: boolean
|};*/

/*:: export type Group = {|
    id: string,
    name: string,
    display_name: string,
    description: string,
    type: string,
    remote_id: string,
    create_at: number,
    update_at: number,
    delete_at: number,
    has_syncables: boolean,
|};*/

/*:: export type GroupTeam = {|
    team_id: string,
    team_display_name: string,
    team_type: string,
    group_id: string,
    can_leave: boolean,
    auto_add: boolean,
    create_at: number,
    delete_at: number,
    update_at: number,
|};*/

/*:: export type GroupChannel = {|
    channel_id: string,
    channel_display_name: string,
    channel_type: string,
    team_id: string,
    team_display_name: string,
    team_type: string,
    group_id: string,
    can_leave: boolean,
    auto_add: boolean,
    create_at: number,
    delete_at: number,
    update_at: number,
|};*/

/*:: export type GroupSyncables = {|
    teams: Array<GroupTeam>,
    channels: Array<GroupChannel>,
|};*/

/*:: export type GroupsState = {|
    syncables: {[string]: GroupSyncables},
    members: Object,
    groups: { [string]: Group },
|};*/
"use strict";