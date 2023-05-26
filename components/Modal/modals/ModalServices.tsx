import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// ASSETS
import ambulanceIcon from '../../../assets/ambulance.png';
import truckIcon from '../../../assets/towtruck.png';
import completIcon from '../../../assets/complete.png';

// STYLES
import styles from './styles';

const ModalServices = ({ onSubmit, repliedNotification }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onSubmit('medicalAssistance', repliedNotification)}  style={styles.serviceCard}>
                <View>
                    <View style={styles.serviceIcon}>
                        <Image source={ambulanceIcon} style={styles.icon} />
                    </View>    
                    <Text style={styles.serviceTitle}>Assistência</Text>
                    <Text style={styles.serviceSubtitle}>Médica</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSubmit('towAssistance')}  style={styles.serviceCard}>
                <View>
                    <View style={styles.serviceIcon}>
                        <Image source={truckIcon} style={styles.icon} />
                    </View>
                    <Text style={styles.serviceTitle}>Assistência</Text>
                    <Text style={styles.serviceSubtitle}>Guincho</Text>
                </View>  
            </TouchableOpacity>     
            <TouchableOpacity onPress={() => onSubmit('fullAssistance', repliedNotification)}  style={styles.serviceCard}>
                <View>
                    <View style={styles.serviceIcon}>
                        <Image source={completIcon} style={styles.iconLarge} />
                    </View>
                    <Text style={styles.serviceTitle}>Solicitar</Text>
                    <Text style={styles.serviceSubtitle}>Ambos</Text>
                </View>      
            </TouchableOpacity>              
        </View>
    );
};

export default ModalServices;
