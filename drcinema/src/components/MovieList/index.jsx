import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Movie from '../Movie';
import styles from './styles';

const MovieList = (props) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.item}>
        <Movie item={item} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sýningar</Text>
      <FlatList data={props.data} horizontal={true} renderItem={renderItem} />
    </View>
  );
};

export default MovieList;
