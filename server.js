const express = require('express');
const app = express();
const path = '/index.html'
const http = require('http').createServer(app)


const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, resp) => {
    // console.log("hello world");
    resp.sendFile(__dirname + path)
})

//socket.io

const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log("Connected...")
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
})