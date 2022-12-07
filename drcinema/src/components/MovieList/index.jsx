import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Movie from '../Movie';
import styles from './styles';

const MovieList = ({ data, cinema, navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Movie', { movie: item, cinema: cinema })
        }
      >
        <Movie item={item} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sýningar</Text>
      <FlatList data={data} horizontal={true} renderItem={renderItem} />
    </View>
  );
};

export default MovieList;
