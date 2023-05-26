import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { View, Text } from 'react-native';

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
        <View>
        </View>
      )}
    </>
  );
};

export default App;
