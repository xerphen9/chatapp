const express = require('express');
const http = require('http');
const cors = require('cors');
const appConfig = require('./config/appConfig.js');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./routes/users.js');
const messageRoutes = require('./routes/message.js');
const bodyParser = require('body-parser');
const {Server} = require('socket.io');
const connectDB = require('./db.js');

const app = express()
const server = http.Server(app)

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

connectDB()

//api routes
app.use('/api/users', usersRoutes)
app.use('/api/message', messageRoutes)

server.listen(appConfig.development.Port, () => {
    console.log(`\u001b[32m`, `Server running on PORT: ${appConfig.development.Port}`, `\u001b[0m`)
})

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
    },
    connectionStateRecovery: {}     
})

global.onlineUsers = new Map();

io.on('connection', (socket) => {
    console.log('Socket IO is running...')
    global.chatSocket = socket;
    socket.on('add-user', (userID) => {
        onlineUsers.set(userID, socket.id)
    })

    socket.on('send-msg', (msg) => {
        console.log('message: ', msg)
    })
})
