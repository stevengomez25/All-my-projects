Algoritmo alumnos_promedio
	definir num_alumno,alumno, nota_integrador, alumnosparcial, promfinal,promfinal2,promfinal3,prom_estudiantes_perdieron, prom_estudiantes_integrador,prom2, nota_exposicion,nota_exposicionp, nota_parcial, promtotal1, promtotal2 Como Real
	escribir "Bienvenido al sistema de desarrollo de informes."
	escribir "Este programa le arrojará los siguientes resultados: "
	escribir "Nota promedio final de los estudiantes que reprobaron el curso."
	Escribir "Porcentaje de alumnos que tienen una nota de integrador mayor a 7.5."
	escribir "La mayor nota obtenida en las exposiciones."
	escribir "Total de estudiantes que obtuvieron en el Parcial entre 4.0 y 7.5."
	escribir "Para comenzar, ingrese la cantidad de estudiantes para la evaluación estadística: "
	leer num_alumno
	promtotal1 = 0
	prom_estudiantes_integrador = 0
	nota_exposicionp = 0
	prom_estudiantes_perdieron = 0
	alumnosparcial = 0
	promfinal2 = 0
	Para alumno<-1 Hasta num_alumno Con Paso 1 Hacer
		escribir "Ingrese la nota integradora del ",alumno," alumno:"
		leer nota_integrador
		escribir "Ingrese la nota de exposición del ",alumno," alumno:"
		leer nota_exposicion 
		escribir "Ingrese la nota del parcial del ",alumno," alumno: "
		leer nota_parcial
		promfinal = (nota_exposicion + nota_parcial + nota_integrador)/3
		si promfinal < 6.5 Entonces
			prom_estudiantes_perdieron = prom_estudiantes_perdieron + 1
			promfinal2 = promfinal + promfinal2
		SiNo
			promfinal = promfinal
			prom_estudiantes_perdieron = prom_estudiantes_perdieron
		FinSi
		si nota_integrador > 7.5 Entonces
			prom_estudiantes_integrador = prom_estudiantes_integrador + 1
			
		SiNo
			prom_estudiantes_integrador = prom_estudiantes_integrador
		FinSi
		si nota_exposicion > nota_exposicionp Entonces
			nota_exposicionp = nota_exposicion
		SiNo
			nota_exposicionp = nota_exposicionp
		FinSi
		si nota_parcial > 4 y nota_parcial <7.5 Entonces
			alumnosparcial = alumnosparcial + 1
		SiNo
			alumnosparcial = alumnosparcial
		FinSi
	Fin Para
	escribir "El promedio de los estudiantes que reprobaron el curso fue de: ", promfinal2/prom_estudiantes_perdieron
	escribir "El porcentaje de alumnos que tiene una nota de integrador mayor de 7.5 es de: ", prom_estudiantes_integrador / num_alumno * 100, "%"
	escribir "La mayor nota obtenida en exposiciones fue de: ", nota_exposicionp
	escribir "El total de estudiantes que obtuvieron en el parcial entre 4 y 7.5 fue de: ", alumnosparcial
	escribir "Gracias por usar nuestros servicios."
FinAlgoritmo
