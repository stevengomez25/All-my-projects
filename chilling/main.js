let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

// //FIRST STEPS -----------------

// //fIRST RECTANGLE BLACK ONE
// context.fillRect(0,0,100,200)

// context.fillStyle="red";
// //SECOND RECTANGLE RED ONE
// context.fillRect(30,30,100,200);

// //Opening the generation of the circle
// context.beginPath();
// context.strokeStyle = "blue";
// context.lineWidth = 10;
// context.arc(200,200,50,0,Math.PI * 2,false);
// context.stroke();
// context.closePath();
// //closing the circle

// //FIRST STEPS ----------------

//SECOND LESSON -----------------

class Circle{
    constructor(x_position,y_position,radius,color){
        this.x_position = x_position;
        this.y_position = y_position;
        this.radius = radius;
        this.color = color;
    }
    draw(context){
        context.beginPath();
        context.arc(this.x_position,this.y_position,this.radius,0,Math.PI*2,false);
        context.strokeStyle = `${this.color}`;
        context.lineWidth = 20;
        context.stroke();
        context.closePath();
    }
}

// let my_Circle = new Circle(200,200,60,"blue");

// my_Circle.draw(context);

//SECOND LESON ENDING------------

class Tree_Builder{
    constructor(leaf_amount){
        this.leaf_amount = leaf_amount;
    }
    draw_tree(context){
        for(let i = 0;i < this.leaf_amount; i++ ){
            const random_x = Math.random() * context.canvas.width/2;
            const random_y = Math.random() * context.canvas.height/2;
            const random_radius = 10 + Math.random() * 20;
            const leaf_colors = ["green","darkgreen","lightgreen","olive"];
            const randomColor = leaf_colors[Math.floor(Math.random()*leaf_colors.length)];

            const leaf = new Circle(random_x,random_y,random_radius,randomColor);
            leaf.draw(context);
        }
    }
}

const myTree = new Tree_Builder(3000);
myTree.draw_tree(context);