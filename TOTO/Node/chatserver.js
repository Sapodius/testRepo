var messages = [];

exports.onConnection = function(socket){
  socket.on('message', function(mess){
    onNewMessage(socket);
  });
}

function onNewMessage(socket){
  var pi = estimatePi();
  socket.broadcast.emit('getMessage', pi);
}

function estimatePi() {
    var n = 10000000, inside = 0, i, x, y;

    for ( i = 0; i < n; i++ ) {
        x = Math.random();
        y = Math.random();
        if ( Math.sqrt(x * x + y * y) <= 1 )
            inside++;
    }

    return 4 * inside / n;
}
