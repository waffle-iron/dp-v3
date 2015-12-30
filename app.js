var nunjucks  = require('nunjucks');
var express   = require('express');
var app       = require('express')();
var http      = require('http').Server(app);

app.use(express.static(__dirname + '/src'));

nunjucks.configure('src/views', {
  autoescape: true,
  express   : app
});

app.get('/', function(req, res) {
  res.render('index.html', {
  });
});

app.get('/article', function(req, res) {
  res.render('article.html', {
  });
});

http.listen((process.env.PORT || 3000), function(){
  console.log('Server started on port 3000!');
});