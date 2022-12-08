import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const AgeIcon = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}>
      <Text style={styles.age}>{props.age}</Text>
    </View>
  );
};

export default AgeIcon;
