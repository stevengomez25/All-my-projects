Algoritmo sin_titulo
	definir dia_ingresado Como Caracter
	escribir "Ingrese el d�a a verificar :"
	leer dia_ingresado
	si dia_ingresado = "sabado" o dia_ingresado =="s�bado" o dia_ingresado =="domingo" Entonces
		escribir "El d�a ingresado es un d�a feriado"
	SiNo
		escribir "El d�a ingresado es un d�a laboral"
	FinSi
FinAlgoritmo
