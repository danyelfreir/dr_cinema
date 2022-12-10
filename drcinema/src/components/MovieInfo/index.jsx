import React from 'react';
import { View, Text, Image } from 'react-native';
import MovieInfoChild from '../MovieInfoChild/index.js';
import styles from './styles.js';

const MovieInfo = ({ movie }) => {
  return (
    <View style={styles.informationContainer}>
      <Image style={styles.poster} source={{ uri: movie.poster }} />
      <View style={styles.informationTextContainer}>
        <MovieInfoChild infoKey={'Titill'} infoValue={movie.title} />
        {movie.year && (
          <MovieInfoChild infoKey={'Útgáfuár'} infoValue={movie.year} />
        )}
        {movie.durationMinutes && (
          <MovieInfoChild
            infoKey={'Lengd:'}
            infoValue={`${movie.durationMinutes} mín`}
          />
        )}
        {movie.certificateIS && (
          <MovieInfoChild
            infoKey={'Aldurs-\ntakmark:'}
            infoValue={movie.certificateIS}
          />
        )}
        {movie.directors_abridged && movie.directors_abridged.length > 0 && (
          <MovieInfoChild
            infoKey={'Leikstjóri:'}
            infoValueArray={movie.directors_abridged}
          />
        )}
        {movie.actors_abridged && movie.actors_abridged.length > 0 && (
          <MovieInfoChild
            infoKey={'Leikarar:'}
            infoValueArray={movie.actors_abridged}
          />
        )}
        {movie.genres && movie.genres.length > 0 && (
          <MovieInfoChild infoKey={'Flokkar:'} infoValueArray={movie.genres} />
        )}
      </View>
    </View>
  );
};

export default MovieInfo;
