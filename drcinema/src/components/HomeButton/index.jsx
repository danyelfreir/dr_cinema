import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const HomeButton = ({ onPress, title, active }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: active ? '#ee6c4d' : 'dodgerblue' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default HomeButton;
