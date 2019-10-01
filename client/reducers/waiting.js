import { GET_BACKGROUND_PENDING, GET_BACKGROUND_SUCCESS } from '../actions/getCountryBackground'

export default function (state = false, action) {
  switch (action.type) {
    case GET_BACKGROUND_PENDING:
      return true
    case GET_BACKGROUND_SUCCESS:
      return false
    default:
      return state
  }
}
