import generatesId from '../../utils/utils';

import {
  FETCH_PLANETS_REQUEST,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
} from './planets-types';

const fetchPlanetsRequest = () => {
  return {
    type: FETCH_PLANETS_REQUEST,
  };
};

const fetchPlanetsSuccess = ({ count, next, results }) => {
  return {
    type: FETCH_PLANETS_SUCCESS,
    payload: { count, next, results },
  };
};

const fetchPlanetsFailure = (error) => {
  return {
    type: FETCH_PLANETS_FAILURE,
    payload: error,
  };
};

export const fetchPlanets = (endpoint) => {
  return async function fetchPlanetsThunk(dispatch) {
    dispatch(fetchPlanetsRequest());

    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      dispatch(
        fetchPlanetsSuccess({
          count: data.count,
          next: data.next,
          results: generatesId(data.results),
        })
      );
    } catch (error) {
      dispatch(fetchPlanetsFailure(error.message));
    }
  };
};
