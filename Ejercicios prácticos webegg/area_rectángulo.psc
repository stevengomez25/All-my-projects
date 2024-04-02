Algoritmo sin_titulo
	Definir base_en_centimetros Como Real
	Definir altura_en_centimetros Como Real
	Definir total_de_estudiantes Como Real
	Definir area Como Real
	Definir perimetro Como Real
	escribir "Este programa está diseñado para calcular el área y perímetro de un rectángulo."
	escribir "Por favor, introduzca primero la base del rectángulo en centímetros: "
	leer base_en_centimetros
	Escribir "Ahora, introduzca la altura del rectángulo: "
	leer altura_en_centimetros
	area = base_en_centimetros * altura_en_centimetros
	perimetro = 2*altura_en_centimetros + 2*base_en_centimetros
	Escribir "El área del rectángulo es ",area," cm2"
	Escribir "el perímetro del rectángulo es",perimetro," cm"
FinAlgoritmo
