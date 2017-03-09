export const fetchCards = (payload) => {
  return {
    type: 'FETCH_CARDS',
    payload,
  }
}

export const chooseChar = (array) => {
   return {
     type: 'CHOOSE_CHAR',
     array,
   }
}
