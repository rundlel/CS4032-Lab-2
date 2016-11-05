var net = require('net');

var server = new net.createServer();

var port = process.argv[2];
var IP = 10.62.0.140

var studentNo = '13321661';

server.listen(port, IP, function(){
	console.log("server listening")
});

server.on('connection', function(socket){
	console.log('connection received');
	socket.setEncoding('utf8');

	var address = socket.address().address;

	socket.on("data", function(message){
		
		if(message=='KILL_SERVICE\n')
		{
			socket.destroy();
			server.close();
		}
		else
		{
			socket.write(message + "IP:" + address + "\nPort:" + port + "\nStudentID:" + studentNo);
			console.log(message);
		}
		

	});
});

server.on('close', function(){
	console.log("connection closed");
})

server.on('error', function(error){
	console.log('OOOOOPS MY BAD' + error.message);
});