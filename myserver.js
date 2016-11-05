var net = require('net');

var server = new net.createServer();

var port = process.argv[2];
var IP = process.argv[3];
var studentNo = '13321661';
server.listen(port, IP, function(){
	console.log("server listening")
});

server.on('connection', function(socket){
	console.log('connection received');
	socket.setEncoding('utf8');

	socket.on("data", function(message){
		
		if(message=='KILL_SERVICE\n')
		{
			socket.destroy();
			server.close();
			console.log("connection closed");
		}
		else
		{
			socket.write(message + "IP:" + IP + "\nPort:" + port + "\nStudentID:" + studentNo);
			console.log(message);
		}
		

	});
});

server.on('error', function(error){
	console.log('OOOOOPS MY BAD' + error.message);
});