import { combineReducers } from 'redux';
import CharactersReducer from './redux/characters/characters-reducer';

const rootReducer = combineReducers({
  charactersState: CharactersReducer,
});

export default rootReducer;
