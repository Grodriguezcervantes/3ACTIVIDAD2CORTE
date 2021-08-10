var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


    });

    http.listen(4000, () => {
      console.log('listening on *:4000');
    });