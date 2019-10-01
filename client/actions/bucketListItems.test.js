import {
  getBucketListPending,
  getBucketListSuccess,
  getBucketList,
  GET_BUCKETLIST_PENDING,
  GET_BUCKETLIST_SUCCESS
} from './bucketListItems'

jest.mock('../api/requestor', () => {
  return (endpoint, method, payload) => {
    const selectedCountry = endpoint.split('/').pop()

    if (selectedCountry === 'Zambia') {
      return Promise.resolve([{ id: 1, title: 'Swim' }, { id: 2, title: 'Run' }])
    }
  }
})

describe('bucketListItem action tests', () => {
  it('getBucketListPending returns a GET_BUCKETLIST_PENDING action', () => {
    const action = getBucketListPending()
    expect(action.type).toBe(GET_BUCKETLIST_PENDING)
  })

  it('getBucketListSuccess returns a GET_BUCKETLIST_SUCCESS action', () => {
    const bucketListDetails = [{ id: 1, title: 'Swim' }, { id: 2, title: 'Run' }]
    const action = getBucketListSuccess(bucketListDetails)
    expect(action.type).toBe(GET_BUCKETLIST_SUCCESS)
    expect(action.bucketList).toBe(bucketListDetails)
  })

  it('getBucketlist dispatches the correct actions', () => {
    const dispatch = jest.fn()
    const selectedCountry = 'Zambia'

    return getBucketList(selectedCountry)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe(GET_BUCKETLIST_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(GET_BUCKETLIST_SUCCESS)
      })
  })
})
