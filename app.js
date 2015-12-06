var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 80;

app.set('view engine', 'ejs');
app.set('views', './');
app.engine('html', require('ejs').renderFile);
app.use(express.static('./'));
app.get('/', function (req, res) {
    res.render('index.html');
});
app.get('/ice', function (req, res) {
    res.render('ice.html');
});

server.listen(port, function () {
    console.log('Started on port %d...', port);
});
