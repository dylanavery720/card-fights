import React, { Component } from 'react';
import logo from './logo.svg';
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

  loadTwoRandom(){
    return this.state.data.characters.map(char => {
      return <div><img className="cards" alt="alt" src={`./${char.imgid}.jpg`} /></div>
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.apiCall.bind(this)}>Welcome to React</h2>
        </div>
        {this.state.data && this.loadTwoRandom()}
      </div>
    );
  }
}

export default App;
