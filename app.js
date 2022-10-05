const express = require('express');
const app = express();


const http = require('http');
const server = http.createServer(app);

server.listen(3000, ()=> {
    console.log('Servidor corriendo')
});

app.get('/', (req,res)=>{
    res.send('<h1>Hola mundo</h1>')
});

