import React, { useEffect, useState } from 'react';
import { Pressable, View, Text, Linking } from 'react-native';
import Seperator from '../Seperator/index.jsx';
import styles from './styles.js';

// const Showtimes = ({ showtimes, cinema }) => {
const Showtimes = ({ showtimes, cinema }) => {
  const [hasShowtimes, setHasShowtimes] = useState(false);
  useEffect(() => {
    if (showtimes && showtimes.schedule.length > 0) {
      setHasShowtimes(true);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.timeslotTitleContainer}>
          <Text style={styles.timeslotTitle}>Sýningar</Text>
          <Text style={styles.timeslotSubTitle}>{cinema.name}</Text>
        </View>
        <Seperator width={200} />
        {hasShowtimes ? (
          showtimes.schedule.map((timeslot, index) => {
            const timeslots = timeslot.time.split(' ');
            return (
              <Pressable
                key={index}
                style={styles.timeslotContainer}
                onPress={() => Linking.openURL(timeslot.purchase_url)}
              >
                <Text style={styles.timeslot}>{`Kl. ${timeslots[0]}`}</Text>
                <Text style={styles.buyButton}>Kaupa miða</Text>
              </Pressable>
            );
          })
        ) : (
          <Text style={styles.timeslotError}>
            Engar sýningar fundust fyrir þessa mynd
          </Text>
        )}
      </View>
    </View>
  );
};

export default Showtimes;
