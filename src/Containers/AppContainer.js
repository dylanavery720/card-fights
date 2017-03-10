import { connect } from 'react-redux'
import { fetchCards, chooseChar } from '../Actions/index.js'
import App from '../Components/App/App'

const mapStateToProps = (state) => {
  return { data: state.app.data, team: state.app.team }
}

const mapDispatchToProps = {
  fetchCards,
  chooseChar,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
