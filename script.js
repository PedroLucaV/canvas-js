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
        this.draw(context)
    }
}

let allCircles = []

const createCircle = (circle) =>{
    circle.draw(context)
}

for (let i=0; i<1; i++){
    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random() * window.innerHeight
    let myCircle = new Circle(randomX, randomY, 50, 'rgb(350, 0,0,55%', i)
    allCircles.push(myCircle)
    createCircle(allCircles[i])
}