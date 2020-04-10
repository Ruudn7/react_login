import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Header from './components/Header';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Login App" />
      <View style={styles.mainContent}>
        <ImageBackground source={require('./assets/background.jpeg')} style={styles.image}>
          <LoginForm></LoginForm>
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
