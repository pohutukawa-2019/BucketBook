module.exports = {
  reset,
  getBucketListItemsByCountry
}

const bucketListItems = [
  {
    id: 1,
    title: 'swim'
  },
  {
    id: 2,
    title: 'sightsee'
  },
  {
    id: 3,
    title: 'hiking'
  }
]

const selectedCountry = [
  {
    id: 1,
    name: 'New Zealand'
  },
  {
    id: 2,
    name: 'Australia'
  },
  {
    id: 3,
    name: 'Japan'
  }
]

let listItems = bucketListItems
let country = selectedCountry

function reset () {
  listItems = [...bucketListItems]
  country = [...selectedCountry]
}

async function getBucketListItemsByCountry (selectedCountry, id) {
  return Promise.resolve(items.filter(item => item.selectedCountry === selectedCountry))
}