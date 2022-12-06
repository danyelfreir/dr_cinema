import {
  FETCH_UPCOMING_MOVIES_ERROR,
  FETCH_UPCOMING_MOVIES_REQUEST,
  FETCH_UPCOMING_MOVIES_SUCCESS,
} from './actionType';

export const fetchUpcomingMoviesRequest = () => ({
  type: FETCH_UPCOMING_MOVIES_REQUEST,
});

export const fetchUpcomingMoviesSuccess = (upcomingMovies) => ({
  type: FETCH_UPCOMING_MOVIES_SUCCESS,
  payload: {
    upcomingMovies,
  },
});

export const fetchUpcomingMoviesError = (error) => ({
  type: FETCH_UPCOMING_MOVIES_ERROR,
  payload: {
    error,
  },
});
