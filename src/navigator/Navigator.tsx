import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text } from 'react-native';
import ChefNavigator from './ChefNavigator';
import HostNavigator from './HostNavigator';
import EmployeeNavigator from './EmployeeNavigator';
const App = createStackNavigator();

export default function Root() {
  let position = "HOST"

  switch (position) {
    case 'HOST':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="HostNavigator"
              component={HostNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    case 'CHEF':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="ChefNavigator"
              component={ChefNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    case 'EMPLOYEE':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="EmployeeNavigator"
              component={EmployeeNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    default:
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
  }
}