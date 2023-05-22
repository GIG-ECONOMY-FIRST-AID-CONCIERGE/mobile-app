import React from 'react';
import { View, Text } from 'react-native';

// STYLES
import styles from './styles';

const ModalServices = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.serviceCard}>
                <Text style={styles.serviceTitle}>Assistência</Text>
                <Text style={styles.serviceSubtitle}>Médica</Text>
            </View>
            <View style={styles.serviceCard}>
                <Text style={styles.serviceTitle}>Assistência</Text>
                <Text style={styles.serviceSubtitle}>Guincho</Text>
            </View>       
            <View style={styles.serviceCard}>
                <Text style={styles.serviceTitle}>Solicitar</Text>
                <Text style={styles.serviceSubtitle}>Ambos</Text>
            </View>                    
        </View>
    );
};

export default ModalServices;
