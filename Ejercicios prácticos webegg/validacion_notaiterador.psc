//Escriba un programa que valide si una nota est� entre 0 y 10, sino est� entre 0 y 10 la
//		nota se pedir� de nuevo hasta que la nota sea correcta.
Algoritmo validacion_nota
	definir nota Como Real
	escribir "Ingrese la nota a verificar: "
	leer nota
	mientras nota < 0.0001 o nota >10 Hacer
		escribir "La nota ingresada es inv�lida. Por favor, ingrese una correcta: "
		leer nota
	FinMientras
	escribir "La nota ingresada es v�lida."
FinAlgoritmo
