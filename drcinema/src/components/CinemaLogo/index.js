import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import logo from '../../resources/Sambio-Logo-small.png';

const CinemaLogo = (url) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo}></Image>
    </View>
  );
};

export default CinemaLogo;
