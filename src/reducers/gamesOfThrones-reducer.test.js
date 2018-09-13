import { gamesOfThronesReducer } from './gamesOfThrones-reducer';

describe('gamesOfThronesReducer', () => {

  it('should return initial state by default', () => {
    const expected = [];

    const result = gamesOfThronesReducer(undefined, {});

    expect(result).toEqual(expected);
  })
})