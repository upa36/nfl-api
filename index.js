
const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const Op = require('Sequelize').Op

const app = express()

app.get('/teams', async (request, response) => {
  const teams = await models.teams.findAll()

  response.send(teams)
})

app.get('/teams/:identifier', async (request, response) => {
  const identifier = request.params.identifier

  const matchingTeams = await models.teams.findAll({
    where:
    {
      [Op.or]: [{ id: identifier }, { abbreviation: identifier.toUpperCase() }]
    }
  })

  if (matchingTeams.length) {
    response.send(matchingTeams)
  } else {
    response.sendStatus(404)
  }
})

app.post('/teams', bodyParser.json(), async (request, response) => {
  const { location, mascot, abbreviation, conference, division } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    response.status(400).send('The following attributes are require: location, mascot, abbreviation, conference, division')
  }

  const newTeam = await models.teams.create({
    location, mascot, abbreviation, conference, division
  })

  response.status(201).send(newTeam)
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server