import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import Showtimes from '../../components/Showtimes';
import Seperator from '../../components/Seperator';
import MovieService from '../../services/MovieService.js';

const Movie = ({ navigation, route: { params } }) => {
  const movie = params.movie;
  const cinema = params.cinema;
  const movieService = new MovieService();
  const imageBaseUrl = 'http://image.tmdb.org/t/p/original';
  const { width: winWidth } = Dimensions.get('window');
  const [movieBackdrops, setMovieBackdrops] = useState([]);
  const [activeTrailer, setActiveTrailer] = useState(0);

  useEffect(() => {
    navigation.setOptions({ title: movie.title });
    (async () => {
      const { backdrops } = await movieService.getImages(movie.ids.imdb);
      setMovieBackdrops(backdrops);
    })();
  }, []);

  const renderImage = ({ item, index }) => (
    <Image
      style={styles.carouselItem}
      source={{ uri: `${imageBaseUrl}${item.file_path}` }}
      key={index}
    />
  );

  const renderTrailer = ({ item, index }) => (
    <YoutubePlayer
      webViewStyle={styles.trailer}
      height={300}
      videoId={item.key}
    />
  );

  return (
    <ScrollView style={styles.container}>
      {movieBackdrops && movieBackdrops.length > 0 ? (
        <Carousel
          itemWidth={winWidth}
          sliderWidth={winWidth}
          data={movieBackdrops}
          renderItem={(img) => renderImage(img)}
          autoplay
        />
      ) : (
        <View style={styles.backdropPlaceholder}></View>
      )}

      <View style={styles.body}>
        <View style={styles.informationContainer}>
          <Image style={styles.poster} source={{ uri: movie.poster }} />
          <View style={styles.informationTextContainer}>
            <View style={styles.informationTextPair}>
              <Text style={styles.informationTextKey}>Lengd:</Text>
              <Text style={styles.informationTextValue}>
                {movie.durationMinutes} mín
              </Text>
            </View>
            <View style={styles.informationTextPair}>
              <Text style={styles.informationTextKey}>Aldurstakmark:</Text>
              <Text style={styles.informationTextValue}>
                {movie.certificateIS}
              </Text>
            </View>
            <View style={styles.informationTextPair}>
              <Text style={styles.informationTextKey}>Leikstjóri:</Text>
              {movie.directors_abridged.map((director) => (
                <Text style={styles.informationTextValue}>{director.name}</Text>
              ))}
            </View>
            <View style={styles.informationTextPair}>
              <Text style={styles.informationTextKey}>Leikarar:</Text>
              <Text style={styles.informationTextValue}>
                {movie.actors_abridged.map(
                  (actor, index) =>
                    `${actor.name}${
                      index < movie.actors_abridged.length - 1 ? ', ' : ''
                    }`
                )}
              </Text>
            </View>
            <View style={styles.informationTextPair}>
              <Text style={styles.informationTextKey}>Flokkar:</Text>
              <Text style={styles.informationTextValue}>
                {movie.genres.map(
                  (genre, index) =>
                    `${genre.Name}${
                      index < movie.genres.length - 1 ? ', ' : ''
                    }`
                )}
              </Text>
            </View>
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
      </View>
      <View style={styles.trailersContainer}>
        {movie.trailers.length > 0 && (
          <>
            <Carousel
              itemWidth={winWidth}
              sliderWidth={winWidth}
              data={movie.trailers[0].results}
              renderItem={(trailer) => renderTrailer(trailer)}
              onSnapToItem={(index) => setActiveTrailer(index)}
            />
            <Pagination
              dotsLength={movie.trailers[0].results.length}
              activeDotIndex={activeTrailer}
              containerStyle={{ marginTop: -100 }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Movie;
