const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Socketio = require('socket.io')
const http = require('http')


const app = express();
const server = http.createServer(app)
const io = new Socketio.Server(server)

//Conección a la base de datos
mongoose.connect('mongodb://localhost/communication-db')
    .then(db => console.log("Database connect")).catch(err => console.log(err))

io.on("connection", socket => {
    console.log("Conexion con : ", socket.id)
    socket.on('message', (number, string, obj) => {
        console.log(number)
    })
})

//Settings
app.set('port', process.env.PORT || 3000, {
    cors: {
        origin: ["http://localhost:8080"],
    }
});


//Middlewares
app.use(morgan('dev'));
app.use(express.json());




//Routes
app.use('/tasks', require('./routes/tasks'))

//Static files
app.use(express.static(__dirname + "/public"))


//Puerto
server.listen(3000, () => {
    console.log('server on port', app.get("port"))
});