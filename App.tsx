import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

// ASSETS
import background from './assets/background.png';

// COMPONENTS
import ModalServices from './components/Modal/screens/ModalServices';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

const App = (): JSX.Element => {
  const [modal, setModal]: any = useState({
    content: '',
    count: 10,
    component: null,
    subtitle: '',
    title: '',
    visible: false,
    actions: []
  });

  const openModalDetails = useCallback(() => {
    setModal({
      ...modal,
      count: 0,
      component: <ModalServices />,
      content: "Nos informe qual ajuda está precisando neste momento.",
      subtitle: '',
      title: 'Qual ajuda você precisa?',
      visible: true,
      actions: []
    });
  }, [modal]);

  const closeModal = useCallback(() => {
    setModal({
      ...modal,
      content: '',
      component: null,
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
      component: null,
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
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default App;
