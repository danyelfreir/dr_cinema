import React, { useEffect } from 'react';
import { View, FlatList, Pressable } from 'react-native';
import CinemaListItem from '../CinemaListItem';
import ZeroComponent from '../ZeroComponent';
import Seperator from '../Seperator';
import styles from './styles';
import colors from '../../styles/index';

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
        ItemSeparatorComponent={() => (
          <Seperator
            width="125%"
            style={{ line: colors.beauBlue }}
          />
        )}
        ListEmptyComponent={() => (
          <ZeroComponent error={error} message="Engin kvikmyndahús tiltæk" />
        )}
      />
    </View>
  );
};

export default CinemaList;
