const express = require('express')
const router = express.Router()
const iets = 20

router.get('/', (req, res) => {
    res.render('index', { test: iets })
})

router.post('/', (req, res) => {
    res.send('Create iets')
})

router.get('/:id', (req, res) => {
    res.send(`${req.params.id}`)
})

module.exports = router