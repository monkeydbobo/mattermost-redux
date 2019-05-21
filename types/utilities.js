/*:: export type $ID<E> = $PropertyType<E, 'id'>*/

/*:: export type $UserID<E> = $PropertyType<E, 'user_id'>*/

/*:: export type $Name<E> = $PropertyType<E, 'name'>*/

/*:: export type RelationOneToOne<E, T> = { [$ID<E>]: T }*/

/*:: export type RelationOneToMany<E1, E2> = { [$ID<E1>]: Array<$ID<E2>> }*/

/*:: export type IDMappedObjects<E> = RelationOneToOne<E, E>*/

/*:: export type UserIDMappedObjects<E> = { [$UserID<E>]: E }*/

/*:: export type NameMappedObjects<E> = { [$Name<E>]: E }*/
"use strict";