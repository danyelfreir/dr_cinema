import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import UpcomingMovieItem from '../UpcomingMovieItem';

const UpcomingMoviesCarousel = (props) => {
  const { width: width } = Dimensions.get('screen');

  const renderItem = ({ item, index }) => {
    return <UpcomingMovieItem {...item} onPress={() => console.log(item.id)} />;
  };

  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Carousel itemWidth={250} sliderWidth={width} data={props.data} renderItem={renderItem} />
    </View>
  );
};

export default UpcomingMoviesCarousel;
