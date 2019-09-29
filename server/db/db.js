const connection = require('./connection')

function getBucketListItemsByCountry(selectedCountry, db = connection) {
  return db('BucketListItems')
    .join('Countries', 'BucketListItems.country_id', '=', 'Countries.id')
    .select()
    .where('Countries.name', selectedCountry)
}

function addBucketListItem(bucketListItemTitle, selectedCountryId, userId, db = connection) {
  return db('BucketListItems')
    .insert({
      title: bucketListItemTitle,
      country_id: selectedCountryId,
      user_id: userId
    }) 
}

function getCountryByName (countryName, db = connection) {
  return db('Countries')
    .select()
    .where('name', countryName)
}

module.exports = {
  getBucketListItemsByCountry,
  addBucketListItem,
  getCountryByName
}
