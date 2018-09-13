import { App, mapDispatchToProps } from './App';
import { getGamesOfThrones } from '../../actions'


  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getGamesOfThrones action', () => {
        const mockDispatch = jest.fn();

        const mockGames = ['hello', 'how are you?']
        const actionToDispatch = getGamesOfThrones(mockGames)
        
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.getGames(mockGames);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })
  })


