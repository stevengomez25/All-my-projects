Algoritmo sin_titulo
	definir hora_entrega, minutos_entrega, litros_consumidos, total_cobro Como Real
	escribir "Bienvenido al sistema de ponderaci�n de precios de TE LLEVA A TODOS LADOS CORP"
	escribir "Ingrese a continuaci�n el n�mero de horas que mantuvo en uso el vehiculo alquilado: "
	leer hora_entrega
	si hora_entrega <= 2 entonces
		escribir "Est� dentro de las horas reglamentadas, por lo tanto, no se realizar� el cobro de la nafta."
		Escribir "Por lo tanto, el cobro del servicios es de solo $400."
	SiNo
		escribir "Ingrese los minutos tras la �ltima hora consumida: "
		leer minutos_entrega
		escribir "Ahora ingrese la nafta consumida: "
		leer litros_consumidos
		total_cobro = (40*litros_consumidos)+(minutos_entrega*5.20)
		escribir "El total del servicio es de $",total_cobro
	FinSi
FinAlgoritmo
