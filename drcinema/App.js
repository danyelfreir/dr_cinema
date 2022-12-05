import { StyleSheet, Text, View } from 'react-native';
import data from './src/resources/upcoming.json';
import UpcomingMoviesCarousel from './src/components/UpcomingMoviesCarousel';

export default function App() {
  return (
    <View style={styles.container}>
      <UpcomingMoviesCarousel data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
