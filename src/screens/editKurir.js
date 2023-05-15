import * as React from 'react';
import {View,Text,TextInput,StyleSheet,SafeAreaView,Image,Button,TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';

const EditKurir = ({navigation}) =>{
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
                    <TextInput style={styles.input} placeholder="JBG001" placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Nama Kurir</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Suryana" placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Kode Posko</Text>   
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="BKS01" placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Email</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="suryana@gmail.com" placeholderTextColor={colors.textLight}/>
                </View>
                    <Text style={styles.inputTitle}>Alamat</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Jakarta, JL tanah abang 3" placeholderTextColor={colors.textLight}/>
                </View>
            {/*Button*/}
                <TouchableOpacity style={styles.btnMasuk}>
                        <Text style={styles.txtButton}> Simpan Perubahan</Text>
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

