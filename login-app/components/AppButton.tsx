import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constans/Colors';

export interface AppButton {
    styles?: any;
    onPress: () => void;
    text: string;
}

const AppButton = (props : AppButton) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={{...styles.buttonView, ...props.styles}} activeOpacity={0.5}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        padding: 15,
        marginTop: 16
    },
    buttonText: {
        textAlign: 'center'
    }
})

export default AppButton;