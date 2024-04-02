Algoritmo factorialanidado
	definir num_ingresado, piso, seccion, x, basemultiplicacion Como entero
	definir text, a Como Caracter
	escribir "El programa está diseñado para mostrar los primeros 5 factoriales: "
	num_ingresado = 5
	x = 5
	basemultiplicacion = 0
	Para piso<-1 Hasta num_ingresado Con Paso 1 Hacer
		escribir Sin Saltar "!",piso,"="
		Para seccion<-piso Hasta piso Con Paso 1 Hacer
			si piso = 1 Entonces
				a = ConvertirATexto(seccion)
				escribir sin saltar a
			SiNo
				a = a
				text=convertirATexto(piso)
				a = a+"*"+text
				escribir sin saltar a 
			FinSi
		Fin Para
		si piso = 1 Entonces
			escribir "=",piso
		SiNo
			si basemultiplicacion = 0 Entonces
				basemultiplicacion = piso* (piso-1)
				escribir "=", basemultiplicacion
			SiNo
			basemultiplicacion = basemultiplicacion * piso
			escribir "=", basemultiplicacion
		FinSi
		FinSi
	Fin Para
FinAlgoritmo
