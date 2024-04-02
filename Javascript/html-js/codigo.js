let parrafo = "Seguime cabron en @SteveDev";
//con write
document.write(parrafo,"<br>","<br>");
//con getelementbyID
parrafo2 = document.getElementById("contenido");
document.write(parrafo2);
//con esto se selecciona

// Tambien podemos seleccionarlo por el type name
parrafo3 = document.getElementsByTagName("p");
document.write(parrafo3);
//Devuelve una lista NO ARRAY
document.write(parrafo3[1]);

parrafo4 = document.querySelector(".parrafoxd");
document.write(parrafo4);

parrafo5 = document.querySelectorAll("#contenido2");
document.write(parrafo5);
document.write(parrafo5[0]);
