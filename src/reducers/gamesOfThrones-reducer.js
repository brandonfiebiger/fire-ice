export const gamesOfThronesReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_GAMES_OF_THRONES':
      return action.games;
  default:
    return state;
  }
};
