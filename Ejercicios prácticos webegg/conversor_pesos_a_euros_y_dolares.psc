Algoritmo sin_titulo
	Definir dinero_en_pesos, dinero_en_euros, dinero_en_dolares Como Real
	Escribir "Ingresa el valor en pesos colombianos a convertir en dólares y euros: "
	leer dinero_en_pesos
	dinero_en_euros = dinero_en_pesos*0.00020
	dinero_en_dolares = dinero_en_pesos*0.00021 
	Escribir "el valor que ingresó en pesos colombianos fue $",dinero_en_pesos,", se procede a convertir"
	Escribir "$",dinero_en_pesos," a euros: $",dinero_en_euros
	Escribir "$",dinero_en_pesos," a dólares: $",dinero_en_dolares
FinAlgoritmo
