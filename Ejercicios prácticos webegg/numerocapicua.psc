Algoritmo sin_titulo
	definir numero_ingresado, numero_capicua1, numero_capicua2 Como Real
	escribir "ingrese un n�mero de 3 cifras para verificar si es capicua o no: "
	leer numero_ingresado
	si numero_ingresado >=100 Y numero_ingresado <= 999 Entonces
		numero_capicua1 = trunc(numero_ingresado/100)
		numero_capicua2 = numero_ingresado%10
		si numero_capicua1 == numero_capicua2 Entonces
			Escribir "El n�mero es capicua"
		SiNo
			Escribir "El n�mero no es capicua"
		FinSi
	SiNo
		escribir "El n�mero no posee 3 cifras"
	FinSi
FinAlgoritmo
