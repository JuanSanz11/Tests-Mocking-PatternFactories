import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from "zod"
import { eq } from 'drizzle-orm'

export const deleteCourseByIdRouter: FastifyPluginAsyncZod = async (server) => {
  server.delete('/courses/:id', {
    schema: {
      tags: ['Courses'],
      summary: 'Delete course by ID',
      params: z.object({
        id: z.uuid(),
      }),
      response: {
        204: z.void().describe('Curso eliminado'),
        404: z.null().describe('Curso no encontrado'),
      },
    },
  }, async (request, reply) => {
    const courseId = request.params.id

    const result = await db
      .delete(courses)
      .where(eq(courses.id, courseId))

    if (result.rowCount && result.rowCount > 0) {
      return reply.status(204).send()
    }

    return reply.status(404).send()
  })
}
