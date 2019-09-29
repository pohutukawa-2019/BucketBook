import { GET_BUCKETLIST_PENDING, GET_BUCKETLIST_SUCCESS} from '../actions/bucketListItems'

export default function bucketList ( state = [], action) {
  switch (action.type) {
    case GET_BUCKETLIST_SUCCESS: 
      return action.bucketList 
    default:
      return state
  }
}