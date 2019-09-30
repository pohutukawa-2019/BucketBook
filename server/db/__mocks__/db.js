module.exports = {
  reset,
  getBucketListItemsByCountry,
  getCountryByName
}

const bucketListItems = [
  {
    id: 1,
    title: 'Swim',
    country: 'Zimbabwe'
  },
  {
    id: 2,
    title: 'Run',
    country: 'Zambia'
  },
  {
    id: 3,
    title: 'Jump',
    country: 'Yemen'
  },
  {
    id: 4,
    title: 'Sleep',
    country: 'Vietnam'
  }
]

const selectedCountry = [
  {
    id: 1,
    name: 'Zimbabwe'
  },
  {
    id: 2,
    name: 'Zambia'
  },
  {
    id: 3,
    name: 'Yemen'
  },
  {
    id: 4,
    name: 'Vietnam'
  }
]

let listItems = bucketListItems
let countries = selectedCountry

function reset () {
  listItems = [...bucketListItems]
  countries = [...selectedCountry]
}

function getCountryByName (countryName) {
  return Promise.resolve(countries.find(country => country.name === countryName))
}

async function getBucketListItemsByCountry (selectedCountry) {
  return Promise.resolve(listItems.filter(listItem => listItem.selectedCountry === selectedCountry))
}

