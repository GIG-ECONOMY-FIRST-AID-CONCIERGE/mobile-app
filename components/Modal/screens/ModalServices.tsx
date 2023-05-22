import React from 'react';
import { View, Text, Image } from 'react-native';

// ASSETS
import ambulanceIcon from '../../../assets/ambulance.png';
import truckIcon from '../../../assets/towtruck.png';
import completIcon from '../../../assets/complete.png';

// STYLES
import styles from './styles';

const ModalServices = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.serviceCard}>
                <View style={styles.serviceIcon}>
                    <Image source={ambulanceIcon} style={styles.icon} />
                </View>    
                <Text style={styles.serviceTitle}>Assistência</Text>
                <Text style={styles.serviceSubtitle}>Médica</Text>
            </View>
            <View style={styles.serviceCard}>
                <View style={styles.serviceIcon}>
                    <Image source={truckIcon} style={styles.icon} />
                </View>
                <Text style={styles.serviceTitle}>Assistência</Text>
                <Text style={styles.serviceSubtitle}>Guincho</Text>
            </View>       
            <View style={styles.serviceCard}>
                <View style={styles.serviceIcon}>
                    <Image source={completIcon} style={styles.iconLarge} />
                </View>
                <Text style={styles.serviceTitle}>Solicitar</Text>
                <Text style={styles.serviceSubtitle}>Ambos</Text>
            </View>                    
        </View>
    );
};

export default ModalServices;
