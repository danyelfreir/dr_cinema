import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Carousel } from 'react-native-snap-carousel';
import styles from './styles.js';

const MovieBackdropCarousel = ({ backdrops }) => {
  const { width: winWidth } = Dimensions.get('window');
  const imageBaseUrl = 'http://image.tmdb.org/t/p/original';

  const renderImage = ({ item, index }) => (
    <Image
      style={styles.carouselItem}
      source={{ uri: `${imageBaseUrl}${item.file_path}` }}
      key={item.id}
    />
  );

  return (
    <>
      {backdrops && backdrops.length > 0 ? (
        <Carousel
          itemWidth={winWidth}
          sliderWidth={winWidth}
          data={backdrops}
          renderItem={(img) => renderImage(img)}
          autoplay
        />
      ) : (
        <View style={styles.backdropPlaceholder}></View>
      )}
    </>
  );
};

export default MovieBackdropCarousel;
