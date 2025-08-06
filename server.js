const express = require('express')
const app = express()
const inlogRouter = require('./routes/inlog')
const boodschappenlijstRouter = require('./routes/boodschappenlijst')
const path = require('path')
// voor een of andere reden heeft inlog een lege bestand nodig met de naam boodschappenlijst
const Boodschappenlijst = []


app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(express.static('CSS'))
app.use('/inlog', inlogRouter)
app.use('/boodschappenlijst', boodschappenlijstRouter)

app.listen(3000)