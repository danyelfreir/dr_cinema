import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMoviesRequest } from '../../redux/actions/action';
import fetchUpcomingMovies from '../../redux/actions/fetchUpcomingMovies';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, []);
  const movies = useSelector((state) => state.upcomingMovies);
  return (
    <View>
      {movies.map((movie) => (
        <Text>{movie.title}</Text>
      ))}
    </View>
  );
};

export default Main;
