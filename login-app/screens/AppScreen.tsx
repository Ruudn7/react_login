import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

import AppButton from '../components/AppButton';

export interface AppScreen {
    logoutEvent: (isUserLogin: boolean) => void;
}

const AppScreen = (props : AppScreen) => {
    return(
        <View style={styles.container}>
            <Header title="Login App" />
            <ImageBackground source={require('../assets/background.jpeg')} style={styles.image}>
                <Text>App Screen After Login!</Text>
                <AppButton onPress={() => props.logoutEvent(false)} text={'Logout'}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center",
        width: "100%",
        alignItems: 'center',
    }
})

export default AppScreen;