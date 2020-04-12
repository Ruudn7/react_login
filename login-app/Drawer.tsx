import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import AppScreen from './screens/AppScreen';
import LoginScreen from './screens/LoginScreen';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather, AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Screens: any = ({navigation}) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
                <TouchableOpacity>
                    <Feather
                        name="menu"
                        onPress={() => navigation.openDrawer()}
                        color="white"
                        style={styles.hamburgerIcon}
                    />
                </TouchableOpacity>
            )
        }}

    >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppScreen" component={AppScreen} />
    </Stack.Navigator>
    )

}

const DrawerConent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View>
                    <Image source={require('./assets/background.jpeg')} style={styles.image} />
                    <Text style={styles.menuHeader}>Menu mobile login app</Text>
                </View>
                <DrawerItem
                    label="Login"
                    labelStyle={styles.drawerLabel}
                    onPress={() => props.navigation.navigate('Login')}
                    icon={() => <AntDesign name="login" style={styles.drawerIcon} />}
                />
                <DrawerItem
                    label="App"
                    labelStyle={styles.drawerLabel}
                    onPress={() => props.navigation.navigate('AppScreen')}
                    icon={() => <AntDesign name="bars" style={styles.drawerIcon} />}
                />
            </View>
        </DrawerContentScrollView>
    )
}

function AppDrawer() {
  return (
    <Drawer.Navigator
        initialRouteName="Login"
        drawerContent={props => <DrawerConent {...props} />}
    >
        <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 16
    },
    menuHeader: {
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 16,
        marginBottom: 16,
        marginTop: 16,
    },
    drawerLabel: {
        fontSize: 18,
        marginLeft: -16,
        marginTop: -5
    },
    drawerIcon: {
        fontSize: 18,
        color: 'red'
    },
    hamburgerIcon: {
        color: 'white',
        fontSize: 20,
        marginLeft: 24,
        paddingTop: 22
    }
})

export default AppDrawer;