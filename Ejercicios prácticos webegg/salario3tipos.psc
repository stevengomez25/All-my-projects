Algoritmo salario3tipos
	definir sal1,sal2,sal3,pago_hora, horas_trab, ventas, data Como Real
	definir tipo_salario Como Caracter
	escribir "Bienvenido al sistema de ponderación de salario semanal para el área de contabilidad."
	Escribir "Por favor, ingrese el tipo de salario a utilizar siendo:"
	Escribir "A: Por comision."
	Escribir "B: salario fijo y comision."
	Escribir "C: Salario fijo."
	leer tipo_salario
	tipo_salario = Mayusculas(tipo_salario)
	si tipo_salario =="A" Entonces
		escribir "Ingrese el valor total de sus ventas: "
		leer sal1
		escribir "su salario es: $",sal1*0.4
	SiNo
		si tipo_salario =="B" Entonces
			escribir "Ingrese por favor el pago acordado por horas: "
			leer pago_hora
			escribir "Ahora las horas laboradas: "
			leer horas_trab
			escribir "Por último el valor total de las ventas realizadas: "
			leer ventas
			si horas_trab<=40 y horas_trab>=0 Entonces
				data = (horas_trab*pago_hora)+(ventas*0.25)
				escribir "Su salario es: $",data
			SiNo
				escribir "Las horas extra no pueden ser contempladas en este sistema."
			FinSi
		SiNo
			escribir "Ingrese por favor el pago acordado por horas: "
			leer pago_hora
			escribir "Ahora las horas laboradas: "
			leer horas_trab
			si horas_trab>40 Entonces
				data = (horas_trab*pago_hora)+((horas_trab-40)*1.5)
				escribir "Su salario es: $",data
				
			SiNo
				data = horas_trab*pago_hora
				escribir "Su salario es: $",data
			FinSi
		FinSi
		
	FinSi
FinAlgoritmo











