import * as React from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Image,Button,TouchableOpacity,StatusBar,CheckBox} from 'react-native';
import colors from '../assets/colors/colors';

const register = ({navigation}) =>{
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
                <Image source= {require('../assets/images/username/username.png')} style={styles.backIconUser}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputUser} placeholder="Masukan nama lengkap mu" placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Alamat Email</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} placeholder="Masukan alamat email mu" placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Nomor Handphone</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} placeholder="Masukan nomor handphone mu" placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Kata Sandi</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} placeholder="Masukan password mu" placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Ulangi Kata Sandi</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} placeholder="Ulangi password mu" placeholderTextColor={colors.textLight}/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox 
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}>
                </CheckBox>
            </View>
            <Text style={styles.inputSyarat}> Saya menyetujui syarat dan ketentuan yang berlaku </Text>
        {/*Button*/}
            <TouchableOpacity style={styles.btnMasuk} onPress={() => navigation.navigate('DataKurir')}>
                <Text style={styles.txtButton}> Masuk</Text>
            </TouchableOpacity>
        </View>
    )
}

export default register;

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: colors.background,
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
        // marginTop:22,
        // paddingHorizontal:78,
        marginLeft:36,
        color: colors.textUltraDark,
        fontFamily: 'Quicksand-Bold',
        fontSize: 12,
    },
    inputPass:{
        // marginTop:22,
        marginLeft:36,
        // paddingHorizontal:78,
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
        fontwweight:500,
        fontsize : 16,
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
        fontsize: 18,
        fontFamily: 'Quicksand-Bold',
    },
    checkboxContainer:{
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox:{
        alignSelf: 'center',
    }
        
});