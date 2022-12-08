import {
  fetchCinemasRequest,
  fetchCinemasSuccess,
  fetchCinemasError,
} from './action';
import CinemaService from '../../../services/CinemaService';

const cinemaService = new CinemaService();

const fetchCinemas = () => async (dispatch) => {
  dispatch(fetchCinemasRequest);
  const { cinemas, error } = await cinemaService.getCinemas();
  if (error) {
    return dispatch(fetchCinemasError(error));
  }
  return dispatch(fetchCinemasSuccess(cinemas));
};

export default fetchCinemas;
