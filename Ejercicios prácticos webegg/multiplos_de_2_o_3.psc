Algoritmo multiplos_de_2_o_3
	definir var1,var2, var3 Como Real
	var2 = 0
	var3 =0
	Para var1<-1 Hasta 100 Con Paso 1 Hacer
	si var1 % 2 == 0 entonces
			var2 = var2+1
		SiNo
			var2 = var2
			si var1%3==0 Entonces
				var3 = var3+1
			SiNo
				var3 = var3
			FinSi
		FinSi
	Fin Para
	escribir "Los números múltiplos de 2 son: ", var2, " y los múltiplos de 3 son: ", var3
FinAlgoritmo
