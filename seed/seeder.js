// var Article = require('../models/article');
// var mongose = require('mongoose');

// mongoose.connect("mongodb://localhost/mongoscraper");

// var articles = [
// 	new Article({
// 		headline: "This is headline one"
// 		summary: "This is a summary of article one"
// 		URL: "http://www.google.com"
// 	}),
// 	new Article({
// 		headline: "This is headline two"
// 		summary: "This is a summary of article two"
// 		URL: "http://www.google.com"
// 	}),
// 	new Article({
// 		headline: "This is headline three"
// 		summary: "This is a summary of article three"
// 		URL: "http://www.google.com"
// 	}),
// 	new Article({
// 		headline: "This is headline four"
// 		summary: "This is a summary of article four"
// 		URL: "http://www.google.com"
// 	})]

// 	var done = 0;
// 	for (var i = 0; i < articles.length; i++){
// 		articles[i].save(function(err, result){
// 			done++;
// 			if (done == products.length){
// 				exit();
// 			}
// 		});
// 	}

// function exit(){
// 	mongoose.disconnect();
// }