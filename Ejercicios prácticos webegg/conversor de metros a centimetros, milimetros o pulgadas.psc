Algoritmo sin_titulo
	definir valorEnMetros Como Real
	definir metros Como Real
	Definir UnidadDeMedida Como cadena
	Escribir "Ingrese aquí el valor en metros conocidos: "
	leer valorEnMetros
	Escribir "en que unidad desea obtener los resultados: "
	leer UnidadDeMedida
	si UnidadDeMedida = "metros"
		escribir "es lo mismo, la respuesta es ", valorEnMetros," metros"
	FinSi
	Si UnidadDeMedida = "centimetros"
		escribir valorEnMetros * 100, " centimetros"
	FinSi
	si UnidadDeMedida = "milimetros"
		escribir valorEnMetros * 1000, " milimetros"
	FinSi
	si UnidadDeMedida = "pulgadas"
		escribir valorEnMetros * 39.3701," pulgadas"
	FinSi
FinAlgoritmo

	