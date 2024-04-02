Algoritmo repetir_y_preguntar
	definir numero_ing, total Como Real
	definir respuesta Como Caracter
	escribir "Bienvenido al programa de sumar números en iteración. Ingrese el primer número a continuación: "
	leer numero_ing
	total = 0
	Hacer
		total = total + numero_ing
		escribir "El número ha sido considerado para la iteración. Escriba (Y) si deseas continuar, de lo contrario escribe (N): "
		leer respuesta
		respuesta = Mayusculas(respuesta)
		Segun respuesta Hacer
			"N":
				escribir "Se cancelará la iteración."
			"Y":
				escribir "Ingrese el siguiente valor: "
				leer numero_ing
			De Otro Modo:
				escribir "Ingrese uno de los dos valores permitidos."
		FinSegun
	Mientras Que respuesta <> "N"
	Escribir "El total de los números ingresados fue de: ", total
FinAlgoritmo
