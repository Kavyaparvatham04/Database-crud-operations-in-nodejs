const {Client} = require('pg')

const client = new Client({
    host: "Localhost",
    user: "postgres",
    port: 5432,
    password: "12345678",
    database: "postgres"
})

client.connect();

client.query(`INSERT INTO public."Students"(name,phoneno) values('xyz',0987654321)`, (err, res) => {
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})