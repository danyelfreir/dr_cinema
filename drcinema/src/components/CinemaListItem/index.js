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

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{cinema.name}</Text>
        <View style={styles.urlContainer}>
          <Pressable
            onPress={() => {
              Linking.openURL(`https://${cinema.website}`);
            }}
          >
            <Text style={styles.url}>{cinema.website}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="right" size={32} style={styles.icon} />
      </View>
    </View>
  );
};

export default CinemaListItem;
