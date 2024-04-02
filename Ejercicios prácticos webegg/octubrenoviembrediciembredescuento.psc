Algoritmo sin_titulo
	definir mes_ingresado Como cadena
	definir importe_compra como real
	escribir "Por favor, ingrese el mes en el que realizó la compra: "
	leer mes_ingresado
	mes_ingresado<-Minusculas(mes_ingresado)
	escribir "Ahora el importe de su compra realizada este mes: "
	leer importe_compra
	si mes_ingresado == "septiembre" o mes_ingresado =="octubre" o mes_ingresado == "noviembre" Entonces
		escribir "El valor total de su compra fue de: $" importe_compra-(importe_compra*0.10)
	SiNo
		escribir "El mes en el que realizó su compra no se contaba con ningún descuento, por lo que el valor neto de su compra fue de: $" importe_compra 
	FinSi
FinAlgoritmo
