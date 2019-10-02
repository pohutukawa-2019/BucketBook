import waiting from './waiting'
import { GET_BACKGROUND_PENDING } from '../actions/getCountryBackground'
import { COUNTRY_PAGE_READY } from '../actions/countryPageLoaded'

describe('waiting reducer tests', () => {
  it('returns false as initial state', () => {
    const state = false
    const action = { type: 'DOES_NOT_EXIST' }

    const newState = waiting(state, action)
    expect(newState).toBe(state)
  })

  it('returns true when provided a GET_BACKGROUND_PENDING action', () => {
    const currentState = false
    const action = { type: GET_BACKGROUND_PENDING }

    const newState = waiting(currentState, action)
    expect(newState).toBe(true)
  })

  it('returns false when provided a COUNTRY_PAGE_READY action', () => {
    const currentState = true
    const action = { type: COUNTRY_PAGE_READY }

    const newState = waiting(currentState, action)
    expect(newState).toBe(false)
  })
})
