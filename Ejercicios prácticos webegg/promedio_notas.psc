Algoritmo sin_titulo
	definir parcial_1,parcial_2, parcial_3, evaluacion_final, trabajo_final, promedio_parciales, nota_final Como Real
	escribir "Ingrese para comenzar la nota de su primer parcial:  " 
	leer parcial_1				
	escribir "Ingrese ahora la nota de su segundo parcial: "
	leer parcial_2
	escribir "Ingrese la nota de su tercer parcial: "
	leer parcial_3
	Escribir  "Ingrese la nota de su evaluación final: "
	leer evaluacion_final
	Escribir "Ingrese por último la nota de su trabajo final: "
	leer trabajo_final
	promedio_parciales = ((parcial_1+parcial_2+parcial_3)/3)*55/100
	nota_final = promedio_parciales +(evaluacion_final*30/100)+(trabajo_final*15/100)
	escribir "su nota final es de ", nota_final," sobre 100 puntos."
FinAlgoritmo
