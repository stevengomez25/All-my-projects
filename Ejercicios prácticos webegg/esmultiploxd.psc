Funcion retorno <- funcionmultiplo ( argumento1,argumento2 )
	definir retorno Como Logico
	si argumento1 % argumento2 = 0 Entonces
		retorno = Verdadero
	FinSi
Fin Funcion

Algoritmo esmultiploxd
	definir valor_mayor, multiplo como real
	escribir "Ingrese el n�mero: "
	leer valor_mayor
	escribir "Ahora el n�mero que supone, es m�ltiplo: "
	leer multiplo
	si funcionmultiplo(valor_mayor,multiplo)=verdadero Entonces
		escribir valor_mayor, " es m�ltiplo de ",multiplo
	SiNo
		escribir valor_mayor, " no es m�ltiplo de ",multiplo
	FinSi
FinAlgoritmo
