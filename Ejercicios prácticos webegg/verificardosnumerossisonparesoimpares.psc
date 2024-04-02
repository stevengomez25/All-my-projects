Algoritmo sin_titulo
	definir numero_1, numero_2 como real
	escribir "Bienvenido al programa de verificación de números pares, por favor, ingrese el primer número a verificar: "
	leer numero_1
	si numero_1%2=0 Entonces
		escribir "El primer número es par, ahora ingrese el segundo número a verificar: "
		leer numero_2
		si numero_2%2=0 Entonces
			escribir "Tanto el primero, como el segundo número son pares."
		SiNo
			escribir "El primer número ingresado es par, sin embargo, el segundo es impar."
		FinSi
	SiNo
		si numero_2%2=0 Entonces 
			escribir "El primer número es impar, ahora ingrese el segundo número."
		sino 
			escribir "Ambos números son impares."
		FinSi
	FinSi
FinAlgoritmo
