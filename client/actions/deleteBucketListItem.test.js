import {
  deleteBucketListItem,
  deleteBucketListItemPending,
  deleteBucketListItemSuccess,
  DELETE_BUCKETLIST_PENDING,
  DELETE_BUCKETLIST_SUCCESS
} from './bucketListItems'

jest.mock('../api/requestor', () => {
  return (endpoint, method, payload) => {
    const selectedCountry = endpoint.split('/').pop()

    if (selectedCountry === 'Zambia') {
      return Promise.resolve([{ id: 1, title: 'Swim' }])
    }
  }
})

describe('deleteBucketListItem action tests', () => {
  it('deleteBucketListItemPending returns a DELETE_BUCKETLIST_PENDING action', () => {
    const action = deleteBucketListItemPending()
    expect(action.type).toBe(DELETE_BUCKETLIST_PENDING)
  })

  it('deleteBucketListItemSuccess returns a DELETE_BUCKETLIST_SUCCESS action', () => {
    const bucketList = [{ id: 1, title: 'Swim' }]
    const action = deleteBucketListItemSuccess(bucketList)

    expect(action.type).toBe(DELETE_BUCKETLIST_SUCCESS)
    expect(action.bucketList).toBe(bucketList)
  })

  it('deleteBucketListItem dispatches the correct actions', () => {
    const dispatch = jest.fn()
    const itemId = 2
    const selectedCountry = 'Zambia'

    return deleteBucketListItem(itemId, selectedCountry)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe(DELETE_BUCKETLIST_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(DELETE_BUCKETLIST_SUCCESS)
      })
  })
})
