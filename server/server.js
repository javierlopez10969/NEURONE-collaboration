const express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

//express
const app = express();
const morgan = require('morgan');

//Database
const database = require('./database');

//Body parser configuration
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//Routes
const task = require('./routes/TaskRoute'),
  user = require('./routes/UserRoute'),
  message = require('./routes/MessageRoute'),
  group = require('./routes/GroupRoute');
app.use("/api/task", task)
app.use("/api/user", user)
app.use("/api/message", message)
app.use("/api/group", group)

//Port
const port = process.env.PORT || 3000;

let http = require('http').Server(app);
let io = require('socket.io')(http, {
  cors: {
    origin: ["http://localhost:8080", "http://192.168.1.105:8080", "http://localhost:8080"],
  }
});


//UP the server
http.listen(port, () => {
  console.log('Listening on port *: 3000');
});



//Socket IO
let numUsers = 0;
var users = [];

io.on('connection', (socket) => {
  //New user joined the server
  //socket.username = "user" + numUsers;
  //socket.color = Math.floor(Math.random() * 16777215).toString(16);

  //Add to the session
  users.push({
    username: socket.username,
    color: socket.color
  })
  //Login 
  socket.on('login', (user) => {
    numUsers++;
    socket.user = user;
    socket.username = user.name + ' ' + user.lastName;
    socket.emit('login', {
      username: socket.username
    });
    socket.emit('online users', users)
    var msg = socket.user._id + " Joined to the token groups"
    //Get the groups of the user

    socket.broadcast.emit('message', {
      username: "system",
      message: msg
    })
    console.log(msg)
  })

  //Disconect Server
  socket.on('disconnect', () => {
    numUsers--;
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