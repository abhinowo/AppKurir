import SQLite from 'react-native-sqlite-storage';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
// import {DataKurir} from './src/screens/dataKurir';

const db = SQLite.openDatabase(
    {
        name:'MainDB',
        location:'default',
    },
()=> { },
    error => {console.log(error)}
);

export default function AddData({navigation}){
    const [ID, setID] = useState('');
    const [nama, setNama] = useState('');
    const [KodePosko, setKodePosko] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');
}

useEffect(() => {
    createTable();
    getData();
},[]);

const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS"
            +"Users"
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, ID Text, nama TEXT, KodePosko TEXT, email TEXT, alamat TEXT)",
        )
}
)
}

const setDData = async () => {
    if (name.length ==0 || KodePosko.length ==0 || email.length ==0 || alamat.length ==0){
        Alert.alert('Warning','Please fill all the data')
    }else{
        try{
            await db.transaction(async (tx)=>{
                tx.executeSql(
                    "INSERT INTO Users (ID,nama, KodePosko, email, alamat) VALUES (?,?,?,?,?)",
                    [ID,nama,KodePosko,email,alamat]
            )
            })
            navigation.navigate('DataKurir');
        } catch (error){
            console.log(error);
        }
    }
}

const getData = () => {
    try{
        // AsyncStorage.getItem('userData')
        // .then(value => {
        //     if (value!=null){
        //         navigation.navigate('DataKurir');
        //     }
        // }
        // )
        db.transaction((tx)=>{
            tx.executeSql(
                "SELECT * FROM Users",
                [],
                (tx,results)=>{
                    var len = results.rows.length;
                    if(len>0){
                        navigation.navigate('DataKurir');
                     }
                }
            )}
            )
    }
}
