import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import Showtimes from '../../components/Showtimes';
import Seperator from '../../components/Seperator';

const Movie = ({ movie, cinema }) => {
  const imageBaseUrl = 'http://image.tmdb.org/t/p/original';
  const { width: winWidth } = Dimensions.get('window');
  const [movieBackdrops, setMovieBackdrops] = useState([]);

  const headers = {
    'x-access-token':
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2Mzg2N2U0ZWZmMmQ4ZDEwOWVmYWZmNTciLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkRhbsOtZWwgRnJleXIgR3LDqXRhcnNzb24iLCJlbWFpbCI6ImRhbmllbGZncmV0YXJzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZGFueWVsZnJlaXIiLCJwYXNzd29yZCI6IiQyYSQwOCRPc1hXTXFlRzRkZjFkWDBIQmQuaVkuaUdhZDdQYlphWkJVa1RYdmdueFhRWXhjOXVBaEhrRyIsImRvbWFpbiI6InJ1LmlzIiwibWVzc2FnZSI6IkVkdWNhdGlvbmFsIHB1cnBvc2VzIiwiaWF0IjoxNjcwMzIxODA1LCJleHAiOjE2NzA0MDgyMDV9.3rs4vmU3eT_yYFUE_6liBkCUPSuMlIvrqpNX6nCKcz4',
  };

  const getBackdrops = () => {
    fetch(`https://api.kvikmyndir.is/images?imdbid=${movie.ids.imdb}`, {
      headers,
    }).then((res) =>
      res.json().then((data) => {
        const { backdrops } = data[0].results;
        setMovieBackdrops(backdrops);
      })
    );
  };

  const renderImage = ({ item, index }) => (
    <Image
      style={styles.carouselItem}
      source={{ uri: `${imageBaseUrl}${item.file_path}` }}
      key={index}
    />
  );

  useEffect(() => getBackdrops(), []);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {`${movie.title} (${movie.year})`}
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <Carousel
          itemWidth={400}
          sliderWidth={400}
          data={movieBackdrops}
          renderItem={(img) => renderImage(img)}
          autoplay
        />
        <View style={styles.body}>
          <View style={styles.informationContainer}>
            <Image style={styles.poster} source={{ uri: movie.poster }} />
            <View style={styles.informationTextContainer}>
              <Text style={styles.informationText}>
                {movie.durationMinutes} mín
              </Text>
              <Text style={styles.informationText}>
                Aldurstakmark {movie.certificateIS}
              </Text>
              {movie.directors_abridged.map((director) => (
                <Text style={styles.informationText}>
                  Leikstjóri: {director.name}
                </Text>
              ))}
              <Text style={styles.informationText}>
                Leikarar:{' '}
                {movie.actors_abridged.map(
                  (actor, index) =>
                    `${actor.name}${
                      index < movie.actors_abridged.length - 1 ? ', ' : ''
                    }`
                )}
              </Text>
              <Text style={styles.informationText}>
                Flokkar:{' '}
                {movie.genres.map(
                  (genre, index) =>
                    `${genre.Name}${
                      index < movie.genres.length - 1 ? ', ' : ''
                    }`
                )}
              </Text>
            </View>
          </View>
          <View style={styles.seperatorContainer}>
            <Text style={styles.label}>Lýsing </Text>
            <Seperator width="100%" />
          </View>
          <Text style={styles.description}>{movie.plot}</Text>
          <View style={styles.seperatorContainer}>
            <Text style={styles.label}>Miðar </Text>
            <Seperator width="100%" />
          </View>
          <View style={styles.showtimesContainer}>
            <Showtimes
              showtimes={
                movie.showtimes.filter(
                  (showtime) => showtime.cinema.id === cinema.id
                )[0]
              }
              cinema={cinema}
            />
          </View>
          <View style={styles.seperatorContainer}>
            <Text style={styles.label}>Stiklur </Text>
            <Seperator width="100%" />
          </View>
          <View style={styles.trailersContainer}>
            {movie.trailers[0].results.map((trailer) => (
              <YoutubePlayer
                webViewStyle={styles.trailer}
                height={300}
                videoId={trailer.key}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Movie;
