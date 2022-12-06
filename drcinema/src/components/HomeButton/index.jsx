import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const HomeButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default HomeButton;
