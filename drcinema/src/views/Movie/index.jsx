import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import data from './DontWorryDarling.json';
import images from './images.json';
import styles from './styles';
import Showtimes from '../../components/Showtimes';

const Movie = () => {
  const DontWorryDarling = data[0];
  const DontWorryDarlingBackdrops = images[0].results.backdrops;
  const imageBaseUrl = 'http://image.tmdb.org/t/p/original';
  const [activeBackdrop, setActiveBackdrop] = useState(0);

  const renderImage = ({ item, index }) => (
    <Image
      source={{ uri: `${imageBaseUrl}${item.file_path}` }}
      style={styles.poster}
      key={index}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {`${DontWorryDarling.title} (${DontWorryDarling.year})`}
        </Text>
      </View>
      <Carousel
        itemWidth={400}
        sliderWidth={400}
        data={DontWorryDarlingBackdrops}
        renderItem={(img) => renderImage(img)}
        onSnapToItem={(index) => setActiveBackdrop(index)}
      />
      <Pagination
        dotsLength={DontWorryDarlingBackdrops.length}
        activeDotIndex={activeBackdrop}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDots}
        inactiveDotStyle={styles.pageinationInactiveDots}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <View style={styles.body}>
        <Text style={styles.label}>Um myndina</Text>
        <Text>{DontWorryDarling.plot}</Text>
        <Text style={styles.label}>Flokkar</Text>
        {DontWorryDarling.genres.map((genre) => (
          <Text key={genre.ID}>{genre.Name}</Text>
        ))}
      </View>
      <Showtimes data={DontWorryDarling.showtimes} />
    </View>
  );
};

export default Movie;
