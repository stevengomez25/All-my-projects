Algoritmo numero_mayorque_10
	definir num_ing, x Como Real
	escribir "Ingrese un valor. El sistema determinará si es mayor que 10."
	leer num_ing
	x = 0 
	mientras num_ing>10 Hacer
		escribir "Ingrese otro valor."
		leer num_ing
		x = x + 1
	FinMientras
	escribir "El valor ingresado es menor o igual que 10, el sistema se cerrará."
	escribir "Intentos realizados: ",x
FinAlgoritmo
