import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Styles from './styles';
import Main from '../views/Main';
import Cinema from '../views/Cinema';
import Movie from '../views/Movie';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            ...Styles.navBar,
            title: 'Dr.Cinema',
            ...Styles.navBar,
          }}
        />
        <Stack.Screen
          name="Cinema"
          component={Cinema}
          options={{ ...Styles.navBar, title: '' }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{ ...Styles.navBar }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
