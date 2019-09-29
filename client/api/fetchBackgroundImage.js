import makeRequest from './requestor'

const backgroundPath = '/background'

export function fetchBackgroundImage () {
  return makeRequest(backgroundPath)
    .then(res => res)
    .catch(() => { throw new Error('Error accessing unsplash api.') })
}

export function fetchBackgroundImageByCountry (countryName) {
  return makeRequest(`${backgroundPath}/${countryName}`)
    .then(res => res)
    .catch(() => { throw new Error('Error accessing unsplash api.') })
}
