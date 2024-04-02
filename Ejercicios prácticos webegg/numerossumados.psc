Algoritmo numerossumados
	definir num1, num2 como real
	escribir "Ingrese el número a verificar, si la suma de el con sus anteriores es mayor al límite, se notificará:"
	leer num1
	num2 = num1 
	Mientras num2 <30 Hacer
		escribir "El número ingresado fue ", num1," Y el total es: ",num2
		escribir "Ahora ingrese otro número: "
		leer num1
		num2 = num2+num1
	FinMientras
	escribir "Se ha superado el límite máximo de caracteres."
FinAlgoritmo
