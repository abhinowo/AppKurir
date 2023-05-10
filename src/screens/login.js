import * as React from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Image,Button,TouchableOpacity,StatusBar} from 'react-native';
import colors from '../assets/colors/colors';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {useSelector} from 'react-redux'



const Login = ({navigation}) =>{
     // const globalState = useSelector((state) => state)
    // const[form, ] = useState({
    //     kodeKurir: '',
    //     password:'',
    // });

    // const sendData = () => {
    //     console.log('data yang dikirim: ', form)
    // };

    // const onIputChange = (value,input) => {
    //     setForm({
    //         ...form,
    //         [input]: value,
    //     });
    // };

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
                    placeholder="Masukan Kode Kurir" 
                    placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Kata Sandi</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputPass} 
                    placeholder="Masukan Kata Sandi" 
                    placeholderTextColor={colors.textLight}/>
            </View>
        
        {/*Button*/}
            <TouchableOpacity style={styles.btnMasuk} onPress={() => navigation.navigate('DataKurir')}>
                <Text style={styles.txtButton}> Masuk</Text>
            </TouchableOpacity>
        
        {/*Button Google*/}
        <Button style={styles.btnGoogle} title={'Sign in with Google'} onPress={() =>  {
        GoogleSignin.configure({
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
        }} />
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
        fontsize: 18,
        fontFamily: 'Quicksand-Bold',
    }
        
});