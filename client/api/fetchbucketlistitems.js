import makeRequest from './requestor'

const bucketListItemsPath = '/country'

export function fetchBucketListItemsByCountry (selectedCountry) {
  return makeRequest(`${bucketListItemsPath}/${selectedCountry}`)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing bucket list items') })
}