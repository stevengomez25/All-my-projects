Algoritmo sin_titulo
	definir compra_total, descuento_neto, valor_final Como Real
	escribir "Ingrese para comenzar el valor total de su compra: " 
	leer compra_total
	descuento_neto = compra_total * 15/100
	valor_final = compra_total - descuento_neto
	escribir "el valor neto del descuento es de $", descuento_neto
	escribir "El valor final de su compra es de $", valor_final
FinAlgoritmo
