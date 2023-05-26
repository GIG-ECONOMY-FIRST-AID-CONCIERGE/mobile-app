import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Spinner from 'react-native-loading-spinner-overlay';
import MapView from 'react-native-maps';

// CONTEXT
import { useAppContext } from '../context/AppContext'

// ASSETS
import background from '../assets/background.png';

// COMPONENTS
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

// LIBS
import { ApiService } from '../libs/axios';

// SERVICES
import { getAccidentDetails } from '../services/getAccidentDetails';
import { getAddressDetails } from '../services/getAddressDetails';

const HomePage = ({ navigation }: any): JSX.Element => {
  const { location } = useAppContext();
  const [hasFallen, setHasFallen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [modal, setModal]: any = useState({
    content: '',
    count: 10,
    isDetails: false,
    subtitle: '',
    title: '',
    visible: false,
    actions: [],
    repliedNotification: true
  });

  const sendClaimsDetails = useCallback(async (claim: string) => {
    const { coords } = location;
    setLoading(true);
    const address = await getAddressDetails(coords.latitude, coords.longitude);
    const details = getAccidentDetails(claim, modal.repliedNotification, address);
    const data: any = await ApiService.sendAccident(details);
    setLoading(false);

    if (!data.error) {
      navigation.navigate('Feedback');
    } else {
      navigation.navigate('Error');
    }
  }, [modal]);

  const openModalDetails = useCallback(() => {
    setModal({
      ...modal,
      count: 0,
      isDetails: true,
      content: "Nos informe qual ajuda está precisando neste momento.",
      subtitle: '',
      title: 'Qual ajuda você precisa?',
      visible: true,
      actions: [],
      onSubmit: sendClaimsDetails
    });
  }, [modal]);

  const closeModal = useCallback(() => {
    setModal({
      ...modal,
      content: '',
      isDetails: false,
      subtitle: '',
      title: '',
      visible: false,
      actions: []
    });
  }, []);

  const handleAcceleration = ({ x, y, z }: any) => {
    const acceleration = Math.sqrt(x * x + y * y + z * z);
    const threshold = 12; 

    if (acceleration > threshold) {
      setHasFallen(true);
    }
  };

  const simulateAccident = useCallback(() => {
    setModal({
      ...modal,
      content: "Notamos algo inesperado em seu percurso, precisa de ajuda?",
      isDetails: false,
      subtitle: 'Tempo restante',
      title: 'Está tudo bem com você?',
      visible: true,
      actions: [
        {
          label: "Sim, Preciso",
          onPress: openModalDetails,
          variant: 'confirm'
        },
        {
          label: "Não, Obrigado",
          onPress: closeModal,
          variant: 'cancel'
        },
      ]
    });
  }, [modal]);

  useEffect(() => {
    if (hasFallen && !modal.visible) {
      simulateAccident();
    }
  }, [hasFallen]);

  useEffect(() => {
    if (modal.visible && !modal.isDetails && modal.count > 0) {
      const timer = setTimeout(() => setModal({
        ...modal,
        count: modal.count - 1
      }), 1000);
      return () => clearTimeout(timer);
    }
    if (modal.visible && !modal.isDetails && modal.count == 0) {
      setModal({
        ...modal,
        repliedNotification: false
      })
      openModalDetails();
    }
  }, [modal]);

  useEffect(() => {
    Accelerometer.addListener(handleAcceleration);

    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Spinner
          visible={loading}
          textContent={'Solicitando ajuda...'}
          textStyle={styles.spinnerTextStyle}
      />
      <MapView 
        style={styles.map} 
        initialRegion={{ 
          latitude: location.coords.latitude, 
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }} 
      />
      <View style={styles.overlayContent}>
        <Modal {...modal} />
        {!modal.visible && <Button onPress={simulateAccident} title="Simular Acidente" />}
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  overlayContent: {
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute"
  },
  map: {
    width: '100%',
    height: '100%',
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  }
});

export default HomePage;
