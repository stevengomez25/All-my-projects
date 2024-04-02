Algoritmo paroimparoninguno
	Definir n1, n2 como entero
	escribir "Bienvenido al programa de determinación de rendimiento de Torner Inc."
	escribir "Por favor, empiece ingresando el número de tornillos defectuosos realizados: "
	leer n1
	escribir "Por favor, ahora los tornillos no defectuosos realizados: "
	leer n2
	si n1<200 Entonces
		si n2>10000 Entonces
			escribir "Su categoría de rendimiento es: grado 8."
		SiNo
			escribir "Su categoría de rendimiento es: grado 6."
		FinSi
	SiNo
		si n2>10000 Entonces
			escribir "Su categoría de rendimiento es: grado 7."
		SiNo
			escribir "Su categoría de rendimiento es: grado 5."
		FinSi
	FinSi
FinAlgoritmo