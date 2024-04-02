Algoritmo sin_titulo
	Definir variable1, variable2, variable3, variable4, variable5 Como Real
	Escribir "Ingrese el valor a dividir entre centenas, decenas y unidades: "
	leer variable1
	variable2=variable1/100
	variable3=trunc(variable2)
	variable4=variable1%10
	variable5=trunc((variable3-variable2)*(-10))
	escribir "CENTENA: ", variable3
	escribir "DECENA: ", variable5
	Escribir "UNIDAD: ", variable4
FinAlgoritmo
