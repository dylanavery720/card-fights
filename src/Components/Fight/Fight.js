import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import '../../../public/surfer.jpg';
import '../../../public/warlock.jpg';
import '../../../public/thanos.jpg';
import '../../../public/galactus.jpg';


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
      teamrolls: 2,
      opprolls: 2,
      ops: []
    }
  }

  componentDidMount() {
    let randoFunc = () => {
      let result = []
      for (var char in this.props.data) {
         result.push(char)
      }
      return this.props.data[result[Math.floor(Math.random() * result.length)]]
    }
    let rando1 = randoFunc()
    let rando2 = randoFunc()
    this.setState({ops: [rando1, rando2]}, () => this.assignRolls())
  }

  loadTwoRandom() {
      return this.state.ops.map((char,i) => {
        return <div key={i} className='card-hold'><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
      })
  }

  combineScores(character) {
    console.log(character)
     this.setState({oppStrength: this.state.oppStrength + character.strength})
     this.setState({oppIntelligence: this.state.oppStrength + character.intelligence})
     this.setState({oppAbility: this.state.oppStrength + character.fightingAbility})
     this.setState({oppSpeed: this.state.oppStrength + character.speed})
  }

  assignRolls() {
    const { ops } = this.state
    let arr1 = ops[0]
    let arr2 = ops[1]
    // let oppStrength = 0
    // fetch(`http://localhost:3001/skills`)
    // .then(response => response.json())
    // .then(data => this.setState({skills: data.skills}, () => {
    //   for (var char in this.state.skills) {
    //     if(arr1.id === 1) { this.combineScores(this.state.skills[one])} 
    //     if(arr1.id === 2) { this.combineScores(this.state.skills[char])} 
    //     if(arr1.id === 3) { this.combineScores(this.state.skills[char])} 
    //     if(arr1.id === 4) { this.combineScores(this.state.skills[char])} 
    //   }
    // }))
    // combine scores here using seperate fetch
    // this.setState({opprolls: 3, teamrolls: 3})
  }

  loadTeam() {
    return this.props.team.map((char,i) => {
      return <div key={i} className="card-hold"><img className="cards card-hold" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
    })
  }

  rolldie(e) {
    this.dieCap(e)
    if(e.target.value < 1) {
      return
    }
    let roll = Math.floor(Math.random() * 6 + 1)
    this.setState({[e.target.id]: roll})
  }

  dieCap(e){
    let change = {};
    change[e.target.name] = e.target.value-1;
    this.setState(change, () => this.finishGame())
  }

  finishGame(){
    if (this.state.teamrolls < 1 && this.state.opprolls < 1) {
      browserHistory.push('/final')
    }
  }

  render() {
    return (
      <div>
        <h1>YOUR TEAM</h1>
        <div>{this.loadTeam()}</div>
        <div><button id="teamdice" name="teamrolls" value={this.state.teamrolls} onClick={(e) => this.rolldie(e)}>{this.state.teamdice}</button></div>
        {this.state.teamrolls < 1 && <p>YOU ARE OUT OF TURNS</p>}
        <h1>YOUR OPPONENTS</h1>
        <div>{this.loadTwoRandom()}</div>
        <div><button id="oppdice" name="opprolls" value={this.state.opprolls} onClick={(e) => this.rolldie(e)}>{this.state.oppdice}</button></div>
        {this.state.opprolls < 1 && <p>YOUR OPPONENT IS OUT OF TURNS</p>}
      </div>
    );
  }
}

export default Fight;
