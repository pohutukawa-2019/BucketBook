const connection = require('./connection')

function getBucketListItemsByCountry(countryName, db = connection) {
  // console.log("Im WORKING")
  return db('BucketListItems')
    .join('Countries', 'BucketListItems.country_id', '=', 'Countries.id')
    .select('Countries.name', 'BucketListItems.title')
    .where('Countries.name', countryName)
}

module.exports = {
  getBucketListItemsByCountry
}