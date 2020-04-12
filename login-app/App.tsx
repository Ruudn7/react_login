import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import AppScreen from './screens/AppScreen';

import AppDrawer from './Drawer'
import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const isLoginHandler = (isUserLogin: boolean) => {
    setIsLogin(isUserLogin);
  }

  let content;
  if (!isLogin) {
    content = <LoginScreen loginStatus={isLoginHandler}></LoginScreen>
  } else {
    content = <AppScreen logoutEvent={isLoginHandler}></AppScreen>;
  }

  
  return (
    <NavigationContainer>
        <Header title="Login App" />
        <AppDrawer />
    </NavigationContainer>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
