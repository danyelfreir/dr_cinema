import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Carousel, Pagination } from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles.js';

const MovieTrailerCarousel = ({ trailers }) => {
  const [activeTrailer, setActiveTrailer] = useState(0);
  const { width: winWidth } = Dimensions.get('window');

  const renderTrailer = ({ item, index }) => (
    <YoutubePlayer height={300} videoId={item.key} key={item.id} />
  );

  return (
    <>
      <View style={styles.trailersContainer}>
        <Carousel
          itemWidth={winWidth}
          sliderWidth={winWidth}
          data={trailers}
          renderItem={(trailer) => renderTrailer(trailer)}
          onSnapToItem={(index) => setActiveTrailer(index)}
        />
        <Pagination
          dotsLength={trailers.length}
          activeDotIndex={activeTrailer}
          containerStyle={styles.dotContainer}
          dotStyle={[
            styles.dotStyle,
            { marginHorizontal: 15 - trailers.length },
          ]}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </>
  );
};

export default MovieTrailerCarousel;
