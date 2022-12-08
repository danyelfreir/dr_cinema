import React from 'react';
import { View, Text, Linking, Pressable, ImageBackground } from 'react-native';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import styles from './styles';
import cinemaInfoBackground from '../../resources/cinemaInfoBackground.png';
import DescriptionModal from '../DescriptionModal';

const CinemaInfo = (cinemaInfo) => {
  const info = cinemaInfo.info;
  const [viewDescription, setViewDescription] = React.useState(false);

  const regex = /\B<br>|\B<b>|^<br>/g;

  const filterDescription = (description) => {
    // filter out <br> and <b> tags
    if (!description) return '';
    const filteredDescription = description.replace(regex, ' ');
    return filteredDescription;
  };

<<<<<<< HEAD
const CinemaInfo = (info) => {
=======
>>>>>>> 416d84c91c7e2591fee7933b9393cabea0c02b87
  return (
    <View style={styles.infoContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{info.name}</Text>
      </View>
      <View style={styles.locationDetails}>
        <View style={styles.addressContainer}>
          <Entypo
            name="address"
            size={24}
            color="white"
            style={styles.addressIcon}
          />
          <Text style={styles.address}>
            {info['address\t'] + ', ' + info.city}
          </Text>
        </View>
        <Pressable onPress={() => Linking.openURL(`tel:${info.phone}`)}>
          <View style={styles.phoneContainer}>
            <Ionicons
              name="call-outline"
              size={24}
              color="white"
              style={styles.phoneIcon}
            />
            <Text style={styles.phone}>
              {info.phone ? info.phone : 'enginn sími'}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setViewDescription(true)}>
          <View style={styles.descrContainer}>
            <AntDesign
              name="infocirlceo"
              size={24}
              color="white"
              style={styles.infoIcon}
            />
            <Text style={styles.description}>
              {info.description ? 'Nánari upplýsingar' : ''}
            </Text>
          </View>
        </Pressable>
        <View style={styles.urlContainer}>
          <Pressable
            onPress={() => {
              Linking.openURL(`https://${info.website}`);
            }}
          >
            <Text style={styles.url}>{info.website}</Text>
          </Pressable>
        </View>
      </View>
      <DescriptionModal
        isVisible={viewDescription}
        closeModal={() => setViewDescription(false)}
        description={filterDescription(info.description)}
      />
    </View>
  );
};

export default CinemaInfo;
