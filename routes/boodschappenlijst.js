const express = require('express')
const router = express.Router()
const Boodschappenlijst = []

router.get('/', (req, res) => {
    res.render('index', { test: Boodschappenlijst })
})

router.post('/', (req, res) => {
    console.log(req.body.BoodschappenlijstItem)
    const itemInLijstje = `item ID = ${Boodschappenlijst.length} ` + req.body.BoodschappenlijstItem
    Boodschappenlijst.push(itemInLijstje)
    res.render("index", { test: Boodschappenlijst })
})

router.delete('/', (req, res) => {
    const itemOmTeVerwijderen = req.body.BoodschappenlijstItemVerwijderen
    console.log(itemOmTeVerwijderen)
    iets.splice(Number(itemOmTeVerwijderen) - 1, 1)
    res.render("index", { test: Boodschappenlijst })
})


module.exports = router