import { fetchBackgroundImageByCountry } from '../api/fetchBackgroundImage'

export const GET_BACKGROUND_PENDING = 'GET_BACKGROUND_PENDING'
export const GET_BACKGROUND_SUCCESS = 'GET_BACKGROUND_SUCCESS'

export function getBackgroundPending () {
  return {
    type: GET_BACKGROUND_PENDING
  }
}

export function getBackgroundSuccess (backgroundUrl) {
  return {
    type: GET_BACKGROUND_SUCCESS,
    backgroundUrl
  }
}

function randomPhoto (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function getBackgroundByCountry (countryName) {
  return dispatch => {
    dispatch(getBackgroundPending())
    return fetchBackgroundImageByCountry(countryName)
      .then(apiResponse => {
        const random = randomPhoto(1, 5)
        dispatch(getBackgroundSuccess(apiResponse.body.results[random].urls.full))
      })
  }
}
