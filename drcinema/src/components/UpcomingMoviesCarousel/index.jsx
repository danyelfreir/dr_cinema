import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import UpcomingMovieItem from '../UpcomingMovieItem';
import ZeroComponent from '../ZeroComponent';

const UpcomingMoviesCarousel = ({ onPressFunction, data, error }) => {
  const { width: width } = Dimensions.get('screen');

  const renderItem = ({ item, index }) => {
    return <UpcomingMovieItem movie={item} onPressFunction={onPressFunction} />;
  };

  return (
    <View
      style={{
        // flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Carousel
        itemWidth={275}
        sliderWidth={width}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <ZeroComponent error={error} message={'Engar myndir á næstunni'} />
        )}
      />
    </View>
  );
};

export default UpcomingMoviesCarousel;
