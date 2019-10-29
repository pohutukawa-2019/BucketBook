import { GET_BACKGROUND_PENDING } from '../actions/getCountryBackground'
import { COUNTRY_PAGE_READY } from '../actions/countryPageLoaded'

export default function (state = false, action) {
  switch (action.type) {
    case GET_BACKGROUND_PENDING:
      return true
    case COUNTRY_PAGE_READY:
      return false
    default:
      return state
  }
}
