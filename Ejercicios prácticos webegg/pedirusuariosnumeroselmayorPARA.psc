Algoritmo pedirusuariosnumeroselmayorPARA
	definir ingresado, vueltas, mayor Como Real
	escribir "Ingrese un número, el programa le pedirá varios y al final le dirá cual fue el mayor ingresado: "
	leer ingresado
	mayor = 0
	Para vueltas<-1 Hasta 5 Con Paso 1 Hacer
		si ingresado > mayor Entonces
			mayor = ingresado
			escribir "Ingrese el siguiente número: "
			leer ingresado
		SiNo
			mayor = mayor
			escribir "Ingrese el siguiente número: "
		FinSi
	Fin Para
	escribir "El mayor número ingresado fue: ", mayor
FinAlgoritmo
