const express = require('express');
const Article = require('../models/articles');
const Note = require('../models/notes');

const router = express.Router();

module.exports = function(app) {

    app.get('/', function (req, res) {
        var articles = Article.find();
        res.render('index', { articles: articles});
    });


    app.get('/articles', function (req, res) {
        articles.find({}, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    app.get('/saved', function (req, res) {
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