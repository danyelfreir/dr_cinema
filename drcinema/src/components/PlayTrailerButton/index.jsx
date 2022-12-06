import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const PlayTrailerButton = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <AntDesign name="caretright" style={styles.icon} />
    </Pressable>
  );
};

export default PlayTrailerButton;
