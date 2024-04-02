windowheight = window.screen.availHeight;
windowith = window.screen.availWidth;

windowheight1 = window.screen.height;
windowwidth1 = window.screen.width;


buyIt = confirm(`la altura de la pantalla es ${windowheight}, ${windowheight1} y la anchura es ${windowith}, ${windowwidth1} y. Desea comprarla?`);

if(buyIt) {
    alert("Comprado!");
}
else{
    alert("no comprado!");
}