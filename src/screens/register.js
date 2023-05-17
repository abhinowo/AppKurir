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


const Register = ({navigation}) =>{

    const[id,setID] = useState('');
    const [nama,setNama] = useState('');
    const [email,setEmail] = useState('');
    const [nohp,setNohp] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,confirmPassword] = useState('');

// this code to add data to firestore
    function add(){
        addDoc(collection(db, "users"), {
            nohp: nohp,
            email: email,
            // idKurir: idKurir,
            password: password,
            confirmpassword: confirmpassword,
            nama: nama,
            id:id,
        }).then(() => {
            console.log("data submitted")
            alert ('Registration Success')
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error);
        })
    }

    const {navigate} = useNavigation();
 
    let reg = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    const handleRegistration = () => {
            if (nama.trim()===''|| email.trim()==='' || nohp.trim()===''|| password.trim()==='' || confirmpassword.trim()===''){
            alert('Please fill all the field')
            return
        }
        else if(nama.length < 3){
            alert('Nama harus lebih dari 3 karakter')
            return
        }
        else if(reg.test(email) === false){
            alert("Please enter a valid email address");
            return false;
        }
        else if(nohp.length<10){
            alert('please enter a valid phone number')
            return
        }
        else if(password !== confirmpassword){
            alert('Password and Confirm Password is not same')
            return
        }
        else{
            createUserWithEmailAndPassword(auth, email,password)
            setTimeout(() => {
            navigate('Login'); //this.props.navigation.navigate('Login')
        }, 2000);
            alert ('Registration Success')
        }
        // .catch(error => alert(error.message))
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }

    return(
        <View style={styles.container}>
        <StatusBar backgroundColor={colors.textUltraDark} barStyle="light-content"/>

        {/*Title*/}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Daftar</Text>
                <Text style={styles.subTitle}>Belum punya akun ? daftar sekarang </Text>
            </View>
            <Text style={styles.txtTitle}>Nama Lengkap</Text>

        {/*Input*/}
            <View style={styles.inputWrapper}>
                <Image 
                source= {require('../assets/images/username/username.png')} style={styles.backIconUser}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputUser} 
                    onChangeText={text=>setNama(text)}
                    onChangeText={text=>setNama(text)}
                    placeholder="Masukan nama lengkap mu"
                    placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Alamat Email</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/email/mail.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} 
                    placeholder="Masukan alamat email mu"
                    keyboardType= 'email-address'
                    textContentType='emailAddress'
                    onChangeText={text=>setEmail(text)}
                    onChange={handleEmailChange}
                    placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Nomor Handphone</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/call/call.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} 
                    placeholder="Masukan nomor handphone mu" 
                    keyboardType='decimal-pad'
                    maxLength={12}
                    onChangeText={text=>setNohp(text)}
                    placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Kata Sandi</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} 
                    placeholder="Masukan password mu" 
                    placeholderTextColor={colors.textLight}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry={true}
                    />
            </View>
            <Text style={styles.txtTitle}>Ulangi Kata Sandi</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} 
                    placeholder="Ulangi password mu" 
                    onChangeText={text=>confirmPassword(text)}
                    placeholderTextColor={colors.textLight}
                    secureTextEntry={true}
                    />
            </View>
            <Text style={styles.inputSyarat}> Saya menyetujui syarat dan ketentuan yang berlaku </Text>
        
        {/*Button*/}
        {/* <TouchableOpacity style={styles.btnMasuk} onPress={handlreRegistration} > */}
            <TouchableOpacity style={styles.btnMasuk} onPress={add} >
                <Text style={styles.txtButton}> Masuk</Text>
            </TouchableOpacity>
            
        {/* Register */}
            <View style={styles.loginWrapper}>
                <Text style={styles.txtDaftar}>Sudah memiliki akun? Login</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.txtLogin}> disini</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Register;

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: colors.background,
    },
    loginWrapper:{
        flexDirection:'row',
        marginTop:16,
    },
    txtLogin:{
        color: 'blue',
        fontFamily: 'Quicksand-Bold',
        fontSize: 16,
    },
    inputWrapper:{
        marginTop: 6,
        flexDirection: 'row',
        backgroundColor: colors.placeholder,
        alignItems:'center',
        marginHorizontal:22,
        borderRadius: 10,
    },
    backIconUser:{
        marginLeft:22,
    },
    backIconPass:{
        marginLeft: 22,
    },
    backgroundph: {
        marginLeft:12,
    },
    passImage:{
        width: 24,
        height: 24,
        top:240,
        left:32,
    },
    inputTitle:{
        fontFamily: 'Quicksand-medium',
        fontSize: 16,
        color: colors.bgkurir,
        top:113,
        left:22,
        width:127.67,
        height:20,
    },
    inputUser:{
        marginLeft:36,
        color: colors.textUltraDark,
        fontFamily: 'Quicksand-Bold',
        fontSize: 12,
    },
    inputPass:{
        marginLeft:36,
        color: colors.textUltraDark,
        fontFamily: 'Quicksand-Bold',
        fontSize: 12,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 22,
    },
    title: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 26,
        color: colors.textUltraDark,
        fontWeight: 700,
        top: 30,
        left: 22,
    },
    subTitle:{  
        marginTop:36,
        paddingHorizontal:22,
        fontFamily: 'Quicksand-Medium',
        fontWeight:500,
        fontSize:16,    
        color: colors.textLight,
    },
    txtTitle:{
        marginTop:30,
        left:22,
        height:20,
        fontFamily: 'Quicksand-Medium',
        fontWeight:500,
        fontSize : 16,
        color: colors.bgkurir,
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
        fontSize: 18,
        fontFamily: 'Quicksand-Bold',
    },
    checkboxContainer:{
        flexDirection: 'row',
        marginBottom: 20,
    },
    txtDaftar:{
        marginLeft: 22,
        color: colors.bgkurir,
        fontFamily: 'Quicksand-Bold',
        fontSize: 16,
    },
    checkbox:{
        alignSelf: 'center',
    }
        
});