const FPS = 60;
var bs = 30;
var bx, by;
var xv, yv;
var canvas, context;

canvas = document.getElementById('outputCanvas');
context = canvas.getContext('2d');

setInterval(update, 1000 / FPS);

bx =  canvas.width / 2;
by = canvas.height / 2;

xv = Math.floor(Math.random() * 150 + 25) / FPS;
yv  = Math.floor(Math.random() * 150 + 25) / FPS;

if (Math.floor(Math.random() * 2) == 0) {
    xv = -xv;
}

if (Math.floor(Math.random() * 2) == 0) {
    yv = -yv;
}

function update() {
    bx += xv;
    by += yv;

    if (bx - bs / 2 < 0 && xv < 0) {
        xv = -xv;
    }

    if (bx + bs / 2 > canvas.width && xv > 0) {
        xv = -xv;
    }

    if (by - bs / 2 < 0 && yv < 0) {
        yv = -yv;
    }

    if (by + bs / 2 > canvas.height && yv > 0) {
        yv = -yv;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'yellow';
    context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
}