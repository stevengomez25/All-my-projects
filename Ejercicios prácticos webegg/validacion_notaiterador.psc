//Escriba un programa que valide si una nota está entre 0 y 10, sino está entre 0 y 10 la
//		nota se pedirá de nuevo hasta que la nota sea correcta.
Algoritmo validacion_nota
	definir nota Como Real
	escribir "Ingrese la nota a verificar: "
	leer nota
	mientras nota < 0.0001 o nota >10 Hacer
		escribir "La nota ingresada es inválida. Por favor, ingrese una correcta: "
		leer nota
	FinMientras
	escribir "La nota ingresada es válida."
FinAlgoritmo
