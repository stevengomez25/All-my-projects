Funcion caracter_numero <- conversor ( argumento1 )
	definir caracter_numero como entero 
	si Longitud(argumento1)<=3 Entonces
		caracter_numero=ConvertirANumero(argumento1)
	SiNo
		escribir "Ingrese un n�mero con 3 o menos d�gitos."
	FinSi
Fin Funcion

Algoritmo conversor_caracter_numero
	definir numero_caracter como caracter
	definir prueba1 Como Entero
	escribir "Ingrese un n�mero de 3 cifras como m�ximo, el sistema lo devolver� como entero: "
	leer numero_caracter
	escribir conversor(numero_caracter)
	escribir "Para comprobar se sumar� con el n�mero que usted ingrese a continuaci�n: "
	leer prueba1
	escribir conversor(numero_caracter)+prueba1
FinAlgoritmo
