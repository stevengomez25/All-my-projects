algoritmo mayormenorpromedio 
	definir numay, nummen,prom, numvueltas, numing, numtotal Como Real
	escribir "Ingrese el número para iniciar la secuencia, para pararla ingrese 0: "
	leer numing
	numay = 0
	nummen = numing 
	numtotal = 0
	numvueltas = 0
	Hacer
		si numing <> 0 Entonces
			si numay >= numing Entonces
				escribir "Bien."
			SiNo
				numay = numing
				escribir "Número mayor y promedio actualizado"
			FinSi
			numvueltas = numvueltas +1
			numtotal = numtotal + numing
			prom = (numtotal) / numvueltas
			si nummen <= numing Entonces
				nummen = nummen
				escribir "bien, ingrese un nuevo número: "
			SiNo
				si numing = 0 Entonces
					nummen = nummen
				SiNo
					nummen=numing
					Escribir "Menor número  actualizado. escriba el siguiente número: "
				FinSi
			FinSi
			leer numing
		SiNo
			numing = numing 
			escribir "se cancelará el proceso, Gracias por usar el software, para confirmar ingrese de nuevo el 0:"
		FinSi
	Mientras Que numing <> 0
	escribir "Valor máximo: ", numay
	escribir "Valor mínimo: ", nummen
	escribir "Promedio: ", prom
	escribir "Gracias por usar nuestro software. Fue un placer!."
FinAlgoritmo
	