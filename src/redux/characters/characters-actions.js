import generatesId from '../../utils/utils';

import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from './characters-types';

const fetchCharatersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST,
  };
};

const fetchCharactersSuccess = ({ count, next, results }) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: { count, next, results },
  };
};

const fetchCharactersFailure = (error) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};

export const fetchCharacters = (endpoint) => {
  return async function fetchCharactersThunk(dispatch) {
    dispatch(fetchCharatersRequest());

    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      dispatch(
        fetchCharactersSuccess({
          count: data.count,
          next: data.next,
          results: generatesId(data.results),
        })
      );
    } catch (error) {
      dispatch(fetchCharactersFailure(error.message));
    }
  };
};
