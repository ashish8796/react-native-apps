import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './../../components/Onboarding';

const mainRoutes = [
  {
    name: 'Onboarding',
    Component: Onboarding,
  },
];

const Stack = createStackNavigator();

const MainNavigator = () => {
  console.log('working');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {mainRoutes.map(({name, Component}) => (
          <Stack.Screen name={name} component={Component} key={name} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
