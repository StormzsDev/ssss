const express = require('express');
const app = express();

const mongoose = require('mongoose')

let port = require('./config.json').port || 3000;
let config = require('./config.json');
app.set('port', port);

const session = require('express-session');

mongoose.connect(config.mongooseconnectionstring, {
    useNewUrlParser: true, useUnifiedTopology: true
  });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));
app.use(session({
    secret: '48738924783748273742398747238',
    resave: false,
    saveUninitialized: false,
    expires: 604800000,
}));
require('./router')(app);

app.listen(port, () => console.info(`Listening on port ${port}`));