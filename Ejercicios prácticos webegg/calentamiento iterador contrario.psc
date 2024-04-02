Algoritmo sin_titulo
	definir num, num2, vueltas Como Real
	escribir "Ingrese un número a probar: "
	leer num
	vueltas=0
	num2 = 0
	Hacer
		vueltas=vueltas+1
		escribir "Ingrese otro número: "
		num2 = num + num2
		leer num
		
	Mientras Que num <3000
	escribir vueltas
	escribir num2
FinAlgoritmo
