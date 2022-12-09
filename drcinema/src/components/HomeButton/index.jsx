import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeButton = ({ onPress, title, active, icon }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        style={[styles.icon, { color: active ? 'dodgerblue' : 'grey' }]}
      />
      <Text style={[styles.text, { color: active ? 'dodgerblue' : 'grey' }]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default HomeButton;
