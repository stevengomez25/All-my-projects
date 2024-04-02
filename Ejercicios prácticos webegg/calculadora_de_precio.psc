Algoritmo calculadora_de_precio
	definir cantidad_llantas, precio_llantas como real 
	escribir "Ingrese la cantidad de llantas que adquirió con nosotros: "
	leer cantidad_llantas
	si cantidad_llantas>=5 Entonces
		si cantidad_llantas<=10 Entonces
			precio_llantas = 2500
			escribir "La cantidad de llantas que compró aplica un descuento."
			escribir "El descuento deja la unidad a $",precio_llantas,", por lo que su compra total es de: $",precio_llantas*cantidad_llantas
		SiNo
			precio_llantas =2000
			escribir "La cantidad de llantas que compró aplica un descuento."
			escribir "El descuento deja la unidad a $",precio_llantas,", por lo que su compra total es de: $",precio_llantas*cantidad_llantas
		FinSi
	SiNo
		precio_llantas = 3000
		escribir "La cantidad de llantas que compró lamentablemente no aplican para descuento."
		Escribir "El total de su compra es de: $",precio_llantas*cantidad_llantas
	FinSi
	FinAlgoritmo
	