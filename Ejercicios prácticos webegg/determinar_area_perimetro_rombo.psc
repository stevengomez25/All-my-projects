Algoritmo sin_titulo
	Definir altura, anchura, lado, area, perimetro Como Real
	Escribir "Ingresa la altura del rombo(diagonal1) en centímetros:"
	leer altura
	Escribir "Ingresa la anchura del rombo(diagonal2) en centímetros:"
	leer anchura
	area = (altura*anchura)/2
	lado = ((anchura/2)^2+(altura/2)^2)
	perimetro = 4*lado
	Escribir "El valor del area es ", area, "cm^2"
	Escribir "El valor del perímetro es ", perimetro, "cm"
FinAlgoritmo
