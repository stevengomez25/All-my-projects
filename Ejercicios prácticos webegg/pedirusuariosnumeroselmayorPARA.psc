Algoritmo pedirusuariosnumeroselmayorPARA
	definir ingresado, vueltas, mayor Como Real
	escribir "Ingrese un n�mero, el programa le pedir� varios y al final le dir� cual fue el mayor ingresado: "
	leer ingresado
	mayor = 0
	Para vueltas<-1 Hasta 5 Con Paso 1 Hacer
		si ingresado > mayor Entonces
			mayor = ingresado
			escribir "Ingrese el siguiente n�mero: "
			leer ingresado
		SiNo
			mayor = mayor
			escribir "Ingrese el siguiente n�mero: "
		FinSi
	Fin Para
	escribir "El mayor n�mero ingresado fue: ", mayor
FinAlgoritmo
