import { View, ImageBackground, StyleSheet, Text } from 'react-native';

// ASSETS
import background from '../assets/background.png';

const FeedbackPage = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Text>Home Page</Text>
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

export default FeedbackPage;
