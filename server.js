var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page-2', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'page-2.html'))
});

app.get('/page-3', function(req, res){
   res.send('Page three is requested and Page 3 is Ready Sir');
});

app.get('/page-4', function(req, res){
   res.send('Page four is requested and Page 4 is Ready Sir');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/developers.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'developers.png'));
});

app.get('/ui/codeArt.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'codeArt.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
