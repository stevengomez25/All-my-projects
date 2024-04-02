Algoritmo vocalsecreta2
	definir vocal_i Como Caracter
	escribir "Ingrese la vocal a tratar de adivinar: "
	leer vocal_i
	vocal_i = Mayusculas(vocal_i)
	Hacer
		escribir "Vocal incorrecta, intente con otra:"
		leer vocal_i
		vocal_i = Mayusculas(vocal_i)
	Mientras Que vocal_i <> "B"
	Escribir "Felicidades!! Ha encontrado la vocal secreta!!"
FinAlgoritmo
