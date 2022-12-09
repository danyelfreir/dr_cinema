import React from 'react';
import { View, Text, Linking, Pressable } from 'react-native';
import styles from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';

const CinemaListItem = (info) => {
  const cinema = info.item;
  const openModal = () => {
    setIsOpen(true);
  };

  const regex = /^www./g;

  const filterUrl = (url) => {
    // filter out www.
    return url.replace(regex, '');
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{cinema.name}</Text>
        </View>
        <View style={styles.urlContainer}>
          <View style={styles.urlIconContainer}>
            <Feather name="external-link" size={16} color="white" />
          </View>
          <Pressable
            onPress={() => {
              Linking.openURL(`https://${cinema.website}`);
            }}
          >
            <Text style={styles.url}>{filterUrl(cinema.website)}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="right" size={28} style={styles.icon} />
      </View>
    </View>
  );
};

export default CinemaListItem;
