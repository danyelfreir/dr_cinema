<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/routes';
import { Provider } from 'react-redux';
=======
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Router from './src/routes';
import { applyMiddleware, createStore } from 'redux';
import reducers from './src/redux/reducers';
import Main from './src/views/Main';
import thunk from 'redux-thunk';
>>>>>>> b34b8da (reducers)

export default function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
