import {
  getCountryPending,
  getCountrySuccess,
  GET_COUNTRY_PENDING,
  GET_COUNTRY_SUCCESS
} from './country'

describe('country action tests', () => {
  it('getCountryPending returns a GET_COUNTRY_PENDING action', () => {
    const action = getCountryPending()
    expect(action.type).toBe(GET_COUNTRY_PENDING)
  })

  it('getCountrySuccess returns a GET_COUNTRY_SUCCESS action', () => {
    const countryDetails = { id: 1, name: 'China' }
    const action = getCountrySuccess(countryDetails)

    expect(action.type).toBe(GET_COUNTRY_SUCCESS)
    expect(action.countryDetails).toBe(countryDetails)
  })
})
