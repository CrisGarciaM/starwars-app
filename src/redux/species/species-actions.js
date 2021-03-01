import generatesId from '../../utils/utils';

import {
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
} from './species-types';

const fetchSpeciesRequest = () => {
  return {
    type: FETCH_SPECIES_REQUEST,
  };
};

const fetchSpeciesSuccess = ({ count, next, results }) => {
  return {
    type: FETCH_SPECIES_SUCCESS,
    payload: { count, next, results },
  };
};

const fetchSpeciesFailure = (error) => {
  return {
    type: FETCH_SPECIES_FAILURE,
    payload: error,
  };
};

export const fetchSpecies = (endpoint) => {
  return async function fetchSpeciesThunk(dispatch) {
    dispatch(fetchSpeciesRequest());

    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      dispatch(
        fetchSpeciesSuccess({
          count: data.count,
          next: data.next,
          results: generatesId(data.results),
        })
      );
    } catch (error) {
      dispatch(fetchSpeciesFailure(error.message));
    }
  };
};
