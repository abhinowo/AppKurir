import * as React from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Image,Button,TouchableOpacity,StatusBar, ScrollView, RefreshControl, KeyboardAvoidingView} from 'react-native';
import colors from '../../assets/colors/colors';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {useState,useEffect} from 'react';
import{getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../database/firebase'
// import Swal from 'sweetalert2';
import SweetAlert from 'react-native-sweet-alert';
// import {useNavigation} from '@react-navigation/native'


const Login = ({navigation,setIsAuthenticated}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState();
    const[initializing,setInitializing] = useState(true);
    // const {navigate} = useNavigation();


    GoogleSignin.configure({
        webClientId: '111000193801-ebfjus5ko52u05mp9nh36u9uiek853l0.apps.googleusercontent.com',
        // androidClientId : '111000193801-32ratkqht1ac37jgr9shem70tiv0cj1l.apps.googleusercontent.com',
        offlineAccess: true,
    });

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            navigation.navigate('DataKurir')
          }
        }
      };

    const handleLogin =async(e) => {
        e.preventDefault();

        if(!email || !password){
        alert('Please fill all the field')
        return
        }
        else{
            signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
            console.log('User account signed in!');
            navigation.navigate('TabNavigator')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }
                console.error(error);
            })
        }
    }

    const handleTwitter = async(e) => {
        e.preventDefault();
        if(!email || !password){
            alert('Please fill all the field')
            return
        }
        else{
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
        // signin by implementing sweet alert
            SweetAlert.showAlertWithOptions({
                // title : 'OK',
                subTitle: 'Successfully logged in!',
                // confirmButtonTitle : 'OK',
                confirmButtonColor: '#000',
                otherButtonColor: '#dedede',
                style: 'success',
                // navigation.navigate('TabNavigator'),
        }, callback => console.log('callback'),
     
        )
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }
            console.error(error);
        })
    }
}

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    }, []);
 
    return(
        <View style={styles.container}>
        <KeyboardAvoidingView>
        <StatusBar backgroundColor={colors.textUltraDark} barStyle="light-content"/>
        
        {/*Title*/}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Masuk</Text>
                <Text style={styles.subTitle}>Sudah punya akun ? masuk sekarang </Text>
            </View>
            <Text style={styles.txtTitle}>Kode Kurir</Text>
        
        {/*Input*/}
            <View style={styles.inputWrapper}>
                <Image source= {require('../../assets/images/username/username.png')} style={styles.backIconUser}/>
                <Image source= {require('../../assets/images/Line.png')} style={styles.backgroundph}/>
                <TextInput style={styles.inputUser} 
                    value = {email}
                    onChangeText={text=>setEmail(text)}
                    placeholder="Masukan Kode Kurir" 
                    placeholderTextColor={colors.textLight}/>
            </View>
            <Text style={styles.txtTitle}>Kata Sandi</Text>
            <View style={styles.inputWrapper}> 
                <Image source= {require('../../assets/images/password/password.png')} style={styles.backIconPass}/>
                <Image source= {require('../../assets/images/Line.png')} style={styles.backgroundph}/>
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
                        signIn()
                    }}            
                    >
                    <Image source= {require('../../assets/images/google.png')} style={styles.logo}/>
                </TouchableOpacity>
            </View>
        
        {/* facebook */}
            <View>
                <TouchableOpacity style={styles.klikLogo} onPress={() => navigation.navigate('TabNavigator')}>
                {/* <TouchableOpacity style={styles.klikLogo} */}
                    {/* onPress={() => {}}> */}
                    <Image source= {require('../../assets/images/facebook.png')} style={styles.logo}/>           
                </TouchableOpacity>
            </View>

        {/* twitter */}
            <View>
                <TouchableOpacity style={styles.klikLogo} onPress={handleTwitter}>
                    <Image source= {require('../../assets/images/twitter.png')} style={styles.logo}/>           
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
        </KeyboardAvoidingView>           
        </View>
    )}


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