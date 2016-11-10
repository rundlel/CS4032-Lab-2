var net = require('net');
var IP = require('quick-local-ip');

var server = new net.createServer();
var port;
var address = IP.getLocalIP4();

var studentNo = '13321661';

if(!process.argv.[2])
{
	port=7000;
	console.log("no port specified, using 7000");
}
else
{
	port = process.argv[2];
}

server.listen(port, address, function(){
	console.log("server listening")
});

server.on('connection', function(socket){
	console.log('connection received');
	socket.setEncoding('utf8');

	var address = socket.address().address;

	socket.on("data", function(message){
		
		if(message==='KILL_SERVICE\n')
		{
			console.log(message);
			socket.destroy();
		}
		else
		{
			socket.write(message + "IP:" + address + "\nPort:" + port + "\nStudentID:" + studentNo);
			console.log(message);
			socket.end();
		}
	});

	socket.on("close", function(message){
		console.log("connection closed");
		server.close();
	});

	socket.on("error", function(error){
		console.log('error' + error.message);
	});

});

server.on("close", function() {
	console.log("server closed");
});