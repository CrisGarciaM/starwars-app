import {
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_REQUEST,
  FETCH_STARSHIPS_FAILURE,
} from './starships-types';

const initialState = {
  loading: false,
  starships: {
    count: 0,
    next: null,
    results: [],
  },
  error: '',
};

const StarshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS_REQUEST:
      return {
        ...state,
        starships: {
          count: 0,
          next: null,
          results: [],
        },
        loading: true,
      };
    case FETCH_STARSHIPS_SUCCESS:
      return {
        loading: false,
        starships: {
          ...state.starships,
          next: action.payload.next,
          count: action.payload.count,
          results: [...state.starships.results, ...action.payload.results],
        },
        error: '',
      };
    case FETCH_STARSHIPS_FAILURE:
      return {
        loading: false,
        starships: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default StarshipsReducer;
