Algoritmo sin_titulo
	definir dia_ingresado Como Caracter
	escribir "Ingrese el día a verificar :"
	leer dia_ingresado
	si dia_ingresado = "sabado" o dia_ingresado =="sábado" o dia_ingresado =="domingo" Entonces
		escribir "El día ingresado es un día feriado"
	SiNo
		escribir "El día ingresado es un día laboral"
	FinSi
FinAlgoritmo
