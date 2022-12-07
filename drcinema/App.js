import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Router from './src/routes';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducers from './src/redux/reducers';
import thunk from 'redux-thunk';

export default function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Router />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
