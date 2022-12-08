import {
  fetchUpcomingMoviesRequest,
  fetchUpcomingMoviesSuccess,
  fetchUpcomingMoviesError,
} from './action';
import UpcomingService from '../../../services/UpcomingService';

const upcomingService = new UpcomingService();

const fetchUpcomingMovies = () => async (dispatch) => {
  dispatch(fetchUpcomingMoviesRequest());
  const { upcomingMovies, error } = await upcomingService.getUpcomingMovies();
  if (error) {
    return dispatch(fetchUpcomingMoviesError(error));
  }
  return dispatch(fetchUpcomingMoviesSuccess(upcomingMovies));
};

export default fetchUpcomingMovies;
