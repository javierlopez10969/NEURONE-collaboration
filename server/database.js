const mongoose = require('mongoose');
//Connection with the database
//For Docker images, the connection is made with the following command:
//mongoose.connect('mongodb://mongo/collaboration-db')
//For Development images, the connection is made with the following command
mongoose.connect('mongodb://localhost/collaboration-db')
    .then(db => console.log("Database connect")).catch(err => console.log(err))
var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database is connected successfully');
});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;