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

  it('addBucketListItem returns a new bucketlist item', () => {
    const bucketListItemTitle = 'Hop'
    const selectedCountryId = 2
    const userId = 2

    return db.addBucketListItem(bucketListItemTitle, selectedCountryId, userId, testDb)
      .then(bucketListItem => {
        // expect(bucketListItem.bucketListItemTitle).toBe(bucketListItemTitle.title)
        // expect(bucketListItem.selectedCountryId).toBe(selectedCountryId.id)
        // expect(bucketListItem.userId).toBe(userId.id)
        expect(bucketListItem[0]).toBe(5)
      })
  })
})