const express = require('express');
const http = require('http');
const socketio= require('socket.io');
const path = require('path');
const app = express();


const server = http.createServer(app);
//initiate socket.io and attach this http server 
const io = socketio(server);

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

const users = new Set();
io.on('connection',(socket)=>{
    console.log('A user is now connected');

    //handle the user when they will join the chat
    socket.on('join',(userName)=>{
        users.add(userName)

        //broadcast to all client 
        io.emit('userjoined',userName);

        //send the updated userlist to all clients 
        io.emit('userlist',Array.from(users));
    });
    socket.on("chatMessage", (message) => {
    //broadcast the received message to all connected clients
    io.emit("chatMessage", message);
  });
    socket.on("disconnect", () => { //handle user disconnection 
    console.log("An User is disconnected", socket.userName);

    users.forEach((user) => {
      if (user === socket.userName) {
        users.delete(user);

        io.emit("userLeft", user);

        io.emit("userList", Array.from(users));
      }
    });
  });

  socket.on("typing", user => {
  socket.broadcast.emit("typing", user);
});

socket.on("stopTyping", () => {
  socket.broadcast.emit("stopTyping");
});

    
});



const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});