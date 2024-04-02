Algoritmo Correccion_SiAnidado
	Definir n1, n2, n3 Como Entero
	//faltaba n3
	Escribir "MOSTRAR EL MAYOR DE 3 NÚMEROS"
	Escribir "INGRESE NÚMERO 01 : "
	//faltaba leer n1
	leer n1
	Escribir "INGRESE NÚMERO 02 : "
	//faltaba leer n2
	leer n2
	Escribir "INGRESE NÚMERO 03 : "
	Leer n3
	//faltaban signos de mayor que y el operador lógico Y
	Si (n1 > n2 y n1>n3) Entonces
		//faltaba sangria
		Escribir "MAYOR ES ", n1
		//faltaba sino
	siNo
		//faltaba más sangría y operador lógico Y junto con los signos de mayor que 
			Si (n2>n1 y n2>n3) Entonces
				Escribir "MAYOR ES ", n2
				//faltaba sino
			sino
			Escribir "MAYOR ES ", n3
		FinSi
	FinSi
	
FinAlgoritmo