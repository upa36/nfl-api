# NFL API

## Instructions

### GETing a Team
In the initial commit to this project, you have been provided data about NFL teams. In a branch called `get-team-answer`, you are tasked with creating an Express server capable of responding to the following routes.

* GET /teams - Return the full list of teams
* GET /teams/X - Returns the team associated with that ID, where X is a number
* GET /teams/ABBR - Returns the team associated with that abbreviation

### POSTing a Team
In a new branch called `post-team-answer`, continuing from Part 1 (GETing a Team), you are tasked with creating a handler for a `POST` request to the `/teams` route which will create a new team in the array of teams.

### Sequelize the Data
In a new branch called `sequelize-data-answer`, continuing from Part 2 (POSTing a Team), you are tasked with adding Sequelize to your API and creating a model for your NFL teams data. You will then need to update all of your routes to use the models instead of the `teams.json` file.

### Migrating the Data
In a new branch called `migrate-data-answer`, continuing from Part 3 (Sequelize the Data), you are tasked with creating two migrations for your server. The first will create the appropriate table structure to match your models. The second will load the teams data from the `teams.json` file into the database table.

## Provided Files

**.eslintrc.js** - a config file for ES Lint

**teams.json** - a JSON file with NFL teams data

## Exercise Submission

You should submit your working changes in a pull request.
