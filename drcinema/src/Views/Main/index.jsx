import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import UpcomingMoviesCarousel from '../../components/UpcomingMoviesCarousel';
import { token } from '../../security/token';
import HomeButton from '../../components/HomeButton';
import axios from 'axios';

const Main = () => {
  const [cinemasVisible, setCinemasVisible] = useState(true);
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const response = await axios.get(
      'http://api.kvikmyndir.is/upcoming',
      config
    );
    setUpComingMovies(response.data);
  };

  const config = {
    headers: {
      'x-access-token': token,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {cinemasVisible ? (
          <Text>CinemaList Here</Text>
        ) : (
          <UpcomingMoviesCarousel data={upComingMovies} />
        )}
      </View>
      {/* <CinemaList /> */}
      <View style={styles.buttonContainer}>
        <HomeButton
          title="Kvikmyndahús"
          onPress={() => setCinemasVisible(true)}
        />
        <HomeButton
          title="Væntanlegt í bíó"
          onPress={() => setCinemasVisible(false)}
        />
      </View>
    </View>
  );
};

export default Main;
