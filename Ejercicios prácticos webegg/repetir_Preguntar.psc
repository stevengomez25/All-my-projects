Algoritmo repetir_Preguntar
	definir num_ing, num_total Como Real
	definir rta Como Caracter
	escribir "Bienvenido al algoritmo de iteraci�n por pregunta. Ingrese el primer n�mero: "
	leer num_ing
	num_total=0
	Hacer
		num_total = num_total + num_ing
		escribir "Ha ingresado un n�mero. escriba (Y) para ingresar. De otro modo ingrese (N)."
		leer rta
		rta = Mayusculas(rta)
		segun rta Hacer
			"Y":
				escribir "Ingrese el siguiente n�mero: "
				leer num_ing
			"N":
				escribir "Gracias por usar nuestro software. La suma total de los valores es: ", num_total
			De Otro Modo:
				Escribir "Ingrese uno de los valores permitidos."
		FinSegun
	Mientras Que rta <> "N"
FinAlgoritmo
