Algoritmo sin_titulo
	Definir valor_inicial Como Real
	Definir porcentaje_de_inflacion Como Real
	Definir porcentaje_neto_de_inflacion Como Real
	Definir valor_final Como Real
	escribir "Este programa est� dise�ado para calcular el porcentaje de inflaci�n en un producto."
	escribir "Por favor, introduzca el valor al comienzo del a�o del producto deseado: "
	leer valor_inicial
	Escribir "ahora ingrese el valor al final del a�o del producto en cuesti�n: "
	leer valor_final
	porcentaje_de_inflacion = ((valor_final*100)/valor_inicial)
	porcentaje_neto_de_inflacion = porcentaje_de_inflacion-100
	Escribir "El porcentaje con respecto al valor anterior corresponde a: ",porcentaje_de_inflacion,"%"
	Escribir "El porcentaje neto de inflaci�n fue del: ",porcentaje_neto_de_inflacion,"%"
FinAlgoritmo
