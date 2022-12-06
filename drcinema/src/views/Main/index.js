import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fetchUpcomingMovies from '../../redux/actions/UpcomingMovies/fetchUpcomingMovies';
import fetchAllMovies from '../../redux/actions/Movies/fetchAllMovies';
import fetchCinemas from '../../redux/actions/Cinemas/fetchCinemas';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
    dispatch(fetchAllMovies());
    dispatch(fetchCinemas());
  }, []);

  const { upcomingMovies } = useSelector((state) => state.upcoming);
  const { allMovies } = useSelector((state) => state.movies);
  const { cinemas } = useSelector((state) => state.cinemas);

  return (
    <ScrollView>
      {upcomingMovies.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </ScrollView>
  );
};

export default Main;
