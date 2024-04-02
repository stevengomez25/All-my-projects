Algoritmo cuadrado_asteriscos
	definir num_asteriscos, secuencia, secuencia1 como entero
	definir simbolo Como Caracter
	escribir "Ingrese el número de unidades que tendrá cada lado: "
	leer num_asteriscos
	simbolo = "*"
	secuencia1 = 0
	Para secuencia<-1 Hasta num_asteriscos-1 Con Paso 1 Hacer
		escribir Sin Saltar simbolo
	Fin Para
	escribir simbolo
	Para secuencia1<-1 Hasta num_asteriscos-2 Con Paso 1 Hacer
		Para secuencia<-1 Hasta num_asteriscos Con Paso 1 Hacer
			si secuencia = 1 Entonces
				escribir sin saltar simbolo
				si secuencia = num_asteriscos Entonces
					escribir simbolo
				SiNo
					Para secuencia<-2 Hasta num_asteriscos-1 Con Paso 1 Hacer
						escribir Sin Saltar " "
					Fin Para
					Escribir simbolo
				FinSi
			FinSi
		Fin Para
	Fin Para
	Para secuencia<-1 Hasta num_asteriscos-1 Con Paso 1 Hacer
		escribir Sin Saltar simbolo
	Fin Para
	escribir simbolo
FinAlgoritmo
