import React from 'react';
import { View, Text, Modal } from 'react-native';

// COMPONENTS
import { Button } from '../../components/Button';

// STYLES
import styles from './styles';

// MODALS
import ModalServices from './modals/ModalServices';

const ModalComponent = ({ visible = false, title, subtitle, count, content, actions, isDetails, onSubmit }: any): JSX.Element => {
    return (
        <Modal animationType="slide" visible={visible} transparent>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <Text style={styles.modalSubtitle}>
                            {subtitle}
                            {count > 0 && (
                                <Text style={styles.count}> {count}s.</Text>
                            )}
                        </Text>
                        <Text style={styles.modalInfo}>{content}</Text>
                        {isDetails && (
                            <ModalServices onSubmit={onSubmit} />
                        )}
                    </View>
                    {actions && (
                        <View style={styles.actions}>
                            {actions.map((action: any, idx: number) => {
                                return (
                                    <Button key={`button-${idx}`} onPress={() => action.onPress(true)} title={action.label} variant={action.variant} hasBorder={idx == 0} />
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
