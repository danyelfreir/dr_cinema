import {
  fetchAllMoviesRequest,
  fetchAllMoviesSuccess,
  fetchAllMoviesError,
} from './action.js';
import token from '../../../security/index';

const headers = {
  'Content-Type': 'application/json',
  'x-access-token': token.token,
};

const fetchAllMovies = () => (dispatch) => {
  dispatch(fetchAllMoviesRequest());
  fetch('https://api.kvikmyndir.is/movies/', { headers })
    .then((response) =>
      response
        .json()
        .then((data) => dispatch(fetchAllMoviesSuccess(data)))
        .catch((err) => dispatch(fetchAllMoviesError(err)))
    )
    .catch((err) => dispatch(fetchAllMoviesError(err)));
};

export default fetchAllMovies;
