Algoritmo sin_titulo
	definir numero_1, digito_1, digito_2 Como Real
	escribir "Ingrese para el valor para invertir el orden de sus d�gitos: " 
	leer numero_1
	digito_1 = numero_1%10
	digito_2 = trunc(numero_1/10)
	escribir "el n�mero invertido es: ",digito_1,digito_2
FinAlgoritmo
