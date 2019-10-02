const request = require('supertest')

const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')

beforeEach(() => {
  db.reset()
})

describe('Country name routes', () => {
  it('GET /countryName returns a country by name', () => {
    const expected = 'Zambia'

    return request(server)
      .get('/api/v1/country/Zambia')
      .then(res => {
        const countryName = res.body.name
        expect(countryName).toBe(expected)
      })
  })
})
