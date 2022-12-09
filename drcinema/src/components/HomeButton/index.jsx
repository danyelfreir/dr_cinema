import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import colors from '../../styles/index.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeButton = ({ onPress, title, active, icon }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        style={[
          styles.icon,
          { color: active ? colors.navBarBackground : 'grey' },
        ]}
      />
      <Text
        style={[
          styles.text,
          { color: active ? colors.navBarBackground : 'grey' },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default HomeButton;
