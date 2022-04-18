let io;
exports.socketConnection = (server) => {
    io = require('socket.io')(server, {
        cors: {
            origin: ["http://localhost:8080", "http://192.168.1.105:8080", "http://localhost:8080"],
        }
    });
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
        socket.on('login', (user, group) => {
            //If user exists already
            if (user) {
                numUsers++;
                socket.user = user;
                socket.username = user.name + ' ' + user.lastName;
                socket.emit('login', {
                    username: socket.username
                });
                socket.emit('online users', users)
                var msg = socket.user._id + " Joined to the token groups"

                socket.broadcast.emit('message', {
                    username: "system",
                    message: msg
                })
                console.log(msg)
            } else {
                numUsers++;
                socket.username = 'username ' + numUsers;
                socket.emit('login', {
                    username: socket.username
                });
                socket.emit('online users', users)
                var msg = socket.user._id + " Joined to the token groups"

                socket.broadcast.emit('message', {
                    username: "system",
                    message: msg
                })
                console.log(msg)
            }

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

};


//Socket IO
let numUsers = 0;
var users = [];

//Exports

exports.sendMessage = (roomId, key, message) => io.to(roomId).emit(key, message);

exports.getRooms = () => io.sockets.adapter.rooms;