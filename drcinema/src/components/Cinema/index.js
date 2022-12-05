import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import backgroundImage from '../../resources/cinemaBackground.png';

const Cinema = (info) => {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
      <View style={styles.infoContainer}>
        <View style={styles.title}>
          <Text style={styles.title}>{info.name}</Text>
        </View>
        <View>
          <Pressable>
            <Text style={styles.url}>{info.url}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="right" size={32} style={styles.icon} />
      </View>
    </ImageBackground>
  );
};

export default Cinema;
