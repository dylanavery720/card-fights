import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import logo from './Hulk5';
import './App.css';
import '../public/surfer.jpg';
import '../public/warlock.jpg';
import '../public/thanos.jpg';
import '../public/galactus.jpg';


// 1. two random opponents pop up
// 2. select two card to fight them
// 3. function to combine stats of each pair and then compare each combination
// 4. animation for each comparison of combination (sushi jiggler style)
// 5. post to scores upon completion, final score, return result win or lose

class Fight extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }

  loadRandos() {
    return this.props.randos.map(char => {
      return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
    })
  }

  loadTeam() {
    return this.props.team.map(char => {
      return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
    })
  }

  render() {
    return (
      <div>
        <div>{this.loadRandos()}</div>
        <div>{this.loadTeam()}</div>
      </div>
    );
  }
}

export default Fight;
