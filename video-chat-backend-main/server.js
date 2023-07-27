const express = require('express');
const http = require('http');
const app = express();
require('dotenv').config();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
Frontend_URL = process.env.Frontend_URL;

const io = require('socket.io')(server, {
  cors: {
    origin: `${Frontend_URL}`,
    // origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });

  socket.on('callUser', (data) => {
    io.to(data.userToCall).emit('callUser', {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });
});

server.listen(PORT, () => console.log(`server is running on port ${PORT} `));
