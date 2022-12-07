import {
  fetchAllMoviesRequest,
  fetchAllMoviesSuccess,
  fetchAllMoviesError,
} from './action.js';
import MovieService from '../../../services/MovieService.js';

const movieService = new MovieService();

const fetchAllMovies = () => async (dispatch) => {
  dispatch(fetchAllMoviesRequest());
  const { movies, error } = await movieService.getMovies();
  if (error) {
    console.log(error);
    return dispatch(fetchAllMoviesError(error));
  }
  return dispatch(fetchAllMoviesSuccess(movies));
};

export default fetchAllMovies;
