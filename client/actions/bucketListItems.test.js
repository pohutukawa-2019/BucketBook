import {
  getBucketListPending,
  getBucketListSuccess,
  GET_BUCKETLIST_PENDING,
  GET_BUCKETLIST_SUCCESS
} from './bucketListItems'

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
})
