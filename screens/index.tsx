import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

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
    const address = await getAddressDetails(coords.latitude, coords.longitude);
    const details = getAccidentDetails(claim, modal.repliedNotification, address);
    const data: any = await ApiService.sendAccident(details);

    console.log(details);
    console.log(data);
    
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

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Modal {...modal} />
        {!modal.visible && <Button onPress={simulateAccident} title="Simular Acidente" />}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  }
});

export default HomePage;
