PORT= 3010;
const app = require('express')();
const http = require('http').createServer(app);
const socketio = require('socket.io').Server;

const io = new socketio(http, {cors:{origin:"*"}});

io.on('connection', (socket)=>{
    console.log(`A user is connected: ${socket.id}`);

    socket.on('joinRoom', (room)=>{
        socket.join(room);
        console.log(`A user is logged into the room: ${room}`);
    })
    socket.on('message_sent',(data)=>{
        console.log(`A user sent: ${data}`);
        socket.to(data.room).emit(data.content);
    })
})

http.listen(PORT, ()=>{
    console.log(`Server listening on Port: ${PORT}`);
})