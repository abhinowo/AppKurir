import 'react-native-gesture-handler';
import * as React from 'react';

import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { AuthProvider } from './src/context/AuthContext';

import Login from './src/screens/login';
import Home from './src/screens/home';
import Register from './src/screens/register';
import DataKurir from './src/screens/dataKurir';
import EditKurir from './src/screens/editKurir';


const Stack = createNativeStackNavigator();

const App = () => {
    return(
        // <Provider store={store}>
        // <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        initialRouteName: 'Login',
                        headerShown: false
                    }}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name= "Register" component={Register}></Stack.Screen>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="DataKurir" component={DataKurir}/>
                    <Stack.Screen name='EditKurir' component={EditKurir}/> 
                </Stack.Navigator>
            </NavigationContainer>
        // </AuthProvider>
    )
};

export default App;

