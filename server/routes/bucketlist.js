const express = require('express')

const router = express()
const db = require('../db/db')
const { getTokenDecoder } = require('authenticare/server')
router.use(express.json())

const tokenDecoder = getTokenDecoder(false)

router.get('/:selectedCountry', tokenDecoder, (req, res) => {
  const selectedCountry = req.params.selectedCountry
  const userId = Number(req.user.id)
  console.log(selectedCountry)
  db.getBucketListItemsByCountry(selectedCountry)
  .then(countryItems => countryItems.filter( item => {
    return item.user_id === userId
  }
  )).then(bucketList => res.status(200).json(bucketList))
})

router.post('/:selectedCountry', tokenDecoder, async (req, res) => { 
  const bucketListItemTitle = req.body.title
  const countryId = req.body.country_id
  const userId = Number(req.user.id)

try {
  db.addBucketListItem(bucketListItemTitle, countryId, userId)
    .then(bucketListID => res.status(200).json(bucketListID))
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:selectedCountry', tokenDecoder, async (req, res) => { 
  const selectedCountry = req.params.selectedCountry
  const bucketListId = req.body.id
  const userId = Number(req.user.id)

try {
  db.deleteBucketListItemById(bucketListId)
    .then(()=> db.getBucketListItemsByCountry(selectedCountry)) .then(countryItems => countryItems.filter(item => {
      return item.user_id === userId
    }
    )).then(bucketList => res.status(200).json(bucketList))
  } catch (err) {
    res.status(500).send(err.message)
  }
})


module.exports = router