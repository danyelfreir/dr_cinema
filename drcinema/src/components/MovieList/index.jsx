import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Movie from '../Movie';
import styles from './styles';
import ZeroComponent from '../ZeroComponent';

const MovieList = ({ data, cinema, navigation, reasonForEmpty }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.item}
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
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        ListEmptyComponent={() => <ZeroComponent message={reasonForEmpty} />}
        contentContainerStyle={{
          flex: 1,
        }}
      />
    </View>
  );
};

export default MovieList;
