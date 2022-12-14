import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fetchUpcomingMovies from '../../redux/actions/UpcomingMovies/fetchUpcomingMovies';
import fetchAllMovies from '../../redux/actions/Movies/fetchAllMovies';
import fetchCinemas from '../../redux/actions/Cinemas/fetchCinemas';
import styles from './styles.js';
import UpcomingMoviesCarousel from '../../components/UpcomingMoviesCarousel';
import HomeButton from '../../components/HomeButton';
import CinemaList from '../../components/CinemaList';
import CinemaListService from '../../services/CinemaListService';

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

  const { upcomingMovies, error: upcomingError } = useSelector(
    (state) => state.upcoming
  );
  const { allCinemas, error: cinemaError } = useSelector(
    (state) => state.cinemas
  );

  const cinemasService = new CinemaListService(allCinemas);

  const orderedCinemas = cinemasService.sortedCinemas;

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
          <CinemaList
            data={orderedCinemas}
            navigation={navigation}
            error={cinemaError}
          />
        ) : (
          <UpcomingMoviesCarousel
            onPressFunction={navigation.navigate}
            data={orderedUpcomingMovies}
            error={upcomingError}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <HomeButton
          title="Kvikmyndah??s"
          onPress={() => setvisibleContent(CINEMAS)}
          active={visibleContent}
          icon="warehouse"
        />
        <HomeButton
          title="V??ntanlegt ?? b????"
          onPress={() => setvisibleContent(UPCOMING)}
          active={!visibleContent}
          icon="camera-burst"
        />
      </View>
    </View>
  );
};

export default Main;
