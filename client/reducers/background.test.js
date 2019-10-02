import background from './background'
import { GET_BACKGROUND_SUCCESS } from '../actions/getCountryBackground'

describe('background reducer tests', () => {
  it('returns and empty array as initial state', () => {
    const state = ''
    const action = { type: 'DOES_NOT_EXIST' }

    const newState = background(state, action)
    expect(newState).toBe(state)
  })

  it('returns provided backgroundUrl when passed a GET_BACKGROUND_SUCCESS', () => {
    const currentState = ''
    const action = {
      type: GET_BACKGROUND_SUCCESS,
      backgroundUrl: 'www.test.com'
    }

    const newState = background(currentState, action)
    expect(newState).toBe(action.backgroundUrl)
  })
})
