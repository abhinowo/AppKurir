import {View,Text,StyleSheet,Button,FlatList,StatusBar, TouchableOpacity, ScrollView, RefreshControl, KeyboardAvoidingView, Platform} from 'react-native';
import colors from '../assets/colors/colors';
import React, {useSelector, useEffect, useDispatch, useState,Component } from 'react';
import {createSelector} from 'reselect'
import{getFirestore, query, getDocs, collection, where, addDoc,doc, setDoc,updateDoc,getDoc} from "firebase/firestore";
import {app,auth,db} from '../database/firebase'
import {useNavigation} from '@react-navigation/native'

import firestore from '@react-native-firebase/firestore';



const DataKurir =({navigation}) =>{
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    }, []);

    // const List =() => {
        const[users,setUsers] = useState([]);
        const [usersLoading, setUsersLoading] = useState(false);

        const todoRef = collection(db, "tambahKurir")
        // const todoRef = firestore().collection('tambahKurir');

        useEffect(() => {
            const loadData = async () => {
                setUsersLoading(true);
                const querySnapshot = await getDocs(todoRef);
                const users = [];
                querySnapshot.forEach((doc) => {
                    const {nama,idKurir,alamat,kodePosko} = doc.data();
                    users.push({
                        id:doc.id,
                        nama,
                        idKurir,
                        alamat,
                        kodePosko,
                    }); console.log('Data berhasil diambil')
                });
                setUsers(users);
                setUsersLoading(false);
            };
            loadData();
        }, []);

        // useEffect(async()=>{
        //     todoRef
        //     .onSnapshot(
        //         querySnapshot=>{
        //         const users = [];
        //         querySnapshot.forEach((doc)=>{
        //             const {nama,idKurir,alamat,kodePosko} = doc.data();
        //             users.push({
        //                 id:doc.id,
        //                 nama,
        //                 idKurir,
        //                 alamat,
        //                 kodePosko,
        //             });
        //         });
        //         setUsers(users);
        //         }
        //     );
        // },[]);
    // }

    return(
        <View style={styles.container}>
        <KeyboardAvoidingView
      behavior={Platform.OS === 'Android' ? 'padding' : 'height'}
      style={styles.keyboardcontainer}>
        <StatusBar backgroundColor={colors.textUltraDark} barStyle="light-content"/>
            <View style={styles.hd}>
                <Text style={styles.title}> KURIR APPS </Text>
             </View>
        <FlatList
        data={users}
        KeyExtractor={item => item.id}
        renderItem={({item}) =>(
        <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate('EditKurir')}>
            <View style={styles.border} >
                <Text style={styles.subsatu}>{item.nama} </Text>
                <View style={styles.DataAwal}>
                    <View>
                        <Text style={styles.subdua}>Kode Kurir</Text>
                        <Text style={styles.subtiga}>Alamat</Text>
                        <Text style={styles.subempat}>Kode Posko </Text>
                    </View>
                    <View style={styles.DataHasil}>
                        <Text style={styles.hasildua}> {item.KodeKurir}</Text>
                        <Text style={styles.hasiltiga}> {item.Alamat}</Text>
                        <Text style={styles.hasilempat}> {item.KodePosko}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        )}
        />
            {/* Button  */}
                <TouchableOpacity style={styles.btnTambah} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.plus}> + </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

export default DataKurir;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    keyboardcontainer:{
        flex:1,
    },
    hd:{
        height : 82,
        backgroundColor : colors.header,
    },
    title:{
        fontFamily: 'Quicksand-Bold',
        fontSize: 24,
        color: colors.textUltraLight,
        marginTop:28,
        paddingHorizontal:95,
        textAlign : 'center',
    },
    subsatu:{
        fontFamily: 'Nunito-Bold',
        fontSize:16,
        marginTop:16,
        paddingHorizontal:16,
        color : colors.textUltraDark,
    },
    subdua:{
        fontFamily: 'Nunito-Bold',
        fontSize:12,
        marginTop:5,
        paddingHorizontal:16,
        color : colors.bgkurir
    },
    subtiga:{
        fontFamily: 'Nunito-Bold',
        fontSize:12,
        marginTop:5,
        paddingHorizontal:16,
        color : colors.bgkurir,
    },
    subempat:{
        fontFamily: 'Nunito-Bold',
        fontSize:12,
        marginTop:5,
        paddingHorizontal:16,
        color : colors.bgkurir,
    },
    subTitle:{
        marginTop:66,
        paddingHorizontal:22,
        fontFamily: 'Quicksand-Medium',
        color: colors.textLight
    },
    header:{
        width : 185,
        height : 25,
        top :28,
        marginTop:28,
        fontFamily: 'Quicksand-Bold',
    },
    DataAwal:{
        flexDirection : 'row',
    
    },
    DataHasil:{
        marginTop:5,
        marginLeft:22,
    },
    hasildua:{
        marginTop:5,
        color : colors.textMedium,
    },
    hasiltiga:{
        marginTop:3,
        color : colors.bgkurir,
    },
    hasilempat:{
        marginTop:5,
        color : colors.bgkurir,
    },
    divide:{
        marginTop:15,
    },
    border:{
        borderBottomWidth:1,
        paddingBottom:16,
    },
    btnTambah:{
        position:'absolute',
        borderRadius: 50,
        bottom: 36,
        right: 26,
        height:55,
        width:55,
        backgroundColor: colors.button,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnEdit:{
        // paddingBottom:16,
        // paddingTop:16,
    },
    plus:{
        fontSize: 30,
        alignItems:'center',
        color: colors.textUltraLight,
    }
}
)
