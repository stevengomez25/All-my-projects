Algoritmo mayores_que_el_primervalor
	definir termino_inicial, termino_siguiente Como Real
	escribir "Ingrese el primer valor decimal. Los siguientes valores deben ser mayores al primero, de lo contrario el sistema colapsar�: "
	leer termino_inicial
	escribir "El menor n�mero debe ser: ",termino_inicial
	termino_siguiente = termino_inicial + 1
	mientras termino_inicial < termino_siguiente Hacer
		escribir "Ingrese otro n�mero nuevo: "
		leer termino_siguiente
	FinMientras
	escribir "El n�mero no es mayor que el primero ingresado. El programa colapsar�."
FinAlgoritmo
