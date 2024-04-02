Algoritmo juego_aleatorio
	definir num_ing, num_random Como Real
	definir num_menor, num_mayor como logico
	escribir "Bienvenido a Randex"
	escribir "Este juego consiste en intentar adivinar el número. Si es más grande se indicará y si es más pequeño también"
	Escribir "Comencemos intentando con el término ingresado: "
	leer num_ing
	num_random = Aleatorio(1, 10)
	num_menor = num_ing<num_random
	num_mayor = num_ing>num_random
	Hacer
		si num_menor Entonces
			escribir "El número ", num_ing, " es menor que el valor esperado! Intenta nuevamente."
			leer num_ing
		SiNo
			si num_mayor Entonces
				escribir "El número ", num_ing, " es mayor que el valor esperado! Intenta nuevamente."
				leer num_ing
			SiNo
				escribir "Ingrese un valor válido en la consola."
				leer num_ing
			FinSi
		FinSi
	Mientras Que num_ing <> num_random
	escribir "FELICIDADES!!! HAS ENCONTRADO EL VALOR, GANASTE!!!"
FinAlgoritmo
