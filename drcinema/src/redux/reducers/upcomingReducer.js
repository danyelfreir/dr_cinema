import {
  FETCH_UPCOMING_MOVIES_ERROR,
  FETCH_UPCOMING_MOVIES_REQUEST,
  FETCH_UPCOMING_MOVIES_SUCCESS,
} from '../actions/actionType';

const initialState = {
  loading: false,
  upcomingMovies: [],
  error: null,
};

const upcomingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        upcomingMovies: action.payload.upcomingMovies,
      };
    case FETCH_UPCOMING_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        upcomingMovies: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default upcomingReducer;
