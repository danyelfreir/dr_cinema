import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ZeroComponent = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ZeroComponent;
