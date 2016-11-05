var net = require('net');

var server = new net.createServer();
server.listen(9000, '10.62.0.140', function(){
	console.log("server listening")
});

server.on('connection', function(socket){
	console.log('connection received');
	socket.setEncoding('utf8');

	socket.on("data", function(message){
		socket.write('hello');
		console.log(message);

	});
});

server.on('error', function(error){
	console.log('OOOOOPS MY BAD' + error.message);
});