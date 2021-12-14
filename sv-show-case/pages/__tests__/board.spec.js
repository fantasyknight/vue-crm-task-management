const { Nuxt, Builder } = require('nuxt')
// eslint-disable-next-line no-unused-vars
const request = require('supertest')
const nuxtConfig = require('../../nuxt.config.js')
// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
beforeAll(async () => {


  nuxt = new Nuxt({...nuxtConfig, server: { port: 3002}, buildDir: '.nuxt-build-jest'})

  await new Builder(nuxt).build()

  await nuxt.server.listen(3002, 'localhost')
}, 300000)

// Example of testing only generated html
// describe('GET /board', () => {
//   test('Route /board exits and render HTML', async () => {
//     const { html } = await nuxt.server.renderRoute('/drive', {})
//   })
// })

describe('GET /board', () => {
  test('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get('/board')
    expect(response.statusCode).toBe(200)
  })
})

// describe('GET /drive', () => {
//   test('returns status code 404', async () => {
//     const response = await request(nuxt.server.app).get('/drive')
//     expect(response.statusCode).toBe(404)
//   })
// })

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close()
})