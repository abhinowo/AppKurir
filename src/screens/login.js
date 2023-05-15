import * as React from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Image,Button,TouchableOpacity,StatusBar} from 'react-native';
import colors from '../assets/colors/colors';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux'
import { AuthContext } from '../context/AuthContext';

// import GoogleSVG from '../assets/images/google.svg';
// import FacebookSVG from '../assets/images/facebook.svg';
// import TwitterSVG from '../assets/images/twitter.svg';


const Login = ({navigation}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin =() => {
        if(!email || !password){
        alert('Please fill all the field')
        return
        }
        else{
            navigation.navigate('DataKurir')
        }

        const [refreshing, setRefreshing] = React.useState(false);

        const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        }, []);
    }
    return(
        <View style={styles.container}>
        <StatusBar backgroundColor={colors.textUltraDark} barStyle="light-content"/>
        
        {/*Title*/}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Masuk</Text>
                <Text style={styles.subTitle}>Sudah punya akun ? masuk sekarang </Text>
            </View>
            <Text style={styles.txtTitle}>Kode Kurir</Text>
        
        {/*Input*/}
            <View style={styles.inputWrapper}>
                <Image source= {require('../assets/images/username/username.png')} style={styles.backIconUser}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputUser} 
                    value = {email}
                    onChangeText={text=>setEmail(text)}
                    placeholder="Masukan Kode Kurir" 
                    placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Kata Sandi</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} 
                    value = {password}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Masukan Kata Sandi" 
                    placeholderTextColor={colors.textLight}/>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.txtForgot}> Forgot </Text>
            </TouchableOpacity>
            </View>
        
        {/*Button*/}
            <TouchableOpacity style={styles.btnMasuk} onPress={handleLogin} >
            {/* <TouchableOpacity style={styles.btnMasuk} onPress={() => navigation.navigate('DataKurir')}> */}
                <Text style={styles.txtButton}> Masuk</Text>
            </TouchableOpacity>

        {/* Alternatif Login */}
            <View>
                <Text style={styles.txtAlt}>Atau masuk dengan ...</Text>
            </View>

        {/* Google */}
        <View style={styles.logoWrapper}>
            <View>
                <TouchableOpacity style={styles.klikLogo}
                    onPress={() => {
                    GoogleSignin.configure({
                    //terbaru-androidClientId: '588263491172-okllkk9uocmsetqsmvvt8otm0g6167ij.apps.googleusercontent.com',
                    androidClientId: '1010936747062-hjm04813igf09gckm21k9ga9g89boqc8.apps.googleusercontent.com',
                     //   iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
                });
                    GoogleSignin.hasPlayServices().then((hasPlayService) => {
                    if (hasPlayService) {
                        GoogleSignin.signIn().then((userInfo) => {
                                console.log(JSON.stringify(userInfo))
                        }).catch((e) => {
                        console.log("ERROR IS: " + JSON.stringify(e));
                        })
                            }
                    }).catch((e) => {
                        console.log("ERROR IS: " + JSON.stringify(e));
                    })
                    }}            
                    >
                    <Image source= {require('../assets/images/google.png')} style={styles.logo}/>
                </TouchableOpacity>
            </View>
        
        {/* facebook */}
            <View>
                <TouchableOpacity style={styles.klikLogo}
                    onPress={() => {}}>
                    <Image source= {require('../assets/images/facebook.png')} style={styles.logo}/>           
                </TouchableOpacity>
            </View>

        {/* twitter */}
            <View>
                <TouchableOpacity style={styles.klikLogo}
                    onPress={() => {}}>
                    <Image source= {require('../assets/images/twitter.png')} style={styles.logo}/>           
                </TouchableOpacity>
            </View>
        </View>

        {/* Button Belum punya akun */}
             <View style={styles.loginWrapper}>
                <Text style={styles.txtDaftar}>Belum memiliki akun? Daftar</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.txtRegis}> disini</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login;

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
    btnGoogle:{
        marginTop:50,
        borderRadius:10,
        paddingVertical: 16,
        marginHorizontal: 20,
    },
    txtButton:{
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Quicksand-Bold',
    },
    txtRegis:{
        color: 'blue',
        fontFamily: 'Quicksand-Bold',
        fontSize: 16,
    },
    txtDaftar:{
        marginBottom: 16,
        marginLeft: 22,
        color: colors.bgkurir,
        fontFamily: 'Quicksand-Bold',
        fontSize: 16,
    },
    txtForgot:{
        color: colors.button,
        fontWeight: 500,
        paddingHorizontal:100,
        fontFamily:'Quicksand-Bold',
    },
    loginWrapper:{
        flexDirection:'row',
        marginTop:10,
        marginBottom: 16
    },
    logo:{
        height:24,
        width:24,
    },
    klikLogo:{
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    logoWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:15,
        marginTop: 20,
        marginRight:10,
        paddingHorizontal:15,
        // marginBottom: 30,
        // marginTop: 16,
    },
    txtAlt:{
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold',
        color : colors.bgkurir,
        fontSize:14,
        marginTop: 16,
    }
        
});