import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import AgeIcon from '../AgeIcon/indes';
import TagIcon from '../TagIcon';

const Movie = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.age}>
        {item.certificate && (
          <AgeIcon
            color={item.certificate.color}
            age={item.certificate.number}
          />
        )}
      </View>
      <View style={styles.image}>
        <Image source={{ uri: item.poster }} style={styles.thumbnail} />
      </View>
      <LinearGradient
        colors={['transparent', 'black']}
        end={{ x: 0.5, y: 0.9 }}
        // start={{ x: 0.5, y: 0 }}
        style={styles.description}
      >
        <Text style={styles.name}>
          {item.title} ({item.year})
        </Text>
        <View style={styles.tags}>
          {item.genres.map((genre) => {
            return <TagIcon tag={genre.Name} key={genre.ID} />;
          })}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Movie;
