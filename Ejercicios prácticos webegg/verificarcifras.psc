Algoritmo verificarcifras
	definir num_cifras, num_ingresado Como Real
	escribir "Ingrese un n�mero, el sistema determinar� cuantas cifras tiene: "
	leer num_ingresado
	num_cifras = 0
	Mientras num_ingresado<>0 Hacer
		num_cifras = num_cifras + 1
		num_ingresado = trunc(num_ingresado/10)
	Fin Mientras
	escribir "El n�mero tiene: ",num_cifras, " cifras." 
FinAlgoritmo
