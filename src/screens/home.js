import * as React from 'react';
import {View,
        Text,
        TextInput,
        StyleSheet,
        Image,
        Button,
        TouchableOpacity,
        StatusBar,
        FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import colors from '../assets/colors/colors';

//database
// import {AsyncStorage} from '@react-native-async-storage/async-storage';
// import {openDatabase} from 'react-native-sqlite-storage';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';


// const List =() => {
//     const[id,setID] = useMMKVStorage('id');
//     const[KodeKurir,setKodeKurir] = useMMKVStorage('Kodekurir');
//     const[nama,setNama] = useMMKVStorage('nama');
//     const[Alamat,setAlamat] = useMMKVStorage('Alamat');
//     const[KodePosko,setKodePosko] = useMMKVStorage('KodePosko');
// }

const Home = ({navigation}) =>{
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
                    // value = {ID}
                    // onChangeText={setID}
                    />
            </View>
            <Text style={styles.inputTitle}>Nama Kurir</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan Nama Kurir" 
                    placeholderTextColor={colors.textLight}
                    // value={nama}
                    // onChangeText={setNama}
                    />
            </View>
            <Text style={styles.inputTitle}>Kode Posko</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan Kode Posko" 
                    placeholderTextColor={colors.textLight}
                    // value={KodePosko}
                    // onChangeText={setKodePosko}
                    />
            </View>
            <Text style={styles.inputTitle}>Email</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan Email yang terdaftar" 
                    placeholderTextColor={colors.textLight}
                    // value = {email}
                    // onChangeText={setEmail}    
                    />
            </View>
            <Text style={styles.inputTitle}>Alamat</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputPh} 
                    placeholder="Masukan alamat tinggal kurir"
                    placeholderTextColor={colors.textLight}
                    // value={alamat}
                    // onChangeText={setAlamat}
                    />
            </View>
        {/*Button*/}
            <TouchableOpacity style={styles.btnMasuk}>
                    <Text style={styles.txtButton}> Konfirmasi</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor: colors.background,
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

