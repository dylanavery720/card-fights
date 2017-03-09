const app = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CARDS':
      return Object.assign({}, state, { data: action.payload })
    case 'CHOOSE_CHAR':
      return Object.assign({}, state, { team: action.array })
    default:
      return state
  }
}

export default app
