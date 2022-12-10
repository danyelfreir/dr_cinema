import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import CinemaInfo from '../../components/CinemaInfo';
import MovieList from '../../components/MovieList';
import ZeroComponent from '../../components/ZeroComponent';

const Cinema = ({ navigation, route: { params } }) => {
  const findMyMovies = (allMovies) => {
    return allMovies.filter((movie) =>
      movie.showtimes.some((show) => {
        return (
          show.cinema.id == params.id || parseInt(show.cinema) == params.id
        );
      })
    );
  };

  const { allMovies, error: movieError } = useSelector((state) => state.movies);

  const movies = findMyMovies(allMovies);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <CinemaInfo info={params} />
      </View>

      <View style={styles.movies}>
        <MovieList
          data={movies}
          cinema={params}
          navigation={navigation}
          listEmptyComponent={() => (
            <ZeroComponent
              error={movieError}
              message="Engar myndir í sýningu!"
            />
          )}
        />
      </View>
    </View>
  );
};

export default Cinema;
