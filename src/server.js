const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
// const cors = require('express-cors');
const bodyParser = require('body-parser');
var path    = require("path");
const logger = require('express-logger');
const locus = require('locus');


// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Marvel Card Fights'

app.locals.scores = {
  lose: 'You lost.',
  win: 'You won!!',
  tie: 'Oh wow its a tie.'
}

app.locals.cards = [{
  title: 'characters',
  id: 1,
  characters: [
    {
      id: 1478253351169,
      name: 'Galactus',
      imgid: 'galactus',
      skills: [
        { strength: {score: 7} },
        { intelligence: {score: 5} },
        { fightingAbility: {score: 2} },
        { speed: {score: 7} }
      ]
    },
    {
      id: 1478253351170,
      name: 'Thanos',
      imgid: 'thanos',
      skills: [
        { strength: {score: 6} },
        { intelligence: {score: 5} },
        { fightingAbility: {score: 4} },
        { speed: {score: 6} }
      ]
    },
    {
      id: 1478253351171,
      name: 'Silver Surfer',
      imgid: 'surfer',
      skills: [
        { strength: {score: 7} },
        { intelligence: {score: 4} },
        { fightingAbility: {score: 2} },
        { speed: {score: 7} }
      ]
    },
    //paper rock sciccor mechanic speed vs. strength etc.
    // dice rolls per score level, 7 dice rolls, 6 sided die..

    {
      id: 1478253351172,
      name: 'Adam Warlock',
      imgid: 'warlock',
      skills: [
        { strength: {score: 5} },
        { intelligence: {score: 3} },
        { fightingAbility: {score: 2} },
        { speed: {score: 7} }
      ]
    },
  ]
}];

// Get all quizzes
app.get('/cards', (request, response) => {
  response.send({ cards: app.locals.cards });
});


// Submit a score
app.post('/finalscore', (request, response) => {
  const { scores } = request.body;
  let scoreType;

  if (scores.ops > scores.team) {
    scoreType = 'lose';
  }
  else if (score.ops < scores.team) {
    scoreType = 'win';
  }
  else if (scores.ops === scores.team) {
    scoreType = 'tie';
  }
  else {
    console.log('error')
  }

  switch(scoreType) {
    case 'lowest':
        return response.send({ score: app.locals.scores.lowest });
        break;
    case 'low':
        return response.send({ score: app.locals.scores.low });
        break;
    case 'high':
        return response.send({ score: app.locals.scores.high });
        break;
    case 'highest':
        return response.send({ score: app.locals.scores.highest });
        break;
    default:
      return response
        .status(422)
        .send({ error: `Invalid score: ${score}` });
  }
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;
