Algoritmo sin_titulo
	definir sm, se Como Real
	escribir "ingrese el salario mínimo de su país: "
	leer sm
	escribir "ahora ingrese su salario mensual: "
	leer se
	si se>sm Entonces
		escribir "Felicidades, dado que su salario es ",se,", su salario excede el salario mínimo de su país"
	sino 
		escribir "dado que su salario es ",se," y el salario mínimo de su país es ",sm,", su salario es inferior a este límite"
	FinSi
FinAlgoritmo
