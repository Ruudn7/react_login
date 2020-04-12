import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AppDrawer from './Drawer';
import AppScreen from './screens/AppScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  
  return (
    <NavigationContainer>
        <AppDrawer />
    </NavigationContainer>

  ); 
}
