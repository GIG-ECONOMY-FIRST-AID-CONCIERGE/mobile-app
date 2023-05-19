import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

// ASSETS
import background from './assets/background.png';

// COMPONENTS
import Button from './components/Button/Button';
import { Modal } from './components/Modal';

const App = (): JSX.Element => {
  const [modal, setModal] = useState({
    visible: false,
  });

  const simulateAccident = useCallback(() => {
    setModal({
      ...modal,
      visible: true,
    });
  }, [modal]);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Modal visible={modal.visible} />
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
