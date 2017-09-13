const express require('express');
const mongoose require('mongoose');
const bodyParser require('body-parser');
const cheerio require('cheerio');
const rqeuest require('request');

const PORT = process.env.PORT || 8090;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});