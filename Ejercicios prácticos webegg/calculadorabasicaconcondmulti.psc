Algoritmo Correccion_SiAnidado
	definir opcion_elegida Como Caracter
	definir n1,n2 como Entero
	escribir "Bienvenido al programa de operaciones simples de Steven Industries."
	Escribir "Por favor, ingrese la primera letra de la operaci�n a realizar: "
	leer opcion_elegida
	opcion_elegida = Minusculas(opcion_elegida)
	segun opcion_elegida Hacer
		"s":
			escribir "El programa iniciar� modo suma. Por favor, ingrese el primer valor de la operaci�n: "
			leer n1 
			escribir "Muchas gracias. Ahora proporcione el segundo valor: "
			leer n2
			escribir " El resultado de la operaci�n es: ", n1+n2
		"r":
			escribir "El programa iniciar� modo resta. Por favor, ingrese el primer valor de la operaci�n: "
			leer n1 
			escribir "Muchas gracias. Ahora proporcione el segundo valor: "
			leer n2
			escribir " El resultado de la operaci�n es: ", n1-n2
		"m":
			escribir "El programa iniciar� modo multiplicaci�n. Por favor, ingrese el primer valor de la operaci�n: "
			leer n1 
			escribir "Muchas gracias. Ahora proporcione el segundo valor: "
			leer n2
			escribir " El resultado de la operaci�n es: ", n1*n2
		"d":
			escribir "El programa iniciar� modo divisi�n. Por favor, ingrese el dividiendo de la operaci�n: "
			leer n1 
			escribir "Muchas gracias. Ahora proporcione divisor: "
			leer n2
			escribir " El resultado de la operaci�n es: ", n1/n2
		De Otro Modo:
			escribir "No ha ingresado ninguna opci�n v�lida, el sistema finalizar�."
	FinSegun
	Escribir "Gracias por usar nuestro software. Tenga un excelente d�a."
FinAlgoritmo