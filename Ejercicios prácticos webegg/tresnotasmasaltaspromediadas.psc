Algoritmo tresnotasmasaltas
	definir not1,not2,not3,not4, not_final Como Real
	escribir "Este programa está diseñado para promediar las tres notas más altas y determinar su nota final."
	escribir "Por favor, escriba la primera nota: "
	leer not1
	escribir "Ahora la segunda nota: "
	leer not2
	escribir "Siguiente nota aquí: "
	leer not3
	escribir "Por último, la cuarta nota: "
	leer not4
	si not1<not2 y not1<not3 y not1<not4 Entonces
		not_final=(not4+not2+not3)/3
		escribir "Su nota final es: ", not_final
	SiNo
		si not2<not3 y not2<not4 y not2<not1 Entonces
			not_final=(not4+not1+not3)/3
			escribir "Su nota final es: ", not_final
		SiNo
			si not3<not4 y not3<not1 y not3<not2 Entonces
				not_final=(not4+not2+not1)/3
				escribir "Su nota final es: ", not_final
			SiNo
				not_final=(not4+not2+not1)/3
				escribir "Su nota final es: ", not_final
			FinSi
		FinSi
	FinSi
FinAlgoritmo
