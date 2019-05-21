/*:: export type TeamMembership = {|
    mention_count: number,
    msg_count: number,
    team_id: string,
    user_id: string,
    roles: string,
    delete_at: number,
    scheme_user: boolean,
    scheme_admin: boolean
|};*/

/*:: export type TeamType = 'O' | 'I';*/

/*:: export type Team = {|
    id: string,
    create_at: number,
    update_at: number,
    delete_at: number,
    display_name: string,
    name: string,
    description: string,
    email: string,
    type: TeamType,
    company_name: string,
    allowed_domains: string,
    invite_id: string,
    allow_open_invite: boolean,
    scheme_id: string
|};*/

/*:: export type TeamsState = {|
    currentTeamId: string,
    teams: { [string]: Team },
    myMembers: { [string]: TeamMembership },
    membersInTeam: Object,
    stats: Object
|};*/
"use strict";