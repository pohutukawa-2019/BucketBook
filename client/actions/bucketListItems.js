import { fetchBucketListItemsByCountry } from '../api/fetchbucketlistitems'
import { removeBucketListItemsById } from '../api/removeBucketListItemById'
import { appendBucketListItems } from '../api/appendBucketListItem'

export const GET_BUCKETLIST_PENDING = 'GET_BUCKETLIST_PENDING'
export const GET_BUCKETLIST_SUCCESS = 'GET_BUCKETLIST_SUCCESS'
export const DELETE_BUCKETLIST_PENDING = 'DELETE_BUCKETLIST_PENDING'
export const DELETE_BUCKETLIST_SUCCESS = 'DELETE_BUCKETLIST_SUCCESS'
export const ADD_BUCKETLIST_PENDING = 'ADD_BUCKETLIST_PENDING'
export const ADD_BUCKETLIST_SUCCESS = 'ADD_BUCKETLIST_SUCCESS'

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

export function addBucketListItemPending () {
  return {
    type: ADD_BUCKETLIST_PENDING
  }
}

export function addBucketListItemSuccess (bucketList) {
  return {
    type: ADD_BUCKETLIST_SUCCESS,
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

  export function addBucketListItem (bucketListItem){
    const { title, countryId, countryName } = bucketListItem
    return dispatch => {
      dispatch(addBucketListItemPending())
      return appendBucketListItems(countryId, title, countryName)
        .then(appendedBucketListArr => {
          dispatch(addBucketListItemSuccess(appendedBucketListArr))
        })
      }
    }
