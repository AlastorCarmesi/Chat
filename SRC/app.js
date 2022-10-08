const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket)=>{
    

    //Nos permite ver los mensajes de los usuarios en la interfaz
    socket.on('chat', (msg) =>{
        io.emit('chat', msg)
    })

    //Aqui veremos que se envian mediante la consola
    //socket.on('chat', (msg)=>{console.log('Mensaje: '+msg)})

});

//esta funcion nos permitira ver la conexion y desconexion de un usuario y enviara a la consola
io.on('connection', function(socket) {
    console.log('Alguien se ha Conectado')

    socket.on('disconnect', function() {
        console.log('Alguien se ha desconectado')
    })
});

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/Index.html`)
    
});

server.listen(3000, ()=>{
    console.log('servidor funcionando http://localhost:3000/')
});