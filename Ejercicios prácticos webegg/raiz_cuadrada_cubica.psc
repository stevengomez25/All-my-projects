Algoritmo sin_titulo
	definir numero_1, raiz_cuadrada, raiz_cubica Como Real
	escribir "Ingrese para el valor para conseguir su ra�z cuadrada y su ra�z c�bica:  " 
	leer numero_1			
	escribir "la raiz cuadrada es: ",raiz(numero_1)
	//las ra�ces pueden sacarse con el rec�proco de su potencia, es decir, si es c�bica, elevar el n�mero a 1/3
	raiz_cubica = numero_1^(1/3)
	escribir "la raiz cubica es: ", raiz_cubica
FinAlgoritmo
