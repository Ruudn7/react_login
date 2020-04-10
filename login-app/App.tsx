import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import AppScreen from './screens/AppScreen';

export default function App() {

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const isLoginHandler = (isUserLogin: boolean) => {
    setIsLogin(isUserLogin);
  }

  const content = !isLogin ? <LoginScreen loginStatus={isLoginHandler}></LoginScreen> : <AppScreen></AppScreen>;
  
  return (
    <View style={styles.container}>
      <Header title="Login App" />
      <View style={styles.mainContent}>
        <ImageBackground source={require('./assets/background.jpeg')} style={styles.image}>
          {content}
        </ImageBackground>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center",
    width: "100%",
    alignItems: 'center',
  },
});
