import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './src/resources/upcoming.json';
import HomeButton from './src/components/HomeButton';
import UpcomingMoviesCarousel from './src/components/UpcomingMoviesCarousel';

export default function App() {
  const [showCinemas, setShowCinemas] = useState(true);

  return (
    <View style={styles.container}>
      {!showCinemas && <UpcomingMoviesCarousel data={data} isVisible={!showCinemas} />}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 100,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bottom: 0,
          position: 'absolute',
        }}
      >
        <HomeButton title="Kvikmyndahús" onPress={() => setShowCinemas(true)} />
        <HomeButton title="Væntanlegt í bíó" onPress={() => setShowCinemas(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
