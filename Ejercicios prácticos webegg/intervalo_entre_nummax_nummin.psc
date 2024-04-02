Algoritmo intervalo_entre_nummax_nummin
	definir num_max, num_min, num_ing, num_veces  Como Real
	escribir "Ingrese el número máximo del rango: "
	leer num_max
	escribir "Ahora el número mínimo del rango: "
	leer num_min
	escribir "Ahora el número entre el rango: "
	leer num_ing
	num_veces = 0
	mientras num_ing > num_min y num_ing < num_max Hacer
		escribir "El valor se encuentra dentro del rango, por favor ingrese uno nuevo: "
		leer num_ing
		num_veces = num_veces + 1 
	FinMientras
	escribir "Ha ingresado un número por fuera del rango. El total de valores dentro de este fueron: ", num_veces
FinAlgoritmo
