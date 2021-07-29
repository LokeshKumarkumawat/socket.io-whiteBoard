require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').createServer(app)


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

const io = require('socket.io')(http)

io.on('connect',(socket) => {
    console.log(`${socket.id} connected`)
    
})

http.listen(process.env.PORT,() => console.log(`listening on port ${process.env.PORT}`))