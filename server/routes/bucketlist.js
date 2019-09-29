const { getTokenDecoder } = require('authenticare/server')
const express = require('express')

const db = require('../db/db')

const tokenDecoder = getTokenDecoder(false)

const router = express()

router.use(express.json())

router.get('/:selectedCountry', tokenDecoder, (req, res) => {
  const selectedCountry = req.params.selectedCountry
  // const bodyResCountry = req.body
  // const id = 2
  // // if (req.user) {
  // //   console.log(req.user.id)
  // // } else {
  // //   console.log('testing')
  // // }
  // console.log(bodyResCountry)
  // // res.send('HELLO')
  db.getBucketListItemsByCountry(selectedCountry) 
    .then((res) => console.log(res))
    // .then(item => res.status(200).json(item))
})

module.exports = router