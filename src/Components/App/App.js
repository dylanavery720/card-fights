import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import logo from '../../Hulk5';
import './App.css';
import '../../../public/surfer.jpg';
import '../../../public/warlock.jpg';
import '../../../public/thanos.jpg';
import '../../../public/galactus.jpg';


// 1. two random opponents pop up , HAVE THEM POP UP ON SUBMIT???
// 2. select two card to fight them
// 3. function to combine stats of each pair and then compare each combination
// 4. animation for each comparison of combination (sushi jiggler style)
// 5. post to scores upon completion, final score, return result win or lose

class App extends Component {

  constructor() {
    super()
    this.state = {
      ready: true
    }
  }

  componentDidMount() {
    this.apiCall()
  }

apiCall() {
  fetch(`http://localhost:3001/cards`)
  .then(response => response.json())
  .then(data => this.props.fetchCards(data.cards))
  }

  handleChar(e, char) {
    if(this.props.team.length < 1) {
      this.props.chooseChar([char])
    } else {
    this.props.chooseChar([char, this.props.team[0]])
    }
  }

  loadChoices() {
    const { data } = this.props
    let charArray = []
    for (var char in data) {
         const c = data[char]
         charArray.push(<div key={c.id} className="choices">
                <img className="cards" alt="alt" src={`./${c.imgid}.jpg`} />
                <button
                  value={c}
                  className="block"
                  onClick={(e) => this.handleChar(e, c)}>ADD</button>
                <label>{c.name}</label>
              </div>)
    } 
    return charArray
  }

  startFight() {
    this.setState({ready: false})
    browserHistory.push('/fight')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
          <h2 className="team-display">YOUR TEAM:</h2>
          {this.props.team.map((char, i) => <h2 key={i} className="team-display">{char.name}</h2>)}
          </div>
          <div className="header-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.apiCall.bind(this)}>Marvel Card Fights</h2>
          </div>
        </div>
        {this.state.ready && 
        <div>
          <h2>CHOOSE YOUR TEAM OF 2</h2>
          <div className="card-hold">{this.props.data && this.loadChoices()}
        </div></div>}
        <button onClick={this.startFight.bind(this)}>Submit</button>
        {!this.state.ready && this.props.children}
      </div>
    );
  }
}

export default App;
