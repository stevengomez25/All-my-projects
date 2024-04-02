Algoritmo palabradividida
	definir palabra_ingresada Como Caracter
	definir num_letras, x Como real
	escribir "Ingrese la palabra a separar: "
	leer palabra_ingresada
	num_letras = Longitud(palabra_ingresada)
	Para x<-0 Hasta num_letras-1 Con Paso 1 Hacer
		escribir Sin Saltar Subcadena(palabra_ingresada,x,x)," "
		
	Fin Para
FinAlgoritmo
