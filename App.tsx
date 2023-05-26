import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { View, ImageBackground, StyleSheet } from 'react-native';

// ASSETS
import background from './assets/bgfeedback.png';

// COMPONENTS
import { Navigation } from './components/Navigation';

// CONTEXT
import AppProvider from './context/AppContext';

// INTERFACES
import { ILocation } from './interfaces/location.interface';

const App = (): JSX.Element => {
  const [location, setLocation] = useState<ILocation|null|Object>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      let location = null;

      if (status !== 'granted') {
        return;
      }

      location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  
  return (
    <>
      {location !== null ? (
        <AppProvider location={location}>
          <Navigation />
        </AppProvider>
      ) : (
        <View style={styles.container}>
          <ImageBackground source={background} style={styles.image} />
        </View>
      )}
    </>
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
  }
});

export default App;
