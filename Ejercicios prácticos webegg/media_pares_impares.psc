Algoritmo media_pares_impares
	definir prom, numero_total, valor_ing, vuelta Como Real
	escribir "Ingrese a continuaci�n el primer n�mero de la lista: "
	leer valor_ing
	numero_total = 0
	vuelta = 0
	Hacer
		numero_total = numero_total + valor_ing
		vuelta = vuelta + 1
		escribir "Ingrese el siguiente n�mero de la lista: "
		leer valor_ing
	Mientras Que vuelta <10 
	prom = numero_total / 10
	escribir "La media de los n�meros ingresados es: ", prom
FinAlgoritmo
