const connection = require('./connection')

function getBucketListItemsByCountry (selectedCountry, db = connection) {
  return db('BucketListItems')
    .join('Countries', 'BucketListItems.country_id', '=', 'Countries.id')
    .select()
    .where('Countries.name', selectedCountry)
}

function getCountryByName (countryName, db = connection) {
  return db('Countries')
    .select()
    .where('name', countryName)
    .first()
}

function addBucketListItem (bucketListItemTitle, selectedCountryId, userId, db = connection) {
  return db('BucketListItems')
    .insert({ title: bucketListItemTitle, country_id: selectedCountryId, user_id: userId }) 
}

function deleteBucketListItemById (id, db = connection) {
  return db('BucketListItems')
    .where('id', id)
    .delete()
}

module.exports = {
  getBucketListItemsByCountry,
  addBucketListItem,
  deleteBucketListItemById,
  getCountryByName
}
