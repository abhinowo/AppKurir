import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { ToDoItem } from '../models';

const tableName = 'todoData';

enablePromise(true);

export const getDBConnection = async() => {
    return openDatabase({name: 'mydb.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (value TEXT NOT NULL);`;
    return db.executeSql(query);
};

export const getTodoItems = async (db : SQLiteDatabase): Promise<ToDoItem>[] => {
    try{
        const todoItems: ToDoItem[] = [];
        const results = await db.executeSql(`SELECT * FROM ${tableName};`);
        results.forEach(result=>{
            for(let index=0; index<result.rows.length; index++){
                todoItems.push(result.rows.item(index));
            }
        });
        return todoItems;
    }catch(error){
        console.log(error);
        return [];
    }

export const saveTodoItems = async (db:SQLiteDatabase, todoItems: ToDoItem[]) => {
    const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid,value)VALUES (?)`+
    todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');
    return db.executeSql(insertQuery);
};

//adding delete query
export const deleteTodoItem = async (db:SQLiteDatabase) => {
    const deleteQuery = `DELETE FROM ${tableName} WHERE rowid = ?`;
    return db.executeSql(deleteQuery);
};

export const dropTodoItem = async(db:SQLiteDatabase) => {
    const dropQuery = `DROP TABLE IF EXISTS ${tableName}`;
    await db.executeSql(dropQuery);
}
