import React from 'react';
import {
  View,
  Text,
  Linking,
  ImageBackground,
  onPress,
  Pressable,
} from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import backgroundImage from '../../resources/cinemaBackground.png';

const CinemaListItem = (info) => {
  const cinema = info.item;
  const [isOpen, setIsOpen] = React.useState(false);

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
        <View style={styles.urlContainer}>
          <Pressable
            onPress={() => {
              Linking.openURL(`https://${cinema.website}`);
            }}
          >
            <Text style={styles.url}>{filterUrl(cinema.website)}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{cinema.name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="right" size={15} style={styles.icon} />
      </View>
    </View>
  );
};

export default CinemaListItem;
