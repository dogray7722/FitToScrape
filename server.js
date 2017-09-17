const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const request = require('request');
const articles = require('./models/articles');
const notes = require('./models/notes');
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

//R



//Initial Test routes:  These will be moved into the routes directory once working

app.get('/', function(req, res) {
    res.render('index')
});


app.get('/articles', function(req, res) {
    articles.find({}, function(err, doc){
        if(err){
            console.log(err);
        }
        else{
            res.json(doc);
        }
    });
});

app.get('/saved', function(req, res) {
    articles.find({saved: true}, function(err, doc){
        if(err){
            console.log(err);
        }
        else{
            res.json(doc);
        }
    });
});



app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});