import {
  FETCH_CINEMAS_REQUEST,
  FETCH_CINEMAS_SUCCESS,
  FETCH_CINEMAS_ERROR,
} from '../actions/Cinemas/actionType';

const initialState = {
  loading: false,
  cinemas: [],
  error: null,
};

const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CINEMAS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CINEMAS_SUCCESS:
      return {
        ...state,
        loading: false,
        cinemas: action.payload.cinemas,
      };
    case FETCH_CINEMAS_ERROR:
      return {
        ...state,
        loading: false,
        cinemas: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default cinemasReducer;
