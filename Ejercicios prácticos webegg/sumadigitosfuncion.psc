Funcion salida <- sumadigitos ( arg1 )
	definir salida, suma Como Real
	suma = 0
	Mientras arg1>0 Hacer
		suma = suma + (arg1%10)
		arg1 = trunc(arg1/10)
	Fin Mientras
	salida = suma
Fin Funcion

Algoritmo sin_titulo
	definir numx, x como real
	escribir "Ingrese el n�mero, el sistema sumar� sus d�gitos: "
	leer numx
	Repetir
		escribir "La suma de los d�gitos es: ", sumadigitos(numx)
		escribir "Si quiere salir, ingrese 0. Ingrese el siguiente n�mero: "
		leer numx
	Mientras Que numx<>0
FinAlgoritmo
