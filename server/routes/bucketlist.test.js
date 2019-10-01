const request = require('supertest')
const auth = require('authenticare/testing/server')

const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')
jest.mock('authenticare/server')

beforeEach(() => {
  db.reset()
})

describe('Bucketlist item routes', () => {
  it('GET /:selectedCountry returns bucketlist items by selected country', () => {
    const expected = ['Run', 'Sleep']
    // const testToken = auth.createTestToken({
    //   id: 4,
    //   username: 'testuser'
    // })
    auth.allowTokens()

    return request(server)
      .get('/api/v1/bucketlist/Zambia')
      // .set({ Authorization: `bearer ${testToken}` })
      .then(res => {
        console.log(res.text)
        const bucketlistItem = res.body
        expect(bucketlistItem).toBe(expected)
      })
  })
})