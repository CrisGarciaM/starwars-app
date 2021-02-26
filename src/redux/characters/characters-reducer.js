import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from './characters-types';

const initialState = {
  loading: false,
  characters: {
    count: 0,
    next: null,
    results: [],
  },
  error: '',
};

const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        characters: {
          count: 0,
          next: null,
          results: [],
        },
        loading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        loading: false,
        characters: {
          ...state.characters,
          next: action.payload.next,
          count: action.payload.count,
          results: [...state.characters.results, ...action.payload.results],
        },
        error: '',
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        loading: false,
        characters: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default CharactersReducer;
