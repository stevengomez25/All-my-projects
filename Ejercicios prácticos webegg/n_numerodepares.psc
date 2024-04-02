Algoritmo n_numerodepares
	definir cantidad_num, cantidad_dadas, sumados, vueltas como real
	escribir "Ingrese el número de pares sumados entre sí a imprimir en pantalla: "
	leer cantidad_num
	cantidad_dadas = 0
	sumados = 0
	vueltas = 0
	Hacer
		si cantidad_dadas % 2 = 0 Entonces
			sumados = sumados + cantidad_dadas
			vueltas = vueltas + 1
		SiNo
			vueltas = vueltas
		FinSi
		cantidad_dadas = cantidad_dadas + 1
	Mientras Que vueltas <= cantidad_num
	escribir "El valor de los números pares sumados fue de : ", sumados
FinAlgoritmo
