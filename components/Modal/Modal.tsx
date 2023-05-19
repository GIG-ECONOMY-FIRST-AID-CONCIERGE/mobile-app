/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

// STYLES
import styles from './styles';

const ModalComponent = ({ visible = false }: any): JSX.Element => {
    return (
        <Modal animationType="slide" visible={visible} transparent>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>

                  <Text style={styles.textStyle}>Hide Modal</Text>

                  <View
                      style={{
                      ...StyleSheet.absoluteFillObject,
                      backgroundColor: 'red',
                      width: 100,
                      height: 100,
                      top: 50,
                      zIndex: 55,
                      }}
                  />

                </View>
            </View>
        </Modal>
    );
};

export default ModalComponent;
