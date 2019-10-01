const request = require('supertest')

const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')

beforeEach(() => {
  db.reset()
})

describe('Background image routes', () => {
  it('GET / returns an image by selectedCountry', () => {
    return request(server)
      .get('/api/v1/background/Zambia')
      .then(res => {
        const result = res.body.results
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThanOrEqual(1)
      })
  })
})