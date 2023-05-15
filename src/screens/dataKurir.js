import * as React from 'react';
import {View,Text,StyleSheet,Button,FlatList,StatusBar, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import colors from '../assets/colors/colors';
import {useSelector} from 'react-redux'
import {createSelector} from 'reselect'

// import { Divider } from '@rneui/themed';

// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
//   }

const ListKurir =[
    {
    "id" : "1",
    "KodeKurir": 'JBG001',
    "nama" : 'Suryana',
    "Alamat" : "Jl. Tanah Abang 3",
    "KodePosko" : 'BKS01',
    },
    {
    "id" : "2",
    "KodeKurir": 'JBG001',
    "nama" : 'Sutarno',
    "Alamat" : "Jl. Tanah Abang 3",
    "KodePosko" : 'BKS01',
    },
    {
    "id" : "3",
    "KodeKurir": 'JBG001',
    "nama" : 'John',
    "Alamat" : "Jl. Tanah Abang 3",
    "KodePosko" : 'BKS01',
    },
    {
    "id" : "4",
    "KodeKurir": 'JBG001',
    "nama" : 'Jono',
    "Alamat" : "Jl. Tanah Abang 3",
    "KodePosko" : 'BKS01',
    },
    {
    "id" : "5",
    "KodeKurir": 'JBG001',
    "nama" : 'Markonah',
    "Alamat" : "Jl. Tanah Abang 3",
    "KodePosko" : 'BKS01',
    },
    {
    "id" : "6",
    "KodeKurir": 'JBG001',
    "nama" : 'Tugiono',
    "Alamat" : "Jl. Tanah Abang 3",
    "KodePosko" : 'BKS01',
    },
    {
    "id" : "7",
    "KodeKurir": 'JBG001',
    "nama" : 'Mamang',
    "Alamat" : "Jl. Tanah Abang 3",
    "KodePosko" : 'BKS01',
    }
]


const DataKurir =({navigation}) =>{
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    }, []);
    

    return(
        <View style={styles.container}>
        <StatusBar backgroundColor={colors.textUltraDark} barStyle="light-content"/>
            <View style={styles.hd}>
                <Text style={styles.title}> KURIR APPS </Text>
             </View>
        <FlatList
        data={ListKurir}
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

        </View>
    )
}

export default DataKurir;

const styles = StyleSheet.create({
    container: {
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
        // padding: 20,
        bottom: 36,
        right: 26,
        height:55,
        width:55,
        backgroundColor: colors.button,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // btnEdit:{
    //     paddingBottom:16,
    //     // paddingTop:16,
    // },
    plus:{
        fontSize: 30,
        alignItems:'center',
        color: colors.textUltraLight,
    }
}
)
