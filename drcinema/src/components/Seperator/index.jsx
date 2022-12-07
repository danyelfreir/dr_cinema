import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Seperator = ({ width, label }) => (
  <View style={styles.seperatorContainer}>
    {label && <Text style={styles.label}>{label} </Text>}
    <View style={[styles.line, { width }]} />
  </View>
);

export default Seperator;
