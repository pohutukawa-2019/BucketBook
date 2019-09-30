import { GET_BUCKETLIST_SUCCESS, DELETE_BUCKETLIST_SUCCESS, ADD_BUCKETLIST_SUCCESS } from '../actions/bucketListItems'

export default function bucketList ( state = [], action) {
  switch (action.type) {
    case GET_BUCKETLIST_SUCCESS: 
      return action.bucketList 
    case DELETE_BUCKETLIST_SUCCESS:
      return action.bucketList
    case ADD_BUCKETLIST_SUCCESS:
      return action.bucketList
    default:
      return state
  }
}
