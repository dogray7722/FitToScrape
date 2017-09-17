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


    app.get('/api/articles', function (req, res) {
        articles.find({}, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    app.get('/api/saved', function (req, res) {
        articles.find({saved: true}, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    module.exports = router;

};