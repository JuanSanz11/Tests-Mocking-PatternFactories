import { fastifySwagger } from '@fastify/swagger'
//import { fastifySwaggerUi } from '@fastify/swagger-ui'
import fastify from 'fastify'
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod'
import { createCourseRoute } from './routes/create-courses.ts'
import { getCourseByIdRouter } from './routes/get-courses-by-id.ts'
import { getCoursesRoute } from './routes/get-courses.ts'

import scalarAPIReference from '@scalar/fastify-api-reference'

import { deleteCourseByIdRouter } from './routes/deleteCourseByIdRouter.ts'


const server = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
}).withTypeProvider<ZodTypeProvider>()

if (process.env.NODE_ENV === 'development') {
  server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Desafio 01',
      version: '1.0.0',
    }
  },
  transform: jsonSchemaTransform,
})

server.register(scalarAPIReference, {
  routePrefix: '/docs',
  configuration: {
    theme: 'kepler',
  },
})

//server.register(fastifySwaggerUi, {
//  routePrefix: '/docs'
//})
}

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)


server.register(createCourseRoute)
server.register(getCourseByIdRouter)
server.register(getCoursesRoute)
server.register(deleteCourseByIdRouter)

export {server }