import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const UserLogOut = () => {
    const navigation = useNavigation();

    const doUserLogout = async function(){
        return await Parse.User.logOut()
        .then(async()=>{
            const currentUser = await Parse.User.currentAsync();
            if(currentUser === null){
                Alert.alert(
                    'Logout',
                    'You have been logged out successfully.',
                    [
                        {
                            text: 'Ok',
                            onPress: () => navigation.navigate('Login'),
                        },
                    ],
                    {cancelable: false},
                );
            }
        })
    }

    return (
        <View>
            <TouchableOpacity onPress={doUserLogout}>
                <View style={{padding: 10, backgroundColor: 'red'}}>
                    <Text style={{color: 'white'}}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};