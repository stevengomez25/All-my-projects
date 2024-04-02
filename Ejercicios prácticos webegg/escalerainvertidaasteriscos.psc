Algoritmo escalerainvertidaasteriscos
	definir n_asteriscos, escalon, seccion Como Real
	definir simbolo Como Caracter
	escribir "Ingrese la cantidad de peldaños que tendrá la escalera: "
	leer n_asteriscos
	simbolo = "*"
	Para escalon<-1 Hasta n_asteriscos Con Paso 1 Hacer
		Para seccion<-1 Hasta n_asteriscos-1 Con Paso 1 Hacer
			escribir Sin Saltar simbolo
		Fin Para
		escribir simbolo
		n_asteriscos = n_asteriscos-1
	Fin Para
FinAlgoritmo
