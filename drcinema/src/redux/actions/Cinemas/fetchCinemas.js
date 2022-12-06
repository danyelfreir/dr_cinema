import {
  fetchCinemasRequest,
  fetchCinemasSuccess,
  fetchCinemasError,
} from './action';
import token from '../../../security/index';

const URL = 'https://api.kvikmyndir.is/theaters';
const headers = {
  'Content-Type': 'application/json',
  'x-access-token': token.token,
};

const fetchCinemas = () => (dispatch) => {
  dispatch(fetchCinemasRequest);
  fetch(URL, { headers })
    .then((response) =>
      response
        .json()
        .then((data) => dispatch(fetchCinemasSuccess(data)))
        .catch((err) => dispatch(fetchCinemasError(err)))
    )
    .catch((err) => dispatch(fetchCinemasError(err)));
};

export default fetchCinemas;
