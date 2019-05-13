const FPS = 60;
var bs = 30;
var bx, by;
var xv, yv;
var canvas, context;
const exp = 25 / FPS;

canvas = document.getElementById('outputCanvas');
context = canvas.getContext('2d');

var timerID = setInterval(update, 1000 / FPS);

bx =  canvas.width / 2;
by = canvas.height / 2;

xv = Math.floor(Math.random() * 150 + 100) / FPS;
yv  = Math.floor(Math.random() * 150 + 100) / FPS;

if (Math.floor(Math.random() * 2) == 0) {
    xv = -xv;
}

if (Math.floor(Math.random() * 2) == 0) {
    yv = -yv;
}

console.log('xv = ' + xv + " " + 'yv = ' + yv);

function update() {

    if (xv > 0) {
        xv -= 0.0111;
    }
    if (xv < 0) {
        xv += 0.0111;
    }

   if (yv > 0) {
        yv -= 0.0111;
    }
    if (yv < 0) {
        yv += 0.0111;
    }

    bx += xv;
    by += yv;

    console.log(xv, yv);

    if (xv < 0.01 && xv > 0) {
        xv = 0;
    }

    if (yv < 0.01 && yv > 0) {
        yv = 0;
    }

    if (xv == 0 && yv == 0) {
        clearInterval(timerID);
    }

    if (bx - bs < 0 && xv < 0) {
        xv = -xv;
    }

    if (bx + bs / 13 > canvas.width && xv > 0) {
        xv = -xv;
    }

    if (by - bs < 0 && yv < 0) {
        yv = -yv;
    }

    if (by + bs / 13 > canvas.height && yv > 0) {
        yv = -yv;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'yellow';
    context.beginPath();  
    context.arc(bx - bs / 2, by - bs / 2, 15, 0, Math.PI * 2, false);  
    context.closePath();
    context.fill();
}