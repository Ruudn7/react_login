import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, TextInput, View, ImageBackground } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../constans/Colors';
import Header from '../components/Header';

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
            // props.loginStatus(true);
        } else {
            Alert.alert('Try again', '', [{text: 'Ok', style: 'destructive'}])
            // props.loginStatus(false);
        }
    }
    return(
        <View style={styles.screen}>
            <Header title="Login App" />
            <ImageBackground source={require('../assets/background.jpeg')} style={styles.image}>
                <View style={styles.container}>
                    <TextInput 
                        style={[styles.input, styles.firstInput]}
                        placeholder="Login"
                        onChangeText={currentLoginHandler}
                        onSubmitEditing={loginHandler}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={currentPasswordHandler}
                        secureTextEntry={true}
                        onSubmitEditing={loginHandler}
                    />             
                </View>
                <AppButton styles={styles.buttonStyle} onPress={loginHandler} text={'Login'} />
            </ImageBackground>

        </View>

    )
}

const styles = StyleSheet.create<any>({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center",
        width: "100%",
        alignItems: 'center',
    }
})

export default LoginScreen;