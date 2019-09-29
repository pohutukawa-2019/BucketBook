const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.use(express.json())

router.get('/:countryName', (req, res) => {
  return db.getCountryByName(req.params.countryName)
    .then(countryData => res.status(200).send(countryData))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
