Algoritmo calculadora_de_precio
	definir ingreso_cantidad_m, precio_manzanas, pago_total Como Real
	escribir "Ingrese por favor la cantidad de manzanas que adquirió: "
	leer ingreso_cantidad_m
	precio_manzanas = 3000
	si ingreso_cantidad_m<=0 Entonces
		pago_total = precio_manzanas * ingreso_cantidad_m
		escribir " El total que debe pagar es de: $",pago_total
	SiNo
		si ingreso_cantidad_m = 2 Entonces
			pago_total = (precio_manzanas*ingreso_cantidad_m)
			pago_total = pago_total - (pago_total*0.10)
			escribir " El total que debe pagar es de: $",pago_total
		SiNo
			si ingreso_cantidad_m <2 y ingreso_cantidad_m < 5 Entonces
				pago_total = (precio_manzanas*ingreso_cantidad_m)
				pago_total = pago_total - (pago_total*0.15)
				escribir " El total que debe pagar es de: $",pago_total
			SiNo
				pago_total = (precio_manzanas*ingreso_cantidad_m)
				pago_total = pago_total - (pago_total*0.20)
				escribir " El total que debe pagar es de: $",pago_total
			FinSi
		FinSi
		
	FinSi
	FinAlgoritmo
	