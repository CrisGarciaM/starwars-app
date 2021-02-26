import generatesId from '../../utils/utils';

import {
  FETCH_STARSHIPS_REQUEST,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
} from './starships-types';

const fetchStarshipsRequest = () => {
  return {
    type: FETCH_STARSHIPS_REQUEST,
  };
};

const fetchStarshipsSuccess = ({ count, next, results }) => {
  return {
    type: FETCH_STARSHIPS_SUCCESS,
    payload: { count, next, results },
  };
};

const fetchStarshipsFailure = (error) => {
  return {
    type: FETCH_STARSHIPS_FAILURE,
    payload: error,
  };
};

export const fetchStarships = (endpoint) => {
  return async function fetchStarshipsThunk(dispatch) {
    dispatch(fetchStarshipsRequest());

    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      dispatch(
        fetchStarshipsSuccess({
          count: data.count,
          next: data.next,
          results: generatesId(data.results),
        })
      );

      console.log(data.results);
    } catch (error) {
      dispatch(fetchStarshipsFailure(error.message));
    }
  };
};
