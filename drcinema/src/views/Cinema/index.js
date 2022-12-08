import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import CinemaInfo from '../../components/CinemaInfo';

const Cinema = ({ route: { params } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameImageContainer}>
        <CinemaInfo info={params} />
      </View>
    </View>
  );
};

export default Cinema;
