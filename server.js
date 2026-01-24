const express = require('express');
const http = require('http');
const socketio= require('socket-io');

const app = express();

const server = http.createServer(app);
//initiate socket.io and attach this http server 
const io = socketio(server);

app.use(express.static('public'));

const users = new set();
io.on('connection',(socket)=>{
    console.log('A user is now connected');

    //handle the user when they will join the chat
    socket.on('join',(userName)=>{
        users.add(userName)

        //broadcast to all client 
        io.emit('userjoined',userName);

        //send the updated userlist to all clients 
        io.emit('userlist',Array.form(users));
    });
    //handle  the incoming chat 
    // handle users disconnection

});