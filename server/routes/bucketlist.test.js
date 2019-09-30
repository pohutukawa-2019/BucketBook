const request = require('supertest')

const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')

beforeEach(() => {
  db.reset()
})

describe('Country name routes', () => {
  it('POST / returns a country by name', () => {
    const expected = 241

    return request(server)
      .get('/api/v1/country/china')
      .then(res => {
        const count = res.body.length
        expect(count).toBe(expected)
      })
  })
})