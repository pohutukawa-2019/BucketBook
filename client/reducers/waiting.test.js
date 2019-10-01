import waiting from './waiting'
import { GET_BACKGROUND_PENDING, GET_BACKGROUND_SUCCESS } from '../actions/getCountryBackground'

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

  it('returns false when provided a GET_BACKGROUND_SUCCESS action', () => {
    const currentState = true
    const action = { type: GET_BACKGROUND_SUCCESS }

    const newState = waiting(currentState, action)
    expect(newState).toBe(false)
  })
})
