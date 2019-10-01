import {
  addBucketListItem,
  addBucketListItemPending,
  addBucketListItemSuccess,
  ADD_BUCKETLIST_PENDING,
  ADD_BUCKETLIST_SUCCESS
} from './bucketListItems'

jest.mock('../api/requestor', () => {
  return (endpoint, method, payload) => {
    const selectedCountry = endpoint.split('/').pop()

    if (selectedCountry === 'Zambia') {
      return Promise.resolve({ selectedCountry })
    }
  }
})

describe('addBucketListItem action tests', () => {
  it('addBucketListItemPending returns a ADD_BUCKETLIT_PENDING action', () => {
    const action = addBucketListItemPending()
    expect(action.type).toBe(ADD_BUCKETLIST_PENDING)
  })

  it('addBucketListSuccess returns a ADD_BUCKETLIST_SUCCESS action', () => {
    const bucketList = [{ id: 1, title: 'run' }, { id: 2, title: 'swim' }]
    const action = addBucketListItemSuccess(bucketList)

    expect(action.type).toBe(ADD_BUCKETLIST_SUCCESS)
    expect(action.bucketList).toBe(bucketList)
  })

  it('addBucketListItem dispatches the correct actions', () => {
    const dispatch = jest.fn()
    const bucketListItem = {
      title: 'Run',
      countryId: 2,
      countryName: 'Zambia'
    }

    return addBucketListItem(bucketListItem)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe(ADD_BUCKETLIST_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(ADD_BUCKETLIST_SUCCESS)
      })
  })
})
