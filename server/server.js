let app = require('express')();
const morgan = require('morgan');
const mongoose = require('mongoose');
let http = require('http').Server(app);
let io = require('socket.io')(http, {
  cors: {
    origin: ["http://localhost:8080", "http://192.168.1.105:8080"],
  }
});

//Connection with the database
mongoose.connect('mongodb://localhost/collaboration-db')
  .then(db => console.log("Database connect")).catch(err => console.log(err))


http.listen(3000, () => {
  console.log('Listening on port *: 3000');
});



let numUsers = 0;
var users = [];
io.on('connection', (socket) => {
  //New user joined the server
  numUsers++;
  socket.username = "user" + numUsers;
  socket.color = Math.floor(Math.random() * 16777215).toString(16);

  users.push({
    username: socket.username,
    color: socket.color
  })

  //Basic login


  //Joined to the chat room
  console.log("New user :", socket.username, "actual users : ", numUsers);

  //Advanced Login 
  socket.on('login', (user) => {
    socket.emit('login', {
      username: socket.username
    });

    socket.emit('online users', users)
    var msg = socket.username + " Joined"

    socket.broadcast.emit('message', {
      username: "system",
      message: msg
    })
    console.log(msg)
  })

  //join to the chat room 

  //Disconect Server
  socket.on('disconnect', () => {
    //Delete from online users
    var removeIndex = users.map(item => item.username).indexOf(socket.username);
    ~removeIndex && users.splice(removeIndex, 1);
    socket.emit('online users', users)

    var msg = socket.username + " Disconected"

    socket.broadcast.emit('message', {
      username: "system",
      message: msg,
      color: "red"
    })
    console.log(msg)
  });

  //Messages
  socket.on('message', (msg) => {
    console.log('message: ' + msg + 'by ' + socket.username);
    socket.broadcast.emit('message', {
      username: socket.username,
      message: msg,
    });


    //Typing module
    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', () => {
      socket.broadcast.emit('typing', {
        username: socket.username
      });
    });

    // when the client emits 'stop typing', we broadcast it to others
    socket.on('stop typing', () => {
      socket.broadcast.emit('stop typing', {
        username: socket.username
      });
    });

  });
});