import { fetchCountryByName } from '../api/country'

export const GET_COUNTRY_PENDING = 'GET_COUNTRY_PENDING'
export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS'

export function getCountryPending () {
  return {
    type: GET_COUNTRY_PENDING
  }
}

export function getCountrySuccess (countryDetails) {
  return {
    type: GET_COUNTRY_SUCCESS,
    countryDetails
  }
}

export function getCountry (countryName) {
  return dispatch => {
    dispatch(getCountryPending())
    return fetchCountryByName(countryName)
      .then(countryDataArr => {
        dispatch(getCountrySuccess(countryDataArr[0]))
      })
  }
}
