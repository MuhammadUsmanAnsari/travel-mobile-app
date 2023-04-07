import React from 'react'
import { StyleSheet, Text, Linking, ImageBackground, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Favourite from '../screens/Frontend/Favourite';
import TryNow from '../screens/Frontend/TryNow';
import Details from '../screens/Frontend/tabs/Details';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomDrawerContent = (props) => {

    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground source={{ uri: "https://c4.wallpaperflare.com/wallpaper/29/711/760/html-blue-wallpaper-preview.jpg" }} style={styles.drawerContent}>
                <View style={{ width: "100%" }}>
                    <Text style={{ fontWeight: "bold", color: "white" }}>Developed By: </Text>
                    <Text style={{ color: "white", fontWeight: "normal" }}>Muhammad Usman</Text>
                </View>
            </ImageBackground>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Portfolio"
                onPress={() => Linking.openURL('https://portfolio2913.web.app/')}
                icon={({ color }) => (<MaterialCommunityIcons name="web" color={color} size={20} />)}
            />
            <DrawerItem
                label="Privacy Policy"
                onPress={() => Linking.openURL('https://www.freeprivacypolicy.com/live/6756c16f-e610-4851-9995-8a77655f71b4')}
                icon={({ color }) => (<MaterialCommunityIcons name="police-badge-outline" color={color} size={20} />)}
            />
        </DrawerContentScrollView>
    );
}


export default function AppNavigator() {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();


    const MyStack = () => {
        return (
            <Stack.Navigator initialRouteName='Travel' screenOptions={{headerShown: false }}>
                <Stack.Screen name="Travel" component={TryNow} />
                <Stack.Screen name="Detail" component={Details} />
                <Stack.Screen name="Start" component={MyTab} />
            </Stack.Navigator>
        )
    }
    const MyDrawer = () => {
        return (
            <Drawer.Navigator screenOptions={{ headerShown: false, drawerActiveTintColor: "#63d2d9" }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name='Travel' component={Home} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" color={color} size={20} />
                    )
                }} />
            </Drawer.Navigator>
        )
    }

    const MyTab = () => {
        return (
            <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#63d2d9", headerShown: false }} >
                <Tab.Screen name='Home' component={MyDrawer} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    )

                }} />
                {/* <Tab.Screen name="Hello" component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" color={color} size={size} />
                        )
                    }}

                /> */}
                <Tab.Screen name="About" component={About}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-outline" color={color} size={size} />
                        )
                    }} />
                <Tab.Screen name="Favourite" component={Favourite}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="heart-outline" color={color} size={size} />
                        )
                    }} />
                <Tab.Screen name="Messages" component={Favourite}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="md-chatbubble-ellipses-outline" color={color} size={size} />
                        )
                    }} />
            </Tab.Navigator>
        )
    }


    return (
        <MyStack />
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        height: 180,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 10,

    }
})