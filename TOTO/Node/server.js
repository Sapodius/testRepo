require('newrelic');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var chat = require('./chatserver');

io.on('connection', chat.onConnection);

http.listen(3000);
console.log('App started at port 3000!!!');
