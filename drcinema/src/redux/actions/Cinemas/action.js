import {
  FETCH_CINEMAS_REQUEST,
  FETCH_CINEMAS_SUCCESS,
  FETCH_CINEMAS_ERROR,
} from './actionType';

export const fetchCinemasRequest = () => ({
  type: FETCH_CINEMAS_REQUEST,
});

export const fetchCinemasSuccess = (allCinemas) => ({
  type: FETCH_CINEMAS_SUCCESS,
  payload: {
    allCinemas,
  },
});

export const fetchCinemasError = (error) => ({
  type: FETCH_CINEMAS_ERROR,
  payload: {
    error,
  },
});
