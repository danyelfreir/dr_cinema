import { useDispatch } from 'react-redux';
import {
  fetchUpcomingMoviesRequest,
  fetchUpcomingMoviesSuccess,
  fetchUpcomingMoviesError,
} from './action';

const headers = {
  'Content-Type': 'application/json',
  'x-access-token':
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzhkYWUwZmZmMmQ4ZDEwOWVmYWZmNWIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlBhdHJla3VyIMOew7NyIEFnbmFyc3NvbiIsImVtYWlsIjoicGF0cmVrdXIyMEBydS5pcyIsInVzZXJuYW1lIjoicGF0cmVrdXJ0aCIsInBhc3N3b3JkIjoiJDJhJDA4JDI1M09kWkt6eFE0ekZoYktMTnE3ZS5TbXUxNDc2Y1J2ZEo3UzNFLnJGQVU3NlEzZG9yRTV5IiwiZG9tYWluIjoid3d3LnJ1LmlzIiwibWVzc2FnZSI6IkVkdWNhdGlvbmFsIHB1cnBvc2VzLiIsImlhdCI6MTY3MDM0MDQ5MSwiZXhwIjoxNjcwNDI2ODkxfQ.1d2W2NTBHVEotVzhwhN5v2VhTFuzenxT9k6TVf9Wlww',
};

const fetchUpcomingMovies = () => (dispatch) => {
  dispatch(fetchUpcomingMoviesRequest());
  fetch('https://api.kvikmyndir.is/upcoming/', { headers })
    .then((res) => {
      if (res.status !== 200) {
        return dispatch(fetchUpcomingMoviesError('Not found'));
      }
      return res
        .json()
        .then((data) => dispatch(fetchUpcomingMoviesSuccess(data)))
        .catch((err) => dispatch(err));
    })
    .catch((err) => dispatch(err));
};

export default fetchUpcomingMovies;
