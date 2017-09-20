const express = require('express');
const Article = require('../models/articles');
const Note = require('../models/notes');

const router = express.Router();

module.exports = function(app) {


    app.get('/api/articles', function (req, res) {
        Article.find({}, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    app.put('/api/articles/:id', function(req, res){
        Article.findByIdAndUpdate(req.params.id, {saved: true}, function(err, doc){
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        })
    });


    app.get('/api/saved', function (req, res) {
        Article.find({saved: true}, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });


    app.put('/api/saved/:id', function(req, res){
        Article.findByIdAndUpdate(req.params.id, {saved: false}, function(err, doc){
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        })
    })
};