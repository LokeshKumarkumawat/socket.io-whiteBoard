const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = 0.98 * window.innerHeight;
let ctx = canvas.getContext('2d');




// ctx.moveTo(270,100)
// ctx.lineTo(200,200)
// ctx.stroke()

let x;
let y;

let mousedown = false;


window.onmousedown = (e) =>{
    ctx.moveTo(x,y)
    mousedown = true;
}

window.onmouseup = (e) =>{
    mousedown = false;
}


window.onmousemove = (e) =>{
    x = e.clientX;
    y = e.clientY;

    if(mousedown){
        ctx.lineTo(x,y)
        ctx.stroke()
        console.log(x,y)
    }
}