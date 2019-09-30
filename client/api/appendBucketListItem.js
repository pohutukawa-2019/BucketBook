import makeRequest from './requestor'

const bucketListItemsPath = '/bucketlist'

export function appendBucketListItems(countryId, bucketListItemTitle, selectedCountry){
  return makeRequest(`${bucketListItemsPath}/${selectedCountry}`, 'post', { countryId: countryId, title: bucketListItemTitle })
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing bucket list items') })
}
 