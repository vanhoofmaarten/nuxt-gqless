import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from 'graphql-pokeapi/dist/graphql/schema'

export default ({ app, path }) => {
  const server = new ApolloServer({ typeDefs, resolvers })
  server.applyMiddleware({ app, path })
}
