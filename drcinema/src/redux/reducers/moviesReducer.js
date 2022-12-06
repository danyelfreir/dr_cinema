import {
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_ALL_MOVIES_ERROR,
} from '../actions/Movies/actionType.js';

const initialState = {
  loading: false,
  allMovies: [],
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  const { loading, err } = state;
  switch (action.type) {
    case FETCH_ALL_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        allMovies: action.payload.allMovies,
      };
    case FETCH_ALL_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        allMovies: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default moviesReducer;
