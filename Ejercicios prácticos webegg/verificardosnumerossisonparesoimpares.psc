Algoritmo sin_titulo
	definir numero_1, numero_2 como real
	escribir "Bienvenido al programa de verificaci�n de n�meros pares, por favor, ingrese el primer n�mero a verificar: "
	leer numero_1
	si numero_1%2=0 Entonces
		escribir "El primer n�mero es par, ahora ingrese el segundo n�mero a verificar: "
		leer numero_2
		si numero_2%2=0 Entonces
			escribir "Tanto el primero, como el segundo n�mero son pares."
		SiNo
			escribir "El primer n�mero ingresado es par, sin embargo, el segundo es impar."
		FinSi
	SiNo
		si numero_2%2=0 Entonces 
			escribir "El primer n�mero es impar, ahora ingrese el segundo n�mero."
		sino 
			escribir "Ambos n�meros son impares."
		FinSi
	FinSi
FinAlgoritmo
