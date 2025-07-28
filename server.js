const express = require('express')
const app = express()
const boodschappenlijstRouter = require('./routes/boodschappenlijst')
const path = require('path')


app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'CSS')))
app.use('/boodschappenlijst', boodschappenlijstRouter)

app.listen(3000)