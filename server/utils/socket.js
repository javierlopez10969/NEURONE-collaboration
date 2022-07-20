//Socket IO
let numUsers = 0;
var users = [];
let io;
exports.socketConnection = (server) => {
    io = require('socket.io')(server, {
        cors: {
            origin: ["http://localhost:8080", "http://127.0.0.1:5500", "http://localhost:4200"],
        }
    });
    //General events of the socket
    io.on('connection', (socket) => {
        //Login 
        socket.on('login', (user, groups) => {
            //If user exists already
            if (user) {
                numUsers++;
                socket.user = user;
                socket.username = user.username;
                socket.emit('login', {
                    username: socket.username
                });
                //socket.emit('online users', users)
                var msg = socket.username + " Joined to the token groups";
                //Suscribe socket for every group id
                if (groups!= undefined && groups != null) {
                    groups.forEach(group => {
                        socket.join(group._id)
                        console.log(socket.id + " joined to room " + group._id)
                    })
                }
                /*
                socket.broadcast.emit('message', {
                    username: "system",
                    message: msg
                })*/
                console.log(msg)
                users.push({
                    username: socket.username,
                    color: socket.color
                })
            } else {
                numUsers++;
                socket.username = 'username ' + numUsers;
                socket.emit('login', {
                    username: socket.username
                });
                socket.emit('online users', users)
                var msg = socket.username + " Joined to the token groups"

                socket.broadcast.emit('message', {
                    username: "system",
                    message: msg
                })
                console.log(msg)
                users.push({
                    username: socket.username,
                    color: socket.color
                })
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
            /*
            socket.broadcast.emit('message', {
                username: "system",
                message: msg,
                color: "red"
            })*/
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

//Exports
//Send any type of message 
// Entry : room, key, message
exports.sendMessage = (roomID, key, message) => {
    if (roomID != undefined || roomID) {
        io.to(roomID).emit(key, message)
    } else {
        io.emit(key, message)
    }
};
exports.getRooms = () => io.sockets.adapter.rooms;