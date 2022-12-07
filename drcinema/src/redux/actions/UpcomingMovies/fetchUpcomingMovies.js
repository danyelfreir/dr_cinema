import {
  fetchUpcomingMoviesRequest,
  fetchUpcomingMoviesSuccess,
  fetchUpcomingMoviesError,
} from './action';
import { token } from '../../../security/index';

const URL = 'https://api.kvikmyndir.is/upcoming';
const headers = {
  'Content-Type': 'application/json',
  'x-access-token': token,
};

const fetchUpcomingMovies = () => (dispatch) => {
  dispatch(fetchUpcomingMoviesRequest());
  fetch(URL, { headers })
    .then((response) =>
      response
        .json()
        .then((data) => dispatch(fetchUpcomingMoviesSuccess(data)))
        .catch((err) => dispatch(fetchUpcomingMoviesError(err)))
    )
    .catch((err) => dispatch(fetchUpcomingMoviesError(err)));
};

export default fetchUpcomingMovies;
