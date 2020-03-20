import * as extensions from '../extensions'
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  ScalarType,
  EnumType
} from 'gqless'

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<'Query'>
    pokemonsByAbility: FieldsTypeArg<{ ability: string }, t_BaseResponse | null>
    pokemonsByEggGroup: FieldsTypeArg<
      { eggGroup: string },
      t_BaseResponse | null
    >
    pokemonsByGender: FieldsTypeArg<{ gender: string }, t_BaseResponse | null>
    pokemonsByGrowthRate: FieldsTypeArg<
      { growthRate: string },
      t_BaseResponse | null
    >
    pokemonsByMove: FieldsTypeArg<{ move: string }, t_BaseResponse | null>
    pokemonsByNature: FieldsTypeArg<{ nature: string }, t_BaseResponse | null>
    pokemons: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      t_PokemonList | null
    >
    pokemon: FieldsTypeArg<{ name: string }, t_Pokemon | null>
    encounter: FieldsTypeArg<{ encounter: string }, t_BaseResponse | null>
    move: FieldsTypeArg<{ move: string }, t_BaseResponse | null>
  },
  Extension<'Query'>
>

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<'String'>>

/**
 * @name BaseResponse
 * @type OBJECT
 */
type t_BaseResponse = FieldsType<
  {
    __typename: t_String<'BaseResponse'>
    message: t_String | null
    status: t_Boolean | null
    response: t_JSON | null
  },
  Extension<'BaseResponse'>
>

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<'Boolean'>
>

/**
 * @name JSON
 * @type SCALAR
 */
type t_JSON<T extends { [K: string]: any } = { [K: string]: any }> = ScalarType<
  T,
  Extension<'JSON'>
>

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<'Int'>>

/**
 * @name PokemonList
 * @type OBJECT
 */
type t_PokemonList = FieldsType<
  {
    __typename: t_String<'PokemonList'>
    count: t_Int | null
    next: t_String | null
    previous: t_String | null
    results: (t_PokemonItem | null)[] | null
    status: t_Boolean | null
    message: t_String | null
  },
  Extension<'PokemonList'>
>

/**
 * @name PokemonItem
 * @type OBJECT
 */
type t_PokemonItem = FieldsType<
  {
    __typename: t_String<'PokemonItem'>
    url: t_String | null
    name: t_String | null
    image: t_String | null
    id: t_Int | null
  },
  Extension<'PokemonItem'>
>

/**
 * @name Pokemon
 * @type OBJECT
 */
type t_Pokemon = FieldsType<
  {
    __typename: t_String<'Pokemon'>
    abilities: (t_Ability | null)[] | null
    base_experience: t_Int | null
    forms: (t_BaseName | null)[] | null
    game_indices: (t_GameIndex | null)[] | null
    height: t_Int | null
    held_items: (t_HeldItem | null)[] | null
    id: t_Int | null
    is_default: t_Boolean | null
    location_area_encounters: t_String | null
    moves: (t_Move | null)[] | null
    name: t_String | null
    order: t_Int | null
    species: t_BaseName | null
    sprites: t_Sprite | null
    stats: (t_Stat | null)[] | null
    types: (t_Type | null)[] | null
    weight: t_Int | null
    status: t_Boolean | null
    message: t_String | null
  },
  Extension<'Pokemon'>
>

/**
 * @name Ability
 * @type OBJECT
 */
type t_Ability = FieldsType<
  {
    __typename: t_String<'Ability'>
    ability: t_BaseName | null
    is_hidden: t_Boolean | null
    slot: t_Int | null
  },
  Extension<'Ability'>
>

/**
 * @name BaseName
 * @type OBJECT
 */
type t_BaseName = FieldsType<
  {
    __typename: t_String<'BaseName'>
    url: t_String | null
    name: t_String | null
  },
  Extension<'BaseName'>
>

/**
 * @name GameIndex
 * @type OBJECT
 */
type t_GameIndex = FieldsType<
  {
    __typename: t_String<'GameIndex'>
    game_index: t_Int | null
    version: t_BaseName | null
  },
  Extension<'GameIndex'>
>

/**
 * @name HeldItem
 * @type OBJECT
 */
type t_HeldItem = FieldsType<
  {
    __typename: t_String<'HeldItem'>
    item: t_BaseName | null
    version_details: (t_VersionDetail | null)[] | null
  },
  Extension<'HeldItem'>
>

/**
 * @name VersionDetail
 * @type OBJECT
 */
type t_VersionDetail = FieldsType<
  {
    __typename: t_String<'VersionDetail'>
    rarity: t_Int | null
    version: t_BaseName | null
  },
  Extension<'VersionDetail'>
>

/**
 * @name Move
 * @type OBJECT
 */
type t_Move = FieldsType<
  {
    __typename: t_String<'Move'>
    move: t_BaseName | null
    version_group_details: (t_VersionGroupDetail | null)[] | null
  },
  Extension<'Move'>
>

/**
 * @name VersionGroupDetail
 * @type OBJECT
 */
type t_VersionGroupDetail = FieldsType<
  {
    __typename: t_String<'VersionGroupDetail'>
    level_learned_at: t_Int | null
    move_learn_method: t_BaseName | null
    version_group: t_BaseName | null
  },
  Extension<'VersionGroupDetail'>
>

/**
 * @name Sprite
 * @type OBJECT
 */
