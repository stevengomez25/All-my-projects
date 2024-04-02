main_container =document.createElement('div');
main_container.classList.add('main_container');
document.body.appendChild(main_container);

screen = document.createElement('div');
screen.classList.add('screen');
main_container.appendChild(screen);

piece = document.createElement('div');
piece.classList.add('piece');

title = document.createElement('h1');
title.classList.add('title');
screen.appendChild(title);
title.innerHTML = 'TETRIS';
parrafito = document.createElement('p');
parrafito.classList.add('parrafito');
screen.appendChild(parrafito);
parrafito.innerHTML = 'Press any button to start!';

container_buttons = document.createElement('div');
container_buttons.classList.add('container_buttons');
main_container.appendChild(container_buttons);

button_left = document.createElement('button');
button_left.className = 'button button_left';
container_buttons.appendChild(button_left);
icon_left = document.createElement('i');
button_left.appendChild(icon_left);
icon_left.className = "fa-solid fa-circle-chevron-left";


button_down = document.createElement('button');
button_down.className = 'button button_down';
container_buttons.appendChild(button_down);
icon_down = document.createElement('i');
button_down.appendChild(icon_down);
icon_down.className = "fa-solid fa-circle-chevron-down";

button_right = document.createElement('button');
button_right.className = 'button button_right';
container_buttons.appendChild(button_right);
icon_right = document.createElement('i');
button_right.appendChild(icon_right);
icon_right.className = "fa-solid fa-circle-chevron-right";

button_rotate = document.createElement('button');
button_rotate.className = 'button button_rotate';
container_buttons.appendChild(button_rotate);
icon_rotate = document.createElement('i');
button_rotate.appendChild(icon_rotate);
icon_rotate.className = "fa-solid fa-group-arrows-rotate";

buttons = document.querySelectorAll('.button');

buttons.forEach(listener_remove_title=(item)=>{
    item.addEventListener('click',()=>{
        title.style.opacity = 0;
        parrafito.style.opacity = 0;

        setTimeout(()=>{
            title.style.display = 'none';
            parrafito.style.display = 'none';
            screen.appendChild(piece);
            screen.style = 'display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
        },1000)
        let x=0;
        setInterval(()=>{
            if(x+1<12){
            piece.style = `grid-row:${x}/${x+1}`
            x++;
        }},700)
        new_index = piece.style["grid-row"];
        piece.className ="piece_fixed";
        piece.style = `grid-row:${new_index}`;
        piece = document.createElement("div");
        screen.appendChild(piece);
        piece.className = "piece";
    })
});
