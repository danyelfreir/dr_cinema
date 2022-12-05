import React from 'react';
import { View, Text, Linking, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import CinemaInfo from '../../components/CinemaInfo';
import CinemaLogo from '../../components/CinemaLogo';

const Cinema = (info) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <CinemaLogo />
      </View>
      <View style={styles.cinemaInfo}>
        <CinemaInfo
          name={info.name}
          address={info.address}
          phone={info.phone}
          url={info.url}
          description={info.description}
        />
      </View>
    </View>
  );
};

export default Cinema;
