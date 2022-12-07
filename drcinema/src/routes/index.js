import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Styles from './styles';
import Main from '../views/Main';
import Cinema from '../views/Cinema';
import CinemaList from '../components/CinemaList';
import Movie from '../views/Movie';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: 'Dr.Cinema',
            headerStyle: {
              backgroundColor: 'dodgerblue',
            },
            headerTitleStyle: { color: 'white' },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Kvikmyndahús"
          component={CinemaList}
          options={{
            ...Styles.navBar,
            title: 'CinemaList',
          }}
        />
        <Stack.Screen
          name="Cinema"
          component={Cinema}
          options={{ ...Styles.navBar, title: 'Cinema' }}
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
