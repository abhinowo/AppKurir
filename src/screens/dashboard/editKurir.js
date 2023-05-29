// import * as React from 'react';
import React, {useSelector, useEffect, useDispatch, useState,Component } from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Image,Button,TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';
import{deleteDoc, getFirestore, query, getDocs, collection, where, addDoc,doc, setDoc,updateDoc,getDoc} from "firebase/firestore";
import {app,auth,db} from '../../database/firebase'
import {useNavigation} from '@react-navigation/native'
import firebase from '../../database/firebase'


// regex kode pos 5 digit dan awalan tidak boleh angka 0
    let pos = /^d{5}$/; 
    let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

// const EditKurir = id => {
    // const [employees, setEmployees] = useState();
    // const [selectedEmployee, setSelectedEmployee] = useState('');
    // const [isAdding, setIsAdding] = useState(false);
    // const [isEditing, setIsEditing] = useState(false);
    
    // const [employee] = employees.filter(employee=>employee.id===id);


const EditKurir = ({navigation, selectedEmployee}) =>{
        
        // const id = selectedEmployee.id;
        const[idKurir,setIDkurir] = useState('');
        const[nama,setNama] = useState('');
        const[kodePosko,setKodePosko] = useState('');
        const[email,setEmail] = useState('');
        const[alamat,setAlamat] = useState('');
        const[users,setUsers] = useState([]);

        const editCollection = collection(db, "tambahKurir")

const handleUpdate = async () => {
    // e.preventDefault()

    if (nama.trim()==='' || idKurir.trim()==='' || kodePosko.trim()==='' || email.trim()==='' || alamat.trim()===''){
        alert('Data tidak boleh kosong')
        return
    } else if (kodePosko.length !== 5 || pos(kodePosko)===false){
        alert('Kode pos tidak valid')
        return
    } else {
        await updateDoc(doc(db, "tambahKurir"), {
            alamat: alamat,
            email: email,
            idKurir: idKurir,
            kodePosko: kodePosko,
            nama: nama,
        })
        .then(() => {
            console.log("Document successfully updated!");
            alert('Data berhasil di Update')
            navigation.navigate('DataKurir')
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

        const employee = {
            idKurir: idKurir,
            nama: nama,
            kodePosko: kodePosko,
            email: email,
            alamat: alamat,
        }

    await setDoc(doc(db, "tambahKurir", idKurir), 
    ...employee);
    }
}

const getKurir = async () => {
    const querySnapshot = await getDocs(collection(db, "tambahKurir"));
    const users = querySnapshot.docs.map(doc=> doc.data());
    setUsers(users);
}

const handleDelete = id => {
    const querySnapshot =  deleteDoc(doc(db, "tambahKurir", id));
    Swal.fire({
        icon: 'success',
        title: 'Data berhasil dihapus',
        showConfirmButton: false,
        timer: 1500,
        // navigation.navigate('DataKurir'),
      })
    getKurir();
}

    return(
        <View style={styles.container}>
            {/*Header*/}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Edit Data Kurir</Text>
                    <Text style={styles.subTitle}>Ubah data kurir </Text>
                </View>
            {/*Input*/}
                    <Text style={styles.inputTitleAwal}>ID Kurir</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                               Text={users}
                            //    onChangeText={text=>setIDkurir(text)} 
                               placeholder="JBG001" 
                               placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Nama Kurir</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} 
                               onChangeText={text=>setNama(text)}
                               placeholder="Suryana" 
                               placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Kode Posko</Text>   
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                               onChangeText={text=>setKodePosko(text)} 
                               placeholder="BKS01" 
                               placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Email</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                               onChangeText={text=>setEmail(text)} 
                               placeholder="suryana@gmail.com" 
                               placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Alamat</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                               onChangeText={text=>setAlamat(text)} 
                               placeholder="Jakarta, JL tanah abang 3" 
                               placeholderTextColor={colors.textLight}/>
                </View>
            {/*Button*/}
                <TouchableOpacity style={styles.btnMasuk} onPress={handleUpdate}>
                        <Text style={styles.txtButton}> Simpan Perubahan</Text>
                </TouchableOpacity>
            {/* Delete Button */}
                        {/*Button*/}
                        <TouchableOpacity style={styles.btnMasuk} onPress={handleDelete}>
                        <Text style={styles.txtButton}> Hapus Data</Text>
                </TouchableOpacity>
        </View>
    )
}

export default EditKurir;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.backgroundColor
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
    input:{
        marginLeft:15,
        fontFamily: 'Quicksand-Bold',
        fontSize: 12,
        color: colors.textUltraDark,
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
        fontFamily: 'Quicksand-Medium',
    }
}
)

