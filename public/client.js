const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = 0.98 * window.innerHeight;
let ctx = canvas.getContext('2d');


// let io =  io() not use
// var io = io.connect("http://localhost:3000/") use this
var io = io()


// ctx.moveTo(270,100)
// ctx.lineTo(200,200)
// ctx.stroke()

let x;
let y;

let mousedown = false;


window.onmousedown = (e) =>{
    ctx.moveTo(x,y)
    io.emit('down',{x,y})
    mousedown = true;
}

window.onmouseup = (e) =>{
    mousedown = false;
}

io.on('ondraw',({x,y})=>{
    ctx.lineTo(x,y)
    ctx.stroke();
})

io.on('ondown',({x,y}) =>{
    ctx.moveTo(x,y)
})


window.onmousemove = (e) =>{
    x = e.clientX;
    y = e.clientY;

    if(mousedown){
        ctx.lineTo(x,y)
        ctx.stroke()
        io.emit('draw',{x,y})
        console.log(x,y)
    }
}