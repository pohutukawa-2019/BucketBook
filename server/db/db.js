const connection = require('./connection')

function getBucketListItemsByCountry(selectedCountry, db = connection) {
  console.log("Im WORKING");
  return db('BucketListItems')
    .join('Countries, BucketListItems.country_id', '=', 'Countries.id')
    // .join('Users', 'Users.id')
    .select('Countries.name as country', 'BucketListItems.title')
    .where('Countries.name', selectedCountry)
}

module.exports = {
  getBucketListItemsByCountry,
}