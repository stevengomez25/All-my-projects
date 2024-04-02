Algoritmo sin_titulo
	definir fecha_ingreso,var1,var2,var3,var4 Como Real
	escribir "Ingrese la fecha en formato (DD/MM/AAAA) sin divisiones y sin exceptuar ningún cero: "
	leer fecha_ingreso
	var1 = trunc(fecha_ingreso/1000000)
	escribir var1
	var2 = trunc(fecha_ingreso/10000)
	escribir var2
	var4 = (var2-(var1*100))
	var3 = fecha_ingreso%10000
	escribir var4
	si var1 <= 31 y var1 >=1 Entonces
		si var4 <= 12 y var4 >=1 entonces
			si (fecha_ingreso%10000)<=2023 y (fecha_ingreso%10000)>=1 entonces
				Segun var4 hacer
					01:
						escribir "La fecha ingresada fue ",var1," de Enero del ", var3
					02:
						escribir "La fecha ingresada fue ",var1," de Febrero del ", var3
					03:
						escribir "La fecha ingresada fue ",var1," de Marzo del ", var3
					04:
						escribir "La fecha ingresada fue ",var1," de Abril del ", var3
					05:
						escribir "La fecha ingresada fue ",var1," de Mayo del ", var3
					06:
						escribir "La fecha ingresada fue ",var1," de Junio del ", var3
					07:
						escribir "La fecha ingresada fue ",var1," de Julio del ", var3
					08:
						escribir "La fecha ingresada fue ",var1," de Agosto del ", var3
					09:
						escribir "La fecha ingresada fue ",var1," de Septiembre del ", var3
					10:
						escribir "La fecha ingresada fue ",var1," de Octubre del ", var3
					11:
						escribir "La fecha ingresada fue ",var1," de Noviembre del ", var3
					12:
						escribir "La fecha ingresada fue ",var1," de Diciembre del ", var3
				FinSegun
			SiNo
				escribir "Escribió un año que no es presente ni pasado."
			FinSi
		SiNo
			escribir "Ha ingresado un número de mes inválido, el sistema se cerrará."
		FinSi
	SiNo
		escribir " Ha ingresado un día inválido. El sistema se cerrará."
	FinSi
FinAlgoritmo
