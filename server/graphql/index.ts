import { IncomingMessage, ServerResponse } from 'http'
import { ApolloServer } from 'apollo-server-micro'
import { typeDefs, resolvers } from 'graphql-pokeapi/dist/graphql/schema'

const path = process.env.GRAPHQL_PATH || '/graphql'
const server = new ApolloServer({ typeDefs, resolvers })

export default (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'OPTIONS') return res.end()
  return server.createHandler({ path })(req, res)
}
