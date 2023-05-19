import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

// ASSETS
import background from './assets/background.png';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Text>teste 2</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

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