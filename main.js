var http = require('http');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var db = require('./lib/db');
var topic = require('./lib/topic');
const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require('constants');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        topic.home(request,response);
      } else {
     topic.page(request,response);
      }
    } else if(pathname === '/create'){
      topic.create(request,response);
    } else if(pathname === '/create_process'){
      topic.create_process(request,response);
    } else if(pathname === '/update'){
      topic.update(request,response);
    } else if(pathname === '/update_process'){
      topic.update_process(request,response);
    } else if(pathname === '/delete_process'){
      topic.delete_process(request,response);
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
