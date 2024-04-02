Funcion retorno <- funcionmultiplo ( argumento1,argumento2 )
	definir retorno Como Logico
	si argumento1 % argumento2 = 0 Entonces
		retorno = Verdadero
	FinSi
Fin Funcion

Algoritmo esmultiploxd
	definir valor_mayor, multiplo como real
	escribir "Ingrese el número: "
	leer valor_mayor
	escribir "Ahora el número que supone, es múltiplo: "
	leer multiplo
	si funcionmultiplo(valor_mayor,multiplo)=verdadero Entonces
		escribir valor_mayor, " es múltiplo de ",multiplo
	SiNo
		escribir valor_mayor, " no es múltiplo de ",multiplo
	FinSi
FinAlgoritmo
