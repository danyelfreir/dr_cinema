import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const HomeButton = (props) => {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

export default HomeButton;
