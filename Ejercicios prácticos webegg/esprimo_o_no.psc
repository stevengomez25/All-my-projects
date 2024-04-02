Funcion esprimo <- verificadorprimo ( argumento )
	definir esprimo como logico
	definir i Como Real
	Para i<-1 Hasta argumento Con Paso 1 Hacer
		si argumento%i<>0 o argumento/i= 1 Entonces
			esprimo = Verdadero
		SiNo
			si argumento % i = 0 y argumento/i= argumento entonces
				esprimo = Verdadero
			SiNo
				esprimo = falso
				i=argumento
			FinSi
		FinSi
	Fin Para
Fin Funcion

Algoritmo esprimo_o_no
	definir numerox Como Real
	escribir "Ingrese el número a verificar si es primo o no. El programa le arrojará el resultado"
	leer numerox
	si verificadorprimo(numerox) = verdadero Entonces
		escribir numerox," es primo"
	SiNo
		escribir numerox, " no es primo"
	FinSi
	
FinAlgoritmo
