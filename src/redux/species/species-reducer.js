import {
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
} from './species-types';

const initialState = {
  loading: false,
  species: {
    count: 0,
    next: null,
    results: [],
  },
  error: '',
};

const SpeciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPECIES_REQUEST:
      return {
        ...state,
        species: {
          count: 0,
          next: null,
          results: [],
        },
        loading: true,
      };
    case FETCH_SPECIES_SUCCESS:
      return {
        loading: false,
        species: {
          ...state.species,
          next: action.payload.next,
          count: action.payload.count,
          results: [...state.species.results, ...action.payload.results],
        },
        error: '',
      };
    case FETCH_SPECIES_FAILURE:
      return {
        loading: false,
        species: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default SpeciesReducer;
