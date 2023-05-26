import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

// ASSETS
import background from '../assets/background.png';

// COMPONENTS
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

// LIBS
import { ApiService } from '../libs/axios';

// SERVICES
import { getAccidentDetails } from '../services/getAccidentDetails';

const HomePage = ({ navigation, location }: any): JSX.Element => {
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

  const sendClaimsDetails = useCallback(async (claim: string, replied: boolean) => {
    const details = getAccidentDetails(claim, replied, location);
    const data = await ApiService.sendAccident(details);

    if (data) {
      navigation.navigate('Feedback');
    } else {
      navigation.navigate('Error');
    }
  }, [location]);

  const openModalDetails = useCallback((repliedNotification: boolean) => {
    setModal({
      ...modal,
      count: 0,
      isDetails: true,
      content: "Nos informe qual ajuda está precisando neste momento.",
      subtitle: '',
      title: 'Qual ajuda você precisa?',
      visible: true,
      actions: [],
      onSubmit: sendClaimsDetails,
      repliedNotification
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
      openModalDetails(false);
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
