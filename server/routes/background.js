const express = require('express')
const request = require('superagent')
require('dotenv').config()

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  request
    .get(`https://api.unsplash.com/search/photos?page=1&query=atoll&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

router.get('/:selectedCountry', (req, res) => {
  const selectedCountry = req.params.selectedCountry
  request
    .get(`https://api.unsplash.com/search/photos?page=1&query=${selectedCountry}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
