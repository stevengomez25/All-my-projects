Algoritmo repetir_y_preguntar
	definir numero_ing, total Como Real
	definir respuesta Como Caracter
	escribir "Bienvenido al programa de sumar n�meros en iteraci�n. Ingrese el primer n�mero a continuaci�n: "
	leer numero_ing
	total = 0
	Hacer
		total = total + numero_ing
		escribir "El n�mero ha sido considerado para la iteraci�n. Escriba (Y) si deseas continuar, de lo contrario escribe (N): "
		leer respuesta
		respuesta = Mayusculas(respuesta)
		Segun respuesta Hacer
			"N":
				escribir "Se cancelar� la iteraci�n."
			"Y":
				escribir "Ingrese el siguiente valor: "
				leer numero_ing
			De Otro Modo:
				escribir "Ingrese uno de los dos valores permitidos."
		FinSegun
	Mientras Que respuesta <> "N"
	Escribir "El total de los n�meros ingresados fue de: ", total
FinAlgoritmo
