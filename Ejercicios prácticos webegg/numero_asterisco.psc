Algoritmo numero_asterisco
	definir num_ingresado, vuelta, vuelta1, infinito Como Real
	infinito =4802938109236168156541623245648921346843021863
	Para vuelta<-1 Hasta infinito Con Paso 1 Hacer
		escribir "Ingrese el número. Se representará el número junto con la cantidad de asteriscos:"
		leer num_ingresado
		escribir Sin Saltar num_ingresado
		Para vuelta1<-1 Hasta num_ingresado-1 Con Paso 1 Hacer
			escribir Sin Saltar "*"
		Fin Para
		escribir "*"
	Fin Para
FinAlgoritmo
