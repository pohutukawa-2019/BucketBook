import makeRequest from './requestor'

const bucketListItemPath = '/bucketlist'

export function completeBucketListItem (bucketListItem, selectedCountry) {
    return makeRequest(`${bucketListItemPath}/${selectedCountry}`, 'put', { bucketListItem })
        .then(res => res.body)
        .catch(() => {throw new Error('Error accessing bucket list item.')})
}
