import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text,View,Button, Image} from 'react-native';

import Login from './src/screens/login/login';
import Register from './src/screens/dashboard/register';
import DataKurir from './src/screens/dashboard/dataKurir';
import EditKurir from './src/screens/dashboard/editKurir';
import Splash from './src/screens/dashboard/splash';
import AddKurir from './src/screens/dashboard/addKurir';
import Barcodes from './src/screens/dashboard/barcode';
// import { MMKV } from 'react-native-mmkv'
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
                height: 60,
                paddingBottom: 10,
                paddingTop: 10,
            },
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: '#000000',
            tabBarLabelStyle: {
                fontSize: 10,
                // fontWeight: 'bold',
            },
        }}>
            <Tab.Screen name="DataKurir" component={DataKurir}
             options={{
                tabBarIcon : ({focused}) => {
                    return focused ? (
                <View>
                    <Image
                        source={require('./src/assets/images/home2.png')}
                        style={{width: 20, height: 20}}
                    />
                </View>
            ) : (
                <View>
                    <Image
                        source={require('./src/assets/images/home.png')}
                        style={{width: 20, height: 20}}
                    />
                </View>
            )
            }}}/>
            <Tab.Screen name="Barcodes" component={Barcodes}
                options={{
                    tabBarIcon : ({focused}) => {
                        return focused ? (
                    <View>
                        <Image
                            source={require('./src/assets/images/qr2.png')}
                            style={{width: 20, height: 20}}
                        />
                    </View>
                ) : (
                    <View>
                        <Image
                            source={require('./src/assets/images/qr.png')}
                            style={{width: 20, height: 20}}
                        />
                    </View>
                )
                }}}/>
        </Tab.Navigator>
    )
}


// const App=()=> {
//     useEffect(() => {
//         SplashScreen.hide();
//     }, []);
//   return (
//     <NavigationContainer>
//     <Tab.Navigator screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//             backgroundColor: 'white',
//             height: 60,
//             paddingBottom: 10,
//             paddingTop: 10,
//         },
//         tabBarActiveTintColor: '#e91e63',
//         tabBarInactiveTintColor: '#000000',
//         tabBarLabelStyle: {
//             fontSize: 10,
//             // fontWeight: 'bold',
//         },
        

//     }}>
//       <Tab.Screen name="Login" component={Login}/>
//       <Tab.Screen name="Splash" component={Splash}/>
//       <Tab.Screen name= "Register" component={Register}/>
//       <Tab.Screen name="AddKurir" component={AddKurir}/>
//       {/* <Tab.Screen name="DataKurir" component={DataKurir}/> */}
//       <Tab.Screen name='EditKurir' component={EditKurir}/>
//       {/* </Stack.Navigator> */}
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return(
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        initialRouteName: 'Login',
                        headerShown: false
                    }}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Splash" component={Splash}/>
                    <Stack.Screen name='TabNavigator' component={TabNavigator}/>
                    <Stack.Screen name= "Register" component={Register}/>
                    <Stack.Screen name="AddKurir" component={AddKurir}/>
                    {/* <Stack.Screen name="DataKurir" component={DataKurir}/> */}
                    {/* <Stack.Screen name='EditKurir' component={EditKurir}/>  */}
                </Stack.Navigator>
            </NavigationContainer>
    )
};

export default App;

