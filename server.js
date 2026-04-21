const Fastify = require('fastify')
const routes = require('./routes')

const fastify = Fastify({ logger: true })

async function start() {
  await routes(fastify)
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
}

start().catch((err) => {
  fastify.log.error(err)
  process.exit(1)
})