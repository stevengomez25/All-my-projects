Algoritmo sin_titulo
	Definir lado, apotema, perimetro, area Como Real
	Escribir "Ingresa el valor de uno de los lados o el radio del hex�gono en cent�metros: "
	leer lado
	perimetro = lado * 6
	apotema = raiz(lado^2 - (lado/2)^2)
	area = (apotema * perimetro)/2
	Escribir "El valor del area es ", area, "cm^2"
	Escribir "El valor del per�metro es ", perimetro, "cm"
FinAlgoritmo
