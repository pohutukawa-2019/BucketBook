import { GET_COUNTRY_SUCCESS } from '../actions/country'

export default function selectedCountry (state = {}, action) {
  switch (action.type) {
    case GET_COUNTRY_SUCCESS:
      return action.countryDetails
    default:
      return state
  }
}
