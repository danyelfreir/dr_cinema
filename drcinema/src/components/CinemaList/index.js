import React, { useEffect } from 'react';
import { View, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemaListItem from '../CinemaListItem';
import styles from './styles';
import fetchUpcomingMovies from '../../redux/actions/UpcomingMovies/fetchUpcomingMovies';
import fetchAllMovies from '../../redux/actions/Movies/fetchAllMovies';
import fetchCinemas from '../../redux/actions/Cinemas/fetchCinemas';

const CinemaList = ({ allCinemas, navigation: { navigate } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
    dispatch(fetchAllMovies());
    dispatch(fetchCinemas());
  }, []);

  const cinemas = useSelector((state) => state.cinemas.allCinemas);

  return (
    <View style={styles.container}>
      <FlatList
        data={cinemas}
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
