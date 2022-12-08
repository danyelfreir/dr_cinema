import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TagIcon = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tag}>{props.tag}</Text>
    </View>
  );
};

export default TagIcon;
