// @ts-nocheck
import * as extensions from '../extensions'
import { lazyGetters } from '@gqless/utils'
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  ScalarNode,
  EnumNode
} from 'gqless'

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get pokemonsByAbility() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get ability() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get pokemonsByEggGroup() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get eggGroup() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get pokemonsByGender() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get gender() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get pokemonsByGrowthRate() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get growthRate() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get pokemonsByMove() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get move() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get pokemonsByNature() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get nature() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get pokemons() {
          return new FieldNode(
            schema.PokemonList,
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              }
            }),
            true
          )
        },
        get pokemon() {
          return new FieldNode(
            schema.Pokemon,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get encounter() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get encounter() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        },
        get move() {
          return new FieldNode(
            schema.BaseResponse,
            new Arguments(
              {
                get move() {
                  return new ArgumentsField(schema.String, false)
                }
              },
              true
            ),
            true
          )
        }
      },
      { name: 'Query', extension: ((extensions as any) || {}).Query }
    )
  },
  get String() {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String
    })
  },
  get BaseResponse() {
    return new ObjectNode(
      {
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
        get status() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get response() {
          return new FieldNode(schema.JSON, undefined, true)
        }
      },
      {
        name: 'BaseResponse',
        extension: ((extensions as any) || {}).BaseResponse
      }
    )
  },
  get Boolean() {
    return new ScalarNode({
      name: 'Boolean',
      extension: ((extensions as any) || {}).Boolean
    })
  },
  get JSON() {
    return new ScalarNode({
      name: 'JSON',
      extension: ((extensions as any) || {}).JSON
    })
  },
  get Int() {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int
    })
  },
  get PokemonList() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get next() {
          return new FieldNode(schema.String, undefined, true)
        },
        get previous() {
          return new FieldNode(schema.String, undefined, true)
        },
        get results() {
          return new FieldNode(
            new ArrayNode(schema.PokemonItem, true),
            undefined,
            true
          )
        },
        get status() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      {
        name: 'PokemonList',
        extension: ((extensions as any) || {}).PokemonList
      }
    )
  },
  get PokemonItem() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get image() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true)
        }
      },
      {
        name: 'PokemonItem',
        extension: ((extensions as any) || {}).PokemonItem
      }
    )
  },
  get Pokemon() {
    return new ObjectNode(
      {
        get abilities() {
          return new FieldNode(
            new ArrayNode(schema.Ability, true),
            undefined,
            true
          )
        },
        get base_experience() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get forms() {
          return new FieldNode(
            new ArrayNode(schema.BaseName, true),
            undefined,
            true
          )
        },
        get game_indices() {
          return new FieldNode(
            new ArrayNode(schema.GameIndex, true),
            undefined,
            true
          )
        },
        get height() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get held_items() {
          return new FieldNode(
            new ArrayNode(schema.HeldItem, true),
            undefined,
            true
          )
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get is_default() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get location_area_encounters() {
          return new FieldNode(schema.String, undefined, true)
        },
        get moves() {
          return new FieldNode(
            new ArrayNode(schema.Move, true),
            undefined,
            true
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get order() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get species() {
          return new FieldNode(schema.BaseName, undefined, true)
        },
        get sprites() {
          return new FieldNode(schema.Sprite, undefined, true)
        },
        get stats() {
          return new FieldNode(
            new ArrayNode(schema.Stat, true),
            undefined,
            true
          )
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.Type, true),
            undefined,
            true
          )
        },
        get weight() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get status() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      { name: 'Pokemon', extension: ((extensions as any) || {}).Pokemon }
    )
  },
  get Ability() {
    return new ObjectNode(
      {
        get ability() {
          return new FieldNode(schema.BaseName, undefined, true)
        },
        get is_hidden() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get slot() {
          return new FieldNode(schema.Int, undefined, true)
        }
      },
      { name: 'Ability', extension: ((extensions as any) || {}).Ability }
    )
  },
  get BaseName() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      { name: 'BaseName', extension: ((extensions as any) || {}).BaseName }
    )
  },
  get GameIndex() {
    return new ObjectNode(
      {
        get game_index() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get version() {
          return new FieldNode(schema.BaseName, undefined, true)
        }
      },
      { name: 'GameIndex', extension: ((extensions as any) || {}).GameIndex }
    )
  },
  get HeldItem() {
    return new ObjectNode(
      {
        get item() {
          return new FieldNode(schema.BaseName, undefined, true)
        },
        get version_details() {
          return new FieldNode(
            new ArrayNode(schema.VersionDetail, true),
            undefined,
            true
          )
        }
      },
      { name: 'HeldItem', extension: ((extensions as any) || {}).HeldItem }
    )
  },
  get VersionDetail() {
    return new ObjectNode(
      {
        get rarity() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get version() {
          return new FieldNode(schema.BaseName, undefined, true)
        }
      },
      {
        name: 'VersionDetail',
        extension: ((extensions as any) || {}).VersionDetail
      }
    )
  },
  get Move() {
    return new ObjectNode(
      {
        get move() {
          return new FieldNode(schema.BaseName, undefined, true)
        },
        get version_group_details() {
          return new FieldNode(
            new ArrayNode(schema.VersionGroupDetail, true),
            undefined,
            true
          )
        }
      },
      { name: 'Move', extension: ((extensions as any) || {}).Move }
    )
  },
  get VersionGroupDetail() {
    return new ObjectNode(
      {
        get level_learned_at() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get move_learn_method() {
          return new FieldNode(schema.BaseName, undefined, true)
        },
        get version_group() {
          return new FieldNode(schema.BaseName, undefined, true)
        }
      },
      {
        name: 'VersionGroupDetail',
        extension: ((extensions as any) || {}).VersionGroupDetail
      }
    )
  },
  get Sprite() {
    return new ObjectNode(
      {
        get back_default() {
          return new FieldNode(schema.String, undefined, true)
        },
        get back_female() {
          return new FieldNode(schema.String, undefined, true)
        },
        get back_shiny() {
          return new FieldNode(schema.String, undefined, true)
        },
        get back_shiny_female() {
          return new FieldNode(schema.String, undefined, true)
        },
        get front_default() {
          return new FieldNode(schema.String, undefined, true)
        },
        get front_female() {
          return new FieldNode(schema.String, undefined, true)
        },
        get front_shiny() {
          return new FieldNode(schema.String, undefined, true)
        },
        get front_shiny_female() {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      { name: 'Sprite', extension: ((extensions as any) || {}).Sprite }
    )
  },
  get Stat() {
    return new ObjectNode(
      {
        get base_stat() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get effort() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get stat() {
          return new FieldNode(schema.BaseName, undefined, true)
        }
      },
      { name: 'Stat', extension: ((extensions as any) || {}).Stat }
    )
  },
  get Type() {
    return new ObjectNode(
      {
        get slot() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get type() {
          return new FieldNode(schema.BaseName, undefined, true)
        }
      },
      { name: 'Type', extension: ((extensions as any) || {}).Type }
    )
  },
  get Mutation() {
    return new ObjectNode(
      {
        get hello() {
          return new FieldNode(schema.BaseResponse, undefined, true)
        }
      },
      { name: 'Mutation', extension: ((extensions as any) || {}).Mutation }
    )
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          )
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          )
        }
      },
      { name: '__Schema', extension: ((extensions as any) || {}).__Schema }
    )
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true)
              }
            }),
            true
          )
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true)
              }
            }),
            true
          )
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          )
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true)
        }
      },
      { name: '__Type', extension: ((extensions as any) || {}).__Type }
    )
  },
  get __TypeKind() {
    return new EnumNode({ name: '__TypeKind' })
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      { name: '__Field', extension: ((extensions as any) || {}).__Field }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      {
        name: '__InputValue',
        extension: ((extensions as any) || {}).__InputValue
      }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        }
      },
      {
        name: '__EnumValue',
        extension: ((extensions as any) || {}).__EnumValue
      }
    )
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          )
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        }
      },
      {
        name: '__Directive',
        extension: ((extensions as any) || {}).__Directive
      }
    )
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: '__DirectiveLocation' })
  },
  get CacheControlScope() {
    return new EnumNode({ name: 'CacheControlScope' })
  },
  get Upload() {
    return new ScalarNode({
      name: 'Upload',
      extension: ((extensions as any) || {}).Upload
    })
  }
}

lazyGetters(schema)
