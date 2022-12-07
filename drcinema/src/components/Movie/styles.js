import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    backgroundColor: 'white',
    margin: 10,
  },
  description: {
    backgroundColor: 'tomato',
  },
  name: {
    color: 'black',
    fontSize: 20,
  },
  releaseYear: {
    color: 'black',
  },
  image: {
    backgroundColor: 'teal',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    // transform: [{ scale: 0.5 }],
  },
});
