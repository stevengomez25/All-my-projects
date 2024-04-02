const sendButton = document.getElementById("send-note");

sendButton.addEventListener("click", ()=>{
  let resultado, mensaje;
  try {
    PrevRes = parseInt(document.getElementById("nota").value);
    if(isNaN(PrevRes)){
      throw "Gracioso";
    }
    mensaje = definirMensaje(PrevRes);
    resultado = verificarAprobacion(8,4,PrevRes)
  }catch(e){
    resultado = "SOS GRACIOSO?";
    mensaje = "He descubierto que intentaste hackear el sitio";
  }

  abrirModal(resultado,mensaje);
})

const definirMensaje = (pr) => {
  let resultado;
  switch(pr){
    case 1: resultado = "No puedes ser tan estupido";break;
    case 2: resultado = "sos malisimo";break;
    case 3: resultado = "muy mal";break;
    case 4: resultado = "mal";break;
    case 5: resultado = "regular";break;
    case 6: resultado = "ya soportas cabron";break;
    case 7: resultado = "Eso, es aceptable por fin";break;
    case 8: resultado = "QUE CRACKKK";break;
    case 9: resultado = "Eres el diablo en persona maquina";break;
    case 10: resultado = "Eres perfecto despues de Cavill";break;
    default: resultado = null;
  }
  return resultado
}

const verificarAprobacion = (nota1,nota2,PrevRes) => {
  promedio = (nota1 + nota2 + PrevRes) / 3;
  if(promedio >=7){
    return "<span class='green'>APROBADO</span>"
  }
  return "<span class='red'>DESAPROBADO</span>"
}


const abrirModal = (res,msj)=>{
  document.querySelector(".resultado").innerHTML = res;
  document.querySelector(".mensaje").innerHTML ="Tu prueba: " + msj;
  let modal = document.querySelector(".modal-background");
  modal.style.display = "flex";
  modal.style.animation ="aparecer 1s forwards";
}