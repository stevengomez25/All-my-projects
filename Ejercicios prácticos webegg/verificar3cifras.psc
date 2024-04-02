Algoritmo sin_titulo
	definir var_a Como caracter
	escribir " Escriba el valor a determinar. Si tiene más de 3 dígitos se considerará inválido."
	Leer var_a
	segun Longitud(var_a) Hacer
		3:
			escribir "Es válido."
		4:
			si Subcadena(var_a,0,0)="-" Entonces
				escribir "es válido."
			SiNo
				escribir "es inválido."
			FinSi
		De Otro Modo:
			escribir "es inválido."
	FinSegun
	
FinAlgoritmo
