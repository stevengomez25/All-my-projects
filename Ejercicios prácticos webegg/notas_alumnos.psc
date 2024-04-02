Algoritmo notas_alumnos
	definir nombre_alumno Como Caracter
	definir nota_teorica,nota_practica,nota_problemas, nota_final Como Real
	escribir "Ingrese el nombre del alumno: "
	leer nombre_alumno
	Mientras  nombre_alumno <> "" hacer
		escribir "Ingrese la nota de la parte teórica: "
		leer nota_teorica
		si nota_teorica > 0 y nota_teorica <=10 Entonces
			nota_teorica = nota_teorica
		SiNo
			escribir "La nota ingresada no es válida, por lo que el sistema procederá a colapsar."
			escribir "SINTAX ERROR",x
			escribir x
		FinSi
		Escribir "Ahora ingrese la nota de la parte problemática: "
		leer nota_problemas
		si nota_problemas > 0 y nota_problemas <=10 Entonces
			nota_problemas = nota_problemas
		SiNo
			escribir "La nota ingresada no es válida, por lo que el sistema procederá a colapsar."
			escribir "SINTAX ERROR",x
			escribir x
		FinSi
		escribir "Por último, ingrese la nota de prácticas: "
		leer nota_practica
		si nota_practica > 0 y nota_practica <=10 Entonces
			nota_practica = nota_practica
		SiNo
			escribir "La nota ingresada no es válida, por lo que el sistema procederá a colapsar."
			escribir "SINTAX ERROR",x
			escribir x
		FinSi
		nota_teorica = nota_teorica * 0.4
		nota_problemas = nota_problemas *0.5
		nota_practica = nota_practica * 0.1
		nota_final = nota_practica+nota_problemas+nota_teorica
		escribir "La nota final para el estudiante ",nombre_alumno," es ",nota_final
		escribir "Por favor, ingrese el nombre del siguiente alumno, si quiere detener la secuencia simplemente presione enter sin ningún carácter escrito"
		leer nombre_alumno
	FinMientras
	Escribir "Gracias por usar nuestro software. Esperamos verlo pronto nuevamente."
FinAlgoritmo

