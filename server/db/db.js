const connection = require('./connection')

function getBucketListItems (db = connection) {
  return db('BucketListItems')
    .select()
}

function getBucketListItemsByCountry(selectedCountry, db = connection) {
  return db('BucketListItems')
    .join('Countries', 'BucketListItems.country_id', '=', 'Countries.id')
    .select()
    .where('Countries.name', selectedCountry)
}

function addBucketListItem(bucketListItemTitle, selectedCountryId, userId, db = connection) {
  return db('BucketListItems')
    .insert({title: bucketListItemTitle, country_id: selectedCountryId, user_id: userId }) 
}


module.exports = {
  getBucketListItems,
  getBucketListItemsByCountry,
  addBucketListItem
}
