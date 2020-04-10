import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constans/Colors';
import AppButton from '../components/AppButton';

export interface AppScreen {
    logoutEvent: (isUserLogin: boolean) => void;
}

const AppScreen = (props : AppScreen) => {
    return(
        <View style={styles.container}>
            <Text>App Screen After Login!</Text>
            <AppButton onPress={() => props.logoutEvent(false)} text={'Logout'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default AppScreen;