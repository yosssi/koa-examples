var koa = require('koa');
var app = koa();

app.use(function*(){
  this.body = 'Hello World';
});

// If you access to http://localhost:3000, 'Hello World' will be shown.
app.listen(3000);