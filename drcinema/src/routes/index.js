import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// import CinemaList from '../views/CinemaList';
import Cinema from '../Views/Cinema';
import Styles from './styles';
import Main from '../Views/Main';

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
        {/* <Stack.Screen
          name="Kvikmyndahús"
          component={CinemaList}
          options={{
            ...Styles.header,
            title: 'CinemaList',
          }}
        /> */}
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
