import React from 'react';
import { View, Text, Linking, Pressable } from 'react-native';
import styles from './styles';

const CinemaInfo = (info) => {
  console.log(info);
  return (
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
        <Text style={styles.description}>{info.description}</Text>
      </View>
    </View>
  );
};

export default CinemaInfo;
