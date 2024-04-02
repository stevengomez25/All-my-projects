Algoritmo paroimparoninguno
	Definir n1 como entero
	escribir "Bienvenido al programa de validación de par o impar. Ingrese el número a verificar: "
	leer n1
	si n1<>0 y n1%2=0 Entonces
		escribir "El número recibido fue ",n1,", y es un número par."
	SiNo
		si n1=0 Entonces
			escribir "El número recibido fue ",n1,", y no es un número par ni impar."
		SiNo
			escribir "El número recibido fue ",n1,", y es un número impar."
		FinSi
	FinSi
FinAlgoritmo