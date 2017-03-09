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
      teamdice: 0,
      oppdice: 0,
      ops: []
    }
  }

  componentDidMount() {
    let randoFunc = () => this.props.data.characters[Math.floor(this.props.data.characters.length * Math.random())]
    let rando1 = randoFunc()
    let rando2 = randoFunc()
    this.setState({ops: [rando1, rando2]})
  }

  loadTwoRandom() {
      return this.state.ops.map(char => {
        return <div className='card-hold'><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
      })
  }

  // loadRandos() {
  //   return this.props.randos.map(char => {
  //     return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
  //   })
  // }

  loadTeam() {
    return this.props.team.map(char => {
      return <div className="card-hold"><img className="cards card-hold" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
    })
  }

  rolldie(e) {
    let roll = Math.floor(Math.random() * 6 + 1)
    this.setState({[e.target.id]: roll})
  }

  render() {
    return (
      <div>
        <h1>YOUR TEAM</h1>
        <div>{this.loadTeam()}</div>
        <div><button id="teamdice" onClick={(e) => this.rolldie(e)}>{this.state.teamdice}</button></div>
        <h1>YOUR OPPONENTS</h1>
        <div>{this.loadTwoRandom()}</div>
        <div><button id="oppdice" onClick={(e) => this.rolldie(e)}>{this.state.oppdice}</button></div>
      </div>
    );
  }
}

export default Fight;
