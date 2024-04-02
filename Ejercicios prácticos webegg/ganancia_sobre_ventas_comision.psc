Algoritmo sin_titulo
	definir sueldo, venta1, venta2, venta3,ganancia, total Como Real
	escribir "Ingrese para comenzar su salario base: " 
	leer sueldo
	escribir "Ingrese el valor de la primera venta: " 
	leer venta1
	escribir "Ingrese el valor de la segunda venta: " 
	leer venta2
	escribir "Ingrese el valor de la tercera venta: " 
	leer venta3
	ganancia = (venta1+venta2+venta3)*10/100
	total = ganancia + venta1+venta2+venta3+sueldo
	escribir "la ganancia neta por comisión es de $", ganancia
	escribir "Los ingresos sumando el salario básico es de $", total
FinAlgoritmo
