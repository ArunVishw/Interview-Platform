module.exports = function(io){
    io.on('connection', (socket) => {
        
        // console.log('Socket IO Working');
        
        socket.emit('testingSC');

        socket.on('testingCS', () => {
            console.log('Client has joined');
        });

        socket.on('updateNotepad', (data) => {
            socket.broadcast.to(data.roomID).emit('changeNotepad', data.text);
        });

        socket.on('updateCodepadText', (data) => {
            socket.to(data.roomID).emit('changeCodepadText', data.text);
        });

        socket.on('join', function(room) {
            console.log('Received request to join room ' + room);
        
            var clientsInRoom = io.sockets.adapter.rooms[room];
            var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
            console.log('Room ' + room + ' now has ' + numClients + ' client(s)');
        
            if (numClients === 0) {
                socket.join(room);
                console.log('Client ID ' + socket.id + ' created room ' + room);
                socket.emit('created', room, socket.id);
            } 
            else if (numClients <= 16) {
                console.log('Client ID ' + socket.id + ' joined room ' + room);
                socket.join(room);
                socket.to(room).broadcast.emit('joined', room, socket.id);
            } 
            else { // max two clients
                socket.emit('full', room);
            }
        });

    });
};