import makeRequest from './requestor'

const bucketListItemsPath = '/api/v1/bucketlist'

export function removeBucketListItemsById(bucketListItemId, selectedCountry){
  return makeRequest(`${bucketListItemsPath}/${selectedCountry}`, 'delete',bucketListItemId)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing bucket list items') })
}
 