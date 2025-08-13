import { fastifySwagger } from '@fastify/swagger'
//import { fastifySwaggerUi } from '@fastify/swagger-ui'
import fastify from 'fastify'
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod'
import { createCourseRoute } from './src/routes/create-courses.ts'
import { getCourseByIdRouter } from './src/routes/get-courses-by-id.ts'
import { getCoursesRoute } from './src/routes/get-courses.ts'

import scalarAPIReference from '@scalar/fastify-api-reference'

import { deleteCourseByIdRouter } from './src/routes/deleteCourseByIdRouter.ts'


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

server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)

server.register(createCourseRoute)
server.register(getCourseByIdRouter)
server.register(getCoursesRoute)
server.register(deleteCourseByIdRouter)

 

server.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})