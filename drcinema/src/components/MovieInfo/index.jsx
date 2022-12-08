import React from 'react';
import { View, Text, Image } from 'react-native';
import MovieInfoChild from '../MovieInfoChild/index.js';
import styles from './styles.js';

const MovieInfo = ({ movie }) => {
  return (
    <View style={styles.informationContainer}>
      <Image style={styles.poster} source={{ uri: movie.poster }} />
      <View style={styles.informationTextContainer}>
        <MovieInfoChild
          infoKey={'Lengd:'}
          infoValue={`${movie.durationMinutes} mín`}
        />
        <MovieInfoChild
          infoKey={'Aldurstakmark:'}
          infoValue={movie.certificateIS}
        />
        <MovieInfoChild
          infoKey={'Leikstjóri:'}
          infoValueArray={movie.directors_abridged}
        />
        <MovieInfoChild
          infoKey={'Leikarar:'}
          infoValueArray={movie.actors_abridged}
        />
        <MovieInfoChild infoKey={'Flokkar:'} infoValueArray={movie.genres} />
      </View>
    </View>
  );
};

export default MovieInfo;
