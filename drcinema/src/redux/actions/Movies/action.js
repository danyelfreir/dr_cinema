import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_ALL_MOVIES_ERROR,
} from './actionType.js';

export const fetchAllMoviesRequest = () => ({
  type: FETCH_ALL_MOVIES_REQUEST,
});

export const fetchAllMoviesSuccess = (allMovies) => ({
  type: FETCH_ALL_MOVIES_SUCCESS,
  payload: {
    allMovies,
  },
});

export const fetchAllMoviesError = (error) => ({
  type: FETCH_ALL_MOVIES_ERROR,
  payload: {
    error,
  },
});
