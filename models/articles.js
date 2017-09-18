var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    headline: {type: String, required: true},
    summary: {type: String, required: true},
    link: {type: String, required: true},
    saved: false
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;