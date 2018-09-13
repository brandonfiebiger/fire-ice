import * as actions from './index';

describe('actions', () => {

  it('should have a type of GET_GAMES_OF_THRONES', () => {
    const games = ['games'];
    const expectedAction = {
      type: 'GET_GAMES_OF_THRONES',
      games
    }

    const result = actions.getGamesOfThrones(games);

    expect(result).toEqual(expectedAction);
  })
})