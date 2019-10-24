// GET /teams - Return the full list of teams
// GET /teams/X - Returns the team associated with that ID, where X is a number
// GET /teams/ABBR - Returns the team associated with that abbreviation

const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => { response.send(teams) })

//app.all('*', (request, response) => {

//})

const server = app.listen(1337, () => { console.log('listening on port 1337') })


module.exports = server