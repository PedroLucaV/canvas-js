let canvas = document.getElementById('tutorial')
let context = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

canvas.style.background = '#ff8'

/*
//Square styles
context.fillRect(200, 50, 100, 100)

//circle style
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI *2, false);
context.strokeStyle = 'blue';
context.lineWidth = 10;
context.stroke();
context.closePath();*/

//class and objects

class Circle {
    constructor(xpos, ypos, ratio, color, text, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.ratio = ratio;
        this.color = color;
        this.text = text;
        this.speed = speed

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed
    }

    draw(context){
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.ratio, 0, Math.PI *2, false);
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.font = '20px Arial'
        context.fillText(this.text, this.xpos, this.ypos)
        context.fillStyle = this.color
        context.fill()
        context.strokeStyle = 'black'
        context.stroke();
        context.closePath();
    }

    update(){

        context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.draw(context)

        if ((this.xpos + this.ratio) > window.innerWidth) this.dx = -this.dx
        if ((this.xpos - this.ratio) < 0) this.dx = -this.dx
        if ((this.ypos - this.ratio) < 0) this.dy = -this.dy
        if ((this.ypos + this.ratio) > window.innerHeight) this.dy = -this.dy
        this.xpos += this.dx;
        this.ypos += this.dy
    }
}

let allCircles = []

let counter = 1;
let randomX = Math.random() * window.innerWidth;
let randomY = Math.random() * window.innerHeight
let myCircle = new Circle(randomX, randomY, 50, 'rgb(350, 0,0,55%', counter, 50)

myCircle.draw(context)

let updateCircle = () => {
    requestAnimationFrame(updateCircle)
    myCircle.update()
}

updateCircle()

/*
for (let i=0; i<1; i++){
    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random() * window.innerHeight
    let myCircle = new Circle(randomX, randomY, 50, 'rgb(350, 0,0,55%', counter)
    allCircles.push(myCircle)
    createCircle(allCircles[i])
    counter++
}
*/