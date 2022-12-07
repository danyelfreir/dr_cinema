import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const MovieInfo = ({ movie }) => {
  return (
    <View style={styles.informationContainer}>
      <Image style={styles.poster} source={{ uri: movie.poster }} />
      <View style={styles.informationTextContainer}>
        <View style={styles.informationTextPair}>
          <Text style={styles.informationTextKey}>Lengd:</Text>
          <Text style={styles.informationTextValue}>
            {movie.durationMinutes} mín
          </Text>
        </View>
        <View style={styles.informationTextPair}>
          <Text style={styles.informationTextKey}>Aldurstakmark:</Text>
          <Text style={styles.informationTextValue}>{movie.certificateIS}</Text>
        </View>
        <View style={styles.informationTextPair}>
          <Text style={styles.informationTextKey}>Leikstjóri:</Text>
          {movie.directors_abridged.map((director) => (
            <Text style={styles.informationTextValue}>{director.name}</Text>
          ))}
        </View>
        <View style={styles.informationTextPair}>
          <Text style={styles.informationTextKey}>Leikarar:</Text>
          <Text style={styles.informationTextValue}>
            {movie.actors_abridged.map(
              (actor, index) =>
                `${actor.name}${
                  index < movie.actors_abridged.length - 1 ? ', ' : ''
                }`
            )}
          </Text>
        </View>
        <View style={styles.informationTextPair}>
          <Text style={styles.informationTextKey}>Flokkar:</Text>
          <Text style={styles.informationTextValue}>
            {movie.genres.map(
              (genre, index) =>
                `${genre.Name}${index < movie.genres.length - 1 ? ', ' : ''}`
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MovieInfo;
