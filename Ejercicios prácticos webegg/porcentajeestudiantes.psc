Algoritmo sin_titulo
	Definir cantidad_de_ninos Como Real
	Definir cantidad_de_ninas Como Real
	Definir total_de_estudiantes Como Real
	Definir porcentaje_masculino Como Real
	Definir porcentaje_femenino Como Real
	escribir "Este programa está diseñado con el propósito de determinar el porcentaje de estudiantes hombres y mujeres en este curso"
	escribir "Por favor, introduzca primero el número de estudiantes masculinos: "
	leer cantidad_de_ninos
	Escribir "Ahora, introduzca el número de estudiantes femeninas: "
	leer cantidad_de_ninas
	total_de_estudiantes = cantidad_de_ninas + cantidad_de_ninos
	porcentaje_masculino = (cantidad_de_ninos*100)/total_de_estudiantes
	porcentaje_femenino = (cantidad_de_ninas*100)/total_de_estudiantes
	Escribir "El porcentaje de estudiantes con sexo masculino es de ",porcentaje_masculino,"%"
	Escribir "El porcentaje de estudiantes con sexo masculino es de ",porcentaje_femenino, "%"
FinAlgoritmo
