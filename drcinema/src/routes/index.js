import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import CinemaList from '../views/CinemaList';
import Cinema from '../views/Cinema';
import Styles from './styles';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CinemaList">
        <Stack.Screen
          name="Kvikmyndahús"
          component={CinemaList}
          options={{
            ...Styles.header,
            title: 'CinemaList',
          }}
        />
        <Stack.Screen
          name="Cinema"
          component={Cinema}
          options={{ ...Styles.header, title: 'Cinema' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
