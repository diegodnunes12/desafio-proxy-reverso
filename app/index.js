const express = require("express");

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: '123456',
    database: 'nodedb',
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(nome) VALUES ('Diego');`;
connection.query(sql);

app.get("/", (req, res) => {
    connection.query("SELECT nome FROM people", function (err, result, fields) {  
        let send = "<h1>Full Cycle Rocks!</h1>";        
        Object.keys(result).forEach(function(key) {
            send += `<p>${result[key].nome}</p>`;  
        });  
        
        res.send(send);
    });
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});