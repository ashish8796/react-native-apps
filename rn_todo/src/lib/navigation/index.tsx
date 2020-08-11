import React, {useEffect, useCallback, ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

import Onboarding from './../../components/Onboarding';
import AddTodo from './../../components/AddTodo';
import {getItem} from '../storage';
import actions from '../store/actions/actions';

interface Route {
  name: string;
  Component: React.FC<any>;
}

const mainRoutes: Array<Route> = [
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
  const dispatch = useDispatch();

  useEffect(() => {
    getTodosFromStotrage();
  }, []);

  const getTodosFromStotrage = useCallback(async () => {
    let todos = (await getItem('todos')) || [];
    dispatch(
      actions.setAllTodos(
        typeof todos === 'string' ? JSON.parse(todos) : todos,
      ),
    );
  }, []);

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
