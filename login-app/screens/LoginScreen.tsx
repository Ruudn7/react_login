import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../constans/Colors';

export interface LoginScreen {
    loginStatus: (isUserLogin: boolean) => void;
}

const LoginScreen = (props: LoginScreen) => {

    const [currentLogin, setCurrentLogin] = useState<string>('')
    const [currentPassword, setCurrentPassword] = useState<string>('')

    const currentLoginHandler = (login: string) => {
        setCurrentLogin(login)
    }

    const currentPasswordHandler = (password: string) => {
        setCurrentPassword(password)
    }

    const loginHandler = () => {
        if (currentLogin === 'Login' && currentPassword === 'Password' ) {
            Alert.alert('You are login', '', [{text: 'Ok', style: 'default'}])
            props.loginStatus(true);
        } else {
            Alert.alert('Try again', '', [{text: 'Ok', style: 'destructive'}])
            props.loginStatus(false);
        }
    }
    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <TextInput 
                    style={[styles.input, styles.firstInput]}
                    placeholder="Login"
                    onChangeText={currentLoginHandler}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={currentPasswordHandler}
                    secureTextEntry={true}
                />             
            </View>
            <AppButton styles={styles.buttonStyle} onPress={loginHandler} />
        </View>

    )
}

const styles = StyleSheet.create<any>({
    screen: {
        width: '100%',
        alignItems: 'center'
    },
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
        marginBottom: 16
    },
    buttonStyle: {
        backgroundColor: Colors.accent,
        maxWidth: 180,
        width: '100%'
    }
})

export default LoginScreen;