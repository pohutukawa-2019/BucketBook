module.exports = {
  reset,
  getBucketListItemsByCountry
}

const bucketListItems = [
  {
    id: 1,
    title: 'swim',
    country: 'New Zealand'
  },
  {
    id: 2,
    title: 'sightsee',
    country: 'New Zealand'
  },
  {
    id: 3,
    title: 'hiking',
    country: 'New Zealand'
  }
]

// const selectedCountry = [
//   {
//     id: 1,
//     name: 'New Zealand'
//   },
//   {
//     id: 2,
//     name: 'Australia'
//   },
//   {
//     id: 3,
//     name: 'Japan'
//   }
// ]

let listItems = bucketListItems
// let country = selectedCountry

function reset () {
  listItems = [...bucketListItems]
  // country = [...selectedCountry]
}

async function getBucketListItemsByCountry (selectedCountry) {
  return Promise.resolve(listItems.filter(listItem => listItem.selectedCountry === selectedCountry))
}