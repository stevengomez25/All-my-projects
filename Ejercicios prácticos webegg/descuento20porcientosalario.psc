Algoritmo sin_titulo
	Definir salario_bruto, descuento, salario_con_descuento Como Real
	Escribir "Ingresa el valor en pesos colombianos de tu salario: "
	leer salario_bruto
	descuento = (salario_bruto * 20)/100
	salario_con_descuento = salario_bruto-descuento
	Escribir "el valor que ingresó en pesos colombianos fue $",salario_bruto,", se procede:"
	Escribir "$",descuento," es el descuento bruto."
	Escribir "$",salario_con_descuento," es tu salario con descuento"
FinAlgoritmo
