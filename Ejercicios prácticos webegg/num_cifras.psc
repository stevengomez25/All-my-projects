Algoritmo num_cifras
	definir numero_ingresado, x, z, Longitud_ingresado Como Real
	definir numero_ingresado1 Como Caracter
	z = 99999999999999999999*999999999999999999999999999999
	Para x<-1 Hasta z Con Paso 1 Hacer
		escribir "Ingrese el número a verificar su cantidad de cifras: "
		leer numero_ingresado
		numero_ingresado1 = ConvertirATexto(numero_ingresado)
		Longitud_ingresado = Longitud(numero_ingresado1)
		escribir Longitud_ingresado
	Fin Para
FinAlgoritmo
