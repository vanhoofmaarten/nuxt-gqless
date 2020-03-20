import express, { Application } from 'express'
import consola from 'consola'

import graphql from './graphql'
import nuxt from './nuxt'

const app: Application = express()
const host = 'localhost'
const port = 3000

async function start() {
  // Api
  graphql({ app, path: '/graphql' })

  // Nuxt
  app.use(await nuxt({ host, port }))

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
