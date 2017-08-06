var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages={
  'page-Three':{
   title:'Page 3 | PKY',
   heading:'Welcome To The Webpage 3',
   date:'6th AUGUST, 2017',
   content: `
   <p> This is my new Webpage. Hope I will continue to learn things rapidly. <br> And yes.. HTML sucks so far. Hoping to learn css soon so that I can do some makeup to HTML. :D 
   </p>
   <p> I am currently creating a division or div. Whatever it is, I don't care. <br> I am currently going to learn module P4 and soon complete the rest of the videos. 
   </p>`
},
   'page-Four':{
   title:'Page 4 | PKY',
   heading:'Welcome To The Webpage 4',
   date:'6th AUGUST, 2017',
   content: `
   <p> This is my new Webpage. Hope I will continue to learn things rapidly. <br> And yes.. HTML sucks so far. Hoping to learn css soon so that I can do some makeup to HTML. :D 
   </p>
   <p> I know am learnig div part of HTML. IT's kinda intesting
   </p>
   `
   },
};

function createTemplate(pk){
var title=pk.title;
var date= pk.date;
var heading=pk.heading;
var content=pk.content;

var htmlTemplate= `
<html>
  <head>

<title>
${title}
</title>

<meta name="viewport" content="width-divice-width, initial-scale-1" />
<link href="/ui/style.css" rel="stylesheet" />

</head>
<body>
<div class="panel">

 <div>
<a href="/">Go Home</a>
</div>

<div>
${heading}
</div>

<div>
${date}
</div>

<div>
${content}
</div>

<div>
<h4>YOUR WELCOME</h4>
</div>
</div>
</body>
</html>

`;
return htmlTemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:pageNames', function(req, res){
var pageNames=req.params.pageNames;
res.send(createTemplate(pages[pageNames]));
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
