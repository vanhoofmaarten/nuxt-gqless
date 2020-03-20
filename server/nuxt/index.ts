// import { IncomingMessage, ServerResponse } from 'http'
import { Nuxt, Builder } from 'nuxt'
import NuxtConfig from '../../nuxt.config'

const { host, port } = new URL(process.env.BASE_URL || 'http://localhost:3000')

export default async () => {
  NuxtConfig.dev = process.env.NODE_ENV !== 'production'
  NuxtConfig.server = {
    host,
    port
  }

  // Init Nuxt.js
  const nuxt = new Nuxt(NuxtConfig)
  await nuxt.ready()

  // Build only in dev mode
  if (NuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  return nuxt
}
