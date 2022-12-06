import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/routes';
import { Provider } from 'react-redux';

export default function App() {
  const name = 'Sambíóin Kringlunni';
  const address = 'Kringlunni 4-6';
  const phone = '555-5555';
  const url = 'www.sambio.com';
  const description =
    'Sambíóin Kringlunni var opnað árið 1996.\r\n\r\nÞað var fyrsta kvikmyndahúsið á íslandi sem bauð uppá THX hljóðkerfi í öllum sölum. Sambíóin Kringlunni er fyrsta kvikmyndahúsið á Íslandi sem býður uppá digital bíósýningar.';
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
