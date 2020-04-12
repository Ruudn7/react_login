import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppScreen from './screens/AppScreen';
import LoginScreen from './screens/LoginScreen';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="AppScreen" component={AppScreen} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;