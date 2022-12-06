import { combineReducers } from 'redux';
import upcoming from './upcomingReducer';
import movies from './moviesReducer';
import cinemas from './cinemasReducer';

export default combineReducers({
  upcoming,
  movies,
  cinemas,
});
