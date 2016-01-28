require('newrelic');
var express = require('express');
var app = express();
var http = require('http');
var WebSocketServer = require("ws").Server

var chat = require('./chatserver');

//io.on('connection', chat.onConnection);
//
//http.listen(process.env.PORT || 3000);
//console.log('App started at port 3000!!!');

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", chat.onConnection());