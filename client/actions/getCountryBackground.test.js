import {
  getBackgroundByCountry,
  getBackgroundPending,
  getBackgroundSuccess,
  GET_BACKGROUND_PENDING,
  GET_BACKGROUND_SUCCESS
} from './getCountryBackground'

jest.mock('../api/requestor', () => {
  return (endpoint, method, payload) => {
    const selectedCountry = endpoint.split('/').pop()

    if (selectedCountry === 'Zambia') {
      return Promise.resolve({ selectedCountry })
    }
  }
})

describe('getCountryBackground action tests', () => {
  it('getBackgroundPending returns a GET_BACKGROUND_PENDING action', () => {
    const action = getBackgroundPending()
    expect(action.type).toBe(GET_BACKGROUND_PENDING)
  })

  it('getBackgroundSuccess returns a GET_BACKGROUND_SUCCESS action', () => {
    const backgroundUrl = 'www.test.com'
    const action = getBackgroundSuccess(backgroundUrl)

    expect(action.type).toBe(GET_BACKGROUND_SUCCESS)
    expect(action.backgroundUrl).toBe(backgroundUrl)
  })

  // TO DO: attempt to put together a fetchBackgroundImageByCountry mock that returns a mocked data set using the same data structure that would return from unsplash.

  // it('getBackgroundByCountry dispatches the correct actions', () => {
  //   const selectedCountry = 'Zambia'
  //   const dispatch = jest.fn()

  //   return getBackgroundByCountry(selectedCountry)(dispatch)
  //     .then(() => {
  //       console.log(dispatch.mock.calls)
  //     })
  // })
})
