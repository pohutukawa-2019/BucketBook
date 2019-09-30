import makeRequest from './requestor'

const bucketListItemsPath = '/bucketlist'

export function removeBucketListItemsById(bucketListItemId, selectedCountry){
  return makeRequest(`${bucketListItemsPath}/${selectedCountry}`, 'delete', { id: bucketListItemId })
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing bucket list items') })
}
 