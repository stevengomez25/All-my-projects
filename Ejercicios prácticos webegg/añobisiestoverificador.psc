Algoritmo ano_bisiesto
	definir ano_ingresado Como Real
	escribir "Ingrese por favor el año a verificar si es bisiesto o no: "
	leer ano_ingresado
	si ano_ingresado%4 = 0 y ano_ingresado %100 <> 0 Entonces
		escribir "El año ingresado es bisiesto."
	SiNo
		si ano_ingresado%400 = 0 y ano_ingresado %100 = 0 Entonces
			escribir "El año ingresado es bisiesto."
		SiNo
			escribir "El año ingresado no es bisiesto."
		FinSi
	FinSi
FinAlgoritmo
