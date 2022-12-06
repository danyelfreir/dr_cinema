import React from 'react';
import { Pressable, View, Text, Linking } from 'react-native';
import Seperator from '../Seperator/index.jsx';
import styles from './styles.js';

const Showtimes = ({ showtimes, cinema }) => (
  <View style={styles.container}>
    {showtimes && (
      <View>
        <Text style={styles.timeslotTitle}>Sýningar í {cinema.name}</Text>
        <Seperator width={200} />
        {showtimes.schedule.map((timeslot) => (
          <Pressable
            style={styles.timeslotContainer}
            onPress={() => Linking.openURL(timeslot.purchase_url)}
          >
            <Text style={styles.timeslot}>{`Kl. ${timeslot.time}`}</Text>
            <Text style={styles.buyButton}>Kaupa miða</Text>
          </Pressable>
        ))}
      </View>
    )}
  </View>
);

export default Showtimes;
