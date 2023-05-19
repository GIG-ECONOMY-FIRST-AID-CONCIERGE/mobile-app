import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

// STYLES
import { Container } from './styles/global'

export default function App() {
  return (
    <Container>
      <Text>teste 2</Text>
      <StatusBar style="auto" />
    </Container>
  );
}