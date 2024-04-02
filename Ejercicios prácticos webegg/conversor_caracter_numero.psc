Funcion caracter_numero <- conversor ( argumento1 )
	definir caracter_numero como entero 
	si Longitud(argumento1)<=3 Entonces
		caracter_numero=ConvertirANumero(argumento1)
	SiNo
		escribir "Ingrese un número con 3 o menos dígitos."
	FinSi
Fin Funcion

Algoritmo conversor_caracter_numero
	definir numero_caracter como caracter
	definir prueba1 Como Entero
	escribir "Ingrese un número de 3 cifras como máximo, el sistema lo devolverá como entero: "
	leer numero_caracter
	escribir conversor(numero_caracter)
	escribir "Para comprobar se sumará con el número que usted ingrese a continuación: "
	leer prueba1
	escribir conversor(numero_caracter)+prueba1
FinAlgoritmo
