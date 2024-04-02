Algoritmo eureka
	definir palabra_clave Como Caracter
	definir num_intentos, inten_res Como Real
	escribir "Ingrese la palabra a probar. Recuerde que solo tiene 3 intentos:"
	leer palabra_clave
	palabra_clave=Mayusculas(palabra_clave)
	num_intentos=0
	inten_res=0
	si palabra_clave <> "EUREKA" Entonces
		hacer
			num_intentos=num_intentos+1
			inten_res = 3-num_intentos
			escribir "palabra incorrecta, le quedan ", inten_res
			leer palabra_clave
			palabra_clave=Mayusculas(palabra_clave)
		Mientras Que palabra_clave <> "EUREKA" y num_intentos < 3
	SiNo
		escribir "BRAVO! LA ENCONTRASTE!"
	FinSi
FinAlgoritmo
