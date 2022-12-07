import React, { useEffect } from 'react';
import { View, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemaListItem from '../CinemaListItem';
import styles from './styles';
import fetchUpcomingMovies from '../../redux/actions/UpcomingMovies/fetchUpcomingMovies';
import fetchAllMovies from '../../redux/actions/Movies/fetchAllMovies';
import fetchCinemas from '../../redux/actions/Cinemas/fetchCinemas';

const CinemaList = ({ data, navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => navigate('Cinema', item)}>
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
