import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cinema from './src/components/Cinema';

export default function App() {
  const name = 'Sambíóin Kringlunni';
  const url = 'www.sambio.com';
  return (
    <View style={styles.container}>
      <Cinema name={name} url={url} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
});
