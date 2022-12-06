import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    height: 85,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowOffset: { width: 10, height: 200 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
