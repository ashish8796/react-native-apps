import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './../../components/Onboarding';
import AddTodo from './../../components/AddTodo';

const mainRoutes = [
  {
    name: 'Onboarding',
    Component: Onboarding,
  },
  {
    name: 'AddTodo',
    Component: AddTodo,
  },
];

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {mainRoutes.map(({name, Component}) => (
          <Stack.Screen
            options={{headerShown: false}}
            name={name}
            component={Component}
            key={name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
