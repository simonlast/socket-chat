
/*
socket.emit('news', { hello: 'world' });
		socket.on('my other event', function (data) {
	    	console.log(data);
	});
*/

var io;

var sockets = [];

var connect = function(socket){

	socket.on('message', function (msg) {
		console.log('message: ' + msg);
		socket.broadcast.emit('message', msg);
	});
}


exports.init = function(cio){
	io = cio;
	io.sockets.on('connection', connect);
}