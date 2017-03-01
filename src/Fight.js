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

  loadTwoRandom() {
    let randoFunc = () => this.props.data.characters[Math.floor(this.props.data.characters.length * Math.random())]
    let rando1 = randoFunc()
    let rando2 = randoFunc()

    if(this.props.ops.length > 1){
      return this.props.ops.map(char => {
        this.setState({ops: [...this.props.ops, char]})
        return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
      })
    }  else {
        return <div><h1>YOUR OPPONENTS</h1><div className='card-hold'><img className="cards" alt="alt" src={`./${rando1.imgid}.jpg`} /><p>{rando1.name}</p></div><div className='card-hold'><img className="cards" alt="alt" src={`./${rando2.imgid}.jpg`} /><p>{rando2.name}</p></div></div>
      }
  }

  // loadRandos() {
  //   return this.props.randos.map(char => {
  //     return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
  //   })
  // }

  loadTeam() {
    return this.props.team.map(char => {
      return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
    })
  }

  postFight() {
    
  }

  render() {
    return (
      <div>
        <div>
        <h1>YOUR TEAM</h1>
          {this.loadTeam()}
        </div>
        <div>{this.loadTwoRandom()}</div>
      </div>
    );
  }
}

export default Fight;
