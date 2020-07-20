import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/hostscreen/HomeScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

    </HomeStack.Navigator>
  );
};

const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator>

    </ProfileStack.Navigator>
  );
};

const App = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="Profile" component={ProfileScreenStack} />
    </Drawer.Navigator>
  );
};

export default App;