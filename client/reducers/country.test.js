import selectedCountry from './country'
import { GET_COUNTRY_SUCCESS } from '../actions/country'

describe('selectedCountry reducer', () => {
  it('returns an empty object as the initial state', () => {
    const state = {}
    const action = { type: 'DOES_NOT_EXIST' }

    const newState = selectedCountry(state, action)

    expect(newState).toBe(state)
  })

  it('returns the country details', () => {
    const currentState = {}
    const action = {
      type: GET_COUNTRY_SUCCESS,
      countryDetails: { id: 1, name: 'China' }
    }

    const newState = selectedCountry(currentState, action)
    expect(newState).toBe(action.countryDetails)
  })
})
