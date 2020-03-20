import express, { Application } from 'express'
import consola from 'consola'

import api from './api'
import nuxt from './nuxt'

const app: Application = express()
const host = 'localhost'
const port = 3000

async function start() {
  // Api
  api({ app, path: '/api' })

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
