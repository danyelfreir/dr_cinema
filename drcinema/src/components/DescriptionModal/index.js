import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const DescriptionModal = ({ isVisible, closeModal, description, name }) => {
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Pressable onPress={closeModal}>
          <Text style={styles.closeButton}>Loka</Text>
        </Pressable>
        {/* <Button title="Loka" onPress={closeModal} /> */}
      </View>
    </Modal>
  );
};

export default DescriptionModal;
