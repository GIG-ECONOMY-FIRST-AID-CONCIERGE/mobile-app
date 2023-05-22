import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

// ASSETS
import background from '../assets/background.png';

// COMPONENTS
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

const HomePage = ({ navigation }: any): JSX.Element => {
  // const navigation = useNavigation();
  const [modal, setModal]: any = useState({
    content: '',
    count: 10,
    isDetails: false,
    subtitle: '',
    title: '',
    visible: false,
    actions: []
  });

  const sendClaimsDetails = useCallback((claim: string) => {
    console.log('sending', claim);
    navigation.navigate('Feedback');
  }, []);

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
