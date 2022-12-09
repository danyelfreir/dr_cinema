import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 430,
  },
  trailer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trailerText: {
    color: 'white',
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 8,
    width: '90%',
    textAlign: 'center',
  },
  release: {
    color: 'white',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  thumbnail: {
    width: 250,
    height: 370,
    // backgroundColor: 'red',
  },
  description: {
    bottom: 0,
    width: '100%',
    zIndex: 99,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },
  coming: {
    color: 'lightgrey',
    marginBottom: 2,
    marginTop: 2,
  },
});
