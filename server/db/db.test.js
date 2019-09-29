const env = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Database functions for bucketlist items', () => {
  it('getBucketListItemsByCountry() returns bucketlist items by country', () => {
    expect.assertions(1)

    const expected = 2

    return db.getBucketListItemsByCountry('Zambia', testDb)
      .then(listItems => {
        const actual = listItems.length
        expect(actual).toBe(expected)
      })
  })
})