Algoritmo sin_titulo
	definir var_a Como caracter
	escribir " Escriba el valor a determinar. Si tiene m�s de 3 d�gitos se considerar� inv�lido."
	Leer var_a
	segun Longitud(var_a) Hacer
		3:
			escribir "Es v�lido."
		4:
			si Subcadena(var_a,0,0)="-" Entonces
				escribir "es v�lido."
			SiNo
				escribir "es inv�lido."
			FinSi
		De Otro Modo:
			escribir "es inv�lido."
	FinSegun
	
FinAlgoritmo
