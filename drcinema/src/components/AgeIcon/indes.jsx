import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import colors from '../../styles/index';

const AgeIcon = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: colors[props.color] }]}>
      <Text style={styles.age}>{props.age}</Text>
    </View>
  );
};

export default AgeIcon;
