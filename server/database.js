const mongoose = require('mongoose');
//Connection with the database
mongoose.connect('mongodb://localhost/collaboration-db')
    .then(db => console.log("Database connect")).catch(err => console.log(err))