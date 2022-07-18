const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  Group = require('./models/Group')

//express
const app = express();
const morgan = require('morgan');

require("dotenv")
  .config();
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
  group = require('./routes/GroupRoute'),
  post = require('./routes/PostRoute'),
  bookmark = require('./routes/BookmarkRoute'),
  activity = require('./routes/ActivityRoute'),
  document = require('./routes/DocumentRoute');

app.use("/api/task", task)
app.use("/api/user", user)
app.use("/api/message", message)
app.use("/api/group", group)
app.use("/api/post", post)
app.use("/api/bookmark", bookmark)
app.use("/api/activity", activity)
app.use("/api/document", document)

//Consume api of NEURONE_ROUTE
const userNeurone = require('./routes/NEURONE/UserRouteNeurone');
app.use("/api/neurone", userNeurone)

//Port
var port = process.env.PORT || 3000;
if (process.env.NODE_ENV === 'testing') {
  port = process.env.PORT_TEST;
}

//Global io configuration
const {
  socketConnection
} = require('./utils/socket');


let http = require('http').Server(app);
socketConnection(http)

//UP the server
http.listen(port, () => {
  console.log('Listening on port *:' + port)
});

module.exports = app;