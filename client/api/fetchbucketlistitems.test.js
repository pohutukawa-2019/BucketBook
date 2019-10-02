import { fetchBucketListItemsByCountry } from './fetchbucketlistitems'

jest.mock('./requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    return Promise.resolve({
      body: [
        {
          id: 1,
          title: 'Swim',
          country: 'Zimbabwe',
          userId: 1
        },
        {
          id: 2,
          title: 'Run',
          country: 'Zambia',
          userId: 2
        },
        {
          id: 3,
          title: 'Jump',
          country: 'Zambia',
          userId: 3
        }
      ]
    })
  }
})

describe('API client for bucketlist items', () => {
  it('fetchBucketListItemsByCountry returns bucketlist items by country', () => {
    return fetchBucketListItemsByCountry('Zambia')
      .then(listItems => {
        expect(listItems[1].id).toBe(2)
        expect(listItems[1].country).toBe('Zambia')
      })
  })
})