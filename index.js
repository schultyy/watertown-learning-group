var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// app.use(express.json()); //middlewares
app.use(bodyParser.json());
app.use(express.static(__dirname + '/css'));

var timeline = [
    { tweet: "Hi There", author: "Jim" },
    { tweet: "How's it going?", author: "Alice" },
    { tweet: "Making some coffee", author: "John" }
];

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/timeline', function(request, response) {
    response.setHeader('content-type', 'application/json');
    response.send(timeline);
    response.end();

    // res.send(JSON.stringify({'status': 'ok'}));
    // res.end();
});

app.post('/timeline', function(request, response) {
    console.log(request.body);
    timeline.push({
        tweet: request.body.tweet,
        author: 'Alex'
    });
    response.send({status: 'ok'});
    response.end();
});

app.listen(8080);