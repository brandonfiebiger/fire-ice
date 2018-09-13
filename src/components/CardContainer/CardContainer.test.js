import { mapStateToProps } from './CardContainer';

describe('mapStateToProps', () => {
  it('should return an object with the games array', () => {
    const mockState = {
      gamesOfThrones: ['you are awesome', 'lets be friends']
    }

    const expected = {
      games: ['you are awesome', 'lets be friends']
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})