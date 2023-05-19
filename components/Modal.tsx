/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

const ModalUI = ({ visible = false }: any): JSX.Element => {
    // console.log(title);
    // console.log(subtitle);
    // console.log(content);
    // console.log(actions);

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'yellow'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: '90%',
      height: 100,
      backgroundColor: 'white',
      borderRadius: 5,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
});

export default ModalUI;
