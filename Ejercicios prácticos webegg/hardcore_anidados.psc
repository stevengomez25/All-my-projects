Algoritmo hardcore_anidados
	definir n, num_trabajador, sueldo_base, comisiones, ventas_realizadas, valor_venta, valor_venta2, num_ventas como real 
	definir variable como caracter
	valor_venta2 = 0
	escribir "Ingrese por favor el número de vendedores actualmente: "
	leer n
	escribir "Ahora ingrese los siguientes datos: "
	Para num_trabajador<-1 Hasta n Con Paso 1 Hacer
		escribir "Ingrese sueldo base: "
		leer sueldo_base
		escribir "Ingrese el número de ventas realizadas: "
		leer ventas_realizadas
		Para num_ventas<-1 Hasta ventas_realizadas Con Paso 1 Hacer
			escribir " ingrese el valor de la venta ", num_ventas, ":"
			leer valor_venta
			comisiones = valor_venta2 + valor_venta*0.1
			valor_venta2 = comisiones
		Fin Para
		escribir "El salario total más comisiones del vendedor ", num_trabajador," es de: "
		escribir sueldo_base + valor_venta2
	Fin Para
	escribir "Gracias por usar nuestro software."
FinAlgoritmo
