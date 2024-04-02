Algoritmo sin_titulo
	definir numero_1, raiz_cuadrada, raiz_cubica Como Real
	escribir "Ingrese para el valor para conseguir su raíz cuadrada y su raíz cúbica:  " 
	leer numero_1			
	escribir "la raiz cuadrada es: ",raiz(numero_1)
	//las raíces pueden sacarse con el recíproco de su potencia, es decir, si es cúbica, elevar el número a 1/3
	raiz_cubica = numero_1^(1/3)
	escribir "la raiz cubica es: ", raiz_cubica
FinAlgoritmo
