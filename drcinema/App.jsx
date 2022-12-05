import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import upcomingReducer from './src/redux/reducers/upcomingReducer';
import Movie from './src/views/Movie';

const App = () => (
  <Provider store={createStore(upcomingReducer)}>
    <Movie />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
