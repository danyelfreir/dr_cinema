import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const DescriptionModal = ({ isVisible, closeModal, description }) => {
  if (!description) description = 'Engin lýsing til staðar';

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      swipeDirection={['up']}
      backdropOpacity={0.85}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.container}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Modal>
  );
};

export default DescriptionModal;
