import React from 'react';
import { FlatList, Pressable, View, Text, Linking } from 'react-native';
import Seperator from '../Seperator/index.jsx';
import styles from './styles.js';

const Showtimes = ({ showtimes, cinema }) => {
  // console.log(showtimes);
  const renderItem = ({ item, index }) => (
    <>
      {item.schedule.map((timeslot) => (
        <Pressable
          style={styles.timeslotContainer}
          key={item.cinema.id}
          onPress={() => Linking.openURL(timeslot.purchase_url)}
        >
          <Text style={styles.timeslot}>{`Kl. ${timeslot.time}`}</Text>
          <Text style={styles.buyButton}>Kaupa miða</Text>
        </Pressable>
      ))}
    </>
  );
  console.log(showtimes.schedule);
  return (
    <View style={styles.container}>
      <Text style={styles.timeslotTitle}>Sýningar í {cinema.name}</Text>
      <Seperator width={200} />
      {/* <FlatList data={showtimes} renderItem={(item) => renderItem(item)} /> */}
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
  );
};

export default Showtimes;
