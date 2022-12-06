import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CinemaInfo from '../../components/CinemaInfo';
import CinemaLogo from '../../components/CinemaLogo';

const Cinema = ({ route: { params } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <CinemaLogo url={params.website} />
      </View>
      <View style={styles.cinemaInfo}>
        <CinemaInfo
          name={params.name}
          address={params['address\t']}
          phone={params.phone}
          url={params.website}
          description={params.description}
        />
      </View>
    </View>
  );
};

export default Cinema;
