import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Colors from '../constans/Colors';
import AppButton from '../components/AppButton';

export interface AppScreen {
    logoutEvent: (isUserLogin: boolean) => void;
}

const AppScreen = (props : AppScreen) => {
    return(
        <View style={styles.container}>
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
      },
})

export default AppScreen;