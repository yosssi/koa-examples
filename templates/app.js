var render = require('co-views')('./views', {ext: 'jade'});
var koa = require('koa');
var app = koa();

app.use(function*(){
  this.body = yield render('index', {message: 'This is a sample template.'});
});

app.listen(3000);