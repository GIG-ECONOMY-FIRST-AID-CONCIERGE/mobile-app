import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

// COMPONENTS
import { Navigation } from './components/Navigation';

// INTERFACES
import { ILocation } from './interfaces/location.interface';

const App = (): JSX.Element => {
  const [location, setLocation] = useState<ILocation|Object>({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      
      setLocation(location);
    })();
  }, []);
  
  return (
    <Navigation location={location} />
  );
};

export default App;
