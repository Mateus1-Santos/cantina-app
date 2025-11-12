import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {  //Aqui ele vai exportar as paginas criadas, só que compactadas.
  return (
    <LoginScreen/>
  );
}
