Algoritmo 	medirtemperatura
	definir temp_max, temp_min, num_days como real
	escribir "Bienvenido al sistema de generación de promedio temperatura. Para iniciar ingrese los dias: "
	leer num_days
	temp_prom_procedimiento(temp_max,temp_min,num_days)
FinAlgoritmo
SubProceso temp_prom_procedimiento(temp_max Por Referencia, temp_min Por Referencia, num_days por valor)
	definir x, temperatura_siguiente, temp_prom Como Real
	temp_max = 0
	temp_min = 0
	temp_prom = 0
	Para x<-1 Hasta num_days Con Paso 1 Hacer
		escribir "Ingrese la temperatura del día ",x
		leer temperatura_siguiente
		si temperatura_siguiente > temp_max Entonces
			temp_max = temperatura_siguiente
			temp_prom = temp_prom + temperatura_siguiente
		SiNo
			si temperatura_siguiente < temp_min Entonces
				temp_min = temperatura_siguiente
				temp_prom = temperatura_siguiente + temp_prom
			SiNo
				temp_max = temp_max
				temp_min = temp_min
				temp_prom = temp_prom + temperatura_siguiente
			FinSi
		FinSi
	Fin Para
	escribir "La temperatura promedio fue de: °",temp_prom / num_days
FinSubProceso
	