Funcion salida <- sumadigitos ( arg1 )
	definir suma Como Real
	definir resultado como logico
	definir salida como cadena
	suma = 0
	Mientras arg1>0 Hacer
		si arg1%2= 0 Entonces
			arg1 = 0
			resultado = falso
		SiNo
			arg1 = trunc(arg1/10)
			resultado = Verdadero
		FinSi
	Fin Mientras
	si resultado = Falso entonces
		salida = "Todos sus n�meros no son impares. "
	SiNo
		salida = "Todos sus n�meros son impares."
	FinSi
Fin Funcion

Algoritmo sin_titulo
	definir numx, x como real
	escribir "Ingrese el n�mero, el sistema determinar� si todos sus d�gitos son impares: "
	leer numx
	Repetir
		escribir sumadigitos(numx)
		escribir "Si quiere salir, ingrese 0. Ingrese el siguiente n�mero: "
		leer numx
	Mientras Que numx<>0
FinAlgoritmo