import React from 'react';
import { Pressable, View, Text, Linking } from 'react-native';
import Seperator from '../Seperator/index.jsx';
import styles from './styles.js';

const Showtimes = ({ showtimes, cinema }) => {
  return (
    <View style={styles.container}>
      {showtimes && (
        <View>
          <View style={styles.timeslotTitleContainer}>
            <Text style={styles.timeslotTitle}>Sýningar</Text>
            <Text style={styles.timeslotSubTitle}>{cinema.name}</Text>
          </View>
          <Seperator width={200} />
          {showtimes.schedule.map((timeslot, index) => {
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
          })}
        </View>
      )}
    </View>
  );
};

export default Showtimes;
