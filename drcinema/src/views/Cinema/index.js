import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import CinemaInfo from '../../components/CinemaInfo';
import CinemaLogo from '../../components/CinemaLogo';
import MovieList from '../../components/MovieList';

const Cinema = ({ navigation, route: { params } }) => {
  const findMyMovies = ({ allMovies }) => {
    return allMovies.filter((movie) =>
      movie.showtimes.some((show) => show.cinema.id === params.id)
    );
  };

  const movies = findMyMovies(useSelector((state) => state.movies));

  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nameImageContainer}>
        <CinemaInfo info={params} />
      </View>
      <View style={styles.movies}>
        <MovieList data={movies} />
      </View>
    </View>
  );
};

export default Cinema;
