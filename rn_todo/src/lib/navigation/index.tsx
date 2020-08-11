/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useCallback} from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

import Onboarding from './../../components/Onboarding';
import AddTodo from './../../components/AddTodo';
import {getItem} from '../storage';
import actions from '../store/actions/actions';

type RouteName = 'Onboarding' | 'AddTodo';

interface Route {
  name: RouteName;
  Component: React.FunctionComponent<any>;
}

export type Routes = {
  Onboarding: undefined;
  AddTodo: undefined;
};

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
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

const Stack = createStackNavigator<Routes>();

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
