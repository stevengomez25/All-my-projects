Algoritmo saberdigitos_numeroenteropositivo
	definir num_verificar, divisor, num_digitos como real
	escribir "Ingrese el n�mero a verificar cuantos d�gitos tiene: "
	leer num_verificar
	num_digitos = 1
	divisor = 10
	mientras trunc(num_verificar/divisor)<>0 Hacer
		divisor = divisor * 10
		num_digitos = num_digitos + 1
	FinMientras
	escribir "La cantidad de d�gitos de este n�mero son: ", num_digitos
FinAlgoritmo
