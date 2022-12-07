import React from 'react';
import { View, Text, Linking, Pressable, ImageBackground } from 'react-native';
import styles from './styles';
import cinemaInfoBackground from '../../resources/cinemaInfoBackground.png';

const CinemaInfo = (info) => {
  const regex = /\B<br>|\B<b>|^<br>/g;

  const filterDescription = (description) => {
    // filter out <br> and <b> tags
    if (!description) return '';
    const filteredDescription = description.replace(regex, ' ');
    return filteredDescription;
  };

  return (
    <ImageBackground
      source={cinemaInfoBackground}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.infoContainer}>
        <View style={styles.title}>
          <Text style={styles.title}>{info.name}</Text>
        </View>
        <View style={styles.locationDetails}>
          <Text style={styles.address}>{info.address}</Text>
          <Text style={styles.phone}>{info.phone}</Text>
        </View>
        <View style={styles.urlContainer}>
          <Pressable
            onPress={() => {
              Linking.openURL(`https://${info.url}`);
            }}
          >
            <Text style={styles.url}>{info.url}</Text>
          </Pressable>
        </View>
        <View style={styles.descrContainer}>
          <Text style={styles.description}>
            {filterDescription(info.description)}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CinemaInfo;
