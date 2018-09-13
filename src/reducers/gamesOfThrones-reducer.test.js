import { gamesOfThronesReducer } from './gamesOfThrones-reducer';

describe('gamesOfThronesReducer', () => {

  it('should return initial state by default', () => {
    const expected = [];

    const result = gamesOfThronesReducer(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return an array of the games of thrones if action type is GET_GAMES_OF_THRONES', () => {
    const expected = ['games', 'of', 'thrones'];

    const action = {type: 'GET_GAMES_OF_THRONES', games: expected};

    const result = gamesOfThronesReducer([], action);

    expect(result).toEqual(expected);
  })
})