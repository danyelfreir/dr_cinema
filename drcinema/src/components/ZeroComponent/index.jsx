import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ZeroComponent = ({ error, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {error ? 'Ekki næst tenging við vefþjónustu' : message}
      </Text>
    </View>
  );
};

export default ZeroComponent;
