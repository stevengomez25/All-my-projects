Algoritmo Correccion_SiAnidado
	Definir n1, n2, n3 Como Entero
	//faltaba n3
	Escribir "MOSTRAR EL MAYOR DE 3 N�MEROS"
	Escribir "INGRESE N�MERO 01 : "
	//faltaba leer n1
	leer n1
	Escribir "INGRESE N�MERO 02 : "
	//faltaba leer n2
	leer n2
	Escribir "INGRESE N�MERO 03 : "
	Leer n3
	//faltaban signos de mayor que y el operador l�gico Y
	Si (n1 > n2 y n1>n3) Entonces
		//faltaba sangria
		Escribir "MAYOR ES ", n1
		//faltaba sino
	siNo
		//faltaba m�s sangr�a y operador l�gico Y junto con los signos de mayor que 
			Si (n2>n1 y n2>n3) Entonces
				Escribir "MAYOR ES ", n2
				//faltaba sino
			sino
			Escribir "MAYOR ES ", n3
		FinSi
	FinSi
	
FinAlgoritmo