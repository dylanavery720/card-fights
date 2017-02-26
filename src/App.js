import React, { Component } from 'react';
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

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.apiCall()
  }

apiCall() {
  fetch(`http://localhost:3001/cards`)
  .then(response => response.json())
  .then(data => this.setState({data: data.cards[0]}))
  }

  loadTwoRandom() {
    let randoFunc = () => this.state.data.characters[Math.floor(this.state.data.characters.length * Math.random())]
    let rando1 = randoFunc()
    let rando2 = randoFunc()

      return <div><h1>YOUR OPPONENTS</h1><div className='card-hold'><img className="cards" alt="alt" src={`./${rando1.imgid}.jpg`} /><p>{rando1.name}</p></div><div className='card-hold'><img className="cards" alt="alt" src={`./${rando2.imgid}.jpg`} /><p>{rando2.name}</p></div></div>

  }

  loadChoices() {
    return this.state.data.characters.map(char => {
      return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /><p>{char.name}</p></div>
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.apiCall.bind(this)}>Marvel Card Fights</h2>
        </div>
        {this.state.data && this.loadTwoRandom()}
      </div>
    );
  }
}

export default App;
