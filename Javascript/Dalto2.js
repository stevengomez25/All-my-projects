
//Veamos pues, un iterador de tipo for

for(let i = 200;i>=0;i--){
    if(i%2!=0){
        continue
    }
    else if(i==50){
        document.write(i+"<br>")
        break
    }
    document.write(i+"<br>")
}

//como aplicarlo con in and of

let animales =["Perro","Gato","Sapo"];

//(in) Generará la posición del elemento(indice)
for (animal in animales){
    document.write(animal + "<br>")
}
//(of) Generará el elemento como tal
for(animal of animales){
    document.write(animal + "<br>")
}
//Si queremos que (in) genere el elemento entonces:
for (animal in animales){
    document.write(animales[animal]+"<br>")
}


//arrays anidados

array1=["Pedro","Juan","Helminto"]
array2=["Juana","Maria",array1,"Rosalba"]
ArrayPrincipal:
for(array in array2) {
    if (array == 2){
        for (let array of array1){
            if (array =="Juan"){
                break ArrayPrincipal
            }
            document.write(array+"<br>");
        }
    }
    else{
        document.write(array2[array]+" <br>")
    }
}

//En el ejemplo anterior podemos ver como al llegar al array dentro del array
// el sistema itera dentro de si mismo el array1 y al llegar a Juan, como hemos
// condicionado el array a skipear toda la ronda con la etiqueta ArrayPrincipal,
// seguirá en Rosalba. Si en vez de usar continue usamos break, solo llegará hasta Juan.
// SI usamos continue o break sin la etiqueta, solo romperá la iteración interna o la saltará.