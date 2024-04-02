Algoritmo sin_titulo
	Definir dias_ingresados Como Real
	Definir dias_en_horas Como Real
	Definir dias_en_minutos Como Real
	Definir dias_en_segundos Como Real
	escribir "Este programa está diseñado para calcular el tiempo transcurrido de días, en horas, minutos y segundos."
	escribir "Por favor, introduzca ¿Cuántos días quiere convertir? : "
	leer dias_ingresados
	dias_en_horas = dias_ingresados * 24
	dias_en_minutos = dias_en_horas * 60
	dias_en_segundos = dias_en_minutos * 60
	Escribir "Los días ingresados fueron: ",dias_ingresados,", por lo que serían: "
	Escribir dias_en_horas," horas"
	Escribir dias_en_minutos," minutos"
	Escribir dias_en_segundos," segundos"
	
FinAlgoritmo
