var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');


var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}));
app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.something);


var corsOptions = {
	origin: 'http://localhost:3000'
};

var port = 3000;
app.listen(port, function() {
  console.log('Listening to port,' + port + '!');
});
