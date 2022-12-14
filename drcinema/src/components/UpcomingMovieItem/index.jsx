import React, { useState, memo, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import PlayTrailerButton from '../PlayTrailerButton';
import TrailerModal from '../TrailerModal';

const UpcomingMovieItem = ({ movie, onPressFunction }) => {
  const [trailer, setTrailer] = useState('');
  const [viewTrailer, setViewTrailer] = useState(false);

  const formatDate = (date) => {
    const x = date.split('-');
    return `${x[2]}.${x[1]}.${x[0]}`;
  };

  useEffect(() => {
    setTrailer(getTrailer());
  }, []);

  const getTrailer = () => {
    if (movie.trailers.length > 0) {
      const trailers = movie.trailers[0].results.map((item) => item.key);
      if (trailers.length < 1) return ''; // no url
      return trailers[0];
    } else return '';
  };

  const newDate = formatDate(movie['release-dateIS']);

  return (
    <Pressable
      style={styles.container}
      onPress={() => onPressFunction('Movie', { movie: movie })}
    >
      {movie.poster && (
        <Image style={styles.thumbnail} source={{ uri: movie.poster }} />
      )}
      <LinearGradient
        colors={['transparent', 'black']}
        end={{ x: 0.5, y: 0.7 }}
        style={styles.description}
      >
        <Text style={styles.name}>{movie.title}</Text>
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

const compare = (prev, next) => {
  if (prev.movie !== next.movie) return false;
  return true;
};

export default memo(UpcomingMovieItem, compare);
