const express = require('express')
const router = express.Router()
let ontwerp = "Hello World"
const gebruikers = [
    {
        "naam": "joost",
        "wachtwoord": "wachtwoord"
    },
    {
        "naam": "thomas",
        "wachtwoord": "password"
    }
]

router.get('/', (req, res) => {
    res.render('inlog', { wat: ontwerp })
})

router.post('/gebruiker', (req, res, next) => {
    const naamVanGebruiker = req.body.Gebruikersnaam
    const wachtwoordVanGebruiker = req.body.Wachtwoord
    const Password = gebruikers[naamVanGebruiker]

    gebruikers.forEach(gebruiker => {
        if (gebruiker.naam == naamVanGebruiker) {
            if (gebruiker.wachtwoord == wachtwoordVanGebruiker) {
                res.redirect('/boodschappenlijst')
            } else {
                res.render('inlog', { text: 'Je wachtwoord klopt niet' })
            }
        } else {
            res.render('inlog', { text: 'Gebruiker bestaat niet' })
        }
    })

    console.log(naamVanGebruiker)
    console.log('hallo wereld')
})


module.exports = router