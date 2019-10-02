import { GET_BACKGROUND_SUCCESS } from '../actions/getCountryBackground'

export default function background (state = '', action) {
  switch (action.type) {
    case GET_BACKGROUND_SUCCESS:
      return action.backgroundUrl
    default:
      return state
  }
}
