import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from "zod"

export const createCourseRoute: FastifyPluginAsyncZod = async (server) => {
  server.post('/courses', {
  schema: {
    tags: ['Courses'],
    summary: 'Create a count',
    description: 'Esta ruta recibe un titulo y crea un curso en el banco de datos',
    body: z.object({
      title: z.string().min(5, 'Titulo necesita tener 5 caracteres'),
    }),
    response: {
      201: z.object({ courseId: z.uuid() }).describe('Curso creado con exito!'),
    }
  },
}, async (request, reply) => {

  const courseTitle = request.body.title

const result = await db
.insert(courses)
.values({ title: courseTitle })
.returning()

  return reply.status(201).send({ courseId: result[0].id })
})
}