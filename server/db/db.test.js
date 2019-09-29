const env = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Database functions for bucket list items', () => {
  it('getBucketListItemsByCountry() returns bucket list items', () => {
    // expect.assertions(1)

    const expected = 3

    return db.getBucketListItemsByCountry('New Zealand', 2, testDb)
      .then(items => {
        const actual = items.length
        expect(actual).toBe(expected)
      })
  })
})