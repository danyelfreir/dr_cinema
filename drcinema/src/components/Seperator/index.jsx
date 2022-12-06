import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Seperator = ({ width }) => (
  <View style={[styles.line, { width }]} />
);

export default Seperator;
