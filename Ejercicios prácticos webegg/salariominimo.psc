Algoritmo sin_titulo
	definir sm, se Como Real
	escribir "ingrese el salario m�nimo de su pa�s: "
	leer sm
	escribir "ahora ingrese su salario mensual: "
	leer se
	si se>sm Entonces
		escribir "Felicidades, dado que su salario es ",se,", su salario excede el salario m�nimo de su pa�s"
	sino 
		escribir "dado que su salario es ",se," y el salario m�nimo de su pa�s es ",sm,", su salario es inferior a este l�mite"
	FinSi
FinAlgoritmo
