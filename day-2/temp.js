const canvas = document.querySelector('.canvas');
const obj = canvas.getContext('2d');

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let Circle = [];

function Create(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    this.draw = function () {
        obj.beginPath();
        obj.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        obj.fillStyle = 'black';
        obj.fill();
        // obj.stroke();
        obj.closePath();
    };

    this.update = function () {

        if (this.x + this.radius > canvas.width - 200 || this.x - this.radius < 0 + 200) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height - 900 || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };
}


for (let i = 0; i < 10000; i++) {
    let x = Math.random() * (canvas.width - 0) + 0;
    let y = Math.random() * (canvas.height - 0) + 0;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    let color = randomColor();
    let radius = 1;

    Circle.push(new Create(x, y, radius, dx, dy, color));
}


function animation() {
    requestAnimationFrame(animation);
    obj.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < Circle.length; i++) {
        Circle[i].update();
    }
}

animation();
