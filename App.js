import 'react-native-gesture-handler';
import * as React from 'react';
//import { createStackNavigator } from '@react-navigation-stack';
//import { NavigationContainer } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text} from 'react-native';


import Login from './src/screens/login';
import Home from './src/screens/home';
import DataKurir from './src/screens/dataKurir';
import EditKurir from './src/screens/editKurir';
import Register from './src/screens/register';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    initialRouteName: 'Login',
                    headerShown: false
                }}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name= "Register" component={Register}></Stack.Screen>
                <Stack.Screen name="DataKurir" component={DataKurir}/>
                <Stack.Screen name='EditKurir' component={EditKurir}/> 
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;

