import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import Showtimes from '../../components/Showtimes';
import Seperator from '../../components/Seperator';
import MovieService from '../../services/MovieService.js';
import MovieBackdropCarousel from '../../components/MovieBackdropCarousel';
import MovieInfo from '../../components/MovieInfo';
import MovieTrailerCarousel from '../../components/MovieTrailerCarousel';

const Movie = ({ navigation, route: { params } }) => {
  const movie = params.movie;
  const cinema = params.cinema;
  const movieService = new MovieService();
  const [movieBackdrops, setMovieBackdrops] = useState([]);
  const [showTrailers, setShowTrailers] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: movie.title });
    (async () => {
      const { backdrops } = await movieService.getImages(movie.ids.imdb);
      setMovieBackdrops(backdrops);
    })();
    if (
      movie.trailers &&
      movie.trailers.length > 0 &&
      movie.trailers[0].results.length > 0
    ) {
      setShowTrailers(true);
    }
  }, []);

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <MovieBackdropCarousel backdrops={movieBackdrops} />
          <View style={styles.body}>
            <MovieInfo movie={movie} />
            <Seperator width="100%" label="Lýsing" />
            <Text style={styles.description}>{movie.plot}</Text>
            {movie.showtimes && (
              <>
                <Seperator width="100%" label="Miðar" />
                <View style={styles.showtimesContainer}>
                  <Showtimes
                    showtimes={
                      movie.showtimes.filter(
                        (showtime) => showtime.cinema.id === cinema.id
                      )[0]
                    }
                    cinema={cinema}
                  />
                </View>
              </>
            )}
            {showTrailers && <Seperator width="100%" label="Stiklur" />}
          </View>
          {showTrailers && (
            <MovieTrailerCarousel trailers={movie.trailers[0].results} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Movie;
