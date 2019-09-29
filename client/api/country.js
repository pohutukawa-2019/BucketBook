import makeRequest from './requestor'

const countryPath = '/country'

export function fetchCountryByName (countryName) {
  return makeRequest(`${countryPath}/${countryName}`)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing database') })
}
