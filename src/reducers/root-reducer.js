import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { gamesOfThronesReducer } from './gamesOfThrones-reducer'

const rootReducer = combineReducers({
  fake,
  gamesOfThrones: gamesOfThronesReducer
});


export default rootReducer;
