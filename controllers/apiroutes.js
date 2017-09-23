const express = require('express');
const Article = require('../models/articles');
const Note = require('../models/notes');

const router = express.Router();

module.exports = function(app) {

    //List the scraped articles on the main page.
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

    //Update saved parameter of article when saved button is clicked
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

    //Collect articles that have been saved when user navigates to the saved page
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


    //Handle removed from saved
    app.put('/api/saved/:id', function(req, res){
        Article.findByIdAndUpdate(req.params.id, {saved: false}, function(err, doc){
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        })
    });

    //Route to create notes
    app.post('/api/articles/:id', function(req, res){
        var newNote = new Note(req.body);
        newNote.save(function(err, doc){
            if (err) {
                console.log(err);
            }
            else {
                Article.findOneAndUpdate({ "_id": req.params.id }, { "note": doc_id})
                    .exec(function(err, doc){
                        if (err) {
                            console.log(err);
                        }
                        else {
                            res.send(doc);
                        }
                    })
                }
            })
        });
};