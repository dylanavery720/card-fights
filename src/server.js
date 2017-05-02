const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
var path    = require("path");
const logger = require('express-logger');
const locus = require('locus');


app.use(cors());
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

app.locals.skills = {
  one: {
    strength: 7,
    intelligence: 5,
    fightingAbility: 2,
    speed: 7 
  },
  two: {
     strength: 6,
     intelligence: 5,
     fightingAbility: 4,
     speed: 6 
  },
  three: {
     strength: 7,
     intelligence: 4,
     fightingAbility: 2,
     speed: 7
  },
  four: {
     strength: 5,
     intelligence: 3,
     fightingAbility: 2,
     speed: 7 
  }
}

app.locals.cards = {
  one: 
    {
      id: 1,
      name: 'Galactus',
      imgid: 'galactus'
    },
   two: {
      id: 2,
      name: 'Thanos',
      imgid: 'thanos'
    },
    three: {
      id: 3,
      name: 'Silver Surfer',
      imgid: 'surfer'
    },
   four: {
      id: 4,
      name: 'Adam Warlock',
      imgid: 'warlock'
    },
};

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
