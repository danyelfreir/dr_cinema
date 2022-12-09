import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import CinemaInfo from '../../components/CinemaInfo';
import MovieList from '../../components/MovieList';

const Cinema = ({ navigation, route: { params } }) => {
  const findMyMovies = ({ allMovies }) => {
    return allMovies.filter((movie) =>
      movie.showtimes.some((show) => show.cinema.id === params.id)
    );
  };

  const movies = findMyMovies(useSelector((state) => state.movies));
  // console.log(erro1);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <CinemaInfo info={params} />
      </View>

      {/* {!!movies.length > 0 && ( */}
      <View style={styles.movies}>
        <MovieList
          data={movies}
          cinema={params}
          navigation={navigation}
          reasonForEmpty={'Hello'}
        />
      </View>
      {/* )} */}
      {movies.length === 0 && (
        <View style={styles.missingMovies}>
          <Text style={styles.message}>Engar myndir í sýningu!</Text>
        </View>
      )}
    </View>
  );
};

export default Cinema;
