Algoritmo sin_titulo
	definir eleccion como caracter
	escribir " Escriba A para categorizar en el grupo 1: "
	escribir " Escriba B para categorizar en el grupo 2: "
	escribir " Escriba C para categorizar en el grupo 3: "
	escribir " Escriba D para categorizar en el grupo 4: "
	leer eleccion
	eleccion = Mayusculas(eleccion)
	segun eleccion
		"A":
			Escribir "Se ha categorizado en el grupo 1"
		"B":
			Escribir "Se ha categorizado en el grupo 2"
		"C":
			Escribir "Se ha categorizado en el grupo 3"
		"D":
			Escribir "Se ha categorizado en el grupo 4"
	FinSegun
	Escribir "Muchas gracias por usar nuestro servicios de categorización."
FinAlgoritmo
