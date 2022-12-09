import React from 'react';
import { View, Text, Linking, Pressable, ImageBackground } from 'react-native';
import { AntDesign, Ionicons, Entypo, Feather } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../styles/index';
import DescriptionModal from '../DescriptionModal';

const CinemaInfo = (cinemaInfo) => {
  const info = cinemaInfo.info;
  const [viewDescription, setViewDescription] = React.useState(false);

  const descrRegex = /\B<br>|\B<b>|^<br>/g;

  const filterDescription = (description) => {
    // filter out <br> and <b> tags
    if (!description) return '';
    const filteredDescription = description.replace(descrRegex, ' ');
    return filteredDescription;
  };

  const urlRegex = /^www./g;

  const filterUrl = (url) => {
    // filter out www.
    return url.replace(urlRegex, '');
  };

  return (
    <View style={styles.infoContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{info.name}</Text>
        <View style={styles.addressContainer}>
          <Entypo
            name="location"
            size={20}
            color="white"
            style={styles.addressIcon}
          />
          <Text style={styles.address}>
            {info['address\t'] + ', ' + info.city}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {!!info.description && (
          <Pressable onPress={() => setViewDescription(true)}>
            <View style={styles.bigButton}>
              <AntDesign name="infocirlceo" size={20} style={styles.icon} />
              <Text style={styles.buttonText}>Nánari upplýsingar</Text>
            </View>
          </Pressable>
        )}
        <View style={styles.contactInfoContainer}>
          {!!info.phone && (
            <Pressable onPress={() => Linking.openURL(`tel:${info.phone}`)}>
              <View style={styles.smallButton}>
                <Ionicons name="call-outline" size={20} style={styles.icon} />
                <Text style={styles.buttonText}>{info.phone}</Text>
              </View>
            </Pressable>
          )}
          {!!info.website && (
            <Pressable
              onPress={() => {
                Linking.openURL(`https://${info.website}`);
              }}
            >
              <View style={styles.smallButton}>
                <Feather name="external-link" size={20} style={styles.icon} />
                <Text style={styles.buttonText}>{filterUrl(info.website)}</Text>
              </View>
            </Pressable>
          )}
        </View>
      </View>
      <DescriptionModal
        isVisible={viewDescription}
        closeModal={() => setViewDescription(false)}
        description={filterDescription(info.description)}
        name={info.name}
      />
    </View>
  );
};

export default CinemaInfo;
