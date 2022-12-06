import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import PlayTrailerButton from '../PlayTrailerButton';
import * as Linking from 'expo-linking';
import TrailerModal from '../TrailerModal';

const UpcomingMovieItem = (props) => {
  const [viewTrailer, setViewTrailer] = useState(false);

  const formatDate = (date) => {
    const x = date.split('-');
    return `${x[2]}.${x[1]}.${x[0]}`;
  };

  const getTrailer = () => {
    if (props.trailers.length > 0) {
      const trailers = props.trailers[0].results.map((item) => item.key); //TODO
      if (trailers.length < 1) return ''; // no url
      return trailers[0];
    } else return '';
  };

  const trailer = getTrailer();

  const newDate = formatDate(props['release-dateIS']);

  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      {props.poster && <Image style={styles.thumbnail} source={{ uri: props.poster }} />}
      <LinearGradient
        colors={['transparent', 'black']}
        end={{ x: 0.5, y: 0.7 }}
        style={styles.description}
      >
        <Text style={styles.name}>{props.title}</Text>
        <Text style={styles.coming}>kemur</Text>
        <Text style={styles.release}>{newDate}</Text>
        {trailer !== '' && (
          <View style={styles.trailer}>
            <Text style={styles.trailerText}>Horfðu á stikluna!</Text>
            <PlayTrailerButton onPress={() => setViewTrailer(true)} />
            <TrailerModal
              isVisible={viewTrailer}
              closeModal={() => setViewTrailer(false)}
              url={trailer}
            />
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default UpcomingMovieItem;
