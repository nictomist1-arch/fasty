import Fastify from 'fastify'
import routes from './routes'

const fastify = Fastify({
  logger: true
})

fastify.listen({ port: 3000 , host: '0.0.0.0' })