import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constans/Colors';

export interface AppScreen {

}

const AppScreen = (props : AppScreen) => {
    return(
        <View style={styles.container}>
            <Text>App Screen After Login!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default AppScreen;