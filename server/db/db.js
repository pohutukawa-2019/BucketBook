const connection = require('./connection')

module.exports = {
  getCountryByName
}

function getCountryByName (countryName, db = connection) {
  return db('Countries')
    .select()
    .where('name', countryName)
}
