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

class Circle {
    constructor(x_position, y_position, radius, color) {
        this.x_position = x_position;
        this.y_position = y_position;
        this.radius = radius;
        this.color = color;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x_position, this.y_position, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = `${this.color}`;
        context.lineWidth = 20;
        context.stroke();
        context.closePath();
    }
}

// let my_Circle = new Circle(200,200,60,"blue");

// my_Circle.draw(context);

//SECOND LESON ENDING------------

class Tree_Builder {
    constructor(leaf_amount) {
        this.leaf_amount = leaf_amount;
        this.current_leaf = 0;
    }
    draw_tree(context) {
        if (this.current_leaf >= this.leaf_amount) {
            console.log(`Árbol completado con ${this.leaf_amount} hojas.`);
            return; // Detiene la recursión si ya se alcanzó la cantidad deseada
        }
        setTimeout(() => {
            const random_x = Math.random() * context.canvas.width / 2;
            const random_y = Math.random() * context.canvas.height / 2;
            const random_radius = 10 + Math.random() * 20;
            const leaf_colors = ["green", "darkgreen", "lightgreen", "olive"];
            const randomColor = leaf_colors[Math.floor(Math.random() * leaf_colors.length)];
            const leaf = new Circle(random_x, random_y, random_radius, randomColor);
            leaf.draw(context);
            this.current_leaf++;
            this.draw_tree(context); // Llama recursivamente para dibujar la siguiente hoja
        }, Math.floor(Math.random() * 500));




    }
}

const myTree = new Tree_Builder(20);
myTree.draw_tree(context);






let scale = 0; // A scale factor to make the heart grow

// Function to draw one frame of the animation
function drawHeart() {
  // Clear the canvas on each frame
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Set the drawing style
  context.strokeStyle = 'red';
  context.lineWidth = 2;

  // Start the path
  context.beginPath();

  // Offset the heart to the center of the canvas
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Iterate to draw the heart shape
  for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
    const x = 16 * Math.sin(t) ** 3;
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    
    // Scale and position the points
    const newX = x * scale + centerX;
    const newY = -y * scale + centerY; // Invert Y because canvas Y-axis is inverted

    if (t === 0) {
      context.moveTo(newX, newY);
    } else {
      context.lineTo(newX, newY);
    }
  }

  context.stroke();

  // Increase the scale for the next frame
  scale += 0.2;

  // Stop the animation when the heart is big enough
  if (scale < 20) {
    requestAnimationFrame(drawHeart);
  }
}

// Start the animation
drawHeart();