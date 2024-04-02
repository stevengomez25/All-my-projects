Algoritmo Correccion_Mientras
	Definir num Como Entero
	//El programa ingresará números mientras sean PARES
	Escribir "Ingrese un número"
	Leer num
	Mientras num %2 = 0 Hacer
		Escribir "El número ingresado es par y es: ",num
		Escribir "Ingrese otro número"
		Leer num
	FinMientras
	Escribir "El número ingresado no es par."
FinAlgoritmo