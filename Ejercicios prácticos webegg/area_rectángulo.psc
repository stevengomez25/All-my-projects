Algoritmo sin_titulo
	Definir base_en_centimetros Como Real
	Definir altura_en_centimetros Como Real
	Definir total_de_estudiantes Como Real
	Definir area Como Real
	Definir perimetro Como Real
	escribir "Este programa est� dise�ado para calcular el �rea y per�metro de un rect�ngulo."
	escribir "Por favor, introduzca primero la base del rect�ngulo en cent�metros: "
	leer base_en_centimetros
	Escribir "Ahora, introduzca la altura del rect�ngulo: "
	leer altura_en_centimetros
	area = base_en_centimetros * altura_en_centimetros
	perimetro = 2*altura_en_centimetros + 2*base_en_centimetros
	Escribir "El �rea del rect�ngulo es ",area," cm2"
	Escribir "el per�metro del rect�ngulo es",perimetro," cm"
FinAlgoritmo
