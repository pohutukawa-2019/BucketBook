module.exports = {
  reset,
  getBucketListItemsByCountry,
  getCountryByName
  // addBucketListItem
  // deleteBucketListItemById
}

const bucketListItems = [
  {
    id: 1,
    title: 'Swim',
    country: 'Zimbabwe',
    userId: 1
  },
  {
    id: 2,
    title: 'Run',
    country: 'Zambia',
    userId: 2
  },
  {
    id: 3,
    title: 'Jump',
    country: 'Zambia',
    userId: 3
  },
  {
    id: 4,
    title: 'Sleep',
    country: 'Zambia',
    userId: 2
  },
  {
    id: 5,
    title: 'Hop',
    country: 'Zimbabwe',
    userId: 2
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
  return Promise.resolve(listItems.filter(listItem => listItem.country === selectedCountry))
}

// function addBucketListItem (bucketListItemTitle, selectedCountryId, userId) {
//   listItems.push(bucketListItemTitle, selectedCountryId, userId)
//   const newListItem = listItems.pop()
//   return Promise.resolve(listitem.id)
// }