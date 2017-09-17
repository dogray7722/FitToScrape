const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const request = require('request');
const path = require('path');

//Use Javascript ES6 Mongoose Promises
mongoose.Promise = Promise;

//Flexible port logic so we can ship the app to heroku
const PORT = process.env.PORT || 8090;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Require file with routing logic and declare root routing file
require('./controllers/routes')(app);
require('./controllers/apiroutes')(app);

//Connect to mongoscraper database
mongoose.connect("mongodb://localhost/mongoscraper");
var db = mongoose.connection;

//Show any mongoose errors or notify of successful connection
db.on("error", function(error){
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
   console.log("Mongoose connection successful.");
});

//Express server listen logic
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});