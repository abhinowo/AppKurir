// import * as React from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Image,Button,TouchableOpacity,StatusBar} from 'react-native';
import colors from '../assets/colors/colors';

import React, {useSelector, useEffect, useDispatch, useState,Component } from 'react';
import {setForm} from '../redux'
import {useNavigation} from '@react-navigation/native'

// import firestore
import{getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";
import { doc, setDoc,updateDoc } from "firebase/firestore"; 

// import firebase 
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import firebase from '../database/firebase'
import {auth,db} from '../database/firebase'


// import auth from '@react-native-firebase/auth';
import {createUserWithEmailAndPassword} from 'firebase/auth'
const Home = ({navigation}) =>{
    const[idKurir,setIDkurir] = useState('');
    const[nama,setNama] = useState('');
    const[kodePosko,setKodePosko] = useState('');
    const[email,setEmail] = useState('');
    const[alamat,setAlamat] = useState(''); 
    const {navigate} = useNavigation();

    function add(){
        addDoc(collection(db, "tambahKurir"), {
            alamat: alamat,
            email: email,
            idKurir: idKurir,
            kodePosko: kodePosko,
            nama: nama,
        }).then(() => {
            console.log("data submitted")
            alert('Data berhasil ditambahkan')
            navigation.navigate('DataKurir')
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <View style={styles.container}>
        {/*Header*/}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Tambah Kurir Baru</Text>
                    <Text style={styles.subTitle}>Input data kurir baru </Text>
                </View>
        {/*Input*/}
            <Text style={styles.inputTitleAwal}>ID Kurir</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan ID produk" 
                    placeholderTextColor={colors.textLight}
                    onChangeText={text=>setIDkurir(text)}
                    />
            </View>
            <Text style={styles.inputTitle}>Nama Kurir</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan Nama Kurir" 
                    placeholderTextColor={colors.textLight}
                    onChangeText={text=>setNama(text)}
                    />
            </View>
            <Text style={styles.inputTitle}>Kode Posko</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan Kode Posko" 
                    placeholderTextColor={colors.textLight}
                    onChangeText={text=>setKodePosko(text)}                    />
            </View>
            <Text style={styles.inputTitle}>Email</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan Email yang terdaftar" 
                    placeholderTextColor={colors.textLight}
                    onChangeText={text=>setEmail(text)}
                    />
            </View>
            <Text style={styles.inputTitle}>Alamat</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan alamat tinggal kurir"
                    placeholderTextColor={colors.textLight}
                    onChangeText={text=>setAlamat(text)}
                    />
            </View>

        {/*Button*/}
            <TouchableOpacity style={styles.btnMasuk} onPress={add} >
                    <Text style={styles.txtButton}> Konfirmasi</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 22,
    },
    title: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 26,
        color: colors.textUltraDark,
        fontWeight: 700,

    },
    subTitle:{
        fontFamily: 'Quicksand-Medium',
        fontWeight:500,
        fontSize:16,
        color: colors.textLight,
    },
    inputWrapper: {
        marginTop: 6,
        flexDirection: 'row',
        backgroundColor: colors.background,
        alignItems: 'center',
        marginHorizontal: 22,
        borderRadius: 10,
    },
    inputTitleAwal:{
        fontFamily: 'Quicksand-medium',
        fontSize: 16,
        color: colors.bgkurir,
        marginTop:30,
        left:22,
    },
    inputTitle:{
        fontFamily: 'Quicksand-medium',
        fontSize: 16,
        color: colors.bgkurir,
        marginTop:16,
        left:22,
    },
    inputPh:{
        marginLeft:22,
        fontFamily: 'Quicksand-Bold',
        color: colors.textUltraDark,
        fontSize: 12,
    },
    btnMasuk:{
        marginTop:30,
        borderRadius: 10,
        paddingVertical: 16,
        marginHorizontal: 20,
        backgroundColor: colors.button,
    },
    txtButton:{
        textAlign: 'center',
        fontSize: 23,
        fontFamily: 'Nunito-Bold',
    }
}
)

