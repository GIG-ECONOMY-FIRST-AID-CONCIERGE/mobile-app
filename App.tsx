import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, Button } from 'react-native';

// ASSETS
import background from './assets/background.png';

// COMPONENTS
import Modal from './components/Modal';

const App = (): JSX.Element => {
  const [modal, setModal] = useState({
    visible: false,
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Modal visible={modal.visible} />
        <div>abrir modal</div>
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
    justifyContent: 'center',
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
