//35m por dia para las cosas de la casa
//100m al dia para trabajos
//10m descanso
//100m para estudiar
//240m trabajo

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let descanso = "10 minutos de descanso";
let tp = "100 minutos trabajos practicos";
let homework = "30 minutos de cosas de la casa";

console.log("TAREAS");

for (var i = 0; i < 14; i++){
    if (i==0){
        console.group("dia 1");
    }
    else{
        console.groupCollapsed("dia " + (i+1));
        console.log(trabajo);
        console.log(descanso);
        console.log(estudio);
        console.log(tp);
        console.log(homework);
        console.groupEnd();
    }
    if(i==6){
        console.groupEnd();
        console.groupCollapsed("semana 2")
    }
}

console.groupEnd();
console.groupEnd();