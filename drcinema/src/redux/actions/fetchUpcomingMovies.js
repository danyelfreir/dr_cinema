import { useDispatch } from 'react-redux';
import {
  fetchUpcomingMoviesRequest,
  fetchUpcomingMoviesSuccess,
  fetchUpcomingMoviesError,
} from './action';

const headers = {
  'Content-Type': 'application/json',
  'x-access-token':
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2Mzg2N2U0ZWZmMmQ4ZDEwOWVmYWZmNTciLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkRhbsOtZWwgRnJleXIgR3LDqXRhcnNzb24iLCJlbWFpbCI6ImRhbmllbGZncmV0YXJzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZGFueWVsZnJlaXIiLCJwYXNzd29yZCI6IiQyYSQwOCRPc1hXTXFlRzRkZjFkWDBIQmQuaVkuaUdhZDdQYlphWkJVa1RYdmdueFhRWXhjOXVBaEhrRyIsImRvbWFpbiI6InJ1LmlzIiwibWVzc2FnZSI6IkVkdWNhdGlvbmFsIHB1cnBvc2VzIiwiaWF0IjoxNjcwMjMwODA4LCJleHAiOjE2NzAzMTcyMDh9.hAsY1KCifL_dA1JlVsSPHyQCs_UI7CtYaPLhK7c6hTQ',
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
