import makeRequest from './requestor'
import {getEncodedToken} from 'authenticare/client'

const bucketListItemsPath = '/api/v1/bucketlist'

export function fetchBucketListItemsByCountry (selectedCountry) {
  return makeRequest(`${bucketListItemsPath}/${selectedCountry}`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing bucket list items') })
}
