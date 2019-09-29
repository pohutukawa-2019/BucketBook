import { fetchBucketListItemsByCountry } from '../api/fetchbucketlistitems'
import { removeBucketListItemsById } from '../api/removeBucketListItemById'

export const GET_BUCKETLIST_PENDING = 'GET_BUCKETLIST_PENDING'
export const GET_BUCKETLIST_SUCCESS = 'GET_BUCKETLIST_SUCCESS'
export const DELETE_BUCKETLIST_PENDING = 'DELETE_BUCKETLIST_PENDING'
export const DELETE_BUCKETLIST_SUCCESS = 'DELETE_BUCKETLIST_SUCCESS'

export function getBucketListPending () {
  return {
    type: GET_BUCKETLIST_PENDING
  }
}

export function getBucketListSuccess (bucketList) {
  return {
    type: GET_BUCKETLIST_SUCCESS,
    bucketList
  }
}

export function deleteBucketListItemPending () {
  return {
    type: DELETE_BUCKETLIST_PENDING
  }
}

export function deleteBucketListItemSuccess (bucketList) {
  return {
    type: DELETE_BUCKETLIST_SUCCESS,
    bucketList
  }
}

export function getBucketList (countryName) {
  return dispatch => {
    dispatch(getBucketListPending())
    return fetchBucketListItemsByCountry(countryName)
      .then(bucketListArr => {
        dispatch(getBucketListSuccess(bucketListArr))
      })
  }
}

export function deleteBucketListItem (bucketListItemId, selectedCountry){
  return dispatch => {
    dispatch(deleteBucketListItemPending())
    return removeBucketListItemsById(bucketListItemId, selectedCountry)
      .then(updatedBucketListArr => {
        dispatch(deleteBucketListItemSuccess(updatedBucketListArr))
      })
    }
  }
