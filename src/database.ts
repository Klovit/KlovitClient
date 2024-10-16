import fs from 'fs';
import keyv from 'keyv';
import KeyvSqlite from '@keyv/sqlite';
import KeyvMysql from '@keyv/mysql';
import dotenv from 'dotenv';

dotenv.config();
let db;

if (process.env.DATABASE_CONNECTION == 'MYSQL') {
  db = new keyv(new KeyvMysql({ uri: `mysql://` + process.env.MYSQL_USER + `:` + process.env.MYSQL_PASSWORD + `@` + process.env.MYSQL_HOST + `:` + process.env.MYSQL_PORT + `/` + process.env.MYSQL_DATABASE}));
} else if (process.env.DATABASE_CONNECTION === 'SQLITE') {
  const folderPath = './databases';
  if (fs.existsSync(folderPath)) {
    console.log('Folder for databases exists, proceeding to initiate database connection.');
  } else {
    fs.mkdir('./databases', (error) => { 
      if (error) { 
        console.log(error); 
      } else { 
        console.log("Folder for databases created successfully, proceeding to initiate database connection."); 
      } 
    });
  }
  
  db = new keyv(new KeyvSqlite({ uri: `sqlite://./databases/` + process.env.SQLITE_DATABASE}));
} else {
  console.error('Unsupported database type');
}

export default db;