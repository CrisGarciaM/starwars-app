import { combineReducers } from 'redux';
import CharactersReducer from './redux/characters/characters-reducer';
import PlanetsReducer from './redux/planets/planets-reducer';

const rootReducer = combineReducers({
  charactersState: CharactersReducer,
  planetsState: PlanetsReducer,
});

export default rootReducer;
