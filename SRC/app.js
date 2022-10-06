const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

app.get('/',(req,res)=>{
    res.send('<h1>Hola mundo</h1>')
});

server.listen(3000, ()=>{
    console.log('servidor funcionando http://localhost:3000/')
});