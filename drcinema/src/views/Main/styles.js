import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles';

console.log(Platform.OS);

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    backgroundColor: colors.darkJungleGreen,
  },
  buttonContainer: {
    height: Platform.OS === 'ios' ? 100 : 70,
    borderColor: 'grey',
    borderWidth: 2,
    paddingBottom: Platform.OS === 'ios' ? 24 : 0,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '105%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
