import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Colors from '../constans/Colors';

export interface LoginForm {

}

const LoginForm = (props: LoginForm) => {
    return(
        <View style={styles.container}>
            <TextInput style={[styles.input, styles.firstInput]} placeholder="Login"/>
            <TextInput style={styles.input} placeholder="Password"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accent,
        borderWidth: 2,
        borderRadius: 5,
        width: '80%',
        maxWidth: 300,
        padding: 20
    },
    input: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2
    },
    firstInput: {
        marginBottom: 8
    }
})

export default LoginForm;