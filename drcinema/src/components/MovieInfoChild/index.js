import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const MovieInfoChild = ({ infoKey, infoValue, infoValueArray }) => {
  return (
    <View style={styles.informationTextPair}>
      <Text style={styles.informationTextKey}>{infoKey}</Text>
      {infoValue && (
        <Text style={styles.informationTextValue}>{infoValue}</Text>
      )}
      {infoValueArray && (
        <Text style={styles.informationTextValue}>
          {infoValueArray.map(
            (item, index) =>
              `${item.name || item.Name}${
                index < infoValueArray.length - 1 ? ', ' : ''
              }`
          )}
        </Text>
      )}
    </View>
  );
};

export default MovieInfoChild;
