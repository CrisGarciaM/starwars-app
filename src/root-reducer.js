import { combineReducers } from 'redux';
import CharactersReducer from './redux/characters/characters-reducer';
import PlanetsReducer from './redux/planets/planets-reducer';
import StartShipsReducer from './redux/starships/starships-reducer';

const rootReducer = combineReducers({
  charactersState: CharactersReducer,
  planetsState: PlanetsReducer,
  starshipsState: StartShipsReducer,
});

export default rootReducer;
