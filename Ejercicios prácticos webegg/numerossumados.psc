Algoritmo numerossumados
	definir num1, num2 como real
	escribir "Ingrese el n�mero a verificar, si la suma de el con sus anteriores es mayor al l�mite, se notificar�:"
	leer num1
	num2 = num1 
	Mientras num2 <30 Hacer
		escribir "El n�mero ingresado fue ", num1," Y el total es: ",num2
		escribir "Ahora ingrese otro n�mero: "
		leer num1
		num2 = num2+num1
	FinMientras
	escribir "Se ha superado el l�mite m�ximo de caracteres."
FinAlgoritmo
