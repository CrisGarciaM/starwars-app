import {
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_REQUEST,
  FETCH_PLANETS_FAILURE,
} from './planets-types';

const initialState = {
  loading: false,
  planets: {
    count: 0,
    next: null,
    results: [],
  },
  error: '',
};

const PlanetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLANETS_SUCCESS:
      return {
        loading: false,
        planets: {
          ...state.planets,
          next: action.payload.next,
          count: action.payload.count,
          results: [...state.planets.results, ...action.payload.results],
        },
        error: '',
      };
    case FETCH_PLANETS_FAILURE:
      return {
        loading: false,
        planets: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default PlanetsReducer;
