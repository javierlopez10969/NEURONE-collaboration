const mongoose = require('mongoose');

let mongoURI;
if (process.env.NODE_ENV === 'testing') {
    mongoURI = process.env.MONGODB_URI_TEST;
}
if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.MONGODB_URI_PROD;
}
if (process.env.NODE_ENV === 'development') {
    mongoURI = process.env.MONGODB_URI_DEV;
}
console.log("mongoURI: " + mongoURI);
mongoose.connect(mongoURI)
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