const express = require('express')
const app = express()
const boodschappenlijstRouter = require('./routes/boodschappenlijst')


app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/boodschappenlijst', boodschappenlijstRouter)

app.listen(3000)