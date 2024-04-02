Funcion salida <- cantidad ( cadena1, letra )
	definir g,z,numletra, salida Como Real
	salida = 0
	g= 0
	z = 0
	Para numletra<-1 Hasta Longitud(cadena1) Con Paso 1 Hacer
		si SubCadena(cadena1,g,z) == letra Entonces
			salida = salida + 1
			g = g + 1 
			z = z + 1
		SiNo
			g = g + 1
			z = z + 1
		FinSi
	Fin Para
Fin Funcion
Algoritmo cantidad_de_letra_en_una_frase
	definir cadena1, letra Como Caracter
	escribir "Ingrese la frase: "
	leer cadena1
	cadena1 = Minusculas(cadena1)
	escribir "Ahora ingrese la letra, el sistema determinará cuantas letras de esta misma se encuentran en la frase: "
	leer letra
	letra=Minusculas(letra)
	escribir "La cantidad de letras en la frase escrita es de: ", cantidad(cadena1,letra)
FinAlgoritmo
