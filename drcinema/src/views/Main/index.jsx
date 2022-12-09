import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fetchUpcomingMovies from '../../redux/actions/UpcomingMovies/fetchUpcomingMovies';
import fetchAllMovies from '../../redux/actions/Movies/fetchAllMovies';
import fetchCinemas from '../../redux/actions/Cinemas/fetchCinemas';
import styles from './styles.js';
import UpcomingMoviesCarousel from '../../components/UpcomingMoviesCarousel';
import HomeButton from '../../components/HomeButton';
import CinemaList from '../../components/CinemaList';

const CINEMAS = true;
const UPCOMING = false;

const Main = ({ navigation }) => {
  const dispatch = useDispatch();

  const [visibleContent, setvisibleContent] = useState(CINEMAS);

  useEffect(() => {
    dispatch(fetchCinemas());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchAllMovies());
  }, []);

  const {
    cinemas: { allCinemas },
    upcoming: { upcomingMovies },
    movies: { allMovies },
  } = useSelector((state) => state);

  const processUpcomingMovies = () => {
    return upcomingMovies
      .filter((movie) => {
        return new Date(movie['release-dateIS']).getTime() > Date.now();
      })
      .sort((a, b) => {
        const aDate = new Date(a['release-dateIS']);
        const bDate = new Date(b['release-dateIS']);
        return aDate.getTime() - bDate.getTime();
      });
  };

  const orderedUpcomingMovies = processUpcomingMovies();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {visibleContent ? (
          <CinemaList data={allCinemas} navigation={navigation} />
        ) : (
          <UpcomingMoviesCarousel data={orderedUpcomingMovies} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <HomeButton
          title="Kvikmyndahús"
          onPress={() => setvisibleContent(CINEMAS)}
          active={visibleContent}
          icon="warehouse"
        />
        <HomeButton
          title="Væntanlegt í bíó"
          onPress={() => setvisibleContent(UPCOMING)}
          active={!visibleContent}
          icon="camera-burst"
        />
      </View>
    </View>
  );
};

export default Main;
