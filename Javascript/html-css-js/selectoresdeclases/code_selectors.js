tituloxd = document.querySelector(".titulo");

tituloxd.setAttribute("contentEditable","true")
tituloxd.setAttribute("dir","rtl")

const parrafitoWi= document.querySelector(".parrafito");
parrafitoWi.removeAttribute("hidden")
parrafitoWi.setAttribute("tabindex",0);
parrafitoWi.setAttribute("title","Parrafitowiiii");

let inputNormal = document.querySelector(".input-normal");
//Este permite editar el atributo de input directamente
// document.write(inputNormal.type = "file");
//Este pasa el parámetro de los archivos acceptables
inputNormal.accept = ".jpg"

let inputLimitado = document.querySelector(".input-limitado");
inputLimitado.minLength = 30;
inputLimitado.value = "";
inputLimitado.placeholder="Hola bebe";
inputLimitado.required=" ";

//AHORA STYLEEEEEEEEEEEEEEEE

tituloaModificar = document.querySelector(".titulo-a-modificar");
tituloaModificar.style.backgroundColor = "#00F";
tituloaModificar.style.display = "inline";
tituloaModificar.style.color = "#fff";
tituloaModificar.style.padding = "2px";
tituloaModificar.style.margin = "4px";

titulos_experimentales = document.querySelector(".tituloExperimento");

titulos_experimentales.classList.add("sapo");
// aqui añadi color ^
titulos_experimentales.classList.remove("sapo")
// aqui lo quité ^

let valor_clase = tituloaModificar.classList.item(0);
// ESTO AYUDA A ACCEDER A LAS CLASES ENTRE CLASS
document.write(valor_clase,"<br/>");

let verificador = tituloaModificar.classList.contains("grande");
document.write("classList.contains nos ayuda a verificar si la clase que le preguntamos, está en el item o no, y devuelve un boolean <br>")
document.write(verificador);


nombreDeClase ="sapo";

valor_verificar = tituloaModificar.classList.contains(nombreDeClase);

if(valor_verificar){
    tituloaModificar.classList.remove(nombreDeClase);
}
else{
    tituloaModificar.classList.add(nombreDeClase);
}
nombreDeClase_2 = "grande_bg_gris_color_white"
tituloExperimento_2 = document.querySelector(".tituloExperimento_2");
tituloExperimento_2.classList.toggle(nombreDeClase_2);
document.write("<br>Tambien existe replace como metodo de class, que basicamente le pasas el primer parámetro y el segundo reemplazará al primero<br>")

content_parrafo = document.querySelector(".content-parrafo");
resultado_texto = content_parrafo.textContent;
document.write(resultado_texto);