import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  age: {
    flex: 1,
    position: 'absolute',
    zIndex: 99,
    right: 0,
    top: 0,
  },
  thumbnail: {
    height: '70%',
    width: '100%',
    // transform: [{ scaleY: 0.8 }],
  },
  description: {
    flex: 1,
    // bottom: 0,
    width: '100%',
    // position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: 60,
    backgroundColor: 'dodgerblue',
  },
  name: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tags: {
    flex: 1,
    zIndex: 99,
    padding: 5,
    width: '100%',
    // backgroundColor: 'red',
    // justifyContent: 'flex-start',
    // width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flexWrap: 'nowrap',
    padding: 2,
  },
});
