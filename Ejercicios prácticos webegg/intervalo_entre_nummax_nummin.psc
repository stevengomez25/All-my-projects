Algoritmo intervalo_entre_nummax_nummin
	definir num_max, num_min, num_ing, num_veces  Como Real
	escribir "Ingrese el n�mero m�ximo del rango: "
	leer num_max
	escribir "Ahora el n�mero m�nimo del rango: "
	leer num_min
	escribir "Ahora el n�mero entre el rango: "
	leer num_ing
	num_veces = 0
	mientras num_ing > num_min y num_ing < num_max Hacer
		escribir "El valor se encuentra dentro del rango, por favor ingrese uno nuevo: "
		leer num_ing
		num_veces = num_veces + 1 
	FinMientras
	escribir "Ha ingresado un n�mero por fuera del rango. El total de valores dentro de este fueron: ", num_veces
FinAlgoritmo
