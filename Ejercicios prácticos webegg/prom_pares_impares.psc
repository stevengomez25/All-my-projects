//Hacer un algoritmo para calcular la media de los n�meros pares e impares, s�lo se
//ingresar� diez n�meros.
Algoritmo prom_pares_impares
	definir num_ing, par, impar, contpar, contimpar, prom_par, prom_impar como entero
	escribir "Ingrese el primer n�mero de los 10 necesarios: "
	prom_impar = 0
	prom_par = 0
	contpar = 0
	contimpar = 0
	leer num_ing
	Hacer
		si num_ing % 2 = 0 Entonces
			par = num_ing
			contpar = contpar + 1 
			escribir "Ingrese el siguiente valor: "
			leer num_ing
		SiNo
			impar = num_ing
			contimpar = contimpar + 1
			escribir "Ingrese el siguiente valor: "
			leer num_ing
		FinSi
	Mientras Que num_ing >= 0 y (contpar + contimpar) < 10 
	escribir "De los diez n�meros que ingres�:" 
	escribir "Pares: ", contpar
	escribir "Impares: ", contimpar
	
FinAlgoritmo
