const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: 'root',  
  database: 'student_info'       
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to DB:', err.stack);
    return;
  }
  console.log('✅ Connected to DB as id ' + connection.threadId);
});

module.exports = connection;
