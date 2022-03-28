const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080", "http://192.168.1.105:8080"],
  }
});
let numUsers = 0;

io.on('connection', (socket) => {
  console.log("New user")
  //New user joined the server
  numUsers++;
  socket.username = "username" + numUsers;
  socket.on('login', (user) => {
    socket.emit('login', {
      numUsers: numUsers,
      username: socket.username
    });
  })


  //Disconect Server
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  //Add new user to the chat rooom
  socket.on('add user', (username) => {
    if (addedUser) return;
    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });
  socket.on('message', (msg) => {
    console.log('message: ' + msg + 'by ' + socket.username);
    socket.broadcast.emit('message', {
      username: socket.username,
      message: msg
    });

  });
});