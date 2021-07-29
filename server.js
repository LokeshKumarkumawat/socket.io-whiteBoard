require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').createServer(app)


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

const io = require('socket.io')(http)
const connection = [];

io.on('connect',(socket) => {
    connection.push(socket)
    console.log(`${socket.id} connected`)



    socket.on('draw',(data) =>{
        connection.forEach(con => {
            if(con.id !== socket.id){
                con.emit('ondraw',{x:data.x, y:data.y})
            }
        })
    })



    socket.on('down',(data)=>{
        connection.forEach(con =>{
            if(con.id !== socket.id){
                con.emit('ondown',{x:data.x, y:data.y})
            }
        })
    })

    socket.on('disconnect',(reason)=>{
        console.log(`${socket.id} disconnect`)
        connection.filter(con =>{
            con.id !== socket.id
        })
    })


})

http.listen(process.env.PORT,() => console.log(`listening on port ${process.env.PORT}`))