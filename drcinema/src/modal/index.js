import React from 'react';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';

const Modal = ({ isOpen, closeModal, title, children }) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop={true}
    onBackdropPress={closeModal}
    animationIn={'zoomIn'}
    animationOut={'zoomOut'}
    style={styles.modal}
    onBackButtonPress={closeModal}
    statusBarTranslucent={true}
  ></NativeModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
