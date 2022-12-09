import React, { useEffect } from 'react';
import { View, FlatList, Pressable } from 'react-native';
import CinemaListItem from '../CinemaListItem';
import styles from './styles';

const CinemaList = ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Pressable onPress={() => navigation.navigate('Cinema', item)}>
              <CinemaListItem item={item} />
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CinemaList;
