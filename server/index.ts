// import express, { Application } from 'express'
import { IncomingMessage, ServerResponse } from 'http'
import dispatch from 'micro-route/dispatch'
import micro from 'micro'
import graphql from './graphql'
import nuxt from './nuxt'

const init = async () => {
  const { hostname, port } = new URL(
    process.env.BASE_URL || 'http://localhost:3000'
  )
  const graphqlPath = process.env.GRAPHQL_PATH || '/graphql'
  const { render: nuxtRender } = await nuxt()

  const server = micro(async (req: IncomingMessage, res: ServerResponse) => {
    await dispatch()
      .dispatch(graphqlPath, ['GET', 'POST'], graphql)
      .dispatch(
        '*',
        ['GET'],
        nuxtRender
      )(req, res)
  })

  // Listen the server
  //
  server.listen(Number(port), hostname, () => {
    // eslint-disable-next-line no-console
    console.log('Server listening on http://' + hostname + ':' + port)
  })
}

init()
