import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const UpcomingMovieItem = (props) => {
  const formatDate = (date) => {
    const x = date.split('-');
    return `${x[2]}.${x[1]}.${x[0]}`;
  };

  const newDate = formatDate(props['release-dateIS']);

  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      {props.poster && <Image style={styles.thumbnail} source={{ uri: props.poster }} />}
      <LinearGradient
        colors={['transparent', 'black']}
        end={{ x: 0.5, y: 0.7 }}
        style={styles.description}
      >
        <Text style={styles.name}>{props.title}</Text>
        <Text style={styles.coming}>kemur</Text>
        <Text style={styles.release}>{newDate}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default UpcomingMovieItem;
