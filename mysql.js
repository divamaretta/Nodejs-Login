const mysql = require('mysql');

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tes_register',
    multipleStatements: true
});

db.connect(function(err) {
    if (err) throw err;
    else{
        console.log('Database Connected!');
    }
});

module.exports = db;