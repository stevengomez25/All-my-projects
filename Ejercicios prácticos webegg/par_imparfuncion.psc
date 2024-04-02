Funcion resultado <- paroimpar ( argumento1 )
	definir resultado como logico
	si argumento1 % 2 = 0 Entonces
		resultado = Verdadero
	FinSi
Fin Funcion

Algoritmo par_impar
	definir dato como logico
	definir numero_ingresado, argumento1 Como Real
	escribir "Ingrese el número a verificar: "
	leer numero_ingresado
	si paroimpar(numero_ingresado) = Verdadero Entonces
		escribir "es par."
	SiNo
		escribir "es impar."
	FinSi
	
FinAlgoritmo
