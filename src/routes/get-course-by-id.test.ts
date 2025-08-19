import { test, expect } from 'vitest'
import request from 'supertest'
import { server } from '../app.ts'
import { makeCourse } from '../tests/factories/make-course.ts'


test('Crea un curso por Id', async () => {
  await server.ready()

  const course = await makeCourse()

  const response = await request(server.server)
  .get(`/courses/${course.id}`)

  expect(response.status).toEqual(200)
  expect(response.body).toEqual({
    course: {
      id: expect.any(String),
      title: expect.any(String),
      description: null,
    }
  })
})


test('Return 404 curso no existe', async () => {
  await server.ready()

  const response = await request(server.server)
  .get(`/courses/ba89b5e4-803c-4ad1-9ea1-ead99eace4fd`)

  expect(response.status).toEqual(404)
})