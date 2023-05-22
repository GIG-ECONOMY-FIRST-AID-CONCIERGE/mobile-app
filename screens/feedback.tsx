import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

// ASSETS
import background from '../assets/bgfeedback.png';
import successIcon from '../assets/success.png';

const FeedbackPage = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <View>
          <View style={styles.content}>
            <Image source={successIcon} style={styles.icon} />
          </View>
          <Text style={styles.title}>Obrigado</Text>
          <Text style={styles.subtitle}>Estamos encaminhando a ajuda solicitada.</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },  
  icon: {
    width: 266,
    height: 266
  }
});

export default FeedbackPage;
