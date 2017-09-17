const express = require('express');
const Article = require('../models/articles');
const Note = require('../models/notes');

const router = express.Router();

module.exports = function(app) {

//File must be rendered in a callback because results are asynchronous
    app.get('/', function (req, res) {
        Article.find(function(err, docs){
            res.render('index', { articles: docs});    
        });
    });

    app.get('/saved', function (req, res) {
        Article.find(function(err, docs){
            res.render('saved', { articles: docs});    
        });
    });

    module.exports = router;

};