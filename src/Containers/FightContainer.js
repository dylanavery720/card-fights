import { connect } from 'react-redux'
// import { displaySearched } from '../Actions/index.js'
import Fight from '../Components/Fight/Fight'

const mapStateToProps = (state) => {
  return { data: state.app.data, team: state.app.team }
}

// const mapDispatchToProps = {
//   fetchCards,
//   chooseChar,
// }

export default connect(mapStateToProps, null)(Fight)
