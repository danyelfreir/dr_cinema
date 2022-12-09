import React, { useEffect } from 'react';
import { View, FlatList, Pressable } from 'react-native';
import CinemaListItem from '../CinemaListItem';
import ZeroComponent from '../ZeroComponent';
import styles from './styles';

const CinemaList = ({ data, navigation, error }) => {
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
        ListEmptyComponent={() => (
          <ZeroComponent error={error} message="Engin kvikmyndahús tiltæk" />
        )}
        // contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />
    </View>
  );
};

export default CinemaList;
