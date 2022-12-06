import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';
import { AntDesign } from '@expo/vector-icons';

const TrailerModal = ({ isVisible, closeModal, url }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropOpacity={0.85}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.title}>
        <Pressable style={styles.closeButton} onPress={closeModal}>
          <AntDesign name="closecircleo" style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <YoutubePlayer height={'100%'} play={false} videoId={url} />
      </View>
    </Modal>
  );
};

export default TrailerModal;
