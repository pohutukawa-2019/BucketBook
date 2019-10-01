import bucketList from './bucketListItems'
import {
  GET_BUCKETLIST_SUCCESS,
  DELETE_BUCKETLIST_SUCCESS,
  ADD_BUCKETLIST_SUCCESS
} from '../actions/bucketListItems'

describe('bucketList reducer tests', () => {
  it('returns an empty array as initial state', () => {
    const state = []
    const action = { type: 'DOES_NOT_EXIST' }

    const newState = bucketList(state, action)
    expect(newState).toBe(state)
  })

  it('returns provided bucketList when passed a GET_BUCKETLIST_SUCCESS action', () => {
    const currentState = []
    const action = {
      type: GET_BUCKETLIST_SUCCESS,
      bucketList: [{ id: 1, title: 'Run' }, { id: 2, title: 'Swim' }]
    }

    const newState = bucketList(currentState, action)
    expect(newState).toBe(action.bucketList)
  })

  it('returns provided bucketList when passed a DELETE_BUCKETLIST_SUCCESS', () => {
    const currentState = [{ id: 1, title: 'Run' }, { id: 2, title: 'Swim' }]
    const action = {
      type: DELETE_BUCKETLIST_SUCCESS,
      bucketList: [{ id: 1, title: 'Run' }]
    }

    const newState = bucketList(currentState, action)
    expect(newState).toBe(action.bucketList)
  })

  it('returns provided bucketList when passed an ADD_BUCKETLIST_SUCCESS', () => {
    const currentState = [{ id: 1, title: 'Run' }]
    const action = {
      type: ADD_BUCKETLIST_SUCCESS,
      bucketList: [{ id: 1, title: 'Run' }, { id: 2, title: 'Swim' }]
    }

    const newState = bucketList(currentState, action)
    expect(newState).toBe(action.bucketList)
  })
})
