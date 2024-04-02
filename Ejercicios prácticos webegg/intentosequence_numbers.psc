//Dada una secuencia de números ingresados por teclado que finaliza con un ?1, por
//ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,......,-1; realizar un programa que calcule el promedio de
//los números ingresados. Suponemos que el usuario no insertará número negativos.
Algoritmo sequence_numbers
	definir vi, ye, datos_recibidos como real
	escribir "Ingrese la secuencia de números para sacar su promedio: "
	leer vi
	datos_recibidos = 0 
	ye = 0
	mientras vi>=0 Hacer
		ye = vi + ye
		escribir "ingrese el siguiente número en la sequencia: "
		escribir ye
		leer vi
		escribir vi
		datos_recibidos = datos_recibidos +1
		escribir datos_recibidos
	FinMientras
	si datos_recibidos <> 0 Entonces
		escribir "El promedio de los números ingresado es: ", ye/datos_recibidos
	SiNo
		escribir "El promedio de los números ingresado es: ", vi
	FinSi
	
FinAlgoritmo
