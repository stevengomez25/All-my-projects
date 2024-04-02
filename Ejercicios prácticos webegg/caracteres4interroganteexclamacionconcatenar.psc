Algoritmo sin_titulo
	definir carac_evaluar, variable como cadena
	escribir "Ingrese la palabra a verificar: "
	leer carac_evaluar
	si Longitud(carac_evaluar)=4 Entonces
		variable = "!"
		escribir Concatenar(carac_evaluar, variable)
	SiNo
		variable ="?"
		escribir Concatenar(carac_evaluar,variable)
	FinSi
FinAlgoritmo
