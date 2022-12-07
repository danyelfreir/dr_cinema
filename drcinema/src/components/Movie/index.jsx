import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Movie = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.releaseYear}>{item.year}</Text>
      </View>
      <View style={styles.image}>
        <Image source={{ uri: item.poster }} style={styles.thumbnail} />
      </View>
      {/* todo thumbnail */}
    </View>
  );
};

export default Movie;
