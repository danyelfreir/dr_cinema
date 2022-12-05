import React from 'react';
import { FlatList, Pressable, View, Text } from 'react-native';

const Showtimes = ({ data }) => {
  const renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <Pressable>
        <View>
          <Text>{item.cinema.name}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <Text>Kaupa miða:</Text>
      <FlatList data={data} renderItem={(item) => renderItem(item)} />
    </View>
  );
};

export default Showtimes;
