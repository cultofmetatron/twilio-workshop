var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/', function(request, response) {
    response.send('Hello.');
});

app.post('/twiml', function(request, response) {
    var digits = request.param('Digits', false);
    response.set('Content-Type', 'text/xml');
    response.render('twiml.ejs', { digits: digits });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});