/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

// STYLES
import styles from './styles';

const ModalComponent = ({ visible = false, title, subtitle, count, content, actions }: any): JSX.Element => {
    return (
        <Modal animationType="slide" visible={visible} transparent>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <Text style={styles.modalSubtitle}>
                            {subtitle}
                            {count > 0 && (
                                <Text>{count}s.</Text>
                            )}
                        </Text>
                        <Text>{content}</Text>
                    </View>
                    {actions && (
                        <View style={styles.actions}>
                            {actions.map((action: any) => {
                                return (
                                    <Text>teste</Text>
                                )
                            })}
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default ModalComponent;
