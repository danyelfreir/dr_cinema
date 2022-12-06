import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import UpcomingMovieItem from '../UpcomingMovieItem';

const UpcomingMoviesCarousel = ({ data }) => {
  const { width: width } = Dimensions.get('screen');

  const renderItem = ({ item, index }) => {
    return <UpcomingMovieItem {...item} />;
  };

  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>Væntaleg í Kvikmyndahús</Text>
      </View>
      <Carousel
        itemWidth={250}
        sliderWidth={width}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default UpcomingMoviesCarousel;
