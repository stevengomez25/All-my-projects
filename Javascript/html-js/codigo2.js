const rangoxd = document.querySelector(".rango");
document.write(rangoxd);

rangoxd.setAttribute("awesome","color")
//Si no existe el atributo, le dara este atributo

document.write(rangoxd.getAttribute("type"))
//Con este se encuentra el valor del atributo

rangoxd.removeAttribute("awesome")
//este remueve el atributo junto con su valor