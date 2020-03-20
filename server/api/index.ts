import { ApolloServer } from 'apollo-server-express'
import {
  typeDefs,
  resolvers
} from '../../node_modules/graphql-pokeapi/dist/graphql/schema'

export default ({ app, path }) => {
  const server = new ApolloServer({ typeDefs, resolvers })
  server.applyMiddleware({ app, path })
}
