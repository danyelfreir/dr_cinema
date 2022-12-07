import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import CinemaInfo from '../../components/CinemaInfo';

const Cinema = ({ route: { params } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameImageContainer}>
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
