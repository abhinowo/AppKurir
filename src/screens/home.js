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
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {openDatabase} from 'react-native-sqlite-storage';

//initiate database
// const db = openDatabase({
//     name: "rn_sqlite",
//   });

//data initial state 
// const InitialStateUser = {
//     const [user,setUsers] = useState([]);
//     const [ID, setID] = useState('');
//     const [nama, setNama] = useState('');
//     const [KodePosko, setKodePosko] = useState('');
//     const [email, setEmail] = useState('');
//     const [alamat, setAlamat] = useState('');
// }


//another data initialstate
// const Home = () =>{
//     const [category, setCategory] = useState("");
//     const [categories, setCategories] = useState([]);

// const createTables = () => {
//   db.transaction(txn => {
//     txn.executeSql(
//       `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
//       [],
//       (sqlTxn, res) => {
//         console.log("table created successfully");
//       },
//       error => {
//         console.log("error on creating table " + error.message);
//       },
//     );
//   });
// };

// const addCategory = () => {
//   if (!category) {
//     alert("Enter category");
//     return false;
//   }

//   db.transaction(txn => {
//     txn.executeSql(
//       `INSERT INTO categories (name) VALUES (?)`,
//       [category],
//       (sqlTxn, res) => {
//         console.log(`${category} category added successfully`);
//         getCategories();
//         setCategory("");
//       },
//       error => {
//         console.log("error on adding category " + error.message);
//       },
//     );
//   });
// };

// const getCategories = () => {
//   db.transaction(txn => {
//     txn.executeSql(
//       `SELECT * FROM categories ORDER BY id DESC`,
//       [],
//       (sqlTxn, res) => {
//         console.log("categories retrieved successfully");
//         let len = res.rows.length;

//         if (len > 0) {
//           let results = [];
//           for (let i = 0; i < len; i++) {
//             let item = res.rows.item(i);
//             results.push({ id: item.id, name: item.name });
//           }

//           setCategories(results);
//         }
//       },
//       error => {
//         console.log("error on getting categories " + error.message);
//       },
//     );
//   });
// };

// const renderCategory = ({ item }) => {
//   return (
//     <View style={{
//       flexDirection: "row",
//       paddingVertical: 12,
//       paddingHorizontal: 10,
//       borderBottomWidth: 1,
//       borderColor: "#ddd",
//     }}>
//       <Text style={{ marginRight: 9 }}>{item.id}</Text>
//       <Text>{item.name}</Text>
//     </View>
//   );
// };

// useEffect(async () => {
//   await createTables();
//   await getCategories();
// }, []);

// return (
//   <View>
//     <StatusBar backgroundColor="#222" />

//     <TextInput
//       placeholder="Enter category"
//       value={category}
//       onChangeText={setCategory}
//       style={{ marginHorizontal: 8 }}
//     />

//     <Button title="Submit" onPress={addCategory} />

//     <FlatList
//       data={categories}
//       renderItem={renderCategory}
//       key={cat => cat.id}
//     />
//   </View>
// );
// };


// useEffect(() => {
//     getData();
// }, []);

// //add data
// const getData = async () => {
//     try{
//         const value = await AsyncStorage.getItem(user);
//         if(value !== null){
//             const data = JSON.parse(value);
//             setUsers(data);
//         }
//     } catch(e){
//         console.log('error: ', e);
//     }
// };

// // save the usestate with payload and async from the user
// const storeData = async (value) => {
//     try{
//         const newUser = JSON.stringify(user);
//     // const updatedUser = [...user, newUser];
//         await AsyncStorage.setItem(user, JSON.stringify(updatedUser));
//         setUsers(updatedUser);
//     } catch(e){
//         console.log('error: ', e);
//     }
// };

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

