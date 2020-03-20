// import { IncomingMessage, ServerResponse } from 'http'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from 'graphql-pokeapi/dist/graphql/schema'

const path = process.env.GRAPHQL_PATH || '/graphql'
const server = new ApolloServer({ typeDefs, resolvers })

export default server.getMiddleware({ path })
