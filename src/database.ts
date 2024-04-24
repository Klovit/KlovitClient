import fs from 'fs';
import config from './config';
import keyv from 'keyv';

let db;

if (config.database.type == 'mysql') {
  db = new keyv(`mysql://` + config.database.mysql.mysql_db_username + `:` + config.database.mysql.mysql_db_password + `@` + config.database.mysql.mysql_db_host + `:` + config.database.mysql.mysql_db_port + `/` + config.database.mysql.mysql_db_name);
} else if (config.database.type === 'sqlite') {
  const folderPath = '../databases';
  if (fs.existsSync(folderPath)) {
    console.log('Folder for databases exists, proceeding to initiate database connection.');
  } else {
    fs.mkdir('../databases', (error) => { 
      if (error) { 
        console.log(error); 
      } else { 
        console.log("Folder for databases created successfully, proceeding to initiate database connection."); 
      } 
    });
  }
  
  db = new keyv(`sqlite://../databases/` + config.database.sqlite.sqlite_db_name);
} else {
  console.error('Unsupported database type');
}

export default db;