const {Client} = require('pg')

const client = new Client({
    host: "Localhost",
    user: "postgres",
    port: 5432,
    password: "12345678",
    database: "postgres"
})

client.connect();

client.query(`select * from public."Students"`, (err, res) => {
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})