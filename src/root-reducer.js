import { combineReducers } from 'redux';
import CharactersReducer from './redux/characters/characters-reducer';
import PlanetsReducer from './redux/planets/planets-reducer';
import StartShipsReducer from './redux/starships/starships-reducer';
import SpeciesReducer from './redux/species/species-reducer';

const rootReducer = combineReducers({
  charactersState: CharactersReducer,
  planetsState: PlanetsReducer,
  starshipsState: StartShipsReducer,
  speciesState: SpeciesReducer,
});

export default rootReducer;
