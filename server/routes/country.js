const express = require('express')

const router = express()

router.use(express.json())

router.get('/', (req, res) => {
  res.send('HELLO WORLD')
  //   db.getBucketListItemsByCountry(selectedCountry, id)
  //     .then(items => res.status(200).json(items))
})


router.get('/:selectedCountry', (req, res) => {
  const selectedCountry = req.params.selectedCountry
  const id = Number(req.params.id)
  console.log(selectedCountry)
  res.send('HELLO WORLD')
  //   db.getBucketListItemsByCountry(selectedCountry, id)
  //     .then(items => res.status(200).json(items))
})

module.exports = router