type t_Sprite = FieldsType<
  {
    __typename: t_String<'Sprite'>
    back_default: t_String | null
    back_female: t_String | null
    back_shiny: t_String | null
    back_shiny_female: t_String | null
    front_default: t_String | null
    front_female: t_String | null
    front_shiny: t_String | null
    front_shiny_female: t_String | null
  },
  Extension<'Sprite'>
>

/**
 * @name Stat
 * @type OBJECT
 */
type t_Stat = FieldsType<
  {
    __typename: t_String<'Stat'>
    base_stat: t_Int | null
    effort: t_Int | null
    stat: t_BaseName | null
  },
  Extension<'Stat'>
>

/**
 * @name Type
 * @type OBJECT
 */
type t_Type = FieldsType<
  {
    __typename: t_String<'Type'>
    slot: t_Int | null
    type: t_BaseName | null
  },
  Extension<'Type'>
>

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<'Mutation'>
    hello: t_BaseResponse | null
  },
  Extension<'Mutation'>
>

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<'__Schema'>

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[]

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType: t___Type | null

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType: t___Type | null

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[]
  },
  Extension<'__Schema'>
>

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<'__Type'>
    kind: t___TypeKind
    name: t_String | null
    description: t_String | null
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >
    interfaces: t___Type[] | null
    possibleTypes: t___Type[] | null
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >
    inputFields: t___InputValue[] | null
    ofType: t___Type | null
  },
  Extension<'__Type'>
>

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | 'SCALAR'
  | 'OBJECT'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'INPUT_OBJECT'
  | 'LIST'
  | 'NON_NULL'
>

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<'__Field'>
    name: t_String
    description: t_String | null
    args: t___InputValue[]
    type: t___Type
    isDeprecated: t_Boolean
    deprecationReason: t_String | null
  },
  Extension<'__Field'>
>

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<'__InputValue'>
    name: t_String
    description: t_String | null
    type: t___Type

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue: t_String | null
  },
  Extension<'__InputValue'>
>

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<'__EnumValue'>
    name: t_String
    description: t_String | null
    isDeprecated: t_Boolean
    deprecationReason: t_String | null
  },
  Extension<'__EnumValue'>
>

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<'__Directive'>
    name: t_String
    description: t_String | null
    locations: t___DirectiveLocation[]
    args: t___InputValue[]
  },
  Extension<'__Directive'>
>

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | 'QUERY'
  | 'MUTATION'
  | 'SUBSCRIPTION'
  | 'FIELD'
  | 'FRAGMENT_DEFINITION'
  | 'FRAGMENT_SPREAD'
  | 'INLINE_FRAGMENT'
  | 'VARIABLE_DEFINITION'
  | 'SCHEMA'
  | 'SCALAR'
  | 'OBJECT'
  | 'FIELD_DEFINITION'
  | 'ARGUMENT_DEFINITION'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'ENUM_VALUE'
  | 'INPUT_OBJECT'
  | 'INPUT_FIELD_DEFINITION'
>

/**
 * @name CacheControlScope
 * @type ENUM
 */
type t_CacheControlScope = EnumType<'PUBLIC' | 'PRIVATE'>

/**
 * @name Upload
 * @type SCALAR
 */
type t_Upload<T extends any = any> = ScalarType<T, Extension<'Upload'>>

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>

/**
 * @name BaseResponse
 * @type OBJECT
 */
export type BaseResponse = TypeData<t_BaseResponse>

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>

/**
 * @name JSON
 * @type SCALAR
 */
export type JSON = TypeData<t_JSON>

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>

/**
 * @name PokemonList
 * @type OBJECT
 */
export type PokemonList = TypeData<t_PokemonList>

/**
 * @name PokemonItem
 * @type OBJECT
 */
export type PokemonItem = TypeData<t_PokemonItem>

/**
 * @name Pokemon
 * @type OBJECT
 */
export type Pokemon = TypeData<t_Pokemon>

/**
 * @name Ability
 * @type OBJECT
 */
export type Ability = TypeData<t_Ability>

/**
 * @name BaseName
 * @type OBJECT
 */
export type BaseName = TypeData<t_BaseName>

/**
 * @name GameIndex
 * @type OBJECT
 */
export type GameIndex = TypeData<t_GameIndex>

/**
 * @name HeldItem
 * @type OBJECT
 */
export type HeldItem = TypeData<t_HeldItem>

/**
 * @name VersionDetail
 * @type OBJECT
 */
export type VersionDetail = TypeData<t_VersionDetail>

/**
 * @name Move
 * @type OBJECT
 */
export type Move = TypeData<t_Move>

/**
 * @name VersionGroupDetail
 * @type OBJECT
 */
export type VersionGroupDetail = TypeData<t_VersionGroupDetail>

/**
 * @name Sprite
 * @type OBJECT
 */
export type Sprite = TypeData<t_Sprite>

/**
 * @name Stat
 * @type OBJECT
 */
export type Stat = TypeData<t_Stat>

/**
 * @name Type
 * @type OBJECT
 */
export type Type = TypeData<t_Type>

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>

/**
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export type __DirectiveLocation = TypeData<t___DirectiveLocation>

/**
 * @name CacheControlScope
 * @type ENUM
 */
export type CacheControlScope = TypeData<t_CacheControlScope>

/**
 * @name Upload
 * @type SCALAR
 */
export type Upload = TypeData<t_Upload>
