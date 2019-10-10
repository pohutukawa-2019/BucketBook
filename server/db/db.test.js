const env = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Database functions for bucketlist items', () => {
  it('getBucketListItemsByCountry returns an array of bucketlist items by country', () => {
    expect.assertions(1)

    const expected = 2

    return db.getBucketListItemsByCountry('Zambia', testDb)
      .then(listItems => {
        const actual = listItems.length
        expect(actual).toBe(expected)
      })
  })

  it('addBucketListItem returns a new bucketlist item', () => {
    expect.assertions(1)

    const bucketListItemTitle = 'Hop'
    const selectedCountryId = 2
    const userId = 2

    return db.addBucketListItem(bucketListItemTitle, selectedCountryId, userId, testDb)
      .then(bucketListItem => {
        expect(bucketListItem[0]).toBe(5)
      })
  })

  it('getCountryName returns a single country name', () => {
    expect.assertions(2)

    const countryName = 'Zambia'
    const id = 2
    
    return db.getCountryByName(countryName, testDb)
      .then(country => {
        expect(country.name).toBe(countryName)
        expect(country.id).toBe(id)
      })
  })

  it('deleteBucketListItemById deletes a bucketlist item by id', () => {
    expect.assertions(1)

    return db.deleteBucketListItemById(3, testDb)
      .then(bucketListItem => {
        expect(bucketListItem).toBe(1)
      })
  })

  it('updateCompletedStatus updates a bucketlist items Completed field', () => {
    expect.assertions(1)

    const bucketListItem = {
      id: 2,
      title: 'Run',
      completed: 1
    }

    return db.updateCompletedStatus(bucketListItem, testDb)
      .then(() => {
        return db.getBucketListItemsByCountry('Zambia', testDb)
          .then(listItems => {
            const UpdatedItem = listItems[0]
            expect(UpdatedItem.completed).toBe(1)
          })
      })
  })
})