import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fetchUpcomingMovies from '../../redux/actions/UpcomingMovies/fetchUpcomingMovies';
import fetchAllMovies from '../../redux/actions/Movies/fetchAllMovies';
import fetchCinemas from '../../redux/actions/Cinemas/fetchCinemas';

const Main = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCinemas());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchAllMovies());
  }, []);

  const {
    cinemas: { allCinemas },
    upcoming: { upcomingMovies },
    movies: { allMovies },
  } = useSelector((state) => state);

  const onRender = ({ item, index }) => {
    return (
      <Pressable
        key={item.id}
        onPress={() =>
          navigation.navigate('Movie', {
            movie: item,
            cinema: allCinemas[4],
          })
        }
      >
        <Text>{item.title}</Text>
        {/* <Text>{item.name}</Text> */}
      </Pressable>
    );
  };

  return (
    <ScrollView>
      <FlatList data={allMovies} renderItem={(movie) => onRender(movie)} />
    </ScrollView>
  );
};

export default Main;